'use strict'

import React from 'react'

const Search = () => (
    <div className='row'>
        <div className='col-12 p-20 search'>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Digite o nome do usúario do GitHub" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <a className="btn btn-outline-primary" href='#'><i className="fas fa-search"></i></a>
                </div>
            </div>
        </div>
    </div>
)

export default Search