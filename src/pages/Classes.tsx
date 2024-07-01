import { Image } from "@nextui-org/react";

export default function Classes() {
  return (
    <>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xl font-bold">Classes</p>
          <p>
            Unlock the world of programming with our comprehensive coding
            classes.
          </p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid gap-4 md:grid-cols-2">
        <Image src="/img/classes/kelas-js.jpg" alt="Kelas JS" />
        <Image src="/img/classes/kelas-react.jpg" alt="Kelas React" />
        <Image src="/img/classes/kelas-html-css.jpg" alt="Kelas HTML & CSS" />
      </div>
    </>
  );
}
