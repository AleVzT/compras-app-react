import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from 'react-router-dom';
import { AppBar } from '../components/ui/AppBar';
import { ProDetailScreen } from '../components/productDetail/ProDetailScreen';
import { ProListScreen } from '../components/productList/ProListScreen';

export const AppRouter = () => {
    return (
        <Router>
            <AppBar />
            <div className="container mt-2">
                <Switch>

                    <Route 
                        exact
                        path="/items"
                        component={ ProListScreen }
                    />

                    <Route 
                        exact
                        path="/items/:id"
                        component={ ProDetailScreen }
                    />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
