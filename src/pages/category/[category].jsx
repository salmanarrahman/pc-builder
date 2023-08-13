/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from '@/Root/RootLayout';
import { useRouter } from 'next/router';
import React from 'react';

const category = () => {
    const router = useRouter()
    return (
        <div>

            <p>This is all {router.query.category}</p>

        </div>
    );
};

export default category;

category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
