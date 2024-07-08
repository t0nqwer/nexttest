import axios from "axios";
import { log } from "console";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const maxDuration = 20;
// export const runtime = "edge";
export async function GET(request: Request) {
  console.info("adkmaks");

  const response = await fetch(`${process.env.IIQE_URL}/api/Home/GetNews`, {
    method: "POST",
    headers: {
      "IIQE-Key": "pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp",
    },
    body: JSON.stringify({
      lng: "th",
    }),
  }).catch((error) => {
    console.error(error);
    return NextResponse.json(
      {
        error: error.response.data,
        message: error.message,
        status: error.response.status,
      },
      { status: error.response.status, statusText: error.message }
    );
  });
  const res = await axios.post(
    "https://internalapiuat.oic.or.th/APIIIQE3/api/Home/GetNews",
    {
      lng: "th",
    },
    {}
  );

  const fefe = await fetch("https://dummyapi.online/api/movies");

  console.info(fefe);
  console.info(res);

  console.info(response);
  try {
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
