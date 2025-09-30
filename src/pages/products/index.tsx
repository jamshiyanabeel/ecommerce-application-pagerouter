
import React, { Suspense } from "react";
import { GetServerSideProps } from "next";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductService } from "@/services/product-services";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductsPageProps {
  products: Product[];
  searchQuery: string;
  headersInfo: {
    referer?: string;
    "user-agent"?: string;
    host?: string;
  };
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products, searchQuery, headersInfo }) => {
  // Filter products on client side (optional)
  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      <Suspense fallback={<div style={{ color: "blue" }}>Loading...</div>}>
      <a href="#bottomsection">Go to End of list</a>
      {searchQuery && <p>Showing results for: "{searchQuery}"</p>}
      <div className="row mt-3">
              {filteredProducts.length === 0 ? (
                <p>No products found for "{searchQuery}"</p>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
            <h3 id="bottomsection">End of list</h3>
        </Suspense>
        <p>Referer: {headersInfo.referer || "N/A"}</p>
        <p>User-Agent: {headersInfo["user-agent"] || "N/A"}</p>
        <p>Host: {headersInfo.host || "N/A"}</p>
    </div>
  );
};

export default ProductsPage;

// Server-side data fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context;

  const searchQuery = (query.search as string)?.toLowerCase() || "";

  // Fetch products from service
  const products: Product[] = await ProductService.getProducts();

  // Headers info
  const headersInfo = {
    referer: req.headers.referer || null,
    "user-agent": req.headers["user-agent"] || null,
    host: req.headers.host || null,
  };

  return {
    props: {
      products,
      searchQuery,
      headersInfo,
    },
  };
};




