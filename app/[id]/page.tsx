"use client";

import { blogs } from "@/features/blogs/blog";
import Link from "next/link";
import { useParams } from "next/navigation";

const Blogs = () => {
  const params = useParams();

  const { id } = params;

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog?.id) return <p>Blog Not Found</p>;

  return (
    <div className="ml-5 mt-5">
      <h1>{blog.title}</h1>
      <p>Author: {blog.author}</p>
      <p>Text: {blog.text}</p>
      <p>Published At: {blog.published}</p>
      <img src={blog.image} alt="" className=" mb-[100px]" />
      <Link
        className="border-2 border-white rounded-[8px] p-[10px] "
        href={"/"}
      >
        Back To Main Page
      </Link>
    </div>
  );
};

export default Blogs;
