/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#3B6FE8',
          'blue-deep': '#1E40AF',
          'blue-dark': '#1E3A8A',
          green: '#5DD17B',
          'green-deep': '#2E8B57',
          purple: '#9572E8',
          'purple-deep': '#5C36AE',
          teal: '#22D3BD',
          'teal-deep': '#0F9E8F',
          gold: '#FFD66B',
          'gold-deep': '#D9A327',
          orange: '#F8A93D',
          'orange-deep': '#E5841A',
          pink: '#D86A91',
          'pink-deep': '#B84770',
          red: '#ED5E5E',
          'red-deep': '#B92E2E',
          ink: '#0F1A36',
          'ink-2': '#3D4356',
          muted: '#8A8F9E',
        },
      },
      animation: {
        'shine-sweep': 'shineSweep 4s ease-in-out infinite',
        'float-license': 'floatLicense 5.5s ease-in-out infinite',
        'pulse-stamp': 'pulseStamp 2s ease-in-out infinite',
        'btn-jump': 'btnJump 2.5s ease-in-out infinite',
        'btn-shine': 'btnShine 3s ease-in-out infinite',
        'motto-shine': 'mottoShine 3s linear infinite',
        'motto-pulse': 'mottoPulse 2.5s ease-in-out infinite',
        'typing-dot': 'typingDot 1.4s ease-in-out infinite',
        'flag-wave': 'flagWave 3s ease-in-out infinite',
      },
      keyframes: {
        shineSweep: {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-12deg)', opacity: '0' },
          '30%': { opacity: '1' },
          '60%': { transform: 'translateX(300%) skewX(-12deg)', opacity: '0' },
        },
        floatLicense: {
          '0%, 100%': { transform: 'perspective(1400px) rotateY(-16deg) rotateX(7deg) translateY(0)' },
          '50%': { transform: 'perspective(1400px) rotateY(-11deg) rotateX(4deg) translateY(-14px)' },
        },
        pulseStamp: {
          '0%, 100%': { transform: 'rotate(8deg) scale(1)' },
          '50%': { transform: 'rotate(8deg) scale(1.05)' },
        },
        btnJump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        btnShine: {
          '0%, 100%': { transform: 'translateX(-100%) skewX(-20deg)' },
          '50%': { transform: 'translateX(300%) skewX(-20deg)' },
        },
        mottoShine: {
          '0%, 100%': { backgroundPosition: '-100% center' },
          '50%': { backgroundPosition: '200% center' },
        },
        mottoPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,217,107,0.4)' },
          '50%': { boxShadow: '0 0 20px 6px rgba(255,217,107,0.3)' },
        },
        typingDot: {
          '0%, 60%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '30%': { opacity: '1', transform: 'translateY(-3px)' },
        },
        flagWave: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
