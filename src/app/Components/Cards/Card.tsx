import { newsDataType } from "src/slices/newsSlice";

export const Card = ({ data }: { data: newsDataType }) => {
  const {
    fields: { thumbnail, headline },
    apiUrl,
  } = data;
  return (
    <a
      href={apiUrl}
      target="_blank"
      rel="noreferrer"
      title={apiUrl}
      className="flex max-sm:flex-col max-sm:w-[18rem] max-sm:h-[auto] flex-1 items-center m-2 w-[80%] max-lg:h-[12rem] h-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 overflow-hidden"
    >
      <img
        className="max-sm:min-w-full max-sm:h-full max-xl:min-w-[45%] max-xl:max-w-[45%] min-w-[40%] max-w-[40%] h-full"
        src={
          thumbnail ||
          "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
        }
        alt="loading"
      />
      <div className="px-6 flex flex-col">
        <h5 className="mb-2 text-lg font-medium leading-tight text-black dark:text-neutral-50">
          {headline}
        </h5>
      </div>
    </a>
  );
};
