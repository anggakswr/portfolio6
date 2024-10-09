import { Button, Chip, Image } from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";
import { FaSuitcase } from "react-icons/fa";
import { BiCode, BiDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        // delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="font-bold">
          <motion.p variants={item} className="mb-2 text-xl">
            Hi, I'm Angga
          </motion.p>

          <motion.p variants={item} className="text-blue-500">
            Frontend Developer &middot; Based in Indonesia
          </motion.p>
        </div>

        <motion.div variants={item}>
          <Button
            as={Link}
            to={`/contact`}
            className="bg-white"
            startContent={
              <GoDotFill size={50} className="animate-pulse fill-green-500" />
            }
          >
            Hire me!
          </Button>
        </motion.div>
      </div>

      <motion.p variants={item}>
        Hello, I'm Angga, a seasoned professional with over three years of
        hands-on experience in web development. I specialize in utilizing
        cutting-edge tools such as Next.js, Tailwind CSS, and TypeScript to
        craft innovative and dynamic web solutions.
      </motion.p>

      <hr className="my-6" />

      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="font-bold">
          <motion.div variants={item} className="box-equal mb-4 gap-4">
            <FaSuitcase size={25} />
            <p className="text-xl">Experiences</p>
          </motion.div>

          <motion.p variants={item} className="text-blue-500">
            My professional career journey.
          </motion.p>
        </div>

        <motion.div variants={item}>
          <Button
            as={`a`}
            href="/docs/cv-angga-ats.pdf"
            download
            className="bg-white"
            startContent={<BiDownload size={20} className="fill-black" />}
          >
            Download CV
          </Button>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* card */}
        {exps.map((exp) => (
          <motion.div
            key={exp.office}
            className="relative rounded-lg bg-white p-4"
            variants={item}
          >
            {/* bg */}
            <div className="pattern1 absolute inset-0"></div>

            {/* content */}
            <div className="box-equal relative z-10 gap-6">
              <Image src={exp.logo} alt={exp.office} width={50} />

              <div className="text-sm">
                <p className="font-bold text-black">{exp.title}</p>

                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: exp.office,
                  }}
                />

                <p className="text-black">{exp.time}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="box-between mb-8">
        <div className="font-bold">
          <motion.div variants={item} className="box-equal mb-4 gap-4">
            <BiCode size={25} />
            <p className="text-xl">Tools</p>
          </motion.div>

          <motion.p variants={item} className="mb-8 text-blue-500">
            My coding tools.
          </motion.p>

          {skills.map((skill) => (
            <motion.div
              key={skill.text}
              className="inline-block"
              variants={item}
            >
              <Chip size="lg" className={`mb-4 mr-4 bg-white text-sm`}>
                {skill.text}
              </Chip>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const skills = [
  { text: "HTML" },
  { text: "CSS" },
  { text: "JavaScript" },
  { text: "TypeScript" },
  { text: "React.js" },
  { text: "Tailwind CSS" },
  { text: "Next.js" },
  { text: "React Query" },
  { text: "Zustand" },
  { text: "Nuxt 2" },
  { text: "Vite" },
  { text: "Git" },
];

const exps = [
  {
    logo: "/img/experiences/prima-logo.png",
    title: "Frontend Developer",
    office: "Primaku &middot; Jakarta",
    time: "Jul 2022 - Present",
  },
  {
    logo: "/img/experiences/gama-logo.jpg",
    title: "Frontend Developer",
    office: "Gamatechno &middot; Yogjakarta",
    time: "Apr 2022 - Aug 2022",
  },
  {
    logo: "/img/experiences/untag-logo.png",
    title: "Fullstack Developer",
    office: "UNTAG &middot; Semarang",
    time: "Januari 2021 - Desember 2022",
  },
  {
    logo: "/img/experiences/icrea-logo.png",
    title: "Frontend Developer",
    office: "iCreativeLabs &middot; Bandung",
    time: "Nov 2020 - Aug 2022",
  },
];
