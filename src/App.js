import logo from "./logo.svg";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

import "./App.css";
import { renderRoutes } from "react-router-config";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./views/Home";
import Menu from "./views/Menu";
import OrderOnline from "./views/OrderOnline";
import Reservation from "./views/Reservation";
import Gallery from "./views/Gallery";

const routes = [
  {
    route: "*",
    component: DashboardLayout,
    routes: [{ 
      path: "/", 
      exact: true, 
      component: Home 
    }, 
    { path: "/home", 
      exact: true, 
      component: Home 
    },
    { path: "/menu", 
      exact: true, 
      component: Menu 
    },
    { path: "/orderOnline", 
      exact: true, 
      component: OrderOnline
    },
    { path: "/reservation", 
      exact: true, 
      component: Reservation 
    },
    { path: "/gallery", 
      exact: true, 
      component: Gallery 
    }
  ],
  },
];
function App() {
  const history = useHistory();

  return (
    <div>
      <Router basename="/" history={history}>
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
