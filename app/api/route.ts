import axios from "axios";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.url}`);
    const data = await response.json();
    return NextResponse.json(data);
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
