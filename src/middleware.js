// import { withAuth } from "next-auth/middleware";
export { default } from "next-auth/middleware";

// export default withAuth({
//     callbacks:{
//         authorized({req,token}){

//         }
//     }
// })
export const config = {
    matcher: ["/books/:path*", "/check:path*"],
};
