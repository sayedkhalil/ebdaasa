import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Cover = (props) => {
       return (  
        <div className="mt-1 rela">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
{/* <Carousel infiniteLoop="true" autoPlay={true} interval={2000} showStatus={false} transitionTime={2000}	showThumbs={false}>
               
                  { props.data.map((item) => (
             <div key={item}>
           <img src={item} alt="شركة الإبداع السعودي"/>
             </div>
            ))}
              </Carousel> */}
              <Fade>
        {props.data.map((fadeImage) => (
          <div key={fadeImage}>
            <img style={{ width: '100%' }} src={fadeImage} />
            
          </div>
        ))}
      </Fade>

              

</div>
    );
}
 
export default Cover;