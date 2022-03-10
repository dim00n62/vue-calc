# vue-calc

## Description
See [Demo](https://dim00n62.github.io/vue-calc/)

## Description
What was used to implement this project: Vue, Jest. No extra packages needed because of light mvp.
The only extra package is Jest for testing Calculator logic.
The main idea of the architechture is MVC approach. I wanted to split logic from frontend framework as much as possible.
So, we have only TS class with one public method to handle key press and only one public variable to get display value.
You can easily move to another framework with such approach and Vue here is responsible for "View" in MVC.

What can be improved:
* scss styles (no need for this small MVP)
* add svg icons for exact match with mockup
* handle cases when JS is crazy (e.g. 1,3 + 6,1 ; 22,01 + 33)
* switch label "AC" to "C" when it's needed

## Project setup
```
npm install
```
## Run tests
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
