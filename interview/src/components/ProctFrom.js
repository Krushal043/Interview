import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function ProctFrom() {
  const [name, setName] = useState("");
  const [descripation, setDescripation] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, descripation, price, qty, category };
    try {
      if (id) {
        await axios.post(
          `http://localhost:5000/api/product/${id}`,
          productData
        );
      } else {
        await axios.post("http://localhost:5000/api/product", productData);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onChange={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Descripation"
          required
          onChange={(e) => setDescripation(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          type="text"
          name="qty"
          placeholder="Stock Quantity"
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button type="submit">{id ? "Update" : "Submit"}</Button>
      </form>
    </div>
  );
}
