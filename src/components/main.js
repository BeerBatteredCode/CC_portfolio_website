import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Cv from './cv';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/" component={Cv} />
        <Route exact path="/" component={Projects} />
    </Switch>
)

export default Main;