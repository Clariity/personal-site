import Image from "next/image";

// https://www.svgrepo.com/vectors/

type ImageWithLabelProps = {
  label: string;
};

export function ImageWithLabel({ label }: ImageWithLabelProps) {
  return (
    <div className="flex flex-col gap-2 justify-center">
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
