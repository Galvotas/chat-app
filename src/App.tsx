import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginFlow } from "./pages/SigninPage";
import { ResetPassword } from "./containers/reset";
import { SignupFlow } from "./pages/SignupPage";
import { Chat } from "./pages/ChatPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HomePage } from "./pages/HomePage";

const App = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" component={HomePage} exact />
      <Route path="/chat" component={Chat} exact />
      <Route path="/signin" component={LoginFlow} exact />
      <Route path="/signup" component={SignupFlow} exact />
      <Route path="/reset-password" component={ResetPassword} exact />
    </Router>
  );
};

export default App;
