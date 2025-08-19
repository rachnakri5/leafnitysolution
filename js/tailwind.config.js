// assets/js/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'plex-serif': ['IBM Plex Serif', 'serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'shake': 'shake 0.8s ease-in-out',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        }
      }
    }
  }
}