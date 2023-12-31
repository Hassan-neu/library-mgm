import { prisma } from "@/libs/prismaClient";
export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { bookTitle, bookAuthor, dueDate, libId } = body;
            if (bookTitle || bookAuthor || dueDate || libId) {
                return new Response(
                    JSON.stringify({
                        error: true,
                        message: "Required field missing",
                    })
                );
            }
            const createLoan = await prisma.loan.create({
                data: {
                    bookTitle,
                    bookAuthor,
                    dueDate: new Date(dueDate).toISOString(),
                    userId: libId,
                },
            });
            return new Response(JSON.stringify(createLoan), { status: 201 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Invalid request body", error }),
            {
                status: 400,
            }
        );
    }
}
