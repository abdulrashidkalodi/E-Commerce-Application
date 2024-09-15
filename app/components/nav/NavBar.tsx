import Link from "next/link";
import { Redressed } from "next/font/google";
import Container from "../Container";
import CartCount from "./CartCount";
const Redresse = Redressed({ subsets: ["latin"], weight: ["400"] });
const NavBar = () => {
  return (
    <div
      className="sticky top-0
    w-full bg-slate-200 z-30 shadow-sm "
    >
      <div className="py-4 border-b-[1px] ">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link
              href={"/"}
              className={`${Redresse.className} font-bold text-2xl`}
            >
              {" "}
              eshopi{" "}
            </Link>
            <div className="hidden md:block">seach</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount/>
              <div>user menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
