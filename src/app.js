'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: []
        }
    }

    handleSearch(filtro) {
        ajax().get(`https://api.github.com/users/${filtro}`).then((result) => {
            this.setState({
                userinfo: {
                    username: result.name,
                    avatar_url: result.avatar_url,
                    html_url: result.html_url,
                    public_repos: result.public_repos,
                    followers: result.followers,
                    following: result.following
                }
            })
            // userinfo: {
            //     username: 'Cristhyan Kohlhase',
            //     avatar_url: 'https://avatars2.githubusercontent.com/u/25498050?v=4',
            //     html_url : 'https://github.com/CristhyanKo',
            //     public_repos: 21,
            //     followers: 16,
            //     following: 15
            // },

        console.log(result)
    })
    }

    render() {
        return <AppContent userinfo={this.state.userinfo} repos={this.state.repos} starred={this.state.starred} handleSearch={(filtro) => this.handleSearch(filtro)} />
    }
}

export default App