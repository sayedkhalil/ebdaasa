import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
const Services = () => {

  const [services,setservices]=useState([{title:"التصميم المعماري",img:"021.jpg"},
  {title:"التصميم والاستشارات الهندسية",img:"022.jpg"},
  {title:"التخطيط العمراني والتصميم الحضاري",img:"023.jpg"},
  {title:"إدارة المشروعات والإشراف على التنفيذ",img:"024.jpg"},
  {title:"التراث العمراني",img:"025.jpg"},
  {title:"فحص التربة والأساسات",img:"026.jpg"},
  {title:"الديكور الداخلي",img:"027.jpg"},
  {title:"مسح الأراضي والمسح الهندسي",img:"028.jpg"},
])


    


    return ( 
        <div className=" bg-dark">
            <div className="">
            <Head>
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title>خدماتنا</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai&display=swap" rel="stylesheet"></link>
   <link rel="icon" href="/icon.svg" type="image/x-icon" />
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
       
    </script>
    <div className=" d-none d-lg-block w-100 ">
    <div className="row serv0 ">
     {services.map((x)=>(
        <div className="col-3 p-2">
      <div className=" serv" style={{backgroundImage:`url(/${x.img})`}} key={x.title}>
      <p className="text-light serv-p">{x.title}</p>
      </div>
      </div>
      ))}
      </div>
      </div>
      <div className="row d-block d-lg-none mserv0">
     {services.map((x)=>(
        <div className="col-12 p-2">
      <div className=" serv" style={{backgroundImage:`url(/${x.img})`}} key={x.title}>
      <p className="text-light serv-p">{x.title}</p>
      </div>
      </div>
      ))}
      </div>
    </div>
    </div>
     );
}
 
export default Services;
