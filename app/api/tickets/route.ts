import { NextResponse } from "next/server";

// next GET route handlers are static by default
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

export async function POST(req: Request) {
  const ticket = await req.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json()
  return NextResponse.json(newTicket, {
    status: 201,
  })
}
