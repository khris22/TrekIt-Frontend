import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';

export class About extends Component {
  render() {
    return (
      <div>
        <Divider />
        <Container textAlign='justified'>
          <Header as='h2'>ABOUT trekIt</Header>
          <p>
            trekIt is an app for everyone who likes doing outdoor adventures.
            Here you can track all the locations or parks that you went to and
            all the adventures you did. It also uses Geocoder that helps you
            search your location and MapBox so you can visually track all the
            places you've been.
          </p>
          <Header as='h3'>How to use:</Header>
          <p>
            trekIt is fairly easy to use. You will be welcomed on the homepage
            and to start tracking, click on 'Your Dashboard' button. Here, you
            can see your map and search for the location that you want to add on
            your list. Once you have added that location, you can click on that
            particular location card and start logging in your adventures. On
            this page, you will have a form that requires you to put a title for
            your adventure, you can also put in an image url and your memories.
          </p>
          <Header as='h3'>Suggestions or Comments?</Header>
          <p>
            If you have any suggestions or comments, please feel free to click
            on this app's repository here:{' '}
            <a href='https://github.com/khris22/TrekIt-Frontend'>
              trekIt Github
            </a>
          </p>
          <p>Suggestions and comments are highly appreciated, thank you!</p>
          <Header as='h2'>Happy trekkingIt!</Header>
        </Container>
      </div>
    );
  }
}

export default About;
