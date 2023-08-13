import RootLayout from '@/Root/RootLayout';
import React from 'react';

const pcb = () => {
    return (
        <div>
            <p>Build your pc</p>
        </div>
    );
};

export default pcb;

pcb.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};