/*
 * This theme uses Laravel Mix
 *
 * Check the documentation at
 * https://laravel-mix.com/
 */

let mix = require('laravel-mix');
require('laravel-mix-purgecss');

// mix.autoload({
// 	jquery: ['$', 'window.jQuery', 'jQuery'],
// });

mix.setPublicPath('dist');

mix
    .js('src/js/main.js', 'dist')
    .sass('src/scss/main.scss', 'dist').options({
        processCssUrls: false
    })
    .purgeCss({
        enabled: true,
        content: [
            "**/*.php",
            "views/**/*.twig",
        ],
        safelist: ['btn', 'bg-primary', /^nav-/],
    })
    .copy('src/img', 'dist/img')
    .copy('src/fonts', 'dist/fonts')

    .browserSync({
        proxy: 'https://foodiesfeed.local/', // https://yoursite.local
        ghostMode: false,
    });

// Add source map and versioning to assets in production environment.
if (mix.inProduction()) {
    mix.sourceMaps().version('images/');
}