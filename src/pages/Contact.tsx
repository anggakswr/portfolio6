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
        <Button key={soc.link} isIconOnly className="mr-4 bg-white">
          {soc.icon}
        </Button>
      ))}

      <hr className="my-6" />

      <p className="mb-4 font-bold">My coding gears</p>

      <div className="grid grid-cols-4 gap-4">
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

      <div className="grid grid-cols-2 gap-4">
        <Image src="/img/classes/kelas-js.jpg" alt="Kelas JS" />
        <Image src="/img/classes/kelas-react.jpg" alt="Kelas React" />
      </div>

      <hr className="my-6" />

      <p className="mb-4 font-bold">My coding classes</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-xl border">
          <Image
            src="/img/source-codes/crud-fullstack.jpg"
            alt="CRUD Fullstack"
            radius="none"
          />

          <div className="p-4">
            <p className="mb-1 font-bold">CRUD Fullstack</p>

            <p className="mb-4 text-sm">
              CRUD fullstack project using Next.js pages router, TypeScript,
              Tailwind, NextUI, and react-icons.
            </p>

            <Button
              as={`a`}
              href={`https://t.me/anggakswr`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 bg-white"
            >
              Order
            </Button>

            <Button
              as={`a`}
              href="https://crud-fullstack.daudweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              variant="bordered"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

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
];
