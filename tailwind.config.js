export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    colors: {
      primary: {
        grey: {
          200: '#A3D9A5',
        },
        black: '#000000',
      },
      secondary: {
        white: '#F5F5F5',
        black: '#333333',
      },
      destructive: {
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      blue: {
        500: '#3B82F6',
        600: '#2563EB',
      },
      gray: {
        400: '#9CA3AF',
      },
    },
  },
}
export const plugins = []
