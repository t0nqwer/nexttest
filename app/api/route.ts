import axios from "axios";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(
      `https://internalapiuat.oic.or.th/APIIIQE3/api/Home/GetNews`,
      {
        method: "POST",
        headers: {
          "IIQE-Key": `${process.env.IIQE_KEY}`,
        },
        body: JSON.stringify({
          lng: "th",
        }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return new Response(JSON.stringify(data), {});
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.response.data,
        message: error.message,
        status: error.response.status,
      },
      { status: error.response.status, statusText: error.message }
    );
  }
}
