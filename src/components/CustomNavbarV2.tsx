import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menus } from "./CustomSidebar";

export default function CustomNavbarV2() {
  const [opened, setOpened] = useState(false);

  const menuItems = menus;

  return (
    <Navbar
      isMenuOpen={opened}
      className="fixed bg-gray-900 dark md:hidden"
      onMenuOpenChange={setOpened}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={opened ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Image src="/img/sidebar/profile.jpg" alt="Profile" width={40} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gray-900 dark">
        {menuItems.map((item) => (
          <NavbarMenuItem key={`navbar-${item.link}`}>
            <Link
              className="w-full"
              to={item.link}
              onClick={() => setOpened(false)}
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
