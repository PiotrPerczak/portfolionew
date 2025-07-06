import "./App.css";
import Example from "./elements/Navbar";
import Example1 from "./elements/Aboutme";
import Example2 from "./elements/Projects";
import Example3 from "./elements/Contact";
import Example4 from "./elements/Footer";

function App() {
  return (
    <div>
      <Example ></Example>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Example1 ></Example1>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Example2 ></Example2>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Example3></Example3>
      <Example4></Example4>
    </div>
  );
}

export default App;
