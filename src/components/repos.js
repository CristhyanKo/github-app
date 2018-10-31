'use strict'

import React from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={'col-lg-6 col-md-6 col-xs-12 m-t-b-20 ' + className}>
        <div className="list-group">
        <a className='list-group-item list-group-item-dark d-flex justify-content-between align-items-center'>
            {title}
            <span className='badge badge-primary badge-pill '>{repos.length}</span>
        </a>
        
            {repos.map((repo, index) => (
                <a key={index} href={repo.html_url} target='_blank' className='list-group-item list-group-item-action'>{repo.name}</a>
            ))}
        </div>
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