import { Header } from "@/components/layouts/header/Header";
import { Product } from "@/components/layouts/product/product";

export default function Home() {
  return (
    <div className="bg-backg w-screen" style={{ overflow: 'hidden' }}>
        <Header />
        <Product/>
    </div>
  );
}