import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useAuthStore } from '../../stores/authStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Signin = () => {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async (email: string, password: string) => {
    const user = await signIn(email, password);

    if (user) {
      navigate('/users');
    }
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        sx={{ height: 500, minWidth: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant='h1'>
          Sign In
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label='Email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            value={email}
            variant='outlined'
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant='outlined'
          />
        </Box>
        <Button variant='contained' color='primary' onClick={() => onSignIn(email, password)}>
          Sign In
        </Button>
      </Card>
    </Box>
  );
};
