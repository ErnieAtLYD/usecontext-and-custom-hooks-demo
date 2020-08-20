# UseContext Demo

## User Stories

- We have a React app that uses `react-router-dom` that contains a Home page and an About page which runs Home and About components.
- We want to use a React state that stores a JavaScript object of a user.
- We want the home page to have a button that mocks a login. When the button is clicked, a user object is saved to the user state.
- The user state should be accessible from the both the Home and About components.

## Building out the thing

### Create the `UserContext.js` file

- [ ] Include `import { createContext } from "react";`
- [ ] Don't forget to export the module at `export const UserContext = createContext();`
- [ ] Pass `createContext` a value; it's set when you try to use this context with no provider

### In App.js

- [ ] Include `import { UserContext } from "./UserContext"`
- [ ] Wrap the components you want to give the context access to in a `<UserContext.Provider></UserContext.Provider>`
- [ ] Add a `value` attribute

### In the components you want to use this context (`src/components/About.js` and `src/components/Index.js`)

- [ ] Include `import { UserContext } from "../UserContext"`
- [ ] Inside the component, assign `React.useContext(UserContext)` to a variable to use it within the JSX

Right now, UserContext is only passing a string. Let's try passing an object with two properties: value and setValue.

- [ ] In App.js, change "test value" in line 21 to {{value, setValue}} (two curly brackets because we are passing an object to JSX)
- [ ] In App.js add `const [value, setValue] = useState("default message");` after line 8
- [ ] In `/src/components/About.js` and `/src/components/Index.js`, change `msg` in line 5 to `{ value, setValue }`

Neat. So right now we're passing a state named value that says "default message."

That in itself is kinda whatever. Maybe we want a way to remember a user on login that other components can have access to.

- [ ] Change `value` and `setValue` to `user` and `setUser`.
- [ ] In About and Index components, we're going to make it slightly easier for us to debug the user variable. Add `return <pre>{JSON.stringify(user, null, 2)}</pre>;`.
- [ ] I also added `<h1></h1>` header tags to both components.

Create a fake login button on the Index component

- [ ] Create a new file: `/src/utils/login.js`
- [ ] Create an asynchronous module called login returns a user object. Export the module. Mine looks like this:

```
export const login = async () => {
  return {
    id: 4,
    username: "ernie",
    email: "ernie@wyncode.co"
  };
};
```

- [ ] In Index.js, change the button onClick handler to the following:

```
onClick={async () => {
  const user = await login();
  setUser(user);
}}
```

- [ ] In Index.js, add a ternary statement so user is shown button labeled "Sign out" if there is no `user` exists, otherwise, show our previous button and handler
- [ ] Add the JS that will `setUser(null)` on clicking the logout button

## Resources

- [The React useContext Hook in a Nutshell](https://www.digitalocean.com/community/tutorials/react-usecontext)
