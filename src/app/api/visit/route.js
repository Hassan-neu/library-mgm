import { prisma } from "@/libs/prismaClient";

export async function POST(req) {
    try {
        const body = await req.json();
        if (body) {
            const { entry, libId } = body;
            const visit = await prisma.visit.create({
                data: {
                    entry: new Date(entry).toISOString(),
                    libId,
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

export async function PUT(req) {
    try {
        const body = await req.json();
        if (body) {
            const { exit, libId } = body;
            const findVisit = await prisma.visit.findMany({
                where: {
                    libId,
                },
                take: -1,
            });
            const updateVisit = await prisma.visit.update({
                where: {
                    id: findVisit[0].id,
                },
                data: {
                    exit: new Date(exit).toISOString(),
                },
            });
            return new Response(JSON.stringify(updateVisit), { status: 200 });
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Action could not be completed" }, error),
            { status: 400 }
        );
    }
}
