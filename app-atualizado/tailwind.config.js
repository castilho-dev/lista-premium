/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Garante que classes com cores hex (arbitrary values) existam no build.
  // Isso evita “texto branco em fundo branco” quando o JIT não detecta alguma classe.
  safelist: [
    'bg-[#B88A56]',
    'hover:bg-[#A07641]',
    'from-[#EADBC5]',
    'to-[#C9A679]',
    'text-[#8C5E33]',
    'hover:border-[#B88A56]/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
