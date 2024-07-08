import Image from "next/image";
import { cn } from "./lib/cn";

export default function Home() {
  const isTrue = true;
  return (
    <div
      className={cn("w-10 ", "w-5", {
        "w-1": isTrue,
      })}
    ></div>
  );
}
