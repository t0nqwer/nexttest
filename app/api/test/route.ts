import axios from "axios";
import { log } from "console";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  console.info(request, "adkmaks");

  try {
    const response = await fetch(
      `https://internalapiuat.oic.or.th/APIIIQE3/api/Home/GetNews`,
      {
        method: "POST",
        headers: {
          "IIQE-Key": "pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp",
        },
        body: JSON.stringify({
          lng: "th",
        }),
      }
    );

    console.info(response);

    return new Response(JSON.stringify(response), {});
  } catch (error: any) {
    console.error(error);
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
