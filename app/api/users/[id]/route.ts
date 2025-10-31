import users from "../../db";

export async function GET({ params }: { params: { id: number } }) {
  const user = users.find((user) => user.id === params.id);

  if (!user) {
    return new Response(null, { status: 404 });
  }

  return Response.json(user);
}

export async function PUT(request: Request, context: { params: { id: string } }) {
  const id = parseInt(context.params.id, 10);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return new Response(null, { status: 404 });
  }

  const updatedUser = await request.json();

  const index = users.findIndex((user) => user.id === id);
  users[index] = updatedUser;

  return Response.json(users);
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  const params = context.params;
  const id = parseInt(params.id, 10);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return new Response(null, { status: 404 });
  }

  users.splice(index, 1);

  return new Response(null, { status: 204 });
}