'use strict'

import React, { Component } from 'react'
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Search />
                    <UserInfo />
                    <Actions />

                    <div className='row'>
                        <div className='col-6 m-t-b-20 repos'>
                            <h2>Repositórios: </h2>
                            <ul>
                                <li><a href='#'>Nome do repositório</a></li>
                            </ul>
                        </div>

                        <div className='col-6 m-t-b-20 starred'>
                            <h2>Favoritos: </h2>
                            <ul>
                                <li><a href='#'>Nome do repositório</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App