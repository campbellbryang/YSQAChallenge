export interface UserItem {
  description: string;
  id?: string | number;
  name: string;
  status: any;
  viewed: boolean;
}

export interface IListDataItem {
  name: string;
  viewed: boolean;
  description: string;
  status: any;
  id?: string | number;
}

export interface IListItemDrawerProps {
  onClose: () => void;
  open: boolean;
  selectedItem: IListDataItem;
  refetch: () => void;
  existingNames: Array<string>;
  type?: 'new' | 'edit';
}
