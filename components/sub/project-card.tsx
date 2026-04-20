import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full bg-[#0300145e] flex flex-col"
    >
      <div className="relative w-full aspect-[16/10] bg-[#0b0620]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="relative p-3">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
