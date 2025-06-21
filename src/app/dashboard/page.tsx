import Dashboard from "@/components/dashboard/page";
import { konkhmerFont } from "../font.ts";


export default function Home() {
  return (
        <div className={`${konkhmerFont.className}`} style={{ overflow: 'hidden' }}>
              <Dashboard/>
        </div>
  );
}