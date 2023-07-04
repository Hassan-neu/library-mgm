/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                myGreen: "#1b4f4a",
                dirtyWhite: "#f8f6f1",
                myOrange: "#f26924",
                myYellow: "#fdb62b",
            },
        },
    },
    plugins: [],
};
