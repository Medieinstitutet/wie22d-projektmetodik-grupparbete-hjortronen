"use client";

import Link from "next/link";
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
      const response = await fetch("http://localhost:3000/products", {
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
      img: "/placeholder-image.png",
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

  const links = [
    { label: "Customers", href: "#" },
    { label: "Orders", href: "#" },
    { label: "Analythics", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Products", href: "#" },
    { label: "Online store", href: "#" },
  ];

  return (
    <main className="flex h-screen">
      <div className="w-1/4 h-full bg-slate-500 flex">
        <nav className="m-auto">
          <ul className="border border-black rounded-lg">
            {links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={link.href} className="hover:text-xl">
                <li className="m-4">{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex justify-center items-center flex-col bg-gray-900 w-3/4 h-full">
        <h1 className="mb-6 text-white">Lägg till produkt</h1>
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-4 flex-col flex">
            <label htmlFor="title" className="text-white">
              Produkt title:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Stekpanna"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4 flex-col flex">
            <label htmlFor="description" className="text-white">
              Produkt Beskrivning:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="En stryktålig Stekpanna..."
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4 flex-col flex">
            <label htmlFor="category" className="text-white">
              Produkt kategori:
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled selected>
                Välj kategori
              </option>
              <option value="pans">Stekpannor</option>
              <option value="knives">Knivar</option>
              <option value="boards">Skärbrädor</option>
              <option value="pots">Kastruler</option>
            </select>
          </div>

          <div className="mb-4 flex-col flex">
            <label htmlFor="storage" className="text-white">
              Produkter i lager:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123"
              type="text"
              id="storage"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
          </div>

          <div className="mb-4 flex-col flex">
            <label htmlFor="price" className="text-white">
              Produkt pris:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123"
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lägg till produkt
          </button>
        </form>
      </div>
    </main>
  );
}
