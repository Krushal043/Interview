import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products?.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.decripation}</p>
            <p>{product.price}</p>
            <link to={`/edit/${product._id}`}> Edit</link>
            <Button onClick={() => handleDelete(product._id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
