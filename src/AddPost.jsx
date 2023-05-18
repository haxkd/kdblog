import React, { useState } from "react";
import { db } from "./firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
export const AddPost = () => {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  function toSeoUrl(url) {
    return url
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace(/&/g, "-and-")
      .replace(/[^a-z0-9\-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-*/, "")
      .replace(/-*$/, "");
  }
  const savePost = async (e) => {
    e.preventDefault();
    var blog_slug = toSeoUrl(title) + "-" + Math.floor(Math.random() * 99999);
    // var blog_date = generateDate();

    await setDoc(doc(db, "kdblog", blog_slug), {
      blog_title: title,
      blog_desc: desc,
      created: Timestamp.now(),
    });
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <header
        className="masthead"
        style={{ backgroundImage: `url('assets/img/contact-bg.jpg')` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>Add A Post</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p className="text-danger text-center">
                Please Fill all the required fieled.!
              </p>
              <div className="my-5">
                <form id="contactForm">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      onChange={(e) => setTitle(e.target.value)}
                      id="name"
                      value={title}
                      type="text"
                      placeholder="Enter your name..."
                    />
                    <label htmlFor="name">Blog Title</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Enter your message here..."
                      style={{ height: "12rem" }}
                    ></textarea>
                    <label htmlFor="message">Description</label>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary text-uppercase"
                    onClick={savePost}
                    id="submitButton"
                    type="submit"
                  >
                    Save Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
