import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
				blue: {
					300: 'hsl(var(--color-blue-300) / <alpha-value>)',
					500: 'hsl(var(--color-blue-500) / <alpha-value>)',
					600: 'hsl(var(--color-blue-600) / <alpha-value>)',
					700: 'hsl(var(--color-blue-700) / <alpha-value>)',
					800: 'hsl(var(--color-blue-800) / <alpha-value>)',
				},
				brown: {
					500: 'hsl(var(--color-brown-500) / <alpha-value>)',
					800: 'hsl(var(--color-brown-800) / <alpha-value>)',
				},
				white: 'hsl(var(--color-white) / <alpha-value>)',
				gray: {
					200: 'hsl(var(--color-gray-200) / <alpha-value>)',
					300: 'hsl(var(--color-gray-300) / <alpha-value>)',
					400: 'hsl(var(--color-gray-400) / <alpha-value>)',
					500: 'hsl(var(--color-gray-500) / <alpha-value>)',
					600: 'hsl(var(--color-gray-600) / <alpha-value>)',
					700: 'hsl(var(--color-gray-700) / <alpha-value>)',
					800: 'hsl(var(--color-gray-800) / <alpha-value>)',
					900: 'hsl(var(--color-gray-900) / <alpha-value>)',
				},
				aqua: {
					400: 'hsl(var(--color-aqua-400) / <alpha-value>)',
					500: 'hsl(var(--color-aqua-500) / <alpha-value>)',
				},
				orange: {
					400: 'hsl(var(--color-orange-400) / <alpha-value>)',
					500: 'hsl(var(--color-orange-500) / <alpha-value>)',
				},
				purple: {
					400: 'hsl(var(--color-purple-400) / <alpha-value>)',
					500: 'hsl(var(--color-purple-500) / <alpha-value>)',
				},
				pink: {
					400: 'hsl(var(--color-pink-400) / <alpha-value>)',
					500: 'hsl(var(--color-pink-500) / <alpha-value>)',
				},
				primary: 'hsl(var(--color-primary) / <alpha-value>)',
				primaryHover: 'hsl(var(--color-primary-hover) / <alpha-value>)',
				secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
				secondaryHover: 'hsl(var(--color-secondary-hover) / <alpha-value>)',
				background: 'hsl(var(--color-background) / <alpha-value>)',
				foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
				success: 'hsl(var(--color-success) / <alpha-value>)',
				warning: 'hsl(var(--color-warning) / <alpha-value>)',
				info: 'hsl(var(--color-info) / <alpha-value>)',
				danger: 'hsl(var(--color-danger) / <alpha-value>)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			spacing: {
				1: 'var(--space-1)',
				2: 'var(--space-2)',
				3: 'var(--space-3)',
				4: 'var(--space-4)',
				5: 'var(--space-5)',
				6: 'var(--space-6)',
				8: 'var(--space-8)',
				10: 'var(--space-10)',
				12: 'var(--space-12)',
				16: 'var(--space-16)',
				20: 'var(--space-20)',
			},
			fontFamily: {
        sans: ["var(--font-sans)"],
      },
			fontSize: {
				xxs: 'var(--font-size-xxs)',
				xs: 'var(--font-size-xs)',
				sm: 'var(--font-size-sm)',
				base: 'var(--font-size-base)',
				lg: 'var(--font-size-lg)',
				xl: 'var(--font-size-xl)',
				'2xl': 'var(--font-size-2xl)',
				'3xl': 'var(--font-size-3xl)',
				'4xl': 'var(--font-size-4xl)',
				'5xl': 'var(--font-size-5xl)',
				'6xl': 'var(--font-size-6xl)',
				hero: 'var(--font-size-hero)',
			},
			fontWeight: {
				light: 'var(--font-weight-light)',
				normal: 'var(--font-weight-normal)',
				semibold: 'var(--font-weight-semibold)',
				bold: 'var(--font-weight-bold)',
				black: 'var(--font-weight-black)',
			},
			lineHeight: {
				light: 'var(--line-height-light)',
				normal: 'var(--line-height-normal)',
				semibold: 'var(--line-height-semibold)',
				bold: 'var(--line-height-bold)',
				black: 'var(--line-height-black)',
			},
			screens: {
				xs: 'var(--breakpoint-xs)',
				sm: 'var(--breakpoint-sm)',
				md: 'var(--breakpoint-md)',
				lg: 'var(--breakpoint-lg)',
				xl: 'var(--breakpoint-xl)',
				'2xl': 'var(--breakpoint-2xl)',
			},
			maxWidth: {
				sm: 'var(--max-width-sm)',
				md: 'var(--max-width-md)',
				lg: 'var(--max-width-lg)',
				xl: 'var(--max-width-xl)',
				'2xl': 'var(--max-width-2xl)',
			},
  	},
  },
    plugins: [tailwindcssAnimate],
}

export default config;
