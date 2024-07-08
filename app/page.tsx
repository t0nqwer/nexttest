"use client";
import { useEffect } from "react";
import { cn } from "./lib/cn";
import axios from "axios";

export default function Home() {
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/test");
        console.log(response.data);
      } catch (error: any) {
        console.log(error.data);
      }
    };
    fetchData();
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
