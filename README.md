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

### REACH website Git Workflow
* Master refers to the main branch which contains production-ready code that can be deployed to production.
* Staging refers to a branch which contains code for the upcoming release and it is merged to master.
* Feature refers to branches created from staging; they are used to implement a single task. After completing the task, the feature branch must be merged into staging.
* Release('Applicable mostly to mobile dev') refers to a branch created every iteration (sprints are created for this) from staging, and when a new release is rolled out it’s deployed to the staging server for testing. A stable release is merged first into the master branch and then into staging.
* Hotfix refers to a branch created for handling urgent situations − it allows to quickly fix something in production. This branch uses master as the parent branch and merges into both master and staging.
* Bugfix refers to branches created in case the release requires bug fixes. The parent branch depends on the circumstances: it can be either release or staging.

   - Staging branch merges with the master.
   - Feature branch merges with the staging branch.
   - Hotfix merges with the master and staging branch.
   - Bugfix merges with the staging branch.
   - Master branch displays are merged files to the users i.e (Main branch).

  * E.g 
   - Naming convention for the branches:
   - feature-about/name of task e.g feature-about/components 
   - Feature-faqs/name of task e.g feature-faqs/content
   - Feature-landing-page/name of task e.g feature-landing-page/colour-formatting
   - hotfix-home/name of task e.g hotfix-home/text-align
   - Bugfix-landing-page/name of task e.g bugfix-landing-page/button-click 

