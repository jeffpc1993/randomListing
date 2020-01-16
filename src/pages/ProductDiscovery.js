import * as React from 'react';
import { ProductListContext } from "./../dataContexts/ProductListContext";
import Filters from "./../components/Filters";
import ProductList from "./../components/ProductList";
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';

const ProductDiscovery = (props) => {
    const { productList,
        loading,
        categories,
        isErrored } = React.useContext(ProductListContext);
    const [selectedCategories, setSelectedCategories] = React.useState(new Set());
    const [filteredProducts, setfilteredProducts] = React.useState(productList);
    const filter = (selectedCategories) => {
        console.log(selectedCategories)
        setfilteredProducts(productList.filter(product => {
            return selectedCategories.has(product.category);
        }))
    }

    
    const filterChange = (selectedCategories) => {
        setSelectedCategories(selectedCategories)
        filter(selectedCategories)
    }
    // console.log(filteredProducts, productList)
 
    return ( <React.Fragment>
        {loading ? <CircularProgress /> :
        
        <React.Fragment>

            <Filters items={categories} onSelectChange={filterChange} all={true}/>
            <h4>Total items {filteredProducts.length}</h4>
            <ProductList products={filteredProducts} />
        </React.Fragment>
        
        }
        
    </React.Fragment> );
}
 
export default ProductDiscovery;