import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginFlow } from "./pages/SigninPage";
import { ResetPassword } from "./containers/reset";
import { SignupFlow } from "./pages/SignupPage";
import { Chat } from "./pages/ChatPage";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/chat" component={Chat} exact />
      <Route path="/" component={LoginFlow} exact />
      <Route path="/signup" component={SignupFlow} exact />
      <Route path="/reset-password" component={ResetPassword} exact />
    </Router>
  );
};

export default App;
