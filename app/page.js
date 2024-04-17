"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const DeleteHandler=(i)=>{
    let copytask=[...mainTask];
    copytask.splice(i,1);
    setMainTask(copytask);
  }


  let renderTask=<h2>No task avilable</h2>;
  if(mainTask.length>0){


    renderTask=mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex items-center justify-between mb-5">
         <div className="flex justify-between w-2/3">
           <h5 className="text-xl ">{t.title}</h5>
           <h6>{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          DeleteHandler(i);
        }}
        className="text-white px-4 py-2 rounded font-bold bg-red-500">Delete</button>
        </li>
        
      );
    });
  }

  
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My todo list</h1>

   <form onSubmit={SubmitHandler}>
    <input
    
    type="text"
    className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
    placeholder="Enter text here"
    value={title}
    onChange={(e)=>{
      setTitle(e.target.value)
    }}
    />
    
    <input
     
     type="text"
     className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
     placeholder='Enter description here'
     value={desc}
    onChange={(e)=>{
      setDesc(e.target.value)
    }}
     />
     <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Addd Task</button>
   </form>

  <hr/>
    <div className='p-8 bg-slate-200'>
      {renderTask}
    </div>
   </>
  )
}

export default page
