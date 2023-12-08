"use client";

import React, { useState } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  storage: number;
  img: string;
  imgAlt: string;
  price: number;
}

export default function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [storage, setStorage] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = async (newProduct: IProduct) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log("New Product added: ", newProduct);
      } else {
        console.error("Failed to add new product: ", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      description,
      category,
      storage: parseFloat(storage),
      img: "default-image.jpg",
      imgAlt: "product image",
      price: parseFloat(price),
    };

    handleAddProduct(newProduct);

    setTitle("");
    setDescription("");
    setCategory("");
    setStorage("");
    setPrice("");
  };
  return (
    <main className="flex h-screen">
      <div className="w-1/4 h-full bg-slate-500 flex">
        <nav className="m-auto">
          <ul>
            <li>
              <a href="#">Dummy</a>
            </li>
            <li>
              <a href="#">Dummy</a>
            </li>
            <li>
              <a href="#">Dummy</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center bg-red-400 w-3/4 h-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title">Product title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description">Product description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category">Product category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="storage">Product storage:</label>
            <input
              type="text"
              id="storage"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price">Product price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-slate-50">
            Add Product
          </button>
        </form>
      </div>
    </main>
  );
}
