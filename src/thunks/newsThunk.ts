import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchNews = createAsyncThunk(
  "fetch/news",
  async (val: { searchQuery: string; pageNumber: number }) => {
    const {
      data: { response },
    } = await axios(
      `https://content.guardianapis.com/search?api-key=test&q=${val.searchQuery}&show-fields=thumbnail,headline&page=${val.pageNumber}&page-size=10`
    );
    return response;
  }
);
