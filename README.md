# sharedModule
#### Test for shared module 
1. several helper function
2. several css files
3. several constants

For using:
```import 'shared-module/stylesheets/a.css'```
```import { constants } from 'shared-module'```

In fact, we don't need to create index.js or main and files in package.json.
Yarn add AlbertWhite/sharedModule and import 'shared-module/xx/xx' will import the file.
There is no magic with the import, it just import the whole project.
