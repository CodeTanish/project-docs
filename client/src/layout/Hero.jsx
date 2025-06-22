import clsx from "clsx";
import { Hero } from "../tailwindcss/style";
import TechIconSwitcher from "../components/TechIconSwitcher";
import AnimatedButton from "../components/AnimatedButton";
import BuyMeACoffee from "../components/BuyMeACoffee";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className={clsx(Hero.section)}>
      <div className={clsx(Hero.left)}>
        <h1 className={clsx(Hero.h1)}>
          Smart Documentation <br />
          for Smart Development <br />
          and Learning
        </h1>
        <div className={clsx(Hero.bmc)}>
          <Link to="/learn">
            <AnimatedButton label="Start Learning" className={clsx(Hero.btn)}/>
          </Link>

          <BuyMeACoffee />
        </div>
      </div>

      <div className={clsx(Hero.right)}>
        <TechIconSwitcher />
      </div>
    </section>
  );
}
