import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { useState } from "react";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

// collecting blogs from blogs.json
// display them
const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allblogs);
  const [count, setcount] = useState(2)
  

  const fetchData = async ()=>{
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`);
    setcount(count+2);
    let data = await d.json()
    setblogs(data); 

  }


  // useEffect(,[])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blog) => {
          return (
            <div key={blog.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.content.substr(0, 100)}...</p>
            </div>
          );
        })}
        </InfiniteScroll>
        
      </main>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allblogs = await data.json();

//     return {
//       props:{allblogs},
//     }
// }

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allcount = data.length ;
  let myfile;
  let allblogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs,allcount },
  };
}

export default Blog;
