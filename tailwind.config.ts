
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'dancing': ['Dancing Script', 'cursive'],
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cores românticas aprimoradas
				rose: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
					950: '#500724',
				},
				lilac: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7c3aed',
					800: '#6b21a8',
					900: '#581c87',
					950: '#3b0764',
				},
				burnRed: {
					50: '#fef7f7',
					100: '#feecec',
					200: '#fcdcdc',
					300: '#f9c0c0',
					400: '#f59696',
					500: '#ed6c6c',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				},
				gold: {
					50: '#fffdf7',
					100: '#fffaeb',
					200: '#fef3c7',
					300: '#fde68a',
					400: '#fcd34d',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
					950: '#451a03',
				},
				peach: {
					50: '#fef7f0',
					100: '#feeee0',
					200: '#fdd9b8',
					300: '#fbbf88',
					400: '#f79a56',
					500: '#f47c3c',
					600: '#e55e2b',
					700: '#be4424',
					800: '#973724',
					900: '#7a2e20',
					950: '#42140e',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-8px) rotate(2deg)' },
					'66%': { transform: 'translateY(-4px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(236, 72, 153, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.5)' 
					}
				},
				'slide-up-elegant': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px) scale(0.95)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)' 
					}
				},
				'fade-in-magical': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9) rotateY(15deg)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotateY(0deg)' 
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-gentle': 'float-gentle 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'slide-up-elegant': 'slide-up-elegant 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'fade-in-magical': 'fade-in-magical 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'shimmer': 'shimmer 2s linear infinite',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
