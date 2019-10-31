import React from 'react';
import AppHeader from "./layouts/AppHeader";
import AppFooter from "./layouts/AppFooter";
import ArticleBrowserContainer from "./containers/ArticleBrowserContainer";
import './resources/stylesheets/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
        <AppHeader key="header"/>
        <main key="main" className="main container">
          <ArticleBrowserContainer />
        </main>
        <AppFooter key="footer"/>
    </div>
  );
};

export default App;
