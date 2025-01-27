"use client";

import React, { useState } from "react";
import { urlFor } from "../../../../lib/client";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../../../components";
import { useStateContext } from "../../../../context/StateContext";

const ProductDetailsClient = ({ product, products }) => {
  const { name, details, price, image } = product;
  const { decQty, incQty, qty, onAdd } = useStateContext();

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(image[0]);

  // Fallback for missing images
  if (!image || image.length === 0) {
    return <div>No images available for this product.</div>;
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          {/* Main image */}
          <div className="image-container">
            <img
              src={urlFor(selectedImage)} // Use selectedImage here
              alt={name}
              width={500}
              height={500}
              className="product-detail-image"
            />
          </div>

          {/* Thumbnail images */}
          <div className="small-images-container">
            {image.map((img, index) => (
              <img
                key={index}
                src={urlFor(img)}
                alt={`${name} - ${index + 1}`}
                width={70}
                height={70}
                className={
                  selectedImage === img
                    ? "small-image selected-image"
                    : "small-image"
                }
                onMouseEnter={() => {
                  console.log("Hovered over image:", img); // Debugging log
                  setSelectedImage(img);
                }}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>20</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p>Price: ₦{price}</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
