import { lazy, useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { APP_BAR_HEIGHT } from '../../constants';
import { useAuthStore } from '../../stores/authStore';
// Lazy components
const Header = lazy(() => import('../Header'));
const Footer = lazy(() => import('../Footer'));

export const Layout = () => {
  const navigate = useNavigate();
  const authSession = useAuthStore((state) => state.authSession);
  console.log(authSession);
  useLayoutEffect(() => {
    if (!authSession.isAuthenticated) {
      navigate('/signin', { replace: true });
    }
  }, [authSession.isAuthenticated]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 0 }}>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <Box
          component='main'
          sx={{
            backgroundColor: '#FFF',
            height: '100%',
            marginTop: `${APP_BAR_HEIGHT}px`,
            pt: 4,
            px: 4,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Box
        sx={{
          zIndex: (theme) => {
            console.log(theme);
            return theme.zIndex.drawer + 1;
          },
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};
