import { Button, Image } from "@nextui-org/react";

export default function CustomSidebar() {
  return (
    <>
      <div className="fixed w-48">
        <Image
          src="/img/sidebar/profile.jpg"
          alt="Profile"
          radius="full"
          className="mb-4 border-2 border-white"
        />

        <div className="mb-4 text-center font-bold">
          <p>Kamiswara Angga W.</p>
          <p className="text-sm text-blue-500">@anggakswr</p>
        </div>

        <hr className="mb-4" />

        {menus.map((menu) => (
          <Button
            key={menu.link}
            variant="bordered"
            className="mb-4 w-full text-lg font-bold text-white"
          >
            {menu.text}
          </Button>
        ))}
      </div>
    </>
  );
}

const menus = [
  { link: "/", text: "Home" },
  { link: "/projects", text: "Projects" },
  { link: "/content", text: "Content" },
  { link: "/contact", text: "Contact" },
];
