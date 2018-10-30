'use strict'

import React, { Component } from 'react'
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Search />
                    <UserInfo />
                    <Actions />
                    <div className='row'>
                        <Repos className='repos' title='Repositórios' repos={[{ name: 'nome', link: 'link' }]} />
                        <Repos className='starred' title='Favoritos' repos={[{ name: 'nome', link: 'link' }]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App