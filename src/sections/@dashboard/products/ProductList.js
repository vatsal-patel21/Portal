import PropTypes from 'prop-types';
// material
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link, Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Link component={RouterLink} variant="subtitle2" to="/dashboard/user" underline="hover">
      <Grid container spacing={3} {...other}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Link>
  );
}
