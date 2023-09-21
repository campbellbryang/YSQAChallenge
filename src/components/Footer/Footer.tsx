import { Box, Typography } from '@mui/material';
import { sxStyles } from './Footer.styles';

export const Footer = () => (
  <Box component='footer' sx={sxStyles.footerContainer}>
    <Typography variant='body2'>© 2023 YouScience. All Rights Reserved.</Typography>
    <Box>
      <Typography component='a' href='https://knowledgebase.youscience.com/' sx={sxStyles.contactHelp} variant='body2'>
        Help
      </Typography>
      |
      <Typography component='a' href='mailto:employersales@youscience.com' sx={sxStyles.contactHelp} variant='body2'>
        Contact Us
      </Typography>
    </Box>
  </Box>
);
