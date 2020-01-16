import * as React from 'react';
import PropTypes from 'prop-types';
import { API_END_POINT } from './../constants';
import axios from 'axios';

export const ProductListContext = React.createContext();

export const ProductListDataProvider = ({ children }) => {
    const [loading, setLoading] = React.useState(false);
    const [productList, setProductList] = React.useState([]);
    const [categories, setCategories] = React.useState(new Set());
    const [isErrored, setIsErrored] = React.useState(false);

    const findAndSetCategories = (products) => {
        setCategories(new Set(products.map(product => product.category)))
        setLoading(false);
    }

    const getProducts = () => {
        axios
        .get(API_END_POINT)
        .then(({data: {products}}) => {
            console.log(products)
            setProductList(products)
            findAndSetCategories(products)
        })
        .catch(err => {
            console.log(err)
            setIsErrored(true)
        })
    }
    React.useEffect(() => {
        setLoading(true)
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ProductListContext.Provider
            value={{
                productList,
                loading,
                categories,
                isErrored
            }}
        >
            {children}
        </ProductListContext.Provider>
    );
};
ProductListDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
