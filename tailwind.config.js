/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF5F7',
          100: '#FFE8EC',
          200: '#F4C2C2',
          300: '#E8B4B8',
          400: '#D4908F',
          500: '#C27070',
          600: '#A85555',
          700: '#8B3A3A',
          800: '#6E2525',
          900: '#511414',
        },
        gold: {
          50: '#FDF8ED',
          100: '#F9EDCC',
          200: '#F0D99A',
          300: '#E4C36A',
          400: '#D4AF37',
          500: '#C9A877',
          600: '#B08D4A',
          700: '#8E6E30',
          800: '#6B5122',
          900: '#4A3617',
        },
        cream: {
          50: '#FDFCFA',
          100: '#FAF9F6',
          200: '#F5F1ED',
          300: '#EBE5DE',
          400: '#D9CFC3',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
