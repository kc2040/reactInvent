import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import RateDashboard from '../../features/events/eventDashboard/rateDashboard';
import NavBar from '../../features/events/nav/NavBar';


export default function App() {
  const [formOpen, setFormOpen] = useState(false);
    
  return (
    <>
      <NavBar setFormOpen={setFormOpen}></NavBar>
      <h1>Rate Cards</h1>
      <Container className='main'>
        <RateDashboard formOpen={formOpen}  setFormOpen={setFormOpen}/>
      </Container>
        
    </>
  );
}


