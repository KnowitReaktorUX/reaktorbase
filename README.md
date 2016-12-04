# Getting started

```bash
git clone https://github.com/KnowitReaktorUX/reaktorbase.git .
bower update
npm install
```
# Create .env file
Change paths to fit your project

```bash
BUILD_PATH=build/
MOCK_LAYOUT=app/framework/*
MOCK_PAGES=app/pages/**/*.html
MOCK_COMPONENTS=app/blocks/**/*.html,app/components/**/*.html,app/framework/areas/**/*.html
MOCK_IMAGES=app/framework/images/
MOCK_FONTS=app/framework/fonts/
```

# eslint

Default config is "extends": "airbnb" with support for React and JSX, see .eslintrc
If your are not using React you can change to "extends": "airbnb-base"
https://www.npmjs.com/package/eslint-config-airbnb
https://www.npmjs.com/package/eslint-config-airbnb-base
https://github.com/airbnb/javascript