import "./styles.css";
import React, { useState, useEffect } from "react";
import useFetchHook from "./Fetch";

export default function App() {
  //  API
  const API = "https://dummyjson.com/products";
  const { products, loading, error } = useFetchHook(API);
  return (
    <div className="App">
      {error && "Error found.."}
      {loading & "Loading..."}
      {!loading &&
        products.map((value) => {
          return <p key={value.id}> {value.title} </p>;
        })}
    </div>
  );
}
