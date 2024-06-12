import { Button, Image } from "@nextui-org/react";
import { BiBox, BiLaptop } from "react-icons/bi";
import {
  BsGithub,
  BsInstagram,
  BsKeyboard,
  BsLinkedin,
  BsTiktok,
  BsYoutube,
} from "react-icons/bs";
import { PiDevToLogo } from "react-icons/pi";

export default function Contact() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Contact</p>

          <p>
            Sometimes I take on side projects for website development, working
            as a freelance frontend developer. I'm also proficient in backend
            using Node.js and MongoDB. Occasionally, I conduct webinars, create
            some contents on social medias, and serve as an instructor for
            online classes. Feel free to reach out if you're interested in
            collaborating with me.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">Find me on</p>

      {socials.map((soc) => (
        <Button
          as={`a`}
          href={soc.link}
          target="_blank"
          rel="noopener noreferrer"
          key={soc.link}
          isIconOnly
          className="mr-4 bg-white"
        >
          {soc.icon}
        </Button>
      ))}

      <hr className="my-6" />

      <p className="mb-4 font-bold">My coding gears</p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {gears.map((gear) => (
          <div key={gear.link} className="overflow-hidden rounded-xl">
            <Image
              src={gear.img}
              alt="Laptop Lenovo"
              radius="none"
              className="border"
            />

            <Button
              as={`a`}
              href={gear.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-b-xl text-white"
              radius="none"
              variant="bordered"
              startContent={gear.icon}
            >
              {gear.text}
            </Button>
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">My coding classes</p>

      <div className="grid gap-4 md:grid-cols-2">
        <Image src="/img/classes/kelas-js.jpg" alt="Kelas JS" />
        <Image src="/img/classes/kelas-react.jpg" alt="Kelas React" />
        <Image src="/img/classes/kelas-html-css.jpg" alt="Kelas HTML & CSS" />
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">My source codes</p>

      <div className="grid gap-4 md:grid-cols-2">
        {sourceCodes.map((sc) => (
          <div
            key={`sc-${sc.link}`}
            className="overflow-hidden rounded-xl border"
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
          </div>
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

const gears = [
  {
    img: "/img/gears/laptop.jpeg",
    icon: <BiLaptop />,
    text: "Laptop",
    link: "https://shope.ee/7f8iZwQreF",
  },
  {
    img: "/img/gears/keyboard.jpeg",
    icon: <BsKeyboard />,
    text: "Keyboard",
    link: "https://shope.ee/g2FCRn864",
  },
  {
    img: "/img/gears/stand.jpg",
    icon: <BiBox />,
    text: "Stand Laptop",
    link: "https://shope.ee/6zwq1b20jh",
  },
];

const socials = [
  {
    icon: <BsGithub className="fill-black" size={20} />,
    link: "https://github.com/anggakswr/",
  },
  {
    icon: <BsLinkedin className="fill-black" size={20} />,
    link: "https://www.linkedin.com/in/anggakswr/",
  },
  {
    icon: <BsInstagram className="fill-black" size={20} />,
    link: "https://www.instagram.com/anggakswr/",
  },
  {
    icon: <BsYoutube className="fill-black" size={20} />,
    link: "https://www.youtube.com/@anggakswr/",
  },
  {
    icon: <BsTiktok className="fill-black" size={20} />,
    link: "https://www.tiktok.com/@anggakswr",
  },
  {
    icon: <PiDevToLogo className="fill-black" size={20} />,
    link: "https://dev.to/anggakswr",
  },
];
