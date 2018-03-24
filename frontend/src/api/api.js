const api = "http://localhost:3001"

let token = localStorage.token
if (!token) 
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllPostsByCategory = (category) => fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())
    .then(data => data.book)

export const getAllCategories = () => fetch(`${api}/categories`, {headers})
    .then(res => res.json())
    .then(data => data)

export const getAllPosts = () => fetch(`${api}/posts`, {headers})
    .then(res => res.json())
    .then(data => data)

export const getPostDetailsById = (postId) => fetch(`${api}/posts/${postId}`, {headers})
    .then(res => res.json())
    .then(data => data.book)