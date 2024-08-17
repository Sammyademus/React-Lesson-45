import "./App.css";
import ParentComponent from "./components/Props/ParentComponent";
import Counter from "./components/Counter";
import HandlingEvents from "./components/HandlingEvents";

// App.js is the root component that houses all other components
// App.js is the root/main component that wraps the other components

function App() {
  return (
    <>
      <h2>Props</h2>
      <ParentComponent />
      <Counter />
      <HandlingEvents />
    </>
  );
}

export default App;

//Note that ChildComponent is displayed in App.js
//The data is passed from ParentComponent to ChildComponent
//___________________________________________________________

//After defining a function, you also have to "export default"

//1/ export default function or
//2/ function
//   export default -(means close a function, already declared)

//___________________________________________________________

//You have to import/render the components created to show it on the browser. By adding "import..."
