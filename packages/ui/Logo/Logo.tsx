import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  logoSrc: string;
  logoLink?: string;
  logoDarkModeSrc?: string;
  logoAlt?: string;
}

const Logo = ({ logoSrc, logoLink = "/", logoDarkModeSrc, logoAlt }: LogoProps) => {
  return (
    <Link href={logoLink} className="flex">
      {/* Logo for dark mode */}
      {logoDarkModeSrc && <Image
        className="hidden dark:block"
        src={logoDarkModeSrc}
        alt={logoAlt || "Logo"}
        width={40}
        height={40}
        priority
      />}
      {/* Logo for light mode */}
      <Image
        className="block dark:hidden"
        src={logoSrc}
        alt={logoAlt || "Logo"}
        width={40}
        height={40}
        priority
      />
    </Link>
  );
};

export default Logo;
