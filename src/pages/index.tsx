// pages/index.tsx
import React from "react";
import CarousalSection from "../components/CarousalSection/CarousalSection";
import Image from "next/image";





const offers = [
  { title: "50% Off on School Bags", description: "Grab the deal before it ends!" },
  { title: "Fashion Bonanza", description: "Flat 60% Off on Clothing" },
];

const captionStyle: React.CSSProperties = {
  color: "blue",
  fontStyle: "italic",
  textAlign: "center",
  textDecoration: "underline",
};

export default function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <CarousalSection />

      {/* Flash Sale Caption */}
      <h2 style={captionStyle}>Flash Sale!</h2>
      <h4 className="text-3xl font-bold text-center">
        Welcome to Flipart — Your Destination for Fashion and Trend!
      </h4>
      <p className="text-center">
        Discover a world of fashion, electronics, beauty, and lifestyle products curated just for you. 
        At <strong>Flipart</strong>, we combine luxury, style, and affordability in one seamless shopping experience. 
        Browse our collection of quality products — <em>Free delivery on your first order!</em>
      </p>

      {/* Offers Section */}
      <div className="container mt-4">
        <h3>Offers</h3>
        <div className="row">
          {offers.map((offer, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="row mt-3">
          <div className="col-md-4">
            <Image
              src="/images/pic1.jpg"
              alt="Trendy bag on discount"
              className="img-fluid rounded"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <Image
              src="/images/pic2.jpeg"
              alt="Fashion sale banner"
              className="img-fluid rounded"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4">
            <Image
              src="/images/b2s.jpg"
              alt="Back to school sale banner"
              className="img-fluid rounded"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
