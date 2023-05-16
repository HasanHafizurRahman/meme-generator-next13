import { Anton } from "next/font/google";
import Image from "next/image";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="relative">
        <Image
          src="/disaster-girl.jpg"
          width={1200}
          height={900}
          alt="Disaster girl"
        />
        <div
          className="absolute"
          style={{
            top: 760,
            left: 100,
            width: 1000,
            height: 100,
            border: "2px solid red",
          }}
        >
          <div
            className="text-center text-white text-stroke-white"
            style={{ lineHeight: "1.1", fontSize: 100 }}
          >
            Really
          </div>
        </div>
      </div>
    </main>
  );
}
