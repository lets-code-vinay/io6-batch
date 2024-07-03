1. npm vs npx
   NPM: to manage any node package, like install
   NPX: To execute or run installed package

2. Class component vs Function component
   -Class is old method to create component in react
   -In latest React18 Facebook suggested to use Function component bcz FB is not going to update class feature
   - Class component uses setState to update state
   - Function component uses useState Hook to update state
   - Class component is based on Lifecycle methods but functional Components uses Hooks
   - Class Component major lifecycles are
     a. componentDidMount
     b. componentWillUnmount
     c. componentShouldUpdate
   - Functional components uses Hooks
     a. useState()
     b. useEffect()
     c. useLayoutEffect()
     d. useMemo()
     e. useCallBack()
     f. useRef()
     are major hooks used
   - initially function components were stateless components. But after introducing Hooks it became stateful component
