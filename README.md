# Seed project installation

Scaffold for frontend projects

```bash
git clone https://github.com/thecyclingfarmer/seed-project.git
cd seed-project
bower update
npm install
gulp develop


```

What do we need:
- [ ] What is is this? and why?
  - [ ] how does it work
  - [ ] leverabler & ansvar, ägande
  - [ ] pros & cons
  - [ ] things that isnt implemented yet, test
  - [ ] ideas for the future
- [ ] get started
  - [ ] install: OSX
  - [ ] install: WIN
- mapp & filstruktur
- Code standards, layout ideas, tankesätt

# Kodexempel
## HTML
HTML filerna (partials) byggs ihop till sidor med hjälp av Fabricator och Gulp,
där man även kan ta markdown och handlebars till hjälp.
Vissa handlebars-helpers finns: dummytext(lipsum, antal ord) samt repetera html(times, antal repeteringar).

Denna partial bör heta module-example.html
```html
<div class="module">
  <div class="module module-example">
    {{#times 2}}
    <h3>{{lipsum 10}}</h3>
    {{/times}}  
  </div>  
</div>
```

och kan hämtas in på en sida genom
```html
{{>module-example}}
```
## SCSS
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta itaque architecto voluptas qui, veniam non dolores, voluptatibus, tempore quo aliquam reiciendis autem dolorem voluptate cumque distinctio dolorum nostrum ad cupiditate.
```scss
.module-example {
  padding: 10px;
  .element-button {
    float: left;
    margin-top: 10px; }
  .component-example { margin-top: 10px; }
}
```
## JS
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius asperiores, non. Mollitia reprehenderit sit laudantium dolore sunt distinctio aliquid magnam, voluptatem. Nisi sint voluptate quos officia repudiandae illo, porro aspernatur.
* commonjs
* import, export / modules
* ES6 & ES7 - Babel transform
* Browserify bundle

```js
var foo = bar;
```


-- DEPENDENCIES --
nodejs - 0.12.7
bower
git
gulp

modify config/siteconfig.json
run gulp.


--- INSTALL: OSX ---
...

---INSTALL: WIN ---
...

# Frontendprojektet

## Installation
### OSX
i ett terminalfönster, kolla först att du har node installerat.

```bash
node -v
svar: v.0.12.0 <- får du ett svar som detta så kan du gå vidare, annars behöver du installera node.
```
sen behöver du se till att git, bower & gulp är installerat,
```bash
git --version
svar: git version 2.5.4 (Apple Git-61)

bower -v
svar: 1.7.2

gulp -v
svar: CLI version 3.9.0
      Local version 3.9.0
```
### Windows

## Varför?
Därför

# Ansvar och leverabler
* HTML mockups, mallar och exempel som kan fungera som referens till vyer i webbprojektet.
* CSS, genererade från sass samt modifierade så de kan användas as-is (minifierade, prefixade, etc...)
* JS, "buntade"/"bundlade" filer som på samma sätt som css filerna ska kunna användas as-is.
* Bilder, Fonter,-- Ansvar och leverabler --

## Structure
* Framework
  * Areas
  * Elements
* Pages - to dest.
  * Modules
  * Components

### Elements
Core elements as links, buttons, lists, form elements, etc...
Styling for these is global and located in framework, and is prefixed with element-.
if modifications is needed, changes should probably be made in a component or a module context. Modifier classes such as "button--solid--orange-tangerine", should be made

Elemement används för att styla bas-element såsom länkar, knappar, listor formulär-element, dessa är globala och hittas under framework, kan användas och kontext-modifieras "lokalt" i respektive module eller komponent.
```html
<a href="" class="element-button button--solid--orange-tangerine">Knapp</a>
```
```css
.module-example
  .element-button { margin-top: 10px; }
}
```

### Components
Kan vara en samling av element där samlingen isig anses innehava en logisk och naturlig beståndsdel,
  som skulle kunna återanvändas, men ska inte "bry" sig om sitt kontext.

### Modules
En modul är en samlingsyta eller ett context som ofta har egna element såsom ex titel,
  men kompletteras med komponenter. Modulen har även till ansvar att tilhandage komponenternas kontext.
  * - En komponent bör inte själv inneha marginaler till kringliggande komponenter, det ansvarar modulen för.

### Pages
Sidtyperna är till för att samla moduler och komponenter, kan även fungera som ett kontext för moduler och komponenter.
  * bör bara användas som kontext i specifika fall, där det inte kan lösas i modulerna.
  * Det är sidtyperna som genereras ut till HTML-förlagor.

### Areas
Dessa är en grov uppdelning av layouten, såsom site: header & footer.



## Buildtools
  Gulp


  Structure:
  - Start
  - ...
  - - Divisions
  - - - Programs
  - Statistics...

  TODO:
  Install foundation
  Set up index.html for foundation
  Config files for tasks
  Assemble needs to fetch partials


  Open another terminal to run tests

  ```bash
  gulp test
  ```
