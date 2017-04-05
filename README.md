# react-monorepo-example

Example Lerna monorepo of a React/Redux application with SDK source packages.

## Setup

    lerna bootstrap

## Packages

### SDK packages
The majority of packages are SDK packages. SDK packages are plugins that 
contain reusable source files (components, js modules, SASS partials, etc) 
and do not have a build of their own. SDK packages can have any directory 
structure. SDK packages are located in `packages/sdk`

| Name          | Description |
|---------------|-------------|
| [core]()      | Library of core React presentational components | 
| [redux-sdk]() | Reusable Redux reducers and selectors |
| [item]()      | List item React-Redux connect'd component |

### App packages
App packages bundle pages for the browser by composing SDK packages. 
App packages are located in `packages/apps/`.
  
App packages require at a minimum this structure
```
src/
    index.js
    index.html
```
            
Building an app generates at least these files in its directory
```
dist/
    [name].js
    [name].html
    [name].css
```

| Name    | Description |
|---------|-------------|
| [listApp]() | Simple list application | 

### Adapter
The `adapter` package generates an AMD module for rendering select 
components from the SDK packages in a non-react application.

Building the adapter generates these files in its directory
```
dist/
    adapter.js
    adapter.css
```
        
### Builds
The `builds` package contains reusable webpack configurations, reducing 
boilerplate and ensuring consistency across packages. App packages 
should use the `appConfig` builder function to generate their config. 
All other package's config should start with `baseConfig` (`appConfig` 
already includes the base configuration).     

## Develop
Each SDK package should use `peerDependencies` in place of `dependencies` 
in its `package.json`. This externalizes all of the packages dependencies 
when it is built.