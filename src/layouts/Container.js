import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Side from './Side';
import Main from '../components/Main'
import AddContact from '../components/AddContact'

import '../css/Container.css'

function Container(props) {
    const [IndexBG, setIndexBG] = useState(1);
    const [see, setSee] = useState(false);

    const handleClick = () => {
        setIndexBG(prevBG => prevBG === 1 ? 2 : 1)
        setSee(!see)
    }
    
    return (
        <div className="container">
            <Side contacts={props.contacts} handleClick={ handleClick } />
            <Switch>
                <Route exact path="/" component={ () => <DefaultPage see={ see } bgName={ props.bgmain[0] } /> } />
                <Route path="/detail/" component={ () => <Main handleClick2={ handleClick } see={ see } bgName={ props.bgmain[IndexBG] } /> } />
                <Route path="/add" component={ () => <AddContact handleClick2={ handleClick } see={ see } /> } />
                <Route path="/update/" component={ () => <AddContact handleClick2={ handleClick } see={ see } update /> } />
            </Switch>
        </div>
    )
}

function DefaultPage(props){
    return (
        <div id="main__section" className={ `flex-1 ${props.bgName}` }>
        </div>
    )
}

export default Container
