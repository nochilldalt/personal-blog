import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Details from './Pages/Details';
import NavBar from './components/NavBar';
import Compose from './Pages/Compose';
import Edit from './Pages/Edit';
import login from './Pages/login';
import register from './Pages/Register'
import  profile from './Pages/Profile';
import  Donate from './Pages/Donate';
import  Contact from './Pages/Contact';

const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/details/:id' component={Details} />
                    <Route exact path='/compose' component={Compose} />
                    <Route exact path='/edit/:id' component={Edit} />
                    <Route exact path='/login' component={login} />
                    <Route exact path='/register' component={register} />
                    <Route exact path='/profile' component={profile} />
                    <Route exact path='/donate' component={Donate} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}

interface AppProps { }

export default App