import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
const Jops = () => {

  const [services,setservices]=useState([{title:"مهندس مدني",exp:"20 عام"},
  {title:"مساح",exp:"5 أعوام"},
  {title:"معماري",exp:"10 أعوام"},
  {title:"مخطط زمني",exp:"5 أعوام"},
  {title:"مصور",exp:"5 أعوام"},
  {title:"محاسب",exp:"10 أعوام"},
  {title:"أخصائي موارد بشرية",exp:"5 أعوام"},
  {title:"مهندس / حاسب كميات",exp:"15 عام"},
])


    


    return ( 
        <div className=" bg-dark">
            <div className="">
                <img className="w-100" src="100.jpg" alt="" />
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title>التوظيف</title>
   <link rel="icon" href="" type="image/x-icon" />
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
       
    </script>
    
      <div className="row mt-1 serv4">
     {services.map((x)=>(
        <div className="col-12 col-lg-3  p-2">
      <div className=" serv2"  key={x.title}>
      <p className=" serv2-p">{x.title}</p>
      <p className=" serv2-p1">{x.exp}</p>
      <p className=" serv2-p2">لمزيد من التفاصيل</p>
      </div>
      </div>
      ))}
      </div>
    </div>
    </div>
     );
}
 
export default Jops;
