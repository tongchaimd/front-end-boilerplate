# Front-End Boilerplate
## Instructions

After you get this project into your local directory and cd into the project...
```
npm install

# start a development server
npm start

# build
npm run build
```

## Basic Overview
### Packages
- [__Babel__](https://babeljs.io/)

  makes final javascript runnable on any browser, basically.
- [__Webpack__](https://webpack.js.org/)
  
  is responsible for putting everything together. Starting with the entry(src/index.js), collecting all the dependencies and spitting out to dist/.
- [**html-webpack-plugin**](https://webpack.js.org/plugins/html-webpack-plugin/)
  
  generates dist/index.html.
### Files & Directories
- __README.md__
  
  is responsible for this text you're reading.
- __package.json__
  
  manages npm packages and scripts(e.g. npm start).
  
- __package-lock.json__

  is generated when installing or changing npm packages(e.g. npm install). It keeps track of versions and dependencies of the installed packages.
- __webpack.config.js__

  is Webpack's configuration file.
- __src/__
  
  holds (almost) all the content of the application.
- __dist/__
  
  is generated by Webpack. It holds end products of the application.
