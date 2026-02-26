"use client";
// import { Globe } from "lucide-react";

type LanguageSelectorProps = {
  languages: string[];
  currentLocale: string;
  onChange: (locale: string) => void;
};

const LanguageSelector = ({ languages, currentLocale, onChange }: LanguageSelectorProps) => {
  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`px-2 py-1 rounded ${
            currentLocale === lang
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
    // <div className="relative">
    //   <select
    //     value={currentLocale}
    //     onChange={(e) => changeLanguage(e.target.value)}
    //     className="bg-transparent border rounded px-2 py-1"
    //   >
    //     {languages.map((lang) => (
    //       <option key={lang} value={lang}>
    //         {lang.toUpperCase()}
    //         {/* <button className="p-2 rounded hover:bg-muted/20 transition" onClick={() => changeLanguage(lang)}>
    //           <Globe className="w-5 h-5" />
    //         </button> */}
    //       </option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default LanguageSelector;
