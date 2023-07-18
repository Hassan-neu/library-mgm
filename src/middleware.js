import { withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            if (token) {
                if (req.nextUrl.pathname.includes("/books")) {
                    return token?.role === "ADMIN";
                }

                return token;
            }
        },
    },
});
export const config = {
    matcher: ["/books/:path*", "/check:path*"],
};
