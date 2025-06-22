import clsx from "clsx";
import { BuyMeCoffee } from "../tailwindcss/style";
import { FaCoffee } from "react-icons/fa";

export default function BuyMeACoffee() {
  return (
    <div className="flex justify-center py-6">
      <a
        href="https://www.buymeacoffee.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(BuyMeCoffee.constainer)}
      >
        <FaCoffee className="text-xl" />
        Buy me a coffee
      </a>
    </div>
  );
}
