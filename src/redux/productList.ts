import { createAsyncThunk } from "@reduxjs/toolkit";


export const getListProduct = createAsyncThunk("productList/getList", async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let json = await response.json();
    console.log(json);
    return json;
  });