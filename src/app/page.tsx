import Image from "next/image";
import PiButton from "./pibutton";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black p-12">
      <div className="w-5xl  min-w-xl h-1/2 bg-amber-600 flex items-center justify-center rounded-2xl">
        <PiButton />
      </div>
    </div>
  );
}
