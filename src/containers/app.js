import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../containers/HomePage';
import SearchPage from '../containers/SearchPage';


export default class App extends Component {
  render() {
      let minHeight = window.innerHeight;
      let mainContainerDiv = {
            backgroundColor: "#fff",
            paddingBottom: "20px",
            boxShadow: "0 0 30px grey",
            minHeight: minHeight
        }
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container" style={ mainContainerDiv }>
                        {/* <SearchBar classNameForm={'input-group main-search-bar'} classNameSpan={'input-group-btn'}/> */}
                        <Switch>
                            <Route exact path="/category/:category" component={SearchPage} />
                            <Route exact path="/" component={HomePage} />
                        </Switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        </div>
    );
  }
}
