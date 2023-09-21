import { SyntheticEvent, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { AppBar } from '../AppBar/AppBar.styles';
import { APP_BAR_HEIGHT } from '../../constants';
import { userMenuOptions } from './constants';
import { useAuthStore } from '../../stores/authStore';

const Menu = lazy(() => import('../Menu'));

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const signOut = useAuthStore((state) => state.signOut);
  const routeOption = pathname.split('/')[1];

  const userRoleToDisplay = 'Learner';

  const formattedName = 'Test User';

  const handleDelayCallback = (cb: VoidFunction) => {
    setTimeout(() => {
      cb();
    }, 200);
  };

  const handleNavigate = (e: SyntheticEvent, value: string) => {
    e.preventDefault();
    handleDelayCallback(() => navigate(value));
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin', { replace: true });
  };

  const manageProfileCallback = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate('profile');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' open={false} sx={{ marginBottom: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', pr: 8 }}>
          <Toolbar sx={{ height: APP_BAR_HEIGHT }} />
          <Menu
            manageProfileCallback={manageProfileCallback}
            menuItems={userMenuOptions}
            selectedItem={routeOption}
            handleSelectCallback={handleNavigate}
            signOutCallback={handleSignOut}
            username={formattedName}
            userRole={userRoleToDisplay}
          />
        </Box>
      </AppBar>
    </Box>
  );
};
