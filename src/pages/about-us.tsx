import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Flipart - About Us",
  description: "Learn more about Flipart and our mission.",
};


function aboutUs() {
  return (
    <div className="container mt-4">
    <h3> About Us </h3>
    <p>
      Welcome to Flipart, your trusted online shopping destination. We are committed to providing you with the best products and service possible.
      Our mission is to bring convenience and quality to your doorstep.
    </p>
    <p>
      Founded in 2025, Flipart aims to make online shopping seamless and enjoyable for everyone.
    </p>
    <h4 className="text-2xl font-bold ">✨ Why Flipartt? </h4>
      <ul>
        <li>Handpicked collections for every style</li>
        <li>Unbeatable prices on premium products</li>
        <li>Secure checkout & super-fast delivery</li>
        <li>Friendly support you can trust</li>
      </ul>
    <p>From trending outfits to must-have gadgets, Flipart brings everything you love – faster, better, smarter.</p>
    <h5>Shop Smart. Shop Quick. Only at Flipart.</h5>
  </div>
  )
}

export default aboutUs