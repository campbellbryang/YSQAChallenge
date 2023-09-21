import { SyntheticEvent, MouseEvent } from 'react';

export type ConstraintTagOptions = Array<{ label: string; value: string }>;
export type UserRoleOptions<T> = [{ label: T; value: T }];

export interface UserMenuOptions {
  label: string;
  value: string;
}


export interface TenantOptions {
  label: string;
  value: string;
}

export interface UserMenuProps {
  manageProfileCallback: (e: SyntheticEvent) => void;
  menuItems: Array<TenantOptions>;
  menuTitle?: string;
  signOutCallback: VoidFunction;
  selectedItem?: string;
  handleSelectCallback?: (event: MouseEvent<HTMLLIElement>, value: string) => void;
  username?: string;
  userRole?: string;
}
