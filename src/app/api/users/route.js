import { prisma } from "@/libs/prismaClient";
export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const loginId = searchParams.get("loginId");
    if (loginId) {
        const user = await prisma.user.findUnique({
            where: {
                libId: loginId,
            },
        });
        return new Response(JSON.stringify(user), { status: 200 });
    } else {
        return new Response(JSON.stringify({ message: "user not found" }), {
            status: 404,
        });
    }
}
