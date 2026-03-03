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
          50: '#FFF0F5',
          100: '#FFE0EC',
          200: '#FEC4DA',
          300: '#F99FC4',
          400: '#ED5A8F',
          500: '#D5004D',
          600: '#B80042',
          700: '#9B0038',
          800: '#7D002E',
          900: '#5C0022',
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
