import axios from 'axios';
const memeriesInstance = axios.create({
    baseURL: "http://localhost:8000",
});
  
memeriesInstance.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
})

  export const fetchPostsApi = async (posts) =>
    await memeriesInstance.request({
        method: "GET",
        data: posts,
        url: "/posts",
});


export const createPostsApi = async (posts) =>
  await memeriesInstance.request({
    method: "POST",
    data: posts,
    url: "/posts",
});

export const deletePostsApi = async (data) =>
  await memeriesInstance.request({
    method: "DELETE",
    data: data,
    url: "/posts/deletePost",
});


export const updatePostsApi = async (data) =>
  await memeriesInstance.request({
    method: "POST",
    data: data,
    url: "/posts/updatePost",
});

export const likePostsApi = async (data) =>
  await memeriesInstance.request({
    method: "POST",
    data: data,
    url: "/posts/likePost",
});

export const singInApi = async (data) =>
  await memeriesInstance.request({
    method: "POST",
    data: data,
    url: "/users/signin",
});

export const singUpApi = async (data) =>
  await memeriesInstance.request({
    method: "POST",
    data: data,
    url: "/users/signup",
});



