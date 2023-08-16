import Link from 'next/link';
import React from 'react';

const ProductsCard = ({ data }) => {
    console.log(data);
    return (
        <div className=''>



            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={data?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.productName}</h2>
                    <p>Category : {data?.category}</p>
                    <p>Price : {data?.price}</p>
                    <p>Status : {data?.status}</p>
                    <p>Rating : {data?.rating}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/details/${data?.id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;