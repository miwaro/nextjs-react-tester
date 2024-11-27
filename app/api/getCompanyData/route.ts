import { NextResponse } from "next/server";

const COMPANY_URL = "https://venefish.enesien.com/api/companies";

export async function GET() {
  try {
    const response = await fetch(COMPANY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch company data: ${response.statusText}`);
    }
    const companies = await response.json();
    return NextResponse.json(companies);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
