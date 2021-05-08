import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginFlow } from './containers/login';
import { ResetPassword } from './containers/reset';
import { SignupFlow } from './containers/signup';
import { Chat } from './pages/Chat';
import { GlobalStyle } from './styles/GlobalStyle'

const App = ():  JSX.Element =>  {
  return (
    <Router>
   <GlobalStyle/>
   <Route  path='/chat' component={Chat} exact/>
   <Route path="/signin" component={LoginFlow} exact/>
   <Route path="/signup" component={SignupFlow} exact/>
   <Route path="/reset-password" component={ResetPassword} exact/>
    </Router>
  );
}

export default App;
