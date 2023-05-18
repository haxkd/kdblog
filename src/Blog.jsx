import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
export const Blog = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    let d = doc(db, "kdblog", params.slug);
    getDoc(d).then(function (val) {
      setBlog(val.data());
    });
    console.log("single is",blog)
  },[]);

  return (<>hello</>);
};
