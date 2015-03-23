# Flux Boilerpate

Flux boilerplate with react-router

## Getting started

To install, run

```
npm install
```

Then run

```
npm run dev

```

and go to http://localhost:4000

# Heroku extra

1. Add buildpack
`heroku buildpack:set https://github.com/timdp/heroku-buildpack-nodejs-gulp.git`

2. `heroku labs:enable buildpack-env-arg`

3. `heroku config:set NODE_ENV=production`

4. `heroku:production`

# Demo

[https://flux-boilerplate.herokuapp.com](https://flux-boilerplate.herokuapp.com)