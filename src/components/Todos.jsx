
import React, { useEffect, useState } from 'react'




const Todos = () => {

    const [todos, setTodos] = useState([]);
   
    
    let [form ,setForm] =useState( {
      username:"",
      email:"",
      password:"",
      age:0,
      isIndian:false,
      city:"",
      salary:0,
  });


  const handlchange =(e) => {
      let {name ,value,checked,type ,files} =e.target;
    
      if(type === "checkbox"){
      setForm({
          ...form,
          [name]:checked,
      });
  }else if(type === "file"){
       setForm({
          ...form,
          [name]:files,
      });
  }else{
      setForm({
          ...form,
          [name]:value,
      }); 
  }
};

const handlSubmit =(e) => {
   e.preventDefault();
  //  console.log(form)

  //  console.log(newTodo)

    
        
    fetch("http://localhost:8080/todos", {
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify({
            value:form.age,
            isCompleted: false,
            username:form.username,
            email:form.email,
            city:form.city,
            gender:form.gender,
            userresume:form.userresume,
            salary:form.salary,
        }),
    })
    .then((r) => r.json())
    .then((d) => {
        setTodos([...todos, d])
        

      // console.log(d)
    });
    setForm({ username:"",
    email:"",
    password:"",
    age:0,
    isIndian:false,
    city:"",
    salary:0,})
  };
     
  

  useEffect(() => {

    fetch("http://localhost:8080/todos")
  .then((r) => r.json())
  .then((d) => {
    setTodos(d)
    // console.log(d)
  });

  },[]);
  
  
  return (
    <div>Todos
       <br />

        <form onSubmit={handlSubmit}>
                <div>
                    <label htmlFor="">Name :</label>
                    <input type="text"
                    name="username"
                    placeholder="Enter name..."
                    value={form.username}
                    onChange={handlchange}
                     />
                       <label htmlFor="">Age :</label>
                    <input type="number"
                    name="age"
                    placeholder="Enter age..."
                    value={form.age}
                    onChange={handlchange}
                     />
                       <label htmlFor="">Email :</label>
                    <input type="email"
                    name="email"
                    placeholder="Enter email..."
                    value={form.email}
                    onChange={handlchange}
                     />
                      <label htmlFor="">Email :</label>
                    <input type="email"
                    name="email"
                    placeholder="Enter email..."
                    value={form.email}
                    onChange={handlchange}
                     />
                </div>
                <br />
                
                
                <div>
                    <label htmlFor="">Salary :</label>
                    <input type="number"
                    name="salary"
                    placeholder="Enter salary..."
                    value={form.salary}
                    onChange={handlchange}
                     />
                      <label htmlFor="">password :</label>
                    <input type="password"
                    name="password"
                    placeholder="Enter password..."
                    value={form.password}
                    onChange={handlchange}
                     />
                       <label htmlFor="">City :</label>
                  <select name="city"
                  value={form.city}
                  onChange={handlchange}
                  >
                      <option value="Delhi">Delhi</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                  </select>
                </div>
               <br />

                <div>
                <label htmlFor="">:Is Indian</label>
                    <input type="checkbox"
                    name="isIndian"
                    value={form.isIndian}
                    onChange={handlchange}
                     />
                    <br />
                     <label htmlFor="">Male</label>
                   <input
                     type="radio"
                     name="gender"                 
                     value={"male"}
                     onChange={handlchange}
                    />
                    <br />
                  <label htmlFor="">FeMale</label>
                    <input
                     type="radio"
                     name="gender"                 
                     value={"Female"}
                     onChange={handlchange}
                    />
                    <br />
                    <label htmlFor="">User Resume :</label>
                    <input type="file"
                    name="resume"
                    files={form.resume}
                    onChange={handlchange}
                     />
                </div>
               <br />
               <br />
                <button style={{width:"120px",height:"40px",color:"teal",borderradius:"10px "}} type='submit'>Submit</button>
               
            </form>  
    </div>
  )
};

export default Todos