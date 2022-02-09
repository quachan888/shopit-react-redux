import React, { useEffect } from 'react';
import MetaData from './layout/MetaData';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Product from './Product/Product';
import Loader from './layout/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, products, error, productsCount } = useSelector((state) => state.products);

    // console.log(loading, products, error, productsCount);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <MetaData title={'Buy best products online'} />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Home;
