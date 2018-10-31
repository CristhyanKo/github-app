'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({userinfo}) => (

    <div className='user-info'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='jumbotron'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4'>
                            <img className='img-thumbnail rounded float-left' src={userinfo.avatar_url} />
                        </div>
                        <div className='col-lg-9 col-md-8'>
                            <h1> <a href={userinfo.html_url} target='_blank'> {userinfo.username} </a></h1>
                            <p>
                            {userinfo.bio}
                            </p>
                            <ul className='repos-info list-group'>
                                <li className='list-group-item'><b>Repositórios:</b> {userinfo.public_repos}</li>
                                <li className='list-group-item'><b>Seguidores:</b> {userinfo.followers}</li>
                                <li className='list-group-item'><b>Seguindo:</b> {userinfo.following}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        public_repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        avatar_url: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired
    })
}

export default UserInfo