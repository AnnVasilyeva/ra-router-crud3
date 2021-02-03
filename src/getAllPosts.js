export const getAllPosts = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => callback(res))
}