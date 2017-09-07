# Reaktor Base Extra

## Contains
- Foundation
- jQuery
- React

## Get started

##### 1. Install node - https://nodejs.org/download/release/latest/

##### 2. Install git - https://git-scm.com/download/win

##### 3. Open the command prompt

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

##### 4. Clone project
```bash
Branch master:
git clone https://github.com/KnowitReaktorUX/reaktorbase.git
Branch pure-reaktor-base:
git clone -b pure-reaktor-base https://github.com/KnowitReaktorUX/reaktorbase.git
```

##### 5. Create an .env file in the root with this content
```
BUILD_PATH=build/
MOCK_LAYOUT=app/framework/*
MOCK_PAGES=app/pages/**/*.html
MOCK_COMPONENTS=app/blocks/**/*.html,app/components/**/*.html,app/framework/components/**/*.html
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

##### 6. In the command prompt

Go to the frontend folder by entering the path, for example:
```
cd C:\Episerver\SE_STH_EXP_INERA\Dev\Frontend
```

Enter this to install all node modules:
```
npm install
```

##### 7. In Visual Studio

Go to Tools > Options > Projects and solutions > External web tools and move up the $(PATH) so it becomes in this order:
```
.\node_modules\.bin
$(PATH)
$(DevEnvDir)\Extensions\Microsoft\Web Tools\External
$(DevEnvDir)\Extensions\Microsoft\Web Tools\External\git
```

Then go to the Task Runner Explorer and right click first on the setup task and choose Bindings > Project open, and then do the same with the develop task.

### Restart Visual Studio

Go to the Task Runner Explorer and make sure that the setup and develop task is running.

###### NOTE! If you have a site in the IIS that's also at port 8080 - change the port in the IIS because else it will crash. If you have several projects started at the same time with the gulp task running you need to change the port in the server.js.


##### 8. Other

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


### Tips & tricks

#### Accessibility
There's a task that generates accessibility reports for each mockup in the mockups folder. If you want to view the reports directly in the browser, you have to start the develop task afterwards manually.

#### HTML
The HTML files (partials) are built together to pages with fabricator-assemble. There are a number of handlebar helpers, for example: dummytext {{lipsum 10}} and repeating html {{#times 2}}. More info here -  https://www.npmjs.com/package/fabricator-assemble

###### This partial is named c-example.html
```html
<section class="c-example">
  {{#times 2}}
  <span>{{lipsum 10}}</span>
  {{/times}}   
</section>
```

###### and you place it in a file like this
```html
{{>c-example}}
```

#### Unwanted extra margin
Sometimes you can get an margin above a partial that is embedded in another html file. To get rid of this, you must save the file in a special way. First make a small change in the partial and then in Visual Studio select File > Advanced Save Options and choose Unicode (UTF-8 without signature).

#### SASS
.scss files are created with underscore first, otherwise a new separate .css will be generated. An example of when you may want to do it is for the Episerver html editor - htmlEditor.css.

###### BEM
We recommend you to use BEM – http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

```html
.c-example {}
.c-example__element {}
.c-example--modifier {}
```
