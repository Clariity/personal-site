import Image from "next/image";

// https://www.svgrepo.com/vectors/

type ImageWithLabelProps = {
  label: string;
};

export function ImageWithLabel({ label }: ImageWithLabelProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-10 sm:w-16 mx-auto">
      <Image
        src={`/icons/${label.toLowerCase()}.svg`}
        alt={label}
        width={64}
        height={64}
      />
      {label}
    </div>
  );
}
