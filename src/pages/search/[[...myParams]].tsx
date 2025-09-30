import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { ProductService } from "@/services/product-services";

export default function DynamicSearch() {
  const router = useRouter();
  const { myParams } = router.query; // may be undefined
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Ensure safe handling
  const searchQuery = Array.isArray(myParams)
    ? myParams.join("/").toLowerCase()
    : "";

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const allProducts = await ProductService.getProducts();

      // filter only if searchQuery exists
      const filtered = searchQuery
        ? allProducts.filter((product: any) =>
            product.title.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery)
          )
        : allProducts;

      setProducts(filtered);
      setLoading(false);
    }

    fetchProducts();
  }, [searchQuery]);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h3>{searchQuery ? `Showing results for "${searchQuery}"` : "All Products"}</h3>
      <div className="row mt-3">
        {products.length > 0 ? (
          products.map((p: any) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No products found for "<strong>{searchQuery}</strong>"</p>
        )}
      </div>
    </div>
  );
}

//localhost:3000/search/electronics
