# Typescript Demo

Typscript demo for the npm library type-script-webcomponent that allows you to run typescript in the browser.

[Live Demo ⚡️](https://niklus.github.io/typescript-demo/)

Look at the index.html file to learn more, then open up devtools and look at the typescript tag to see the injected Javascript.

If you get an error, try running your code without setting minify to true as shown below.

```html
<type-script src="app.ts" minify="false"></type-script>
```

I'm still searching for a good es6+ compliant minification tool that works in the browser.

I have also noticed, that the component is faster when downloaded locally => npm i type-script-webcomponent.

Test this yourself by using the following script - after running npm install.  

```html
<script type="module" src="node_modules/type-script-webcomponent/dist/type-script-component/type-script-component.esm.js"></script>
```

Get the library [here](https://www.npmjs.com/package/type-script-webcomponent) on npm. Get the latest version 0.0.7 - It's much faster than the previous ones.
