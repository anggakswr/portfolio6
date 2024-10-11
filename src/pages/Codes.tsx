import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Codes() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Codes</p>

          <p>
            Discover high-quality source codes meticulously crafted to elevate
            your projects.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid gap-4 md:grid-cols-2">
        {sourceCodes.map((sc) => (
          <motion.div
            key={`sc-${sc.link}`}
            className="overflow-hidden rounded-xl border"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
          >
            <Image src={sc.img} alt={sc.title} radius="none" />

            <div className="p-4">
              <p className="mb-1 font-bold">{sc.title}</p>
              <p className="mb-4 text-sm">{sc.desc}</p>

              <Button
                as={`a`}
                href={`https://t.me/anggakswr`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 bg-white"
              >
                Buy
              </Button>

              <Button
                as={`a`}
                href={sc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                variant="bordered"
              >
                View
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

const sourceCodes = [
  {
    img: "/img/source-codes/crud-fullstack.jpg",
    title: "CRUD Fullstack",
    desc: "CRUD fullstack project using Next.js pages router, TypeScript, Tailwind, NextUI, and react-icons.",
    link: "https://crud-fullstack.daudweb.com/",
  },
  {
    img: "/img/source-codes/crud-react-js.jpg",
    title: "CRUD React JS",
    desc: "CRUD frontend project using React.js, TypeScript, Tailwind, NextUI, Zustand, react-toastify, and lucide-react.",
    link: "https://crud-react-js.daudweb.com/",
  },
];
