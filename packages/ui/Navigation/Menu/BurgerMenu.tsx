import { Menu as MenuIcon } from "lucide-react";

export interface BurgerMenuProps {
  onToggleMenu: () => void;
}

const BurgerMenu = ({ onToggleMenu }: BurgerMenuProps) => {
  return (
    <button
      onClick={onToggleMenu}
      className="p-2 rounded hover:bg-muted/20 transition"
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  );
};

export default BurgerMenu;
