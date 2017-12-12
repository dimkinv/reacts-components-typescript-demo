module.exports = {
    webpackConfig: {
        module: {
            rules: [
              // Babel loader, will use your project’s .babelrc
              {
                test: /\.tsx?$/,
                exclude: [/node_modules/, /lib/],
                loader: 'awesome-typescript-loader'
              },
              // Other loaders that are needed for your components
              {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
              }
            ]
          }
    },
    components: 'components/**/[A-Z]*.tsx',
    propsParser: require('react-docgen-typescript').parse,    
    ignore: ['**/__tests__/**', '**/*.test.js', '**/*.test.jsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.test.tsx']
  }