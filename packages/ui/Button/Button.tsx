import { useMemo } from "react";
import { Button as ButtonComponent } from "@/ui/components/button";

// type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
// type ButtonNativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// interface BaseProps {
//   variant?: "glass" | "outline" | "default"
//   children: React.ReactNode
//   className?: string
// }

// type ButtonProps =
//   | (BaseProps & AnchorProps & { href: string })
//   | (BaseProps & ButtonNativeProps & { href?: undefined })

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // href?: string;
  variant?: "glass" | "outline" | "default";
  children: React.ReactNode;
  className?: string;
}

const Button = ({ variant = "default", children, className, ...props }: ButtonProps) => {

  const variantClassName = useMemo(() => {
    switch (variant) {
      case "glass":
        return "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-400/30 hover:scale-105";
      case "outline":
        return "outline";
    }
  }, [variant]);

  // if (href) {
  //   return (
  //     <a
  //       href={href}
  //       className={`${variantClassName} ${className}`}
  //     >
  //       {children}
  //     </a>
  //   )
  // }
  
  return (
  //   <Link
  //   href={href}
  //   className={`${variantClassName} ${className}`}
  //   onMouseEnter={onMouseEnter}
  //   onMouseLeave={onMouseLeave}
  // >
  //   {children}
  // </Link>
    <ButtonComponent
      {...props}
      // href={href}
      variant={"default"}
      className={`${variantClassName} ${className}`}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
