import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default {
	darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js"
  ],
	theme: {
    	extend: {
    		colors: {
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
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			aurora: 'aurora 60s linear infinite',
    			spotlight: 'spotlight 2s ease .75s 1 forwards',
    			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
    			'fade-up': 'fadeUp 0.5s ease-out forwards',
    			'fade-in': 'fadeIn 0.5s ease-out forwards',
    			'glow': 'glow 2s ease-in-out infinite alternate',
    			'flicker': 'flicker 3s linear infinite',
    			'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    		},
    		keyframes: {
    			aurora: {
    				from: {
    					backgroundPosition: '50% 50%, 50% 50%'
    				},
    				to: {
    					backgroundPosition: '350% 50%, 350% 50%'
    				}
    			},
    			spotlight: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate(-72%, -62%) scale(0.5)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translate(-50%,-40%) scale(1)'
    				}
    			},
    			ripple: {
    				'0%, 100%': {
    					transform: 'translate(-50%, -50%) scale(1)'
    				},
    				'50%': {
    					transform: 'translate(-50%, -50%) scale(0.9)'
    				}
    			},
    			fadeUp: {
    				'0%': { transform: 'translateY(10px)', opacity: '0' },
    				'100%': { transform: 'translateY(0)', opacity: '1' },
    			},
    			fadeIn: {
    				'0%': { opacity: '0' },
    				'100%': { opacity: '1' },
    			},
    			glow: {
    				'from': {
    					'text-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0066ff, 0 0 40px #0066ff',
    					'opacity': '0.1'
    				},
    				'to': {
    					'text-shadow': '0 0 20px #fff, 0 0 30px #4d94ff, 0 0 40px #4d94ff, 0 0 50px #4d94ff',
    					'opacity': '0.3'
    				}
    			},
    			flicker: {
    				'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
    					opacity: '0.2',
    					filter: 'none'
    				},
    				'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
    					opacity: '0.1',
    					filter: 'blur(0.5px)'
    				}
    			}
    		}
    	}
    },
  plugins: [require("tailwindcss-animate"),require("@tailwindcss/typography"),addVariablesForColors,nextui()],
} satisfies Config;

