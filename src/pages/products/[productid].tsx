import AddToCartButton from '@/components/AddToCartButton/AddToCartButton';
import { Product } from '@/context/CartContext/CartContext';
import { ProductService } from '@/services/product-services';
import React from 'react';
import Head from "next/head";
import { GetServerSideProps } from 'next';


interface ProductDetailProps {
  product: Product | null;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div className="container mt-4">Product not found</div>;
  }

  return (
    <div className="container mt-4">
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>

      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <h4 className="text-success">₹{(product.price * 83).toFixed(0)}</h4>
          <p className="text-warning mb-1">
            {"★".repeat(Math.round(product.rating.rate))}{" "}
            <span className="text-muted">({product.rating.count})</span>
          </p>
          <AddToCartButton id={product.id.toString()} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

// Fetch product data on server side
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productid } = context.params!;

  let product: Product | null = null;
  if (productid) {
    product = await ProductService.getProductById(Number(productid));
  }

  return {
    props: {
      product,
    },
  };
};


