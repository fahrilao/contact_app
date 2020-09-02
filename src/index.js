import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Container from './layouts/Container'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducer'

const MainBackground = ['default--background', 'blue--background', 'red--background'];

const middleware = [thunk]

ReactDom.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(...middleware))}>
        <BrowserRouter>
            <Container bgmain={MainBackground} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))