import { getNewsBoards } from "@/lib/news/service";

export const dynamic = "force-dynamic";

export async function GET() {
  const boards = await getNewsBoards();

  return Response.json(
    {
      boards,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "s-maxage=180, stale-while-revalidate=60",
      },
    },
  );
}
