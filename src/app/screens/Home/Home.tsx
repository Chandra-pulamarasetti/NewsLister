import { Card } from "app/Components/Cards/Card";
import { PaginationNav1Presentation } from "app/Components/Pagination/Pagination";
import { Key, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNews } from "../../../thunks/newsThunk";
import { useParams } from "react-router-dom";
import { newsDataType, updateNews } from "../../../slices/newsSlice";
import { AppDispatch, RootState } from "src/store";
import { FaSpinner } from "react-icons/fa";
import "./Home.css";

export const Home = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { searchQuery } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { news, loading, error, totalPages } = useSelector(
    (state: RootState) => state.newsreducer
  );
  useEffect(() => {
    if (searchQuery) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(searchNews({ searchQuery, pageNumber: pageIndex || 1 }));
    }
    return () => {
      dispatch(updateNews([]));
    };
  }, [searchQuery, pageIndex, dispatch]);
  console.log(loading);
  return (
    <div className="flex flex-col items-center bg-grey justify-center flex-1 py-[10vh] h-full">
      {!error ? (
        <>
          <h1 className="py-5 bg-white fixed top-0 w-full text-center text-xl">
            Search results of <strong>"{searchQuery}"</strong>
          </h1>
          {(totalPages || !!news.length) && (
            <div className="flex justify-center fixed w-full bottom-0">
              <PaginationNav1Presentation
                pageCount={totalPages}
                setPageIndex={setPageIndex}
                pageIndex={pageIndex}
              />
            </div>
          )}
          {loading ? (
            <div className="spinner">
              <FaSpinner className="spinner-icon" />
            </div>
          ) : (
            <>
              {news &&
                news.map(
                  (item: newsDataType, index: Key | null | undefined) => (
                    <Card key={index} data={item} />
                  )
                )}
            </>
          )}
        </>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
