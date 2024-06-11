import { useState } from "react";
import Image from "next/image";
const Dogs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[110px] mb-10">
      <h3
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fade-in-2 px-5 text-2xl opacity-60 cursor-pointer"
      >
        I&apos;m probably walking my dogs
      </h3>
      <div className="flex flex-row items-center justify-center">
        {isHovered && (
          <Image
            className="rounded-xl"
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
