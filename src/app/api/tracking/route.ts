import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

import { apiServer } from "@/services/api";
import { handleApiRouteError } from '@/services/api/error';
import { apiEndpoints } from "@/constant/endpoints";

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
