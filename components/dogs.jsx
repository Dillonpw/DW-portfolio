import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Dogs = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <h4 className="fade-in-3 cursor-pointer text-xl opacity-60">
            I&apos;m probably walking my dogs
          </h4>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="border-none bg-transparent p-0"
        >
          <Image
            className="rounded-md" 
            src="/Ollie-benny.webp"
            width={180}
            height={180}
            alt="my dogs Ollie and Benny"
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Dogs;