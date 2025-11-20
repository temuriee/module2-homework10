"use client";

import Link from "next/link";
import { blogs } from "../blogs/blog";

const Head = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-15 ">
      {blogs.map((blog) => {
        return (
          <Link
            key={blog.id}
            href={`http://localhost:3000/${blog.id}`}
            className="border rounded-2xl max-w-[250px] min-h-[300px] bg-black  "
          >
            <h1>Title: {blog.title}</h1>
            <p>Author: {blog.author}</p>
            <img src={blog.image} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default Head;
