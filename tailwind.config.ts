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
  			brand: 'hsl(var(--brand))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				1: 'hsl(var(--chart-1))',
  				2: 'hsl(var(--chart-2))',
  				3: 'hsl(var(--chart-3))',
  				4: 'hsl(var(--chart-4))',
  				5: 'hsl(var(--chart-5))'
  			}
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
  	}
  },
    plugins: [tailwindcssAnimate],
}

export default config;
