import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Polish from '../Polish/Polish';
import { GlobalCSS } from './App.styled';

function App() {
	return (
        <>
            <GlobalCSS />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/polish">
                        <Polish />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
