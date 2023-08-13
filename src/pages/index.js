import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import RootLayout from "@/Root/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <p>Homepage</p>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
