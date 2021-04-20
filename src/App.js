import React from "react";

import 'rsuite/lib/styles/index.less';
import './styles/main.scss';
import { Switch} from "react-router";
import SignIn from "./pages/SignIn";
import PrivateRoutes from "./components/PrivateRoutes";
import Index from "./pages/Home";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
      <ProfileProvider>
        <Switch>
            <PublicRoute path="/signin">
                    <SignIn />
                </PublicRoute>
                <PrivateRoutes path="/">
                    <Index />
            </PrivateRoutes>
        </Switch>
      </ProfileProvider>
  );
}

export default App;
