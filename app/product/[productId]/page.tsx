import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";
import ListRating from "./ListRating";

interface IPrams {
  productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
  console.log(params);
  const product = products.find((item) => 
    item.id === params.productId
  );
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
