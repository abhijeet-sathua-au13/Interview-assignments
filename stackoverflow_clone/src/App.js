
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import FeaturedQuestion from './containers/FeaturedQuestion/FeaturedQuestion';
import Login from './containers/Login/Login';
import UserProfile from './containers/UserProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/featured-questions" component={FeaturedQuestion} />
          <Route exact path="/user/:id/profile" component={UserProfile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
