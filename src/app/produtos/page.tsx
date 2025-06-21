import { Header } from "@/components/layouts/header/Header";
import { Clothes } from "@/components/layouts/clothes/clothes";

export default function Home() {
  return (
    <div className="bg-backg" style={{ overflow: 'hidden' }}>
      <Header />
      <Clothes/>
    </div>
  );
}