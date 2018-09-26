module.exports = {
  plugins: [
    require('postcss-conditionals')(),
    require('postcss-simple-vars')(),  //https://www.npmjs.com/package/postcss-simple-vars
    require('postcss-each')(),
    require('postcss-for')(),
    require('postcss-mixins')(),
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-atroot')(),
    require('cssnext')({
      features: {rem: false}
    }),
    require('postcss-extend')()
  ]
}