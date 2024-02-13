

export async function POST(req: Request) {
  console.log(req.body);
  return new Response('Hello, Next.js!')
}
