import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products } from "@/utils/products";
import trucateText from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard data={product}/>
          })}
        </div>
      </Container>
    </div>
  );
}
