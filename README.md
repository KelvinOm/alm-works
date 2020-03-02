# About application

The JS part of the app consists of from 2 modules and 3 services:
## Modules
1) **loadModule** — initiate load saved notes. 
2) **noteEventModule** — implements the logic of events related to notes: calls the methods add, delete, save notes when necessary and drag and drop events.
## Services
1) **elementNoteService** — service works with Dom elements allows to add and delete notes.
2) **apiNoteService** — implements the logic of working with the BE (mock), allows to add, delete, update and load all saved notes.
3) **lockService** — implements the logic of adding and removing preloader to page.

The CSS part is organized using BEM notation.

# Project structure

```
dist/                        compiled version
src/                         project source code
|- img/                      images
|- js/                       app logic
|  |- modules/               app business logic
|  |- services/              app helper methods
|  |- app.js                 app modules definition
|- sass/                     app styles
|  |- blocks/                abstract styled blocks
|  |- fonts.scss             connection of fonts
|  |- main.scss              global style entry point
|  |- mixins.scss            re-used styles
|  |- scaffolding.scss       app common styles
|  |- variables.scss         scss variables              
|- index.html                html entry point
|- index.js                  global style and js entry point
```

# Link to build

https://kelvinom.github.io/alm-works/dist/

# Main tasks

### Install all packages and dependencies required for this project:

    npm install
    
### Start the development environment (then, navigate to http://localhost:8080):

    npm start
    
### Building files can be done as follows:

    npm run build
    
# TODO
* add tests
* think about how to improve the selection of text with the mouse
* refactoring templates in JS and export to files
* add components
* fix window resize problems 