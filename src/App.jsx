import { Nav, RenderModel, Hero } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="h-full w-full ">
      <Nav />
      <div>
        <Hero />
        <RenderModel className = "-z-20" />
      </div>
    </div>
  );
}

export default App;
