// material
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import LoginAsCard from './LoginAs';

// ----------------------------------------------------------------------

export default function UserTypes() {
  return (
    <Page title="Government | MH">
      <Container maxWidth="xl">
        <Box sx={{ mt: 15, mb: 10 }}>
          <Typography variant="h2" style={{ margin: 'auto', width: 'fit-content' }}>
            Login As
          </Typography>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={RouterLink} variant="subtitle2" to="/Login" underline="hover">
              <LoginAsCard name="ADMIN" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={RouterLink} variant="subtitle2" to="/Login" underline="hover">
              <LoginAsCard name="EDUCATION BOARD" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link component={RouterLink} variant="subtitle2" to="/Login" underline="hover">
              <LoginAsCard name="TEACHER" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
