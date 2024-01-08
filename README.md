# webpack-multiple-css-imports-bug
 Minimal reproduction for bug when importing CSS from multiple pages using html-bundler-webpack-plugin.

html-bundler-webpack-plugin: https://github.com/webdiscus/html-bundler-webpack-plugin

## Steps to reproducte the bug
1. run `npm install` 
2. `npm run build`
3. run `npm start`
4. Open your browser and go to [http://localhost:8080/pages/pageA.html](http://localhost:8080/pages/pageA.html).
5. Both Page A and Page B should be styled (element `Foo` should be blue, and `Bar` should be orange), but only one of them will be.  