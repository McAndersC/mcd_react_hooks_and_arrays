import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import BoxesPage from "./pages/boxes/BoxesPage";
import ClickMachinesPage from "./pages/clickMachines/ClickMachinesPage";
import PrettyMachinePage from "./pages/pretty/PrettyMachinePage";
import MachinesDashboardPage from "./pages/dashboard/MachinesDashboardPage";
import ManyPage from "./pages/many/ManyPage";
// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

            {
              path: "/",
              element : <HomePage></HomePage>
            },
            {
              path: "/boxes",
              element : <BoxesPage></BoxesPage>
            },
            {
              path: "/clickmachines",
              element : <ClickMachinesPage></ClickMachinesPage>
            }, 
            {
              path: "/prettymachines",
              element : <PrettyMachinePage></PrettyMachinePage>
            }, 
            {
              path: "/dashboard",
              element : <MachinesDashboardPage></MachinesDashboardPage>
            }, 
            {
              path: "/many",
              element : <ManyPage></ManyPage>
            },
            {
              path: "*",
              element : <div>NOT FOUND</div>
            },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
