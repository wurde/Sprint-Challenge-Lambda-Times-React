- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

The `prop-types` package provides an API (via PropTypes) to type check the props passed around our components. Type checking is important for JavaScript as it
is weakly typed. This can result in unintended consequences or hard to detect bugs.

- [x] Describe a life-cycle event in React?

There are several life-cycle events for React components that we can hook into to customize our component's behavior. For example we could use `componentDidMount`, which runs after the first render, to query data from a backend API.

- [x] Explain the details of a Higher Order Component?

A Higher Order Component (HOC) is a function that takes a component as an argument
and returns a new component. They are not part of the React API, instead they
are a developer pattern used for advanced component composition.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

To style components we can use vanilla CSS, SASS, and style components.
CSS is great as it has the smallest footprint and easiest setup.
SASS is great as it provides additional facilities for writing complex CSS.
Style components is great for leveraging the full power of JavaScript.
