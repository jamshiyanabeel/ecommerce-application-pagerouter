'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function ProductCard(props:any) {
    var product = props.product;
    const router = useRouter();
    return (
    <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img src={product.image} className="card-img-top p-3" style={{ height: '250px', objectFit: 'contain' }} alt={product.title} />
                  <div className="card-body d-flex flex-column">
                    <Link href={`/products/${product.id}`} className="card-title text-truncate">{product.title}</Link> 
                    <p className="card-text">₹{(product.price * 83).toFixed(0)}</p>
                    <div className="text-warning mb-1">
                      {/* same page navigation */}
                      {'★'.repeat(Math.round(product.rating.rate))} <span className="text-muted">({product.rating.count})</span><button onClick={() => router.push(`/products?rating=${product.rating.rate}`)} className='btn btn-link'> Click to View Reviews </button>
                    </div>
                    {/* Disabling scroll restoration */}
                    <button onClick={() => router.push(`/products/${product.id}`,{scroll: false}) } className="btn btn-primary mt-auto">View Details</button>
                  </div>
                </div>
              </div>
  )
}

export default ProductCard
