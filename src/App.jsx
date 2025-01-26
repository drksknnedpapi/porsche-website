import { Nav, RenderModel, Hero } from "./components/index";
import { SidebarProvider } from "./components/ui/sidebar";

import "./App.css";

function App() {
  return (
    <>
        <div className="h-full w-full ">
      <SidebarProvider>
        <Nav />
        <Hero className="z-10" />
        <RenderModel className="-z-20" />
      </SidebarProvider>
    </div>
    </>

  );
}

export default App;
