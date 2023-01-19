module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [
    'tailwindcss',
    'autoprefixer',
    ['cssnano', { preset: 'default'}],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: [
          './src/pages/**/*.{ts,tsx}',
          './src/components/**/*.{ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'postcss-preset-env',
  ] : [
    'tailwindcss',
    'postcss-preset-env'
  ],
}
