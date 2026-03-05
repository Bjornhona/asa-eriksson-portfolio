import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/dropdown-menu";

interface Option {
  type: string;
  href: string;
  content: string;
}

interface DropdownProps {
  trigger: React.ReactNode;
  options: Option[];
}

const Dropdown = ({ trigger, options }: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/10 text-foreground backdrop-blur-xl
          border border-white/20 shadow-xl rounded-xl">
         {options.map((option: Option) => {
            return (
            <DropdownMenuItem
              onClick={() => window.open(option.href, "_blank")}
              className={`px-2 py-1 rounded hover:bg-white/10 transition-colors`}
              key={option.type}>
                {option.content}
            </DropdownMenuItem>
          )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
