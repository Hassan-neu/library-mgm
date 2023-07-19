import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { title, author, field, image } = body;
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    field,
                    image,
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
