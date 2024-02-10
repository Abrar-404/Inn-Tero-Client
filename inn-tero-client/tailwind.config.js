module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        lovely: ['Lovelyn', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Satisfy', 'cursive'],
        script: ['Dancing Script', 'cursive'],
        carattere: ['Carattere', 'cursive'],
        cardo: ['Cardo', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
