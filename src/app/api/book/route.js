import { prisma } from "@/libs/prismaClient";
export async function POST(req) {
    try {
        const body = await req.formData();
        const title = body.get("title");
        const author = body.get("author");
        const genre = body.get("genre");
        const image = body.get("image");
        const copies = body.get("copies");
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "my-uploads");
        const cloudImage = await fetch(
            "https://api.cloudinary.com/v1_1/de9dejbn0/image/upload",
            {
                method: "POST",
                body: formData,
            }
        ).then((res) => res.json());
        const book = await prisma.book.create({
            data: {
                title,
                author,
                genre: genre.split(","),
                image: cloudImage.secure_url,
                copies: parseInt(copies),
            },
        });
        return new Response(JSON.stringify(book), {
            status: 201,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid request body", error }),
            {
                status: 400,
            }
        );
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (id) {
            const book = await prisma.book.findUnique({
                where: {
                    id,
                },
            });
            return new Response(JSON.stringify(book), { status: 200 });
        } else {
            const books = await prisma.book.findMany();
            return new Response(JSON.stringify(books), { status: 200 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Action not completed" }),
            { status: 400 }
        );
    }
}
