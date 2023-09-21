import React, { useState, MouseEvent, FC, useEffect, SyntheticEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { Avatar, Divider, MenuItem } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Check from '@mui/icons-material/Check';
import { ANCHOR_STYLE, TRANSFORM_STYLE, AVATAR_STYLE } from './constants';

import {
  FixedMenuItem,
  StyledAvatarButton,
  StyledMenu,
  StyledMenuItem,
  StyledUserInfo,
  StyledUserName,
  StyledUserPosition,
} from './Menu.styles';
import { UserMenuProps } from './Menu.types';

export const Menu: FC<UserMenuProps> = ({
  handleSelectCallback,
  manageProfileCallback,
  menuItems,
  menuTitle,
  selectedItem, // temporary until we implement from component lib
  signOutCallback,
  username,
  userRole,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();

  useEffect(() => {
    if (selectedItem) {
      setSelectedMenuItem(selectedItem);
    }
  }, []);

  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (event: MouseEvent<HTMLLIElement>, value: string) => {
    event.preventDefault();
    event.stopPropagation();

    if (selectedMenuItem === value) {
      setAnchorEl(null);
      handleSelectCallback?.(event, value);
      return;
    }
    setSelectedMenuItem(value);
    setAnchorEl(null);
    handleSelectCallback?.(event, value);
  };

  /**
    The main purpose of this function is to delay the execution of a callback controlled
    by the parent. This is mainly necessary when the callback handles navigation.
    If the callback in the parent component is executed within the same event loop, the
    menu will not close before the navigation occurs. This is due to the anchor element
    still being set when navigate is called, causing the menu to appear at the bottom of the page.
  */
  const handleDelayCallback = (cb: VoidFunction) => {
    setTimeout(() => {
      cb();
    }, 200);
  };

  const handleManageProfileClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setAnchorEl(null);
    handleDelayCallback(() => manageProfileCallback(e));
  };

  const handleSignOut = (e: SyntheticEvent) => {
    e.preventDefault();
    setAnchorEl(null);
    signOutCallback();
  };

  return (
    <>
      <StyledAvatarButton onClick={handleClick} variant='text'>
        <Avatar alt='Profile Image' sx={AVATAR_STYLE} />
        <StyledUserInfo>
          <StyledUserName variant='h6'>{username}</StyledUserName>
          <StyledUserPosition variant='body2'>{userRole}</StyledUserPosition>
        </StyledUserInfo>
      </StyledAvatarButton>

      <StyledMenu
        anchorEl={anchorEl}
        anchorOrigin={ANCHOR_STYLE}
        onClick={handleClose}
        onClose={handleClose}
        open={isOpen}
        transformOrigin={TRANSFORM_STYLE}
      >
        {menuTitle ? (
          <MenuItem sx={{ px: 4, py: 1 }} disabled>
            {menuTitle ?? 'LOGIN AS'}
          </MenuItem>
        ) : null}

        {menuItems?.map((mItem) => (
          <StyledMenuItem
            key={mItem.value}
            onClick={(event) => handleSelectItem(event, mItem.value)}
            selected={selectedMenuItem === mItem.value}
            sx={{ py: 1 }}
            value={mItem.value}
          >
            {selectedMenuItem === mItem.value ? <Check fontSize='small' /> : null}
            <Typography variant='body2'>{mItem.label}</Typography>
          </StyledMenuItem>
        ))}

        <Box>
          <Divider orientation='horizontal' variant='fullWidth' />

          <FixedMenuItem onClick={handleManageProfileClick}>
            <SettingsOutlinedIcon fontSize='small' />

            <Typography variant='body2'>Manage my profile</Typography>
          </FixedMenuItem>

          <FixedMenuItem onClick={handleSignOut}>
            <LogoutOutlinedIcon color='error' />

            <Typography color='error' variant='body2' onClick={handleSignOut}>
              Sign out
            </Typography>
          </FixedMenuItem>
        </Box>
      </StyledMenu>
    </>
  );
};
