import { NAV_DRAWER_WIDTH, APP_BAR_HEIGHT } from '../../constants/index';
import { AppBar as MuiAppBar, styled } from '@mui/material';

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  height: APP_BAR_HEIGHT,
  backgroundColor: theme.palette.common.white,
  zIndex: 1201,
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  ...(open && {
    marginLeft: NAV_DRAWER_WIDTH,
    width: `calc(100% - ${NAV_DRAWER_WIDTH}px)`,
  }),
}));
