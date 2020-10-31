# Takeaway code challenge

## Choices & Reasoning
* **_Why did I choose to use vue 2 over vue 3?_**
    * Vue 2 has been around longer and has a larger active community, making it more likely that, if necessary, I could find help for any (common) issues encountered during development.
    * Most Vue tutorials available online are based on Vue 2. Similarly, tutorials for other libraries such as 'vuex', 'vue-router', 'i18n' are also using Vue 2. 
    * Support for Vue 3 is not there yet (most official tools and libraries are still in beta).
* **_Why did I choose SCSS over CSS?_**
    * SCSS provides support for variables, making it easy to define styling such as colors, borders, fonts etc. just once and reusing it throughout the codebase.
    * The ability to nest rules makes them easier to read and prevents you from having to repeat the same selectors multiple times.
    * The ability to import scss files into each other (and have them eventually be compiled to a CSS file) makes it easier to keep your stylesheets smaller and more modular.
    * The popularity of SCSS makes it very likely that one will be able to  find answers to most (common) issues they might encounter during development. 
* **_Why did I choose to use the vue-router library?_**
    * I needed a way to map views/components to specific urls/paths to be able to provide users with an easy way of navigating within the app.
    * It has official support from Vue.js and has great integration with the official Vue devtools extension.
    * It is popular, well documented and there are plenty of tutorials available for it.
* **_Why did I choose to use the vuex library?_**
    * I needed a centralized way to handle data within the app.
    * Similar to 'vue-router',the 'vuex' library has official support from Vue.js and great integration with Vue devtools.
    * It is popular, well documented and there are plenty of tutorials available for it.
* **_Why did I choose to use axios library over fetch?_**
    * Axios automatically transforms received JSON data while for fetch this is an extra step.
    * Error handling with axios is clearer as HTTP errors end up in the catch block as well (not the case for fetch).
* **_Why did I choose to use the i18n library?_**
    * I needed a way to easily manage the apps' locale and match it to relevant translation files.
    * I needed a way to easily fetch the stored translation values (based on the locale) using a key.
    * While not officially supported by Vue, this library was created by one of the members of the Vue.js core team and is highly popular in the Vue.js community, which means help is likely easy to find if needed.
* **_Why did I split up all the .vue files into separate files?_**
    * I prefer having multiple small files with specific purposes over one large general purpose file.
    * I believe this structure makes it easier to find specific pieces of code and that it can improve the maintainability of the entire codebase.
* **_Why is there no caching in the app?_**  
    * I was unable to find any libraries to easily handle caching in a Vue app and learning how to handle caching myself would have taken more time than was available for this project.
* **_Why is the corporate identity of Takeaway.com not fully present in the app?_**
    
    I attempted to import the CSS of Takeaway.com into the app to ensure that the styling would match that of Takeaway.com and that it would be updated whenever the official styling is updated.

    However, I ran into multiple issues with the fonts used in this CSS, since I did not have permissions to download them, and I also realised that there could potentially be some legal issues if I were to use the official styling of Takeaway.com and publish that in a public project.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

