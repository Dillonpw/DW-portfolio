import { useState } from "react";
import Image from "next/image";
const Dogs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-8 h-[110px]">
      <h3
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fade-in-3 cursor-pointer text-xl opacity-60"
      >
        I&apos;m probably walking my dogs
      </h3>
      <div className="flex flex-row items-center justify-center">
        {isHovered && (
          <Image
            className="rounded-xl border-2 border-neutral-950"
            src="/Ollie-benny.webp"
            width={140}
            height={140}
            alt="my dogs Ollie and Benny"
          ></Image>
        )}
      </div>
    </div>
  );
};
export default Dogs;
