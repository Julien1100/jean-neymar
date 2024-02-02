import { Outlet } from "react-router-dom";
import "./App.css";
import Sidepanel from "./components/Sidepanel";

function App() {
  return (
    <>
      <main>
        <Sidepanel />

        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
