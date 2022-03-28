import axios from 'axios';
const collegeInstance = axios.create({
    baseURL: "http://localhost:8000/posts",
});
  
  export const fetchPostsApi = async (posts) =>
    await collegeInstance.request({
        method: "GET",
        data: posts,
        url: "/",
});


export const createPostsApi = async (posts) =>
  await collegeInstance.request({
    method: "POST",
    data: posts,
    url: "/",
});

export const deletePostsApi = async (data) =>
  await collegeInstance.request({
    method: "DELETE",
    data: data,
    url: "/deletePost",
});


export const updatePostsApi = async (data) =>
  await collegeInstance.request({
    method: "POST",
    data: data,
    url: "/updatePost",
});


// const url = "http://localhost:8000/posts";

// export const updatePostsApi = (postData,id)=> axios.put(`${collegeInstance}/${id}`,postData);
// export const updatePostsApi = async (id,postData) =>
//   await axios
//     .patch(`http://localhost:8000/posts/${id}`, postData)
//     .then((res) => res)
//     .catch((err) => err);

// export const deletePostsApi = async (id) =>
// await axios
//   .delete(`http://localhost:8000/posts/deletePost/${id}`)
//   .then((res) => res)
//   .catch((err) => err);
// export const deletePostsApi = (id)=> axios.delete(`${collegeInstance}/${id}`);
