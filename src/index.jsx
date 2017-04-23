import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import storeCreator from './store/configureStore';

// Route components.
import App from './App/App'; // Main application.
import Home from './App/Home'; // Home
import NotFound from './Errors/NotFound'; // 404
import Seguidor from './Seguidor/Container';

// Create store and browser history.
const store = storeCreator();
const browserHistory = createBrowserHistory();

class Root extends React.Component {

  render() {
    return (
	<div>
	 <Provider store={store}>
	   <Router history={browserHistory}>
         <div>
           <Route path="/" component={App}/>
		   <Route exact path="/" component={Home}/>
		   <Route exact path="/seguidor" component={Seguidor}/>
		 </div>
	   </Router>
     </Provider>
    </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
