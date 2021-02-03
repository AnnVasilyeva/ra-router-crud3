import React, {useState, useEffect} from "react";

export default function PostEdit (props) {
    const [posts, setPosts] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${props.match.params.id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            });
    }, [])

    if(posts) {
        if(value === '') {
            setValue(posts[0].body);
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: posts[0].id,
                body: value,
                title: 'foo',
                userId: 1
            })
        })

        console.log(`post №${posts[0].id} edited`)
        props.history.push(`/post/${posts[0].id}`);

    }


    return (
        <div className='post-item-edit'>
            {posts &&
            <>
                <header className='post-item-edit_top'>
                    <h3>Редактировать публикацию</h3>
                    <button type='button' onClick={() => props.history.push(`/post/${posts[0].id}`)}>&#10006;</button>
                </header>
                <form onSubmit={onSubmitForm} className='form-edit'>
                    <textarea className='form-edit-textarea' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type='submit'>Сохранить</button>
                </form>
            </>
            }

        </div>

    )


}