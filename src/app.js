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
                    login: result.login,
                    username: result.name,
                    avatar_url: result.avatar_url,
                    html_url: result.html_url,
                    public_repos: result.public_repos,
                    followers: result.followers,
                    following: result.following
                }
            })
        })
    }

    handleReposStarred(filtro) {
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${filtro}`).then((result) => {
            this.setState({
                [filtro]: result.map((repo) => {
                    return {
                        name: repo.name,
                        html_url: repo.html_url
                    }
                })
            })
        })
    }


    render() {
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            handleSearch={(filtro) => this.handleSearch(filtro)}
            handleReposStarred={(filtro, user) => this.handleReposStarred(filtro)}
        />
    }
}

export default App