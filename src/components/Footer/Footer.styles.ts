import { themeColors } from '../../theme';

export const sxStyles = {
  footerContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '50px',
    justifyContent: 'space-between',
    px: 5,
    pt: 2,
    pb: 1,
    backgroundColor: '#FFF',
    zIndex: 1201,
    borderTop: `1px solid ${themeColors.components.divider}`,
  },
  contactHelp: { px: 2, color: 'text.primary' },
};
