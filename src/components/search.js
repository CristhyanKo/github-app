'use strict'

import React, { PropTypes } from 'react'

let value

const Search = ({ handleSearch }) => (
    <div className='row'>
        <div className='col-12 p-20 search'>
            <div className="input-group mb-3">
                <input type="search"
                    onKeyUp={(e) => {
                        value = e.target.value
                        const key = e.which || e.keyCode
                        const enter = 13
                        if (key === enter)
                            handleSearch(e.target.value)
                    }}
                    className="form-control" placeholder="Digite o nome do usúario do GitHub" />

                <div className="input-group-append">
                    <a className="btn btn-outline-primary" onClick={(e) => {
                        e.preventDefault()
                        handleSearch(value)
                    }} href='#'><i className="fas fa-search"></i></a>
                </div>
            </div>
        </div>
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search