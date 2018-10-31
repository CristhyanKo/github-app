'use strict'

import React from 'react'
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';
import Header from './header';

const AppContent = ({ userinfo, repos, starred, handleSearch, handleReposStarred }) => (
    <div className='app'>
        <div className='container'>
            <Header />
            <Search handleSearch={handleSearch} />
            {!!userinfo && <UserInfo userinfo={userinfo} />}
            {!!userinfo && <Actions handleReposStarred={handleReposStarred} />}

            <div className='row'>
                {!!repos.length && <Repos className='repos' title='Repositórios' repos={repos} />}
                {!!starred.length && <Repos className='starred' title='Favoritos' repos={starred} />}
            </div>

        </div>
    </div>
)

AppContent.propTypes = {
    userinfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired
}

export default AppContent