# vue2-webpack-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Serve locally
In order to do this I would recommend do install the http-server package

Step 1) Build the project
```
npm run build
```

Step 2) Gzip your files (for the sake of the demo it is just gzipping the .js files)
```
npm run gzip
```

Step 3) Navigate to your dist folder and serve the files with the gzip option
```
http-server -g
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
