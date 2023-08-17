/* eslint-disable react-hooks/rules-of-hooks */
import ProductsCard from '@/Components/ProductsCard';
import ProductsCardSSR from '@/Components/ProductsCardSSR';
import RootLayout from '@/Root/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const category = ({ data }) => {


    const selectedProduct = (data) => {
        console.log(data);
    }


    return (
        <div>

            <div className="grid grid-cols-2 mb-10 md:grid-cols-3 gap-4">
                {data.map((data) => (
                    <ProductsCardSSR key={data.id} clicked={(data) => selectedProduct(data)} data={data} />
                ))}
            </div>

        </div>
    );
};

export default category;

category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};




export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:9999/data?category=${params.category}`);
    const data = await res.json();
    // console.log(data);id

    return {
        props: {
            data: data,
        },
    };
};

