import React, {useState, useEffect} from "react";

export default function PostInfo (props) {
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${props.match.params.id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            });
    }, [])


    const deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        console.log(`post №${id} deleted`)
        props.history.push('/');
    }

    return (
        <div className='post-item-info'>
            {posts &&
            <>
                <header>
                    <div className='avatar'>
                        <img src="https://img.icons8.com/color/48/000000/avatar.png" alt='avatar'/>
                    </div>
                    <div className='user-name'>Ann</div>
                </header>
                <div className='post-content'>{posts[0].body}</div>
                <div className='btn-container'>
                    <button className='post-btn-edit' onClick={() => props.history.push(`/post/${posts[0].id}/edit`)}>Изменить</button>
                    <button className='post-btn-delete' onClick={() => deletePost(posts[0].id)}>Удалить</button>
                </div>
            </>
            }

        </div>
    )

}