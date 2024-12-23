import { Button, Image } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function CustomSidebar() {
  const location = useLocation();

  return (
    <>
      <div className="fixed hidden h-[90%] w-48 overflow-y-scroll px-4 md:block">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src="/img/sidebar/profile.jpg"
            alt="Profile"
            radius="full"
            className="mx-auto mb-4 w-3/4 border-2"
          />
        </motion.div>

        <motion.div
          className="mb-4 text-center font-bold"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
        >
          <p>Kamiswara Angga W.</p>
          <p className="text-sm text-blue-500">@anggakswr</p>
        </motion.div>

        <hr className="mb-4" />

        {menus.map((menu, i) => (
          <motion.div
            key={menu.link}
            initial={{ x: 50 * (i + 1) }}
            whileInView={{ x: 0 }}
          >
            <Button
              as={Link}
              to={menu.link}
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
          </motion.div>
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
  { link: "/classes", text: "Classes" },
  { link: "/gears", text: "Gears" },
  { link: "/codes", text: "Codes" },
];
