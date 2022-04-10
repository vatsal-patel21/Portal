// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// component
// import { getIcon } from '@iconify/react';
// import Iconify from '../components/Iconify';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function LoginAsCard(props) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Iconify icon="ant-design:android-filled" width={24} height={24} /> */}
        {/* <Iconify icon={getIcon('eva:person-outline')} width={24} height={24} /> */}
        <Icon icon="carbon:user-avatar-filled" width="70" height="70" />
      </IconWrapperStyle>
      <Typography variant="h4">{props.name}</Typography>
    </RootStyle>
  );
}
