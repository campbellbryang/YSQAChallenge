import { Column, Row } from 'react-table';
import { UserItem } from '../../interfaces';
import { Typography } from '@mui/material';
import { DeleteCell } from './DeleteCell';

export const USER_COLUMNS: Column<UserItem>[] = [
  {
    Header: 'ID',
    accessor: 'id',
    Cell: ({ row }) => <Typography>{row?.original.id ?? '--'}</Typography>,
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ row }) => <Typography>{row.original.name}</Typography>,
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ row }) => <Typography>{row.original.status}</Typography>,
  },
  {
    Header: 'Viewed',
    accessor: 'viewed',
    Cell: ({ row }) => <Typography>{row.original.status}</Typography>,
  },
  {
    minWidth: 25,
    width: 25,
    maxWidth: 25,
    Cell: ({ row }: { row: Row<UserItem> }) => <DeleteCell row={row} />,
    Header: ' ',
  },
];
