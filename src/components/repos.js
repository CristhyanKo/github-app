'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={'col-lg-6 col-md-6 col-xs-12 m-t-b-20 ' + className}>
        <h2>{title}: </h2>
        <ul>
            {repos.map((repo, index) => (
                <li key={index}><a href={repo.link}>{repo.name}</a></li>
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