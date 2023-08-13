import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import RootLayout from "@/Root/RootLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="collapse w-1/5 bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Featured Categories
        </div>
        <div className="collapse-content">
          <li>
            <Link href="/category/cpu">Processor</Link>
          </li>
          <li>
            <Link href="/category/motherboard">Motherboard</Link>
          </li>
          <li>
            <Link href="/category/ram">RAM</Link>
          </li>
          <li>
            <Link href="/category/psu">PSU</Link>
          </li>
          <li>
            <Link href="/category/storage">Storage</Link>
          </li>
          <li>
            <Link href="/category/monitor">Monitor</Link>
          </li>
          <li>
            <Link href="/category/others">Others</Link>
          </li>
        </div>
      </div>
      <div>
        <p className="mt-10 text-lg font-bold">Featured Products :</p>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
