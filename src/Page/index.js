import Header from '../Header';
import Home from '../Home';
import './page.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Page() {
  return (
    <div className="Page">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Page;