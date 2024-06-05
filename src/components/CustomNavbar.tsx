import { Image } from "@nextui-org/react";

export default function CustomNavbar() {
  return (
    <div className="box-between fixed inset-x-0 top-0 z-20 bg-gray-900 p-4">
      <Image src="/img/sidebar/profile.jpg" alt="Profile" width={30} />
    </div>
  );
}
