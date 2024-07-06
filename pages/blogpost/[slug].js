import React from "react";
import styles from "@/styles/BlogPost.module.css";
import { useState } from "react";
import * as fs from 'fs';


// find file coresponding to slug
//populate the blogs in page
const Slug = (props) => {
  
  const [Blog, setBlog] = useState(props.myBlog)
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{Blog&&Blog.title}</h1>
        <hr />
        <div>
         {Blog&&Blog.content}
        </div>
      </main>
    </div>
  );
};
// SERVER SIDE PROPS RENDERING
// export async function getServerSideProps(context) {
  
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getbolg?slug=${slug}`)
//     let myBlog = await data.json();
    
//     return {
//       props:{myBlog},
//     }
// }

//GETSTATICPROPS ANS GETSTATICPATHS
export async function getStaticPaths(){
  return {
    paths: [
    {params:{slug:"blogs"}},
    {params:{slug:"blogs-copy"}},
    {params:{slug:"blogs-copy-2"}}
  ],
    fallback: true 
  };
}
export async function getStaticProps(context) {
  const {slug} = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');

  return {
    props:{myBlog:JSON.parse(myBlog)},
  }
}
export default Slug;
