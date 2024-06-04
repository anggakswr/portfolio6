import { Button, Image } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function CustomSidebar() {
  const location = useLocation();

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
            as={Link}
            to={menu.link}
            key={menu.link}
            variant="bordered"
            className="mb-4 w-full text-lg font-bold text-white"
            style={
              location.pathname === menu.link
                ? { backgroundColor: "white", color: "black" }
                : {}
            }
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
