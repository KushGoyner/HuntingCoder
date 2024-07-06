import React from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import { useState } from 'react';
import * as fs from 'fs';


// collecting blogs from blogs.json
// display them 
const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allblogs)
  
  // useEffect(,[])


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog)=>{
            return <div key={blog.title} className={styles.blogItem}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3></Link>
              <p>{blog.content.substr(0,100)}...</p>
            </div>
        })}
          
          </main> 
        </div>
  )
};

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs')
//   let allblogs = await data.json();

//     return {
//       props:{allblogs},
//     }
// }

export async function getStaticProps(context){
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allblogs = []
  for(let index=0;index<data.length;index++){
    const item =data[index];
    myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8');
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props:{allblogs},
  }
}

export default Blog