import { NextRequest, NextResponse } from "next/server";

import { apiEndpoints } from "@/constant/endpoints";
import { apiServer } from "@/services/api";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code') as string;

    const api = await apiServer();
    const response = await api.get(apiEndpoints.getCode(code));


    return Response.json(response.data);

  } catch (error: any) {

    return Response.json(500, { status: error.response.status });
  }
}
