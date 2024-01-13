import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc, query, where} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useAppContext } from "../AppContext";
import { async } from "@firebase/util";
const Cart = () => {
  const [cart,setcart]=useState({})
  const [categ,setcateg]=useState([])
  const [mycart,setmycart]=useState([])
  const [appState, setAppState] = useAppContext()
  useEffect(()=>{
    const o =[]
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setcateg(myArray)
    var my=myArray.forEach(et=>o.push({code:et.code,title:et.title}))
    setmycart(o)
       return myArrayFromLocalStorage
  },[])
  const onname = (e) => setcart({...cart,name:e.target.value,mycart:JSON.stringify(mycart)})
  const ontele = (e) => setcart({...cart,tele:e.target.value})
  const onemail = (e) => setcart({...cart,email:e.target.value})
  const onmsg = (e) => setcart({...cart,msg:e.target.value})
  const onsend = async(e)=>{
    e.preventDefault() 
      const docRef = await setDoc(doc(db, "orders", cart.tele), cart); 
      setcart({name:"",tele:"",email:"",msg:"",mycart:""}) 
      setcateg([])
      setmycart([])
      localStorage.removeItem("mycart")
      setAppState([])

    

  }

    return ( 
        <div className="container">
            <div className="mt-5">
            <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <title>مصنع فرسان الإنشاءات  للصناعة</title>
   <link rel="icon" href="wew.png" type="image/x-icon" />
            </Head>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
    crossOrigin="anonymous">
    </script>
    <div className="row w-100">
    <h2 className="col-12 col-lg-3 title ms-auto">إنهاء طلبات التسعير</h2></div>
    <div className="row col-12 flex-row-reverse  ">
    {
        categ.map((item)=>(
            <div className="col-12 col-lg-3 p-4 " key={item.code} >
             <Image className="col-12 col-lg-3 border border-info p-1 pointer1" onClick={(e)=>handelrouter(e,item.code)}  loader={() => `${item.img}?w=500px`} src={item.img} unoptimized="false"    width={"500px"}
      height={"400px"}/>
            <h6 className=" ms-auto m-3 title-img"> {item.title} </h6>
            </div>
        ))
    }         
                  
  </div>
  <form onSubmit={onsend}>
  <div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"onChange={onname} value={cart.name} required/>
  <span className="input-group-text bg-primary text-light " id="inputGroup-sizing-sm">الاسم</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto required">
  <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.tele} onChange={ontele} required/>
  <span className="input-group-text bg-primary text-light" id="inputGroup-sizing-sm">رقم الجوال</span>
</div>
<div className="input-group input-group-lg border-success mb-3 w-75 ms-auto">
  <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={cart.email} onChange={onemail}/>
  <span className="input-group-text bg-primary text-light" id="inputGroup-sizing-sm">البريد الإلكتروني</span>
</div>
<div className="input-group  mb-3 w-75 ms-auto">
  <textarea className="form-control" aria-label="With textarea" onChange={onmsg} value={cart.msg}></textarea>
  <span className="input-group-text bg-primary text-light">اكتب رسالتك</span>
</div>
< input type="submit" className="btn btn-success my-3"value="إضافة لطلب التسعير" onSubmit={onsend}/>
</form>
    <a className="btn btn-light my-3 mx-2" href="https://api.whatsapp.com/send?phone=0501133232"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل واتساب</a>
    </div>
    
    </div>
     );
}
 
export default Cart;
