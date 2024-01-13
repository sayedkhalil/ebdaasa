import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { db, storage } from "../../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc, query, where } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../../AppContext";

const Product = ({item}) => {
    const router = useRouter()
    const [appState, setAppState] = useAppContext()
    const [categ,setcateg]=useState([])
   const product=JSON.parse(item)
   const img =product.imges
   const category=product.category
    useEffect(async()=>{
    const pro=[]
    const prodlist = collection(db, 'broductes');
    const q = query(prodlist, where("category", "==",category));
    const prodsnapshot= await getDocs(q);
     prodsnapshot?prodsnapshot.forEach(doc =>{ pro.push({code:doc.data().code,
        title:doc.data().title,category:doc.data().category,imges:doc.data().imges[0]})  }):pro
       const mu= pro.length>4?pro.slice(0,4):pro
        setcateg(mu)

   },[])
   const handelrouter=(e,path)=>{
    e.preventDefault() 
    router.push(`../product/${path}`)
}
   const oncart =async()=> {
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
         myArray.push({"code":item.code,"title":item.title,"img":item.imges})
        localStorage.setItem("mycart", JSON.stringify(myArray))
        setAppState(myArray)
        myArray=[]
        }  
   return (  
        <div className="container">
            <div className="mt-5">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <meta name="description" content={product.des} />
    <meta name="keywords" content={product.key} />
    <link rel="icon" href={img[0]} type="image/x-icon" />
    <title>{product.title}</title>
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    <div className="row w-100">
    <h1 className="col-12 col-lg-3 title ms-auto">{product.title}</h1>

</div>
    <div className="col-12 col-lg-8 mx-auto ">
    <Carousel infiniteLoop="true"	>
    {
       img.map((item)=>(
            <div className="" key={item} >
             <img className=""  src={item}  alt={product.title} />
            
        </div>
        ))
    }
     </Carousel>
                  </div>
                  <div>
                  <h3 className="col-12 col-lg-3 title ms-auto">وصف المنتج</h3>
    <div className="col-12 col-lg-8 mx-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">{product.des}</p> 
    </div>
    <a className="btn btn-light mt-3 mx-2" href="https://api.whatsapp.com/send?phone=0501133232"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل واتساب</a>

 <h3 className="col-12 col-lg-3 title ms-auto mt-3">رأيك يهمنا</h3>
 <div className="input-group input-group-sm mb-3 w-75 ms-auto">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <span className="input-group-text" id="inputGroup-sizing-sm">الاسم</span>
</div>
<div className="input-group  mb-3 w-75 ms-auto">
  <textarea className="form-control" aria-label="With textarea"></textarea>
  <span className="input-group-text">اكتب رسالتك</span>
</div>
<div className="my-3">
    <div className="row ms-auto ">    
     <h5 className="col name m-2">محمد بن علي</h5>
     <img className="col-2 avtar" src="/avtar.png" alt="" />
    </div>
    <div className="col-12 col-lg-8 ms-auto mt-2 border border-success rounded p-4">
       <p className="font-weight-bold text-center">أنصح بالتعامل معهم أهم شئ المواعيد وجودة المنتج</p> 
    </div>


</div>
   
</div>    
</div>
    </div>
     );
}
 
export default Product;
export async function getStaticPaths() {
    const pro=[]
    const prodlist = collection(db, 'broductes');
    const prodsnapshot = await getDocs(prodlist);
     prodsnapshot.docs?prodsnapshot.docs.map(doc =>{ pro.push({code:doc.data().code});   }):[]
    const paths =pro.map((item)=>{
       return{ 
           params:{id:item.code}
       }
    })
  
    return{
        paths,fallback:false
    }
  }
  export async function getStaticProps(context) {
const id        =context.params.id
const docRefpar = doc(db,'broductes',id);
const docSnapar = await getDoc(docRefpar);
const getpartn =  docSnapar.data()?docSnapar.data():[]
   
    return {
      props: {item:JSON.stringify(getpartn)}
    }
  }