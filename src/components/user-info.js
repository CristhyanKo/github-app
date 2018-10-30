'use strict'

import React from 'react'

const UserInfo = () => (

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
                            <p>
                            Desenvolvedor Pleno, com domínio em desenvolvimento (desktop, web e app), certificação em Web design, conhecimento em processos de negócio da área pública.
                            </p>
                            <ul className='repos-info list-group'>
                                <li className='list-group-item'><b>Repositórios:></b> 0</li>
                                <li className='list-group-item'><b>Seguidores:</b> 0</li>
                                <li className='list-group-item'><b>Seguindo:</b> 0</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default UserInfo