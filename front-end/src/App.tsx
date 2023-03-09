import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import { JSXElementConstructor, ReactElement, Key } from "react";

function App() {
  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        collapse: any;
        route: string;
        component: ReactElement<any, string | JSXElementConstructor<any>>;
        key: Key;
      }) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return (
            <Route
              path={route.route}
              element={route.component}
              key={route.key}
            />
          );
        }

        return null;
      }
    );

  return (
    <div>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/fileupload" />} />
      </Routes>
    </div>
  );
}

export default App;
