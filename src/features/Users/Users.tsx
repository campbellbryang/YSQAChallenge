import { Button } from '@mui/material';
import { UsersTable } from './UsersTable';
import { IListDataItem } from '../../interfaces';
import { useState } from 'react';
import { ListItemDrawer } from '../ListItemDrawer/ListItemDrawer';
import { useUsersStore } from '../../stores/usersStore';
import { shallow } from 'zustand/shallow';

export const Users = () => {
  const [selected, setSelected] = useState<IListDataItem | undefined>();
  const [type, setType] = useState<'edit' | 'new' | undefined>();
  const users = useUsersStore((state) => state.users, shallow);
  const existingNames = users.map((user) => user.name);

  const defaultItemState = {
    id: -1,
    name: '',
    viewed: false,
    description: '',
    status: '',
  };

  function onClose() {
    setSelected(undefined);
  }

  const handleRowClick = (item: IListDataItem) => {
    setSelected(item);
    setType('edit');
  };

  const handleAddItem = () => {
    setSelected(defaultItemState);
    setType('new');
  };

  return (
    <>
      <UsersTable onRowClickCallback={handleRowClick} />
      <Button style={{ float: 'right', marginBottom: 20 }} variant='contained' onClick={handleAddItem}>
        Add Item
      </Button>
      <ListItemDrawer
        existingNames={existingNames}
        onClose={onClose}
        open={selected !== undefined}
        refetch={() => {}}
        selectedItem={selected!}
        type={type}
      />
    </>
  );
};
