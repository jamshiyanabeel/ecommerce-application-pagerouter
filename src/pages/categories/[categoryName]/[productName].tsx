import { GetServerSideProps } from "next";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/context/CartContext/CartContext";
import { ProductService } from "@/services/product-services";

type Props = {
  products: Product[];
  categoryName: string;
  productName: string;
  price?: string;
};

export default function CategoryPage({ products, categoryName, productName, price }: Props) {
  return (
    <div style={{ padding: "1rem" }}>
      <h4>
        Showing results for {categoryName} / {productName}
        {price && ` (price: ${price})`}
      </h4>
      <div className="row mt-3">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

// Server-side fetching with filtering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categoryName, productName } = context.params as { categoryName: string; productName: string };
  const { price } = context.query;

  const products: Product[] = await ProductService.getProducts();

  const filteredProducts = products.filter(
    (p) =>
      (!categoryName || p.category.toLowerCase().includes(categoryName.toLowerCase())) &&
      (!productName || p.title.toLowerCase().includes(productName.toLowerCase())) &&
      (!price || p.price.toString().includes(price.toString()))
  );

  return {
    props: {
      products: filteredProducts,
      categoryName,
      productName,
      price: price || null,
    },
  };
};



    




//searchParams    /categories/electronics/sanDisk?price=109




