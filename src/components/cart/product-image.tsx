import Image from "next/image";
import { cn } from "~/lib/utils";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  priority?: boolean;
};

export const ProductImage = ({ src, alt, className, priority }: Props) => {
  return (
    <Image
      src={src ?? "/placeholder-img.jpg"}
      alt={alt}
      width={512}
      height={512}
      quality={100}
      className={cn("h-full w-full object-cover object-center", className)}
      priority={priority}
    />
  );
};
