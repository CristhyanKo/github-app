'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={'col-6 m-t-b-20 ' + className}>
        <h2>{title}: </h2>
        <ul>
            {repos.map((repo) => (
                <li><a href={repo.link}>{repo.name}</a></li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: '',
    title: '',
    repo: []
}

Repos.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array
}

export default Repos