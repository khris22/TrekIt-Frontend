import React from 'react';
import { Container, Divider } from 'semantic-ui-react';

function FooterComponent() {
  return (
    <div>
      <Divider />
      <Container textAlign='right'>
        <footer>
          <small>
            &copy; 2020 <strong>trekIt by Khris P.</strong>
          </small>
        </footer>
      </Container>
      <br />
    </div>
  );
}

export default FooterComponent;
