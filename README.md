# Nxt JS minimal boilerplate

This is a basic boilerplate for a Next JS project using TypeScript and [App](https://nextjs.org/blog/next-13-4#nextjs-app-router) directory. It includes a basic file structure, TypeScript and necessary dependencies for Next.

## Getting Started

1.  Clone the repository: ``
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm run dev` or `yarn dev`
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## File Structure

- `src`: This folder contains the source code for the application.
- `public`: This folder contains static files, like images. Files inside public can then be referenced by your code starting from the base URL [(/)]
- `tsconfig.json`: This is the TypeScript configuration file.
- `next.config.js`: This is the Next.js configuration file.
- `eslintrc.json`: This is the ESLint configuration file.
- `prettierrc`: This is the Prettier configuration file.

## Dependencies

- `react`: The library for building user interfaces.
- `react-dom`: The package that allows React components to be rendered on the DOM.
- `next`: It is a React framework that enables several features like server-side rendering and static site generation.
- `typescript`: A superset of JavaScript that adds optional static typing and other features.

## Tips

- If you want to use other packages which are written in JavaScript, you need to install their @types versions as well to use them with TypeScript.
- Make sure you have correctly set up the `tsconfig.json` file, especially the `baseUrl` and `paths` properties.
- If you want make changes to development server configuration, you can do so in the `next.config.js` file.
- Don't forget to run `npm run dev` or `yarn dev` to start the development server and see your application running.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Conclusion

This is a minimal boilerplate that should help you quickly set up a new Next project using TypeScript and app directory. You can always add more features and dependencies to your liking, but this should be enough to get you started. Happy coding!
