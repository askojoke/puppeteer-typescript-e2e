# Info

This is the base template for e2e automation framework with Jest, Puppeteer and Typescript.

Tests run against https://demoqa.com/

# To run tests

```
npm i
```

```
npm run test
```

You can also run single scenario with 

```
npm run test -- -t 'should fill dropdown in Widgets - Select Menu'
```

Or to change global variables through cmd in JSON string:

```
npm run test -- --globals='{\"URL\":\"https://demoqa.com/\"}'
```

Also you can change enviroment variables with cross-env

```
cross-env SLOWMO=5000 HEADLESS=true npm run test
```