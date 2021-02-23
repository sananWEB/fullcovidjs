import React,{useEffect} from 'react'

function Title(a) {
     useEffect(()=>{
    let title=document.title=a;
   // console.log(title)
  },[])
}

export default Title;
