# Components

This folder contains all the pages of the application.

## Contents

- This folder contains the pages of the application.
- Every subfolder should have an `page.tsx` file which is the main file of the page.
- Because Next uses file based routing system so the name of folder becomes the route of the page.

For example
`  ├── app
    │   ├── page.tsx
    │   ├── docs.tsx
               └── page.tsx
 `

    In the above example when a route `/docs` is hit then the `docs.tsx` file will be rendered.

## File Naming Convention

- Folder should be named according to the route of the page.
- every subfolder needs to have at least `page.tsx` file.
- subfolder can have there non-common component be defined in the same directory as the subfolder.
- Next.js provides a set of special files to create UI with specific behavior in nested routes. These files are:

  `page.js`: Create the unique UI of a route and make the path publicly accessible.

  `route.js`: Create server-side API endpoints for a route.

  `layout.js`: Create shared UI for a segment and its children. A layout wraps a page or child segment.
  `template.js`: Similar to layout.js, except a new component instance is mounted on navigation. Use layouts unless you need this behavior.

  `loading.js`: Create loading UI for a segment and its children. loading.js wraps a page or child segment in a React Suspense Boundary, showing the loading UI while they load.

  `error.js`: Create error UI for a segment and its children. error.js wraps a page or child segment in a React Error Boundary, showing the error UI if an error is caught.
  `global-error.js`: Similar to error.js, but specifically for catching errors in the root layout.js.

  `not-found.js`: Create UI to show when the notFound function is thrown within a route segment or when a URL is not matched by any route.

- A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, `[id]` or `[slug]`.
