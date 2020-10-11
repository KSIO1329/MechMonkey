let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
});
mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');
