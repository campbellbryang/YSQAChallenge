import { Menu, MenuItem, styled } from '@mui/material';
import { Button, Typography } from '@mui/material';

export const StyledAvatarButton = styled(Button)(() => ({
  lineHeight: 1,
  padding: '0.25rem',
  textTransform: 'capitalize',

  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const StyledUserInfo = styled('span')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.75rem',
    textAlign: 'left',
  },
}));

export const StyledUserName = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  lineHeight: 1,
  marginBottom: '0.25rem',
}));

export const StyledUserPosition = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  // fontWeight: 400,
  textTransform: 'capitalize',
}));

export const StyledMenu = styled(Menu)(() => ({
  '.MuiPaper-root': {
    borderTop: `1px solid #DDDDE1`,
    marginTop: '14px',
    minWidth: '300px',
    overflow: 'initial',
  },
}));

export const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'expanded',
})<{ selected?: boolean }>(({ theme, selected }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1.5rem 1fr',
  height: theme.spacing(4),
  marginBottom: theme.spacing(1),
  padding: selected ? `${theme.spacing(1)} ${theme.spacing(1)}` : `${theme.spacing(1)} ${theme.spacing(2)}`,
  '&.Mui-selected': {
    backgroundColor: '#FFFFFF',
  },
}));

export const FixedMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(1),
  gridTemplateColumns: '1.5rem 1fr',
  height: theme.spacing(5),
  marginY: `${theme.spacing(1)}`,
}));
