import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import RootLayout from "@/Root/RootLayout";
import Link from "next/link";
import ProductsCard from "@/Components/ProductsCard";

export default function Home({ data }) {
  const shuffledData = shuffleArray(data.slice());
  const selectedItems = shuffledData.slice(0, 6);
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
        <p className="mt-10 mb-10 text-lg font-bold">Featured Products :</p>

        <div className="grid grid-cols-2 mb-10 md:grid-cols-3 gap-4">
          {selectedItems.map((data) => (
            <ProductsCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:9999/data");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
