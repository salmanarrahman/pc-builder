import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost normal-case text-xl ">PC Builder</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">


                        <li>
                            <details>
                                <summary>
                                    Category
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><Link href='/category/cpu'>Processor</Link></li>
                                    <li><Link href='/category/motherboard'>Motherboard</Link></li>
                                    <li><Link href='/category/ram'>RAM</Link></li>
                                    <li><Link href='/category/psu'>PSU</Link></li>
                                    <li><Link href='/category/storage'>Storage</Link></li>
                                    <li><Link href='/category/monitor'>Monitor</Link></li>
                                    <li><Link href='/category/others'>Others</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href='/pcb'>Pc Builder</Link>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;