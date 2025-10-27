import AboutImage0 from "@/assets/surtr.gif";
import AboutImage1 from "@/assets/pepe.gif";
import AboutImage2 from "@/assets/amiya.gif";

import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
  type: "A" | "B";
}

export default function About({
  title,
  subTitle,
  description,
  image,
  type,
}: Props) {
  return (
    <div className="flex flex-row justify-center items-center gap-12">
      {type == "B" && (
        <div className="relative w-96 h-96">
          <Image
            src={image}
            alt="About Image 0"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="max-w-2xl">
        <h3 className="text-3xl font-bold text-blue-700 pb-4">{subTitle}</h3>
        <h2 className="text-6xl font-bold pb-6">{title}</h2>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
      {type == "A" && (
        <div className="relative w-96 h-96">
          <Image
            src={image}
            alt="About Image 0"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
