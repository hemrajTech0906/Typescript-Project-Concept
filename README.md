# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


//redux-Toolkit-->notes
// package->react-router-dom->react-redux->reduxToolkit
// fakestoreapi->fakeproductapi




overall-2Week--->EOD

  <-----TYPESCRIPT--->1st week
  1-> TYPESCRIPT customization of example of all type
  2-> typescript+react->project
   :counter app->increment decrement and reset{function} 
   :form 
   :api calling ->axios show list
   using state 

<----ReduxTookit----->2nd week
1->e-commerce project->feature {add,remove}
2-->api calling ->axios 
3--->routing ->
4->create slice and store and bind to react application 

//
   remote: Permission to hemrajTech0906/typescript-customisation.git denied to TechnostacksStavan.
fatal: unable to access 'https://github.com/hemrajTech0906/typescript-customisation.git/': The requested URL returned error: 403

git remote set-url origin https://<your-username>@github.com/hemrajTech0906/typescript-customisation.git
git remote set-url origin https://github.com/hemrajTech0906/typescript-customisation.git

https://github.com/hemrajTech0906/typescript-customisation.git

git remote add origin https://github.com/hemrajTech0906/typescript-customisation.git


token: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


git remote -v
git push origin   -->username ,password

version :20.04 ubntu  <---
    