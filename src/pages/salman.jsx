import RootLayout from '@/Root/RootLayout';
import React from 'react';

const salman = () => {
    return (
        <div>
            <p>SAlman</p>
        </div>
    );
};

export default salman;

salman.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
