import React from 'react';
import { Header, Button, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import bg from '../../images/bg.png';

function Home() {
  return (
    <div>
      <Divider />
      <Container
        textAlign='center'
        style={{
          width: 750,
          height: 550,
          position: 'responsive',
          // opacity: 0.5,
          display: 'block',
          backgroundImage: `url(${bg})`,
        }}>
        <br />
        <Header as='h1'>WELCOME</Header>
        <Header as='h3'>Keep your adventures alive with trekIt!</Header>

        <Link to='/locations' className='content'>
          <Button size='massive' positive>
            Start trekkingIt!
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
