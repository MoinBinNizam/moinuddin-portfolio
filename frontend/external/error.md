[plugin:vite:css] [postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.

C:/TechVelly/TECHVELLY/moin-portfolio/frontend/src/index.css:undefined:null

    at at (C:\TechVelly\TECHVELLY\moin-portfolio\frontend\node_modules\tailwindcss\dist\lib.js:38:1643)
    at LazyResult.runOnRoot (C:\TechVelly\TECHVELLY\moin-portfolio\frontend\node_modules\postcss\lib\lazy-result.js:361:16)
    at LazyResult.runAsync (C:\TechVelly\TECHVELLY\moin-portfolio\frontend\node_modules\postcss\lib\lazy-result.js:290:26)
    at LazyResult.async (C:\TechVelly\TECHVELLY\moin-portfolio\frontend\node_modules\postcss\lib\lazy-result.js:192:30)
    at LazyResult.then (C:\TechVelly\TECHVELLY\moin-portfolio\frontend\node_modules\postcss\lib\lazy-result.js:436:17)