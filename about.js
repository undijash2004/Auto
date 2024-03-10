import React from 'react' 
import { Link } from 'react-router-dom' 
function About() { 
  return ( 
    <> 
    <div><h1>About</h1></div><br/> 
    <Link to ="/">Home</Link> 
    <br/> 
    <Link to ="/Contact">Contact</Link> 
    <br/> 
    </> 
  ) 
} 
 
export default About