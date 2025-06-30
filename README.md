# ngx-v-corporate-layout

## Purpose
Create a default design elements to reuse for other angular apps.

## How to adopt this library

## How the project structure was created.

Create the workspace (with no source folder).

```bash
ng new . --create-application=false

```
 
Create the library.
```bash
ng generate library ngx-v-corporate-scaffold --standalone --prefix=corp

```

Build it (otherwise the applying project cannot apply it if not in TS)
```bash
ng build ngx-v-corporate-scaffold
```

Navigate to the dist/ngx-v-corporate-scaffold folder, pack it up and push.
```bash
cd dist/ngx-v-corporate-scaffold && npm pack
```

for local development, simply run the command below and install it in the consuming project.
```
npm run pack-lib
```

### Create a new component

When creating a component (or any other angular element for that matter) set the export flag and reference the lib.

```
ng generate component header --standalone --export --project=ngx-v-corporate-scaffold
```

At last, add it to the public-api.ts


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
