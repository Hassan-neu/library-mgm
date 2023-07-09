import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { bookDetails, dueDate, studentId } = body;
            const loan = await prisma.loan.create({
                data: {
                    bookDetails,
                    dueDate,
                    studentId,
                },
            });
            return new Response(JSON.stringify(loan), { status: 201 });
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
