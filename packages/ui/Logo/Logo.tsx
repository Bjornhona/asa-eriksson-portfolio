import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  logoSrc: string;
  logoLink?: string;
  logoDarkModeSrc?: string;
  logoAlt?: string;
}

const Logo = ({ logoSrc, logoLink = "#", logoDarkModeSrc, logoAlt }: LogoProps) => {
  return (
    <Link href={logoLink} className="flex ml-[-10px]">
      {/* Logo for dark mode */}
      {logoDarkModeSrc && <Image
        className="hidden dark:block p-2"
        src={logoDarkModeSrc}
        alt={logoAlt || "Logo"}
        width={40}
        height={40}
        priority
      />}
      {/* Logo for light mode */}
      <Image
        className="block dark:hidden p-2"
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
