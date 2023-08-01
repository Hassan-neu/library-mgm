import { prisma } from "@/libs/prismaClient";
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const libId = searchParams.get("loginId");
    if (libId) {
        const user = await prisma.user.findUnique({
            where: {
                libId,
            },
            include: {
                loans: true,
                visits: true,
            },
        });
        return new Response(JSON.stringify(user), { status: 200 });
    } else {
        return new Response(
            JSON.stringify({ message: "user not found", error }),
            {
                status: 404,
            }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const {
                firstName,
                lastName,
                level,
                faculty,
                department,
                libId,
                role,
            } = body;
            const user = await prisma.user.createMany({
                data: {
                    firstName,
                    lastName,
                    level,
                    faculty,
                    department,
                    libId,
                    role,
                },
            });
            return new Response(JSON.stringify(user), { status: 201 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "action can not be completed", error }),
            { status: 400 }
        );
    }
}
