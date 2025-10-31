import users from "./db";

export async function GET() {
  return Response.json(users);
} 

export async function POST(request: Request) {
  const user = await request.json();

  users.push(user);

  return Response.json({ message: "User added successfully", user });
}