/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111', 
        accent: '#888888',
        pink: '#ff006e',
        'gray-800': '#1f2937',
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'tech': ['Noto Sans', 'Noto Sans KR', 'sans-serif'],
        'primary': ['Noto Sans KR', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        'hero': 'clamp(3rem, 8vw, 8rem)',
        'display': 'clamp(2.5rem, 6vw, 6rem)',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        holographic: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-glow': {
          'from': { 
            boxShadow: '0 0 5px #ff006e, inset 0 0 5px #ff006e' 
          },
          'to': { 
            boxShadow: '0 0 20px #ff006e, 0 0 30px #ff006e, inset 0 0 10px #ff006e' 
          },
        },
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tightest': '-0.1em',
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 
