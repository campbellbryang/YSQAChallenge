/* eslint-disable @typescript-eslint/ban-types */
import { ChangeEvent, ReactNode, RefObject } from 'react';
import { Column, Row } from 'react-table';

export type OrderType = 'asc' | 'desc';

export interface DataCell {
  [p: string]: unknown;
}
export interface ActiveCompany {
  becameVisibleAt: string;
  id: string;
  isVisible: boolean;
  name: string | number;
  numberOfEmployees: numberOfEmployees;
  state: string;
  website: string;
}

export type numberOfEmployees = '1-50' | '51-100' | '101-500' | '501-1000' | '1000+';

export type MuiSort = {
  order: 'asc' | 'desc';
  orderBy: string;
};

export type CoreTableProps<C extends object = {}> = {
  containerRef?: RefObject<HTMLDivElement>;
  columns: Array<Column<C>>;
  disabledColumnsSort?: string[];
  data: C[];
  emptyView?: ReactNode;
  isDisablePagination?: boolean;
  isDisableSort?: boolean;
  isLoading?: boolean;
  minHeight?: number | string;
  numberOfLoadingRows?: number;
  onRowClick?: (data: Row<C>) => void;
  onSort?: (sortValue: MuiSort) => void;
  onScroll?: () => void;
  pagination?: {
    count: number;
    onPageChange: (event: unknown, newPage: number) => void;
    onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement>) => void;
    page: number;
    rowsPerPage: number;
  };
  rowsPerPageOptions?: Array<number>;
  showLoadingSpinner?: boolean;
  sortOption?: {
    orderBy: string;
    order: OrderType;
  };
  stickyHeader?: boolean;
  toolbar?: ReactNode;
};

export interface MoreDetailsOptionProps {
  onClick: () => void;
  key: string;
  optionLabel: string | ReactNode;
}
