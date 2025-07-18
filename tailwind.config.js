// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Base colors (dark mode by default)
        primary: "#0F0D1A",   // deepest dark background
        secondary: "#6041B3", // royal purple (buttons, cards)
        accent: "#A191C9",    // soft lavender (borders, icons)
        highlight: "#4212D4", // vivid indigo (CTAs, hover)
        light: "#E5E7EB",     // light text on dark backgrounds
        
        // Background variants
        bg: {
          primary: "#0F0D1A",   // main background
          secondary: "#141221", // slightly lighter sections
          card: "#1A1829",      // card backgrounds
          elevated: "#2D2B3E",  // elevated elements
        },
        
        // Text colors for dark mode
        text: {
          primary: "#E5E7EB",   // main text
          secondary: "#9CA3AF", // muted text
          accent: "#A191C9",    // accent text
          inverse: "#141221",   // dark text on light backgrounds
        },
        
        // Dream-themed palette
        dream: {
          50: "#faf7ff",   // lightest dream mist
          100: "#f4edff",  // soft dream cloud
          200: "#e9d5ff",  // gentle dream haze
          300: "#d4b4ff",  // floating dream
          400: "#b885ff",  // vivid dream
          500: "#9f5aff",  // core dream purple
          600: "#8b3aff",  // deep dream
          700: "#7a2ccc",  // dream shadow
          800: "#6526a3",  // dream depth
          900: "#4a1d7a",  // dream abyss
        },
        
        // Emotion analysis colors
        emotion: {
          joy: "#FFD700",      // golden happiness
          calm: "#87CEEB",     // peaceful blue
          fear: "#8B0000",     // dark red
          sad: "#4682B4",      // melancholy blue
          anger: "#FF4500",    // fiery orange
          surprise: "#FF69B4", // shocking pink
          neutral: "#A191C9",  // soft lavender
        },
        
        // Status colors
        success: "#10B981",   // green for successful analysis
        warning: "#F59E0B",   // amber for warnings
        error: "#EF4444",     // red for errors
        info: "#3B82F6",      // blue for information
        
        // Light mode variants (for occasional light elements)
        light: {
          bg: "#FFFFFF",      // white backgrounds
          card: "#F9FAFB",    // light card backgrounds
          border: "#E5E7EB",  // light borders
          text: "#1F2937",    // dark text on light
          muted: "#6B7280",   // muted text on light
        }
      },
      
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "monospace"],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      boxShadow: {
        'dream': '0 4px 14px 0 rgba(96, 65, 179, 0.15)',
        'dream-lg': '0 10px 25px 0 rgba(96, 65, 179, 0.2)',
        'glow': '0 0 20px rgba(161, 145, 201, 0.3)',
        'glow-lg': '0 0 40px rgba(161, 145, 201, 0.4)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(161, 145, 201, 0.1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'dream-wave': 'dreamWave 4s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(161, 145, 201, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(161, 145, 201, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        dreamWave: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(1deg) scale(1.02)' },
          '75%': { transform: 'rotate(-1deg) scale(0.98)' },
        },
      },
      
      backdropBlur: {
        'xs': '2px',
      },
      
      // Custom gradients
      backgroundImage: {
        'dream-gradient': 'linear-gradient(135deg, #6041B3 0%, #4212D4 100%)',
        'dream-gradient-soft': 'linear-gradient(135deg, #A191C9 0%, #6041B3 100%)',
        'night-gradient': 'linear-gradient(180deg, #0F0D1A 0%, #141221 100%)',
        'aurora': 'linear-gradient(90deg, #6041B3, #4212D4, #A191C9, #6041B3)',
        'card-gradient': 'linear-gradient(145deg, rgba(26, 24, 41, 0.9) 0%, rgba(20, 18, 33, 0.95) 100%)',
      },
      
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    // Add some useful plugins for your dream app
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(26, 24, 41, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(161, 145, 201, 0.2)',
        },
        '.dream-card': {
          background: 'linear-gradient(145deg, rgba(26, 24, 41, 0.8) 0%, rgba(20, 18, 33, 0.9) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(161, 145, 201, 0.2)',
          boxShadow: '0 4px 14px 0 rgba(96, 65, 179, 0.15)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};