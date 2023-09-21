import { FC, useEffect, useState } from 'react';
import { CoreTable } from '../../components/Table';
import { IListDataItem } from '../../interfaces';
import { Api } from '../../api';
import { USER_COLUMNS } from './constants';
import { Card } from '@mui/material';
import { Row } from 'react-table';
import { useUsersStore } from '../../stores/usersStore';

export const UsersTable: FC<{ onRowClickCallback: (item: IListDataItem) => void }> = ({ onRowClickCallback }) => {
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const users = useUsersStore((state) => state.users);
  const setUsers = useUsersStore((state) => state.setUsers);

  useEffect(() => {
    let didCancel = false;
    setLoading(true);
    Api.getItems()
      .then((res) => {
        if (didCancel) return;
        if (res) {
          console.log(res);
          setUsers(res.data);
        }
      })
      .catch((_err) => {
        if (didCancel) return;
      })
      .finally(() => {
        if (didCancel) return;
        setRefetch(false);
        setLoading(false);
      });

    return () => {
      didCancel = true;
    };
  }, [refetch, setUsers, users.length]);

  const handleSelect = (row: Row<IListDataItem>) => {
    onRowClickCallback(row.original);
    // setSelected(row.original);
  };

  return (
    <Card>
      <CoreTable isLoading={loading} data={users} columns={USER_COLUMNS} onRowClick={handleSelect} />
    </Card>
  );
};
