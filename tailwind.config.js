/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#3B82F6',
        soft: '#F9FAFB',
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          800: '#0f1424',
          700: '#161c30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59, 130, 246, 0.55)',
        card: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'mesh-grad':
          'radial-gradient(at 20% 20%, rgba(59,130,246,0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(168,85,247,0.18) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(14,165,233,0.22) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(99,102,241,0.18) 0px, transparent 50%)',
      },
      animation: {
        'gradient-shift': 'gradientShift 18s ease infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
