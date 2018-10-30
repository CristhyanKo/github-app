'use strict'

import React, { Component } from 'react'
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';
import Header from './components/header';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Header />
                    <Search />
                    <UserInfo />
                    <Actions />
                    <div className='row'>
                        <Repos className='repos' title='Repositórios' repos={
                                                        [
                                                            { name: 'Nome do repositório',
                                                              link: 'Link do repositório' 
                                                            },
                                                            { name: 'Nome do repositório 2',
                                                              link: 'Link do repositório 2' 
                                                            },
                                                            { name: 'Nome do repositório 3',
                                                              link: 'Link do repositório 3' 
                                                            }
                                                        ]} />
                        <Repos className='starred' title='Favoritos' repos={[{ name: 'nome', link: 'link' }]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App