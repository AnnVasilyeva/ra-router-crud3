import React from "react";
import {NavLink} from "react-router-dom";

export default function Post({id, body}) {
    return (
        <div className='post-item'>
            <NavLink to={`/post/${id}`}>
                <header>
                    <div className='avatar'>
                        <img src="https://img.icons8.com/color/48/000000/avatar.png"/>
                    </div>
                    <div className='user-name'>Ann</div>
                </header>
                <div className='post-content'>{body}</div>
                <div className='comment-form'>
                    <div className='comment-avatar'>
                        <img src="https://img.icons8.com/offices/30/000000/avatar.png"/>
                    </div>
                    <input placeholder='Напиши комментарий'/>
                </div>
            </NavLink>
        </div>
    )


}