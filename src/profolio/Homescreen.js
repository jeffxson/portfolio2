import React from 'react'
import {  Container,  } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Homescreen = () =>  {
    return (
        <> 
        <div className='her1'
        >
            <Container >  
        <h1 > Anyanwu Ugochukwu </h1>
        <h2 >  Web Developer.  </h2>
        <div className  =" py-3">
             <SocialIcon className  ="svg" url="https://twitter.com/" />
               <SocialIcon className  ="svg" url="https://facebook.com/" />
               <SocialIcon className  ="svg" url="https://instagram.com/" />
               <SocialIcon className  ="svg" url="hhttps://linkedin.com/in/jeffrey-anyanwu-6a0543214" />
               <SocialIcon className  ="svg" url="https://github.com/jeffxson" />
       
        </div>
        </Container>
        
       
        </div>
        

        </>

    )
}

export default Homescreen
