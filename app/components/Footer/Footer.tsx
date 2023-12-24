import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className=" flex flex-col md:flex-row justyfy-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">shop categories</h3>
            <Link href="#">Phones </Link>
            <Link href="#">laptoop </Link>
            <Link href="#">desktop </Link>
            <Link href="#">watches </Link>
            <Link href="#">tvs </Link>
            <Link href="#">accossories </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Coustomer service</h3>
            <Link href="#">contactus </Link>
            <Link href="#">shiping policies </Link>
            <Link href="#">return exchange </Link>
            <Link href="#">faq </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">shop categories</h3>
            <Link href="#">Phones </Link>
            <Link href="#">laptoop </Link>
            <Link href="#">desktop </Link>
            <Link href="#">watches </Link>
            <Link href="#">tvs </Link>
            <Link href="#">accossories </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">shop categories</h3>
            <Link href="#">Phones </Link>
            <Link href="#">laptoop </Link>
            <Link href="#">desktop </Link>
            <Link href="#">watches </Link>
            <Link href="#">tvs </Link>
            <Link href="#">accossories </Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
