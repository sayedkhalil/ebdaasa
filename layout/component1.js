import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Component1 = () => {
       return (  
        <div className=" rela">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="com-1 d-none d-lg-block">
<div className="com-1-p">
<p className="com-1-p1">20</p>
<p className="com-1-p2">عامًا من الخبرة</p>
</div>
</div>
<div className="mcom-1 d-block d-lg-none">
<div className="mcom-1-p">
<p className="mcom-1-p1">20</p>
<p className="mcom-1-p2">عامًا من الخبرة</p>
</div>
</div>
</div>
    );
}
 
export default Component1;