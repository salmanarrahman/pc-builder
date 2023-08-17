import { addJsonObject } from '@/redux/dataSlice';
import { router } from 'json-server';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductsCardSSR = ({ data, clicked }) => {
    //   const dispatch = useDispatch()
    //  const router = useRouter()

    const click = (data) => {

        console.log(data);
        //   dispatch(addJsonObject(data))
        //   router.push('/pcb')

    }

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
                        <button onClick={() => click(data)} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCardSSR;