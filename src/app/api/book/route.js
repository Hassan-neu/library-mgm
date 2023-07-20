import { prisma } from "@/libs/prismaClient";
export async function POST(req) {
    try {
        const body = await req.formData();
        const title = body.get("title");
        const author = body.get("author");
        const field = body.get("field");
        const image = body.get("image");
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
                field,
                image: cloudImage.securl_url,
                copies: 30,
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
