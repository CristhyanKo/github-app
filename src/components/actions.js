'use strict'

import React, {PropTypes} from 'react'

const Actions = ({handleReposStarred}) => (
    <div className='row'>
        <div className='col-6 actions '>
            <a href='#' onClick={(e) => {
                e.preventDefault()
                handleReposStarred('repos')
            }}
                className='col-12 btn btn-primary'>Ver Repositorios</a>
        </div>
        <div className='col-6 actions '>
            <a href='#' onClick={(e) => {
                e.preventDefault()
                handleReposStarred('starred')
            }}
                className='col-12 btn btn-primary'>Ver Favoritos</a>
        </div>
    </div>
)

Actions.propTypes = {
    handleReposStarred: PropTypes.func.isRequired
}

export default Actions