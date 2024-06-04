import { Image } from "@nextui-org/react";
import { CgArrowTopRight } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

export default function Projects() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Projects</p>
          <p>
            Unleashing my tech zeal, crafting a digital realm, and building a
            universe uniquely my own.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      {projects.map((proj) => (
        <div key={proj.title} className="mb-8">
          <div className="box-equal gap-4 bg-white p-4">
            <Image src={proj.img} alt={proj.title} width={40} radius="none" />
            <p className="font-bold text-black">{proj.title}</p>
          </div>

          <div className="relative bg-white p-4">
            {/* bg */}
            <div className="pattern1 absolute inset-0"></div>

            <Image
              src={proj.logo}
              alt={proj.title}
              className="mb-4"
              radius="none"
            />

            <p className="relative z-10 text-black">{proj.desc}</p>
          </div>

          {proj.link ? (
            <div className="box-end">
              <div className="w-1/2 bg-gradient-to-r from-gray-800 to-gray-700 p-4">
                <div className="box-between mb-2">
                  <div className="box-equal gap-4">
                    <GoDotFill
                      size={20}
                      className="animate-pulse fill-green-500"
                    />
                    <p className="text-sm font-bold">Live in Production</p>
                  </div>

                  <div className="bg-gray-900 p-1">
                    <CgArrowTopRight />
                  </div>
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold"
                >
                  {proj.link}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

const projects = [
  {
    logo: "/img/projects/bppt.png",
    title: "BPPT Teleconference",
    img: "/img/projects/bppt2.png",
    desc: "BPPT Teleconference is a cutting-edge web application designed to bring seamless virtual meetings to a whole new level, offering an experience akin to industry-leading platforms like Zoom. Developed with a focus on performance and user-friendly design, this application is tailored for efficient and engaging online collaboration. Elevate your remote collaboration experience with BPPT Teleconference, where innovation meets efficiency in the world of virtual meetings.",
    link: "https://meeting.bppt.go.id/",
  },
  {
    logo: "/img/projects/manulife.jpg",
    title: "Reksadana Manulife",
    img: "/img/projects/manulife2.png",
    desc: "Embark on a journey of financial empowerment with the Manulife Mutual Funds Platform—a robust website that redefines the way you approach investments. Crafted for Manulife, a leading financial institution, this platform seamlessly integrates cutting-edge features to provide users with a comprehensive investment experience. Experience financial empowerment like never before with the Manulife Mutual Funds Platform—a testament to innovation and sophistication in the realm of online investment.",
    link: "https://reksadana-manulife.com/",
  },
  {
    logo: "/img/projects/worxspace.png",
    title: "Worxspace",
    img: "/img/projects/worxspace2.png",
    desc: "WorxSpace is the ultimate solution for modern workplace efficiency, offering a seamless platform where teams can effortlessly manage leave requests, engage in real-time chats, schedule meetings, celebrate birthdays, and assign tasks. This versatile tool simplifies internal communication and task coordination, fostering a collaborative and vibrant work environment. WorxSpace is the catalyst for streamlining daily operations, promoting teamwork, and enhancing overall workplace dynamics. WorxSpace is more than a tool; it's a catalyst for enhanced collaboration, efficient task management, and a thriving workplace culture. Elevate your team's experience with WorxSpace and witness the transformation of how work gets done.",
    link: "https://worxspace.id/",
  },
  {
    logo: "/img/projects/parenthood.jpg",
    title: "Parenthood Institute",
    img: "/img/experiences/prima-logo.png",
    desc: "Parenthood Institute, an initiative by Primaku, is dedicated to educating and empowering communities on the essential aspects of child care. This innovative platform goes beyond conventional approaches, offering a comprehensive blend of educational resources, health monitoring tools for children, and engaging events. From informative webinars to interactive quizzes, Parenthood Institute provides a holistic experience for parents, caregivers, and the community at large. Join us in creating a brighter future by embracing knowledge, fostering health, and celebrating the journey of parenthood with exciting incentives and enriching activities.",
  },
  {
    logo: "/img/projects/cdic.jpg",
    title: "CDIC",
    img: "/img/experiences/prima-logo.png",
    desc: "CDIC is a groundbreaking platform facilitating seamless communication between pediatricians and parents, ensuring the optimal health and well-being of every child. This innovative solution goes beyond traditional consultations, offering a space for real-time discussions, diabetes monitoring, therapy scheduling, and the creation of a personalized health diary for each child. With CDIC, the journey of caring for your child's health becomes a collaborative effort, where medical expertise meets the insights of dedicated parents. Embrace a new era of childhood health management with CDIC, fostering a holistic and communicative approach to pediatric care.",
  },
];
