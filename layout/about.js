import Head from "next/head";
import Link from "next/link";

const About = (props) => {
  
    return (  
        <div className="bg-dark pb-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className=" aboo w-100">
    <div className="col-12 titlee text-center"> 
    <div className="com-4-p d-none d-lg-block">
<p className="com-4-p1">31</p>
<p className="com-4-p2">مشروع</p>
</div>
<div className="mcom-4-p d-block d-lg-none">
<p className="mcom-4-p1">31</p>
<p className="mcom-4-p2">مشروع</p>
</div>
    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<img style={{ width: '100%' }} src="015.png" />
<Link href={`/`}>
          <a className="work" aria-current="page" >من أعمالنا</a>
          </Link>
</div>
    );
}
 
export default About;