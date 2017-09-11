# Reaktor Base

## Get started

### 1. Install node - https://nodejs.org/download/release/latest/

### 2. Install git - https://git-scm.com/download/win

### 3. Open the command prompt

Verify that node was installed by specifying:
```
node -v
```

Verify that git was installed by specifying:
```
git --version
```

Install gulp by specifying:
```
npm install -g gulp
```

Verify that gulp was installed by specifying:
```
gulp -v
```

### 4. Clone project
```bash
git clone https://github.com/KnowitReaktorUX/reaktorbase.git
```

### 5. Create an .env file in the root with this content
```
BUILD_PATH=build/
MOCK_LAYOUT=app/framework/*
MOCK_PAGES=app/pages/**/*.html
MOCK_COMPONENTS=app/components/**/*.html,app/framework/components/**/*.html
MOCK_IMAGES=app/framework/images/
MOCK_FONTS=app/framework/fonts/
```

If it's a frontend project to be built into the web project, change BUILD_PATH and ROOT_PATH to fit your project.
```
BUILD_PATH=../WEB-PROJECT-NAME-HERE/Static/build/
ROOT_PATH=../WEB-PROJECT-NAME-HERE/
MOCK_LAYOUT=app/framework/*
MOCK_PAGES=app/pages/**/*.html
MOCK_COMPONENTS=app/components/**/*.html,app/framework/components/**/*.html
MOCK_IMAGES=app/framework/images/
MOCK_FONTS=app/framework/fonts/
```

### 6. In the command prompt

Go to the frontend folder by entering the path, for example:
```
cd C:\Episerver\SE_STH_EXP_INERA\Dev\Frontend
```

Enter this to install all node modules:
```
npm install
```

### 7. In Visual Studio

Go to Tools > Options > Projects and solutions > External web tools and move up the $(PATH) so it becomes in this order:
```
.\node_modules\.bin
$(PATH)
$(DevEnvDir)\Extensions\Microsoft\Web Tools\External
$(DevEnvDir)\Extensions\Microsoft\Web Tools\External\git
```

Then go to the Task Runner Explorer and right click first on the setup task and choose Bindings > Project open, and then do the same with the develop task.

##### Restart Visual Studio

Go to the Task Runner Explorer and make sure that the setup and develop task is running.

###### NOTE! If you have a site in the IIS that's also at port 8080 - change the port in the IIS because else it will crash. If you have several projects started at the same time with the gulp task running you need to change the port in the server.js.

## Tips & tricks

### Installing new node modules

Remember to add --save-dev when you install a new node module. Else it will only be installed locally on your computer. For example:
```
npm install jquery --save-dev
```

### Eslint

Default config is "extends": "airbnb" with support for React and JSX, see .eslintrc
If your are not using React you can change to "extends": "airbnb-base"
https://www.npmjs.com/package/eslint-config-airbnb  
https://www.npmjs.com/package/eslint-config-airbnb-base  
https://github.com/airbnb/javascript

### Accessibility
There's a task that generates accessibility reports, for each mockup, in the build folder. If you want to view the reports directly in the browser, you have to start the develop task manually afterwards. You can configure the accessibility.js if you want. You can change the level – WCAG2A, WCAG2AA or WCAG2AAA. Default it's set to report notices, warnings and errors, but you can choose to turn off any of them by typing for example: notice: false.
###### You can also make a report directly on a live web site by adding forceUrls and urls. If you have this on you cannot get reports on your mockups at the same time.
```
forceUrls: true,
urls: [
    'http://www.knowit.se'
]
```

### Manifest file
Manifest file is used to add id to the main css and script files so that they are not cached when making a deploy. It also creates a rev-manifest.json in the build folder so that backend can get the updated file name with id number. Make sure that backend fixes so that they can read the rev-manifest.json when you enable this, otherwise you will get longer loading times. To activate this feature you just uncomment the line below in the build.js file.
```
.then(manifestfile);
```

### HTML
The HTML files (partials) are built together to pages with fabricator-assemble. There are a number of handlebar helpers, for example: dummytext {{lipsum 10}} and repeating html {{#times 2}}. More info here -  https://www.npmjs.com/package/fabricator-assemble

###### This partial is named c-example.html
```html
<section class="c-example">
  {{#times 2}}
  <span>{{lipsum 10}}</span>
  {{/times}}   
</section>
```

###### and you place it in a file like this:
```html
{{>c-example}}
```

###### More handlebar helpers:
```html
{{#times 1}}
{{/times}}

{{lipsum 1}}

{{lipsumtitle}}

{{cat}}

{{claude}}

{{addClasses "page-article" page-name}}

{{#if_eq page-name 'page-local-contact'}}
{{else}}
{{/if_eq}}

{{{showSubmenus has-submenu}}}

{{#ifCond var1 '==' var2}}, {{#ifCond var1 '!=' var2}} etc.

{{>myPartial id=(concat "foo" myVar myOtherVar)}}
```

### Unwanted extra margin
Sometimes you can get an margin above a partial that is embedded in another html file. To get rid of this, you must save the file in a special way. First make a small change in the partial and then in Visual Studio select File > Advanced Save Options and choose Unicode (UTF-8 without signature).

### SASS
.scss files are created with underscore first, otherwise a new separate .css will be generated. An example of when you may want to do it is for the Episerver html editor - htmlEditor.css.

###### BEM
We recommend you to use BEM – http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

```html
.c-example {}
.c-example__element {}
.c-example--modifier {}
```
