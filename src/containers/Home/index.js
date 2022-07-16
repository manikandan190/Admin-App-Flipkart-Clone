import React from 'react';
import { Jumbotron,Row,Col,Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';   
import { NavLink } from 'react-router-dom';

const Home=(props)=>{



   
    return(
        <Layout sidebar>
       


      {  /*<Jumbotron style={{margin:'5rem',background:'white'}} className='text-center'>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur leo vitae leo pharetra, vel lobortis enim fermentum. Vivamus vel posuere tortor, semper suscipit quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus porta odio at diam efficitur placerat. Cras pharetra pretium ex. Maecenas ac elit eu leo ornare efficitur. Nulla facilisi. Nam sed ipsum eu augue mollis fringilla vitae eget ante. Ut pharetra semper nunc nec sollicitudin. Sed congue, sapien ac facilisis luctus, metus lacus convallis orci, nec eleifend lectus nunc non erat. Cras venenatis nisi orci, ac porttitor turpis finibus sed.</p>
    </Jumbotron>*/}
        </Layout>
    )
}

export default Home;
