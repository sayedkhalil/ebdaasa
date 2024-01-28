import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
const News = () => {
  const [services,setservices]=useState([])

  const [category,setcategory]=useState([]);
  const de=[]
  
  const [appState, setAppState] = useAppContext();
  const router = useRouter()
  useEffect(async()=>{
      const codelist = collection(db, 'news');
      const codesnapshot = await getDocs(codelist);
      const catolist = codesnapshot.docs?codesnapshot.docs.map(doc =>{ de.push(doc.data());   }):de
      setservices(de)
      console.log(services)
      return catolist
     },[])
  // const handelrouter=(e,path)=>{
  //         e.preventDefault() 
  //         router.push(`product/${path}`)
  //     }
  //     const oncart =async(x,y)=> {
  //     const myArrayFromLocalStorage = localStorage.getItem('mycart')
  //     if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
  //     var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
  //          myArray.push({"code":x,"title":y,"img":z})
  //         localStorage.setItem("mycart", JSON.stringify(myArray))
  //         setAppState(myArray)
  //         }  
      
  
      
  
  
      return ( 
          <div className=" bg-dark">
              <div className="">
                  <img className="w-100" src="100.jpg" alt="" />
              <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <title>أخبارنا</title>
     <link rel="/icon" href="/icon.svg" type="image/x-icon" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
              </Head>
     
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
      crossOrigin="anonymous">
         
      </script>
      
        <div className="row mt-1 serv4">
       {services.map((x)=>(
          <div className="col-12 col-lg-3 err  p-2">
        <div className=" serv2"  key={x.title}>
        <img className="w-100 h-100" src={x.imges[0]} alt="" />   
        <p className=" serv2-p1">{x.title}</p>
        <p className=" serv6-p2">لمزيد من التفاصيل</p>
        </div>
        </div>
        ))}
        </div>
      </div>
      </div>
       );
  }
export default News;
