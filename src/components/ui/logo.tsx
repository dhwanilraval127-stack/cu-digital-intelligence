import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "wordmark" | "mark";
  priority?: boolean;
};

export function Logo({
  className = "",
  variant = "wordmark",
  priority = false,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`inline-flex shrink-0 items-center ${className}`}>
        <Image
          src="/images/cu-mark.png"
          alt="CU"
          width={500}
          height={335}
          priority={priority}
          className="h-8 w-auto object-contain sm:h-9"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src="/images/cu-wordmark.png"
        alt="CU Digital Intelligence"
        width={1400}
        height={330}
        priority={priority}
        className="h-auto w-[190px] object-contain sm:w-[225px]"
      />
    </span>
  );
}
