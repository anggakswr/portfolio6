import { Image } from "@nextui-org/react";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface IArticle {
  url: string;
  title: string;
  cover_image: string;
  published_at: string;
}

export default function Contents() {
  const [articles, setArticles] = useState<[] | IArticle[]>([]);

  const getArticles = async () => {
    try {
      const res = await axios.get(
        "https://dev.to/api/articles?username=anggakswr",
      );

      setArticles(res.data.filter((art: IArticle) => art.cover_image));
    } catch {
      //
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Content</p>
          <p>
            Embarking on a journey through the realms of technology, unraveling
            the secrets of code documentation, and embracing the art of
            perpetual creation.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">Latest Videos</p>

      <div className="grid grid-cols-3 gap-4">
        {/* videos */}
        {videos.map((vid) => (
          <div key={vid.title}>
            <div className="box-end">
              <p className="rounded-t bg-blue-500 px-2 py-1 text-xs font-bold">
                {vid.subtitle}
              </p>
            </div>

            <Image
              src={vid.img}
              alt={vid.title}
              radius="none"
              className="rounded-tl-large border-2 border-blue-500"
            />

            <a
              href={vid.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block min-h-10 rounded-b-lg border-2 border-blue-500 bg-white px-2 py-1 text-sm font-bold text-black"
            >
              {vid.title}
            </a>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">Latest Writings</p>

      <div className="grid grid-cols-3 gap-4">
        {/* articles */}
        {articles.map((art) => (
          <div key={art.title}>
            <div className="box-end">
              <p className="rounded-t bg-blue-500 px-2 py-1 text-xs font-bold">
                {dayjs(art.published_at).format("MMM D, YYYY")}
              </p>
            </div>

            <Image
              src={art.cover_image}
              alt={art.title}
              radius="none"
              className="rounded-tl-large border-2 border-blue-500"
            />

            <a
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block min-h-14 rounded-b-lg border-2 border-blue-500 bg-white px-2 py-1 text-sm font-bold text-black"
            >
              {art.title}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

const videos = [
  {
    subtitle: "Modern concept of frontends",
    img: "/img/yt-vids/microfe.jpg",
    title: "Micro-frontends",
    link: "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvNEf9gGvPRT_CAgqYYa4Yy",
  },
  {
    subtitle: "Test Driven Development",
    img: "/img/yt-vids/tdd.jpg",
    title: "TDD",
    link: "https://www.youtube.com/playlist?list=PLtj3PG7JyoVvm3PlTr_MHym8-18BUQcCG",
  },
];
