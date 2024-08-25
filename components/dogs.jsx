import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Dogs = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <h4 className="fade-in-3 cursor-pointer text-xl opacity-60">
              I&apos;m probably walking my dogs
            </h4>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="flex flex-row items-center justify-center"
          >
            <Image
              className="rounded-md border-none"
              src="/Ollie-benny.webp"
              width={160}
              height={160}
              alt="my dogs Ollie and Benny"
            ></Image>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
export default Dogs;
