import { Button, Image } from "@nextui-org/react";
import { BiBox, BiLaptop } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";

export default function Gears() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Gears</p>
          <p>The tools and equipment that power my coding adventures.</p>
        </div>
      </div>

      <hr className="my-6" />

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
