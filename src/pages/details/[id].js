import RootLayout from "@/Root/RootLayout";
import React from "react";

const ProductDetails = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex max-w-7xl h-[calc(100vh-80px)] mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={data.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.productName}</h1>
          <p className="text-xl">Category: {data?.category}</p>
          <p className="text-xl">Price: {data?.price}</p>
          <p className="text-xl mt-5">Status: {data?.status}</p>
          <p className="text-xl mt-5">Rating: {data?.rating}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:9999/data");
  const data = await res.json();

  const paths = data.map((data) => ({
    params: { id: data.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:9999/data/${params.id}`);
  const data = await res.json();
  // console.log(data);id

  return {
    props: {
      data: data,
    },
  };
};
