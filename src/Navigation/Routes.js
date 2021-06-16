import React from 'react'
import {Switch,Route} from "react-router-dom"
import Header from '../Screens/Components/Header'
import Home from '../Screens/Home'
import Upload from '../Screens/Upload'
function Routes() {
    return (<>
<Header/>
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/upload" component={Upload}/>
           <Route exact path="" component={""}/>
           <Route exact path="" component={""}/>
           <Route exact path="" component={""}/>
        </Switch>
    </>)
}

export default Routes
