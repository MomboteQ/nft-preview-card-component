/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                bg: 'hsl(217, 54%, 11%)',
                cardBg: 'hsl(216, 50%, 16%)',
                gray: '#8BACD9',
                white: 'hsl(0, 0%, 100%)',
                blue: 'hsl(215, 51%, 70%)',
                cyan: 'hsl(178, 100%, 50%)',
                line: 'hsl(215, 32%, 27%)',
            },
        },
    },
    plugins: [],
};
