/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from '@/Root/RootLayout';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const pcb = () => {
    const data = useSelector(state => state.jsonObjects)
    console.log(data.jsonObjects);
    return (
        <div>

            <div className="collapse w-1/5 bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Add items using Categories
                </div>
                <div className="">
                    <li>
                        <Link href="/categoryssr/cpu">Processor</Link>
                        <button className='btn btn-ghost'>
                            <Link href="/categoryssr/cpu">Choose</Link>

                        </button>
                    </li>
                    <li>
                        <Link href="/categoryssr/motherboard">Motherboard</Link>
                        <button className='btn btn-ghost'>
                            <Link href="/categoryssr/motherboard">Choose</Link>

                        </button>


                    </li>
                    <li>
                        <Link href="/categoryssr/ram">RAM</Link>
                        <button className='btn btn-ghost'>
                            <Link href="/categoryssr/ram">Choose</Link>

                        </button>

                    </li>
                    <li>
                        <Link href="/categoryssr/psu">PSU</Link>
                        <button className='btn btn-ghost'>
                            <Link href="/categoryssr/psu">Choose</Link>

                        </button>

                    </li>
                    <li>
                        <Link href="/categoryssr/storage">Storage</Link>
                        <button className='btn btn-ghost'>
                            <Link href="/categoryssr/storage">Choose</Link>
                        </button>

                    </li>
                    <li>
                        <Link href="/categoryssr/monitor">Monitor</Link>
                        <button className='btn btn-ghost'>  <Link href="/categoryssr/monitor">Choose</Link></button>

                    </li>

                </div>
            </div>

        </div>
    );
};

export default pcb;

pcb.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};