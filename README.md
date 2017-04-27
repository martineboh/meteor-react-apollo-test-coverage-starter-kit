[![Build Status](https://travis-ci.org/serut/meteor-react-apollo-test-coverage-starter-kit.svg?branch=master)](https://travis-ci.org/serut/meteor-react-apollo-test-coverage-starter-kit)[![codecov](https://codecov.io/gh/serut/meteor-react-apollo-test-coverage-starter-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/serut/meteor-react-apollo-test-coverage-starter-kit)


# Meteor + Apollo test & coverage boilerplate

This repository is a fork of [apollographql/meteor-starter-kit](https://github.com/apollographql/meteor-starter-kit) to show how to add test and coverage to meteor using [meteor-coverage](https://github.com/serut/meteor-coverage).


### This fork includes
- GraphQL server running with Express bound to the Meteor app
- Apollo client
- React
- Accounts UI, Basic & password
- ES6 syntax

GraphiQL is enabled at [/graphiql](http://localhost:3000/graphiql).

### Setup tutorial

Install dependencies
```
meteor add lmieulet:meteor-coverage practicalmeteor:mocha@2.4.5_6 practicalmeteor:mocha-console-runner
meteor npm i --save-dev https://github.com/serut/spacejam/tarball/windows-suppport-rc4
```
Edit the `package.json` to add tests and coverage run scripts
Create some tests files:  
 - Using `meteor npm run test:app-unit-watch`, you run all files test that matches `.test.js`.  
Once they are passing, run `meteor npm run coverage:app-unit`


### Running it

```
meteor npm install
meteor
```

See `.travis.yml` for the complete setup.

### apollographql/meteor-starter-kit already contains
- GraphQL server running with Express bound to the Meteor app
- Apollo client
- React
- Accounts UI, Basic & password
- ES6 syntax

Check `package.json` for specific versions

### Folder structure
    .
    ├── .coverage               # Coverage HTML reports
    ├── client                  # Client files
    │   ├── styles              # Styles
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.js             # Imports all required files - React render
    ├── imports                 # A client/server folder
    │   ├── api                 #
    │   |  └── schema.js        # Schema & query definitions
    │   |  └── schema.test.js   # Test unit file
    |   └── ui                  # UI React rendering
    │      └── App.js           # Component using `graphql` HOC
    │      └── Header.js        # Basic presentational component
    │      └── Loading.js       # Reusable loading component
    │      └── LoginForm.js     # Component using `withApollo` HOC
    ├── server                  # Server files
    │   └── server.js           # Main server file initiating Apollo server
    └── package.json            # node dependencies


### Learn more

- [Meteor `apollo` package docs](http://dev.apollodata.com/core/meteor.html)
- [Apollo docs](http://dev.apollodata.com/)
