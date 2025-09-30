'use client'
import { CartContext, Product } from '@/context/CartContext/CartContext';
import { useParams, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

interface AddToCartButtonProps {
  id: string;
}

function AddToCartButton({ id }: AddToCartButtonProps) {
  
  const router = useRouter();
  const context = useContext(CartContext);
  
    if (!context) {
      return <p>Error: Cart context not available.</p>;
    }
    
  const { addToCart } = context;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data: Product) => setProduct(data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  const handleAddToCart = () => {
    if(product){
      addToCart(product);
      router.push('/cart')
    }
    
  };
    
  return (
    <div>
      <button className="btn btn-primary mt-3" onClick = {handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default AddToCartButton
