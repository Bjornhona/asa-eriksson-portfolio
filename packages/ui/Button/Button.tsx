import { Button as ButtonComponent, ButtonProps as ButtonComponentProps } from "@/ui/components/button";
import Link from "next/link";

export interface ButtonProps extends ButtonComponentProps {
  href?: string;
  children: React.ReactNode;
}

const Button = ({ href = "#", children, ...props }: ButtonProps) => {  
  return (
    <ButtonComponent
      {...props}
      asChild={!!href}
    >
      {href ? (
        <Link href={href}>{children}</Link>
      ) : (
        children
      )}
    </ButtonComponent>
  );
};

export default Button;
