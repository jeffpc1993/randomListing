import React from 'react';
import Product from "./Product";
import { Grid } from "./../styles";
import Container from '@material-ui/core/Container';

const ProductList = ({products}) => {
    return ( <Container>
        <Grid>
        {products.map(product => 
            <Product
                key={product.productId}
              data={product}
              />
        )}
        </Grid>
    </Container> );
}
 
export default ProductList;