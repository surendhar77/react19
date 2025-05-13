import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../full_stack_with_axios/PostApi";
import Form from "./Form";
import "../crud/crud.css"
  const Posts = () => {
  const [data, setData] = useState([]);
<<<<<<< HEAD
  const [updateDataApi, setUpdateDataApi] = useState({

  });
=======
  const [updateDataApi, setUpdateDataApi] = useState({});
>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

<<<<<<< HEAD
  // function delete post 
  const handleDeletePost = async (id) => {

    try {
      const res = await deletePost(id);
      //    console.log(res);
      if (res.status === 200) {
        const newUpdatePosts = data.filter((curPost) => {
          return curPost.id != id;
        });
        setData(newUpdatePosts);

      }
      else {
        console.log("Failed to delete this post:", res.status)
      }

=======
  //   function to delete Post
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", res.status);
      }
>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
  // update handlePost

  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);
=======
  //handleUpdatePost
  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db
  return (
    <>
      <section className="section-form">
<<<<<<< HEAD
        <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
=======
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
<<<<<<< HEAD
                <p>{id}</p>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
=======
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
>>>>>>> f8c8d41247f85914c4f263e2983a93dceb1499db
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
export default Posts;
