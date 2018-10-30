'use strict'

import React, { Component } from 'react'
import Search from './components/search';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Search />

                    <div className='user-info'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='jumbotron'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-4'>
                                            <img className='img-thumbnail rounded float-left' src='https://avatars2.githubusercontent.com/u/25498050?v=4' />
                                        </div>
                                        <div className='col-lg-9 col-md-8'>
                                            <h1> <a href='https://github.com/CristhyanKo/'> Cristhyan Veiga Kohlhase Roda </a></h1>

                                            <ul className='repos-info list-group'>
                                                <li className='list-group-item'>Repositórios: 0</li>
                                                <li className='list-group-item'>Seguidores: 0</li>
                                                <li className='list-group-item'>Seguindo: 0</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                            <div className='col-6 actions '>
                                <a href='#' className='col-12 btn btn-primary'>Ver Repositorios</a>
                            </div>
                            <div className='col-6 actions '>
                                <a href='#' className='col-12 btn btn-primary'>Ver Favoritos</a>
                            </div>
                        </div>

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