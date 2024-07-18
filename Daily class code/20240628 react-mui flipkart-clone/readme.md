# What is difference between state and props

- State:

  1. This is valid for only one component.
  2. One component's state cannot be access inside another component, without any medium
  3. mediums like : props, localStorage, redux store, context API.
  4. states are mutable.

- props:

  1. It can be passed to multi-layers of component structure(tree)
  2. Any type of data can be flow one component to another.
  3. Data can not be pass to that component which is not linked with same component
  4. React suggests us not to do prop-drilling(passing props to multiple layer of tree)
  5. Props are immutable
  6. Suitable for small projects

  # What is difference b/w props, context API, redux store

  1. props is suitable for small projects to pass data
  2. context API: We wrap App.js to Context. There is a context.provider which pass data, and context.consumer which gets(consumes) data. This is suitable for medium size projects
  3. Redux is a third party library. It is the best option to store and get data. This is highly used in large or major projects.

  # What is Prop-drilling

  1. Prop drilling is just to share any state or variable in multi-layer component hierarchy (tree). like passing any data from grand-parent --> parent --> child ---> child --> child
  2. React suggests not to do prop drilling because it will engage most of the components to pass data, where we don't need same data.
  3. Prop-drilling is fine for 2 or 3 level

  # Redux setup

  1. npm i react-redux
  2. Wrap App.js with Provider
