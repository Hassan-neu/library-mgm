import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { entry, studentId } = body;
            const visit = await prisma.visit.create({
                data: {
                    entry,
                    studentId,
                },
            });
            return new Response(JSON.stringify(visit), { status: 201 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid request body" }, error),
            { status: 400 }
        );
    }
}
