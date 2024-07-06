import React,{useState} from "react";
import styles from "@/styles/Contant.module.css";



const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [desc, setdesc] = useState("");
  
  const handlesubmit = async (e)=>{
    e.preventDefault();
    const data = {name,email,phoneno,desc}

    try {
      let response = await fetch("http://localhost:3000/api/postcontact",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      })
  
      let data1 = await response.json();
  
      if(data1){
        console.log('Success',data1)
        setEmail("")
        setPhoneno("")
        setdesc("")
        setname("")
        alert("Thanks For contacting Us")
      }
      
    } catch (error) {
      console.log('Error:',error);
    }
    

  }
  
  const handleChange = (e)=>{
    if(e.target.name=='phoneno'){
      setPhoneno(e.target.value);
    }
    if(e.target.name=='name'){
      setname(e.target.value);
    }
    if(e.target.name=='email'){
      setEmail(e.target.value);
    }
    if(e.target.name=='desc'){
      setdesc(e.target.value);
    }
  }
  return (
    <div className={styles.container}>
      <h1 style={{textAlign:"center"}}>Contact Us</h1>
      <form onSubmit={handlesubmit}>
      <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name: 
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            value={name}
            name="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
            Email address: 
          </label>
          <input
            type="email"
            value={email}
            className={styles.input}
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            placeholder="codinghunter@gmail.com"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phoneno" className={styles.formlabel}>
            Phone No.: 
          </label>
          <input
            type="text"
            name="phoneno"
            value={phoneno}
            className={styles.input}
            onChange={handleChange}
            id="phoneno"
            placeholder="9876543210"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Concerns: 
          </label>
          <textarea
            value={desc}
            name="desc"
            type="text"
            className={styles.input}
            onChange={handleChange}
            id="desc"
            placeholder="Elevorate Your Concerns"
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
