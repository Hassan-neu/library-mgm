import { prisma } from "@/libs/prismaClient";
export async function GET(req) {
    const user = await prisma.user.findMany();
    return new Response(JSON.stringify(user), { status: 200 });
}
