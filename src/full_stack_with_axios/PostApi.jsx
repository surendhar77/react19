import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/posts");
};

// delete method
export const deletePost = (id) => {
<<<<<<< HEAD
    return api.delete(`/posts/${id}`);
}

//post method 

export const postData = (post) => {
    return api.post("/posts",post);
}


 //put method

 export const updateData = (id,post) => {
return api.put(`/posts/${id}`,post);
 }
=======
  return api.delete(`/posts/${id}`);
};

//post method
export const postData = (post) => {
  return api.post("/posts", post);
};

//put method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db
