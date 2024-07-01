import { Button } from "@nextui-org/react";
import {
  BsGithub,
  BsInstagram,
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
    </>
  );
}

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
