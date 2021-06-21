import React from 'react'
import {Switch,Route} from "react-router-dom"
import Header from '../Screens/Components/Header'
import Home from '../Screens/Home'
import Following from '../Screens/Following'
import Upload from '../Screens/Upload'
import Authentication from '../Screens/Authentication'
import AccountVerification from '../Screens/AccountVerification'
function Routes() {
    return (<>
<Header/>
        <Switch>
           <Route exact={true} path="/" component={Home}/>
           <Route exact={true} path="/upload" component={Upload}/>
           <Route exact={true} path="/following" component={Following}/>
           <Route exact={true} path="/authentication" component={Authentication}/>
           <Route exact={true} path="/accountVerification" component={AccountVerification}/>
        </Switch>
    </>)
}

export default Routes
