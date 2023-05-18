import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./firebase";
import { Link } from "react-router-dom";
export const Home = () => {
  let [posts, setPost] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "kdblog"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPost(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(posts);
    });
  }, []);
  return (
    <>
      <header
        className="masthead"
        style={{
          color: "red",
          backgroundImage: `url('assets/img/home-bg.jpg')`,
        }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            
            {posts.map((item, index) => (
              <div key={item.id}>
                <div className="post-preview">
                  <Link to={`blog/${item.id}`}>
                    <h2 className="post-title">{item.data.blog_title}</h2>
                    <h3 className="post-subtitle">{item.data.blog_desc.slice(0, 200)}...</h3>
                  </Link>
                </div>
                <hr className="my-4" />
              </div>
            ))}

            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
