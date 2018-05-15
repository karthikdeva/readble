import React, {Component} from 'react';

import Routes from './Routes';
import AppHeader from './components/ui/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="readble-app">
        <AppHeader/>
        <div className=" container-fluid">
          <Routes/>
        </div>
      </div>
    );
  }
}
export default App;
