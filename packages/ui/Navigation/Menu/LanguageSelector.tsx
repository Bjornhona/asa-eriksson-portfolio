"use client";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../packages/ui/components/dropdown-menu";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  languages: string[];
  currentLocale: string;
  onChange: (locale: string) => void;
};

const LanguageSelector = ({
  languages,
  currentLocale,
  onChange,
}: LanguageSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn(
            "flex items-center gap-2 px-2 xs:px-3 py-2 xs:py-3 rounded-sm",
            "transition-all duration-300")} aria-label="Language Selector">
          <Globe className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-white/10 text-foreground backdrop-blur-xl
          border border-white/20 shadow-xl rounded-sm">
        {languages.map((lang) => (
          <DropdownMenuItem
            onClick={() => onChange(lang)}
            className={`px-2 py-1 rounded ${
              currentLocale === lang
                ? "bg-white/20"
                : "hover:bg-white/10 transition-colors"
            }`}
            key={lang}>
              {lang.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
