# Flux Boilerpate
Flux boilerplate

## Getting started

To install, run

```
npm install
```

Then run

```
npm start

```

and go to http://localhost:4000

# Heroku extra

1. Add buildpack
`heroku buildpack:set https://github.com/timdp/heroku-buildpack-nodejs-gulp.git`

2. `heroku labs:enable buildpack-env-arg`

3. `heroku config:set NODE_ENV=production`

4. `heroku:production`