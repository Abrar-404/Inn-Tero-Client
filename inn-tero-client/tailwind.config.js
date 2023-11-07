module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lovely: ['Lovelyn', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Shadows Into Light', 'cursive'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
};
