import { Button, Image } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function CustomSidebar() {
  const location = useLocation();

  return (
    <>
      <div className="fixed hidden h-[90%] w-48 overflow-y-scroll px-4 md:block">
        <Image
          src="/img/sidebar/profile.jpg"
          alt="Profile"
          radius="full"
          className="mx-auto mb-4 w-3/4 border-2"
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

export const menus = [
  { link: "/", text: "Home" },
  { link: "/projects", text: "Projects" },
  { link: "/contents", text: "Contents" },
  { link: "/contact", text: "Contact" },
  { link: "/gears", text: "Gears" },
  { link: "/classes", text: "Classes" },
  { link: "/codes", text: "Codes" },
];
