import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { name, author, field } = body;
            const book = await prisma.book.create({
                data: {
                    name,
                    author,
                    field,
                },
            });
            return new Response(JSON.stringify(book), { status: 201 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid request body" }),
            {
                status: 400,
            }
        );
    }
}
