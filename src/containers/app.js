import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Carousel from '../components/Carousel';
import HomePage from '../containers/HomePage';


export default class App extends Component {
  render() {
      let mainContainerDiv = {
            backgroundColor: "#fff",
            paddingBottom: "20px",
            boxShadow: "0 0 30px grey"
        }
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container" style={ mainContainerDiv }>
                        <Carousel />
                        {/* <SearchBar classNameForm={'input-group main-search-bar'} classNameSpan={'input-group-btn'}/> */}
                        <Switch>
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
