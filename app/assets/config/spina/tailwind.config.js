module.exports = {
  content: [
    '/opt/homebrew/Cellar/rbenv/1.2.0/versions/3.0.0/lib/ruby/gems/3.0.0/gems/spina-2.14.0/app/views/**/*.*',
'/opt/homebrew/Cellar/rbenv/1.2.0/versions/3.0.0/lib/ruby/gems/3.0.0/gems/spina-2.14.0/app/components/**/*.*',
'/opt/homebrew/Cellar/rbenv/1.2.0/versions/3.0.0/lib/ruby/gems/3.0.0/gems/spina-2.14.0/app/helpers/**/*.*',
'/opt/homebrew/Cellar/rbenv/1.2.0/versions/3.0.0/lib/ruby/gems/3.0.0/gems/spina-2.14.0/app/assets/javascripts/**/*.js',
'/opt/homebrew/Cellar/rbenv/1.2.0/versions/3.0.0/lib/ruby/gems/3.0.0/gems/spina-2.14.0/app/**/application.tailwind.css'
  ],
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography')
  ]
}
