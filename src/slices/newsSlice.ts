import { createSlice } from "@reduxjs/toolkit";
import { searchNews } from "../thunks/newsThunk";

export type newsDataType = {
  apiUrl: string;
  fields: { headline: string; thumbnail: string };
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
};

export type newsStateType = {
  loading: boolean;
  error: string;
  news: newsDataType[];
  totalPages: number;
};

const initialState: newsStateType = {
  loading: false,
  error: "",
  news: [],
  totalPages: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updateNews: (state, action) => {
      state.news = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchNews.fulfilled, (state, action) => {
      state.news = action.payload.results;
      state.totalPages = action.payload.total / 10;
      state.loading = false;
    });

    builder.addCase(searchNews.pending, (state) => {
      state.loading = true;
      state.news = [];
    });
    builder.addCase(searchNews.rejected, (state, action) => {
      state.error = action.error as string;
      state.loading = false;
    });
  },
});

export const { updateNews } = newsSlice.actions;

export default newsSlice.reducer;
