# README #

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Naming Convention (BEM Documentation)
* Section class names should be in kebab cases if not in small cases. 
* Parent element classes(Block) if required, are to have class names in kebab cases. E.g home-section.
* Sub element classes(Element) used under a parent element are to reference the parent class. E.g 
     - feature-card (Block)
     - feature-card__element  (Element)
     - card__element--nav (Modifier)

### Folder Structuring
* All folder names should be in plural. E.g assets, components
* All component names should be singular. E.g App.vue, Header.vue
* Style files (sass) should be named with an underscore preceding them. E.g _mixins.scss, _variables.scss
* All folders are named in lower cases, and should there be a need for combining separate words, the kebab case should be used. E.g features, assets, health-check
* Pascalcase is used in the naming of individual vue files. E.g HeroSection.vue, StaticHero.vue, Header.vue
* Html files are to be named with snake cases. E.g sub30_toc.html
* Javascript files are to be named in lower cases. E.g babel.config.js
* Json files are to be written in lower cases.
* Image files are to be in lower cases preferably kebab cases. E.g hero-image-1.png, heroimage2x.png, tools.svg

