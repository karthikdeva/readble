let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

export const API_END_POINT = "http://localhost:3001";

export const REQUEST_HEADER = {
  Accept: "application/json",
  "Content-type": "application/json",
  Authorization: token
};

export const GET_REQUEST_HEADER = {
  method: "GET",
  headers: REQUEST_HEADER
};

export const POST_REQUEST_HEADER = {
  method: "POST",
  headers: REQUEST_HEADER
};

export const PUT_REQUEST_HEADER = {
  method: "PUT",
  headers: REQUEST_HEADER
};

export const DELETE_REQUEST_HEADER = {
  method: "DELETE",
  headers: REQUEST_HEADER
};

export const UPVOTE_OPTION = {
  option: "upVote"
};

export const DOWNVOTE_OPTION = {
  option: "downVote"
};



// export const getAllPostsByCategory = category =>
//   fetch(`${api}/${category}/posts`, { headers })
//     .then(res => res.json())
//     .then(data => data.book);

// export const addComment = data => {
//   fetch(`${api}/comments`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers
//   })
//     .then(res => res.json())
//     .then(data => data);
// };
// export const addPost = data => {
//   fetch(`${api}/posts`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers
//   })
//     .then(res => res.json())
//     .then(data => data);
// };
// export const postVote = (postId, voteType) => {
//   fetch(`${api}/posts/${postId}`, {
//     method: "POST",
//     body: JSON.stringify({ option: voteType }),
//     headers
//   })
//     .then(res => res.json())
//     .then(data => {
//       return data;
//     });
// };

// export const getAllCategories = () =>
//   fetch(`${api}/categories`, { headers })
//     .then(res => res.json())
//     .then(data => data);

// export const getAllPosts = () =>
//   fetch(`${api}/posts`, { headers })
//     .then(res => res.json())
//     .then(data => data);

// export const getPostDetailsById = postId =>
//   fetch(`${api}/posts/${postId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book);
