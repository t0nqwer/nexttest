"use client";
import { useEffect } from "react";
import { cn } from "./lib/cn";

export default function Home() {
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  useEffect(() => {
    fetcher("/api").then((data) => {
      console.log(data);
    });
  }, []);

  const isTrue = true;
  return (
    <div
      className={cn("w-10 ", "w-5", {
        "w-1": isTrue,
      })}
    ></div>
  );
}
