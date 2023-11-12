import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <MainLayout>
          <Outlet></Outlet>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
