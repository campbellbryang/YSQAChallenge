import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';
import { Row } from 'react-table';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Divider, Box, Typography, Dialog, DialogActions, DialogContent, Button } from '@mui/material';
import { IListDataItem, UserItem } from '../../interfaces';
import { Api } from '../../api';
import { useUsersStore } from '../../stores/usersStore';

export const DeleteCell = ({ row }: { row: Row<UserItem> }) => {
  const setUsers = useUsersStore((state) => state.setUsers);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleClose = (e?: MouseEvent<unknown>) => {
    e?.stopPropagation();

    setDialogOpened(false);
  };

  const handleOpen = () => {
    setDialogOpened(true);
  };

  const handleDelete = async (e: SyntheticEvent<unknown>, value: IListDataItem) => {
    e.stopPropagation();
    e.preventDefault();
    await Api.deleteItem(value.name)
      .then((res) => {
        if (res) {
          setUsers(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  const handleDeleteIconClick = (event: MouseEvent<Element>, _row: Row<UserItem>) => {
    event.preventDefault();
    event.stopPropagation();
    handleOpen();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
      <Divider flexItem orientation='vertical' sx={{ mr: 2 }} />
      <Button
        color='inherit'
        onClick={(event: MouseEvent<Element>) => handleDeleteIconClick(event, row)}
        size='large'
        sx={{ minWidth: 20 }}
        variant='text'
      >
        <DeleteOutlineOutlined fontSize='small' color='error' />
      </Button>
      <Dialog
        maxWidth='sm'
        onClose={(e: ChangeEvent<unknown>, reason: 'backdropClick' | 'escapeKeyDown') => {
          e.preventDefault();
          e.stopPropagation();
          if (reason === 'backdropClick') {
            return;
          }
          setDialogOpened(false);
        }}
        open={dialogOpened}
        title='Delete profile?'
      >
        <DialogContent>
          <Typography variant='body1' sx={{ mb: '24px', pl: '12px' }}>
            Confirm to delete this item.
          </Typography>
          <DialogActions>
            <Button variant='text' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='contained' color='error' onClick={(e) => handleDelete(e, row.original)}>
              Confirm
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
