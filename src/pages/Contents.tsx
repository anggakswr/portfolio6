import { Image } from "@nextui-org/react";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      <div className="grid gap-4 md:grid-cols-3">
        {/* videos */}
        {videos.map((vid) => (
          <motion.div
            key={vid.title}
            initial={{ rotate: 180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
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
              className="relative block min-h-10 rounded-b-lg border-2 border-blue-500 bg-white px-2 py-1"
            >
              {/* bg */}
              <span className="pattern1 absolute inset-0"></span>

              {/* content */}
              <span className="relative z-10 text-sm font-bold text-black">
                {vid.title}
              </span>
            </a>
          </motion.div>
        ))}
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">Latest Writings</p>

      {!articles?.length ? <p>No data.</p> : null}

      <div className="grid gap-4 md:grid-cols-3">
        {/* articles */}
        {articles.map((art) => (
          <motion.div
            key={art.title}
            initial={{ rotate: 180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
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
              className="relative block min-h-14 rounded-b-lg border-2 border-blue-500 bg-white px-2 py-1"
            >
              {/* bg */}
              <span className="pattern1 absolute inset-0"></span>

              {/* content */}
              <span className="text-sm font-bold text-black">{art.title}</span>
            </a>
          </motion.div>
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
