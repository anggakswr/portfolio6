import { Button, Chip, Image } from "@nextui-org/react";
import { GoDotFill } from "react-icons/go";
import { FaSuitcase } from "react-icons/fa";
import { BiCode, BiDownload } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div className="font-bold">
          <p className="mb-2 text-xl">Hi, I'm Angga</p>
          <p className="text-blue-500">
            Frontend Developer &middot; Based in Indonesia
          </p>
        </div>

        <Button
          className="bg-white"
          startContent={
            <GoDotFill size={50} className="animate-pulse fill-green-500" />
          }
        >
          Hire me!
        </Button>
      </div>

      <p>
        Hello, I'm Angga, a seasoned professional with over three years of
        hands-on experience in web development. I specialize in utilizing
        cutting-edge tools such as Next.js, Tailwind CSS, and TypeScript to
        craft innovative and dynamic web solutions.
      </p>

      <hr className="my-6" />

      <div className="box-between mb-8">
        <div className="font-bold">
          <div className="box-equal mb-4 gap-4">
            <FaSuitcase size={25} />
            <p className="text-xl">Experiences</p>
          </div>

          <p className="text-blue-500">My professional career journey.</p>
        </div>

        <Button
          as={`a`}
          href="/docs/cv-angga-ats.pdf"
          download
          className="bg-white"
          startContent={<BiDownload size={20} className="fill-black" />}
        >
          Download CV
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* card */}
        {exps.map((exp) => (
          <div key={exp.office} className="relative rounded-lg bg-white p-4">
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
          </div>
        ))}
      </div>

      <hr className="my-6" />

      <div className="box-between mb-8">
        <div className="font-bold">
          <div className="box-equal mb-4 gap-4">
            <BiCode size={25} />
            <p className="text-xl">Tools</p>
          </div>

          <p className="mb-8 text-blue-500">My coding tools.</p>

          {skills.map((skill) => (
            <Chip
              key={skill.text}
              size="lg"
              className={`mb-4 mr-4 bg-white text-sm`}
            >
              {skill.text}
            </Chip>
          ))}
        </div>
      </div>
    </>
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
