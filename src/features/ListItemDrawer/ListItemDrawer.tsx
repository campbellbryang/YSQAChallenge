// The following links may provide some assistance
// https://material-ui.com/components/text-fields/#api
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
import React, { useState, useEffect } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
} from '@mui/material';

import { sxStyles } from './ListItemDrawer.styles';
import { IListDataItem, IListItemDrawerProps } from '../../interfaces';
import { Api } from '../../api';
import { useUsersStore } from '../../stores/usersStore';

export function ListItemDrawer(props: IListItemDrawerProps) {
  const setUsers = useUsersStore((state) => state.setUsers);
  const defaultState: IListDataItem = {
    description: '',
    name: '',
    status: 'created',
    viewed: false,
  };

  const [drawerState, setDrawerState] = useState<IListDataItem>(defaultState);
  const [errors, setErrors] = useState<Array<string>>([]);
  const { type } = props;
  useEffect(() => {
    if (props.selectedItem) {
      setDrawerState(props.selectedItem);
    }
  }, [props.selectedItem]);

  function handleChange(event: React.ChangeEvent<any>) {
    const { name, value } = event.target;
    if (errors.length) {
      setErrors([]);
    }

    setDrawerState((prev: IListDataItem) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(_e: any) {
    if (!props.selectedItem) return;
    const existingNames = props.existingNames.includes(drawerState.name);
    if (existingNames && type !== 'edit') {
      setErrors((_error) => [...errors, 'Name already exists']);
      return;
    }
    Api.updateItem(props.selectedItem.id!, drawerState)
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.error(err);
      });
    props.refetch();
    props.onClose();
  }

  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      anchor='right'
      variant='persistent'
      PaperProps={{ sx: sxStyles.drawerPaperProps }}
    >
      <h2>{`${props.selectedItem?.name} Details`}</h2>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FormControl variant='outlined' fullWidth={true} margin='dense'>
          <TextField
            label='Name'
            type='text-area'
            name='name'
            size='small'
            variant='outlined'
            value={drawerState.name}
            onChange={handleChange}
            error={errors.length && props.type === 'new' ? true : false}
            helperText={errors.length && props.type === 'new' ? errors[0] : ''}
          />
        </FormControl>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
          <label>Description</label>
          <TextareaAutosize name='description' onChange={handleChange} minRows={3} value={drawerState.description} />
        </div>
        <div style={{ marginTop: 20 }}>
          <FormControlLabel
            label='Viewed'
            control={
              <Checkbox
                onChange={(e) =>
                  setDrawerState((prev) => ({
                    ...prev,
                    viewed: e.target.checked,
                  }))
                }
                checked={drawerState.viewed}
              />
            }
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            style={{ marginLeft: 20 }}
            name='status'
            value={drawerState.status}
            onChange={(e) => setDrawerState((prev) => ({ ...prev, status: e.target.value }))}
          >
            <FormControlLabel label='Complete' control={<Radio value='complete' />} />
            <FormControlLabel label='In progress' control={<Radio value='in-progress' />} />
            <FormControlLabel label='Pending' control={<Radio value='pending' />} />
          </RadioGroup>
        </div>
      </div>
      <Box sx={sxStyles.buttonsWrapper}>
        <Button color='secondary' onClick={props.onClose}>
          Cancel
        </Button>
        <Button color='primary' onClick={handleSubmit} disabled={errors.length ? true : false}>
          Submit
        </Button>
      </Box>
      <pre>{JSON.stringify(drawerState, null, 2)}</pre>
    </Drawer>
  );
}
