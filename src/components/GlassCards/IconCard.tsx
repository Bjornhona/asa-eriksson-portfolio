import { Card } from "@/ui";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const IconCard = ({ icon, title, items }: IconCardProps) => {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 dark:bg-white/15 text-aqua-400 dark:text-aqua-400 group-hover:bg-aqua-400/20 dark:group-hover:bg-aqua-400/20 transition-colors duration-300">
          {icon}
        </span>
        <h4 className="font-prompt font-semibold text-lg md:text-xl text-title">
          {title}
        </h4>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm md:text-base text-foreground/90"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aqua-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default IconCard;
