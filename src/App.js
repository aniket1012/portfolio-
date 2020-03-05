import React from 'react';
import './App.css';

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl'

import Main from './Components/Main'
import { Link } from 'react-router-dom'


function App() {
  return (
    < div className = "demo-big-content" >
         <Layout>
             <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Aniket Patel</Link>} scroll>
                 <Navigation>
                     {/* <Link to="/aboutme" style={{fontSize: 18}}>About Me</Link> */}
                     <Link to="/contact" style={{fontSize: 18}}>Contact</Link>
                 </Navigation>
             </Header>
             <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>}>
                 <Navigation>
                     {/* <Link to="/aboutme" style={{fontSize: 18}}>About Me</Link> */}
                     <Link to="/resume" style={{fontSize: 18}}>Resume</Link>
                     <Link to="/projects" style={{fontSize: 18}}>Projects</Link>
                     <Link to="/contact" style={{fontSize: 18}}>Contact</Link>
                 </Navigation>
             </Drawer>
             <Content>
                 <Main/> 
             </Content>
         </Layout>
     </div>
    
  );
}

export default App;
