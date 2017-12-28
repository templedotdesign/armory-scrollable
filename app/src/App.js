import React, { Component } from 'react';

import Overlay from './Components/Overlay/Overlay';
import Modal from './Components/Overlay/Modal/Modal';
import ClickableImage from './Components/ClickableImage/ClickableImage';
import CallToAction from './Components/CallToAction/CallToAction';

import Corner from './Assets/Corner.jpeg';
import Car from './Assets/Car.jpeg';
import Basketball from './Assets/Basketball.jpeg';
import Damage from './Assets/Damage.jpeg';
import Castle from './Assets/Castle.jpeg';
import Ballroom from './Assets/Ballroom.jpeg';
import Form from './Assets/Membership.pdf';

import classes from './index.css';

class App extends Component {
  state = {
    yOffset: window.innerHeight,
    modalOpen: false,
    reservationModalOpen: false,
    currentImageIndex: 0,
    historyImages: [
      {
        source: Corner, 
        caption: 'The Hardin County Armory was built in 1894 as a county guard armory. At the time, the adjutant general lived in Kenton, and built the armory with a grand ballroom and sauna.'
      },
      {
        source: Car,
        caption: 'In 1947, the building was partially destroyed by a fire.  Reports claimed the fire began in the basement by a guardsman cleaning rifles.'
      },
      {
        source: Basketball,
        caption: 'The building also served as a gymnasium for the city schools, and on weekends it hosted college basketball and Golden Gloves boxing.'
      },
      {
        source: Damage,
        caption: 'The Hardin County Armory remained in use until 1991, when it was abandoned and stood empty and decaying.' 
      },
      {
        source: Castle,
        caption: 'After attempts by the city, county, and private citizens to tear it down, a group of concerned citizens stepped in to save the building. Now a non-profit foundation, they have worked since 1997 to renovate the building.'
      },
      {
        source: Ballroom,
        caption: 'Today this building is revered by lovers of history, as well as brides looking for the perfect reception site. The Armory’s charm is its history, which includes an exposed brick wall left from the fire in 1947, as well as its castle-like facade.' 
      }
    ],
    imageOverlayVisibility: [false, false, false, false, false, false]
  }

  ScrollToSection = (section, event) => {
    event.preventDefault();    
    window.scroll({
      top: this.state.yOffset * section, 
      left: 0, 
      behavior: 'smooth' 
    });
  };

  onModalClosed = (event) => {
    event.preventDefault();
    this.setState({...this.state, modalOpen: false});
  };

  onModalOpened = (event, index) => {
    event.preventDefault();
    this.setState({...this.state, currentImageIndex: index, modalOpen: true});
  }

  openReservationModal = (event) => {
    event.preventDefault();
    this.setState({...this.state, reservationModalOpen: true});
  }

  closeReservationModal = (event) => {
    event.preventDefault();
    this.setState({...this.state, reservationModalOpen: false});
  };

  onMouseOverImage = (event, index) => {
    event.preventDefault();
    let visibilityArray = [...this.state.imageOverlayVisibility];
    visibilityArray[index] = true;
    this.setState({...this.state, imageOverlayVisibility: visibilityArray});
  };

  onMouseExitImage = (event, index) => {
    event.preventDefault();
    let visibilityArray = [...this.state.imageOverlayVisibility];
    visibilityArray[index] = false;
    this.setState({...this.state, imageOverlayVisibility: visibilityArray});
  };

  render() {
    let modalContents = null;
    if(this.state.modalOpen) {
      modalContents = (
        <div>
          <img src={this.state.historyImages[this.state.currentImageIndex].source} alt='corner' style={{width: '60%'}}/>
          <p>{this.state.historyImages[this.state.currentImageIndex].caption}</p>
        </div>
      );
    }

    let receptionLinks = [
      { 
        address: 'http://www.google.com/calendar/embed?src=33adpgdnk7gblpoi43gfm36g5s@group.calendar.google.com&ctz=America/New_York',
        target: '_blank',
        rel: 'noopener noreferrer',
        title: 'Check Availability',
        clicked: null,
        download: false
      },
      {
        address: null,
        target: null,
        rel: null,
        title: 'Make A Reservation',
        clicked: this.openReservationModal,
        download: false
      }
    ];

    let membershipLinks = [
      {
        address: Form,
        target: null,
        rel: null,
        title: 'Membership Form',
        clicked: null,
        download: true
      }
    ];
    return (
      <div>
        <div className={classes.Toolbar}>
          <a onClick={(event) => {this.ScrollToSection(0, event)}}>Home</a>
          <a onClick={(event) => {this.ScrollToSection(1, event)}}>About Us</a>
          <a onClick={(event) => {this.ScrollToSection(2, event)}}>History</a>
          <a onClick={(event) => {this.ScrollToSection(3, event)}}>Receptions</a>
          <a onClick={(event) => {this.ScrollToSection(4, event)}}>Become A Member</a>
          <a onClick={(event) => {this.ScrollToSection(5, event)}}>Contact Us</a>
          <a onClick={(event) => {this.ScrollToSection(6, event)}}>FAQ</a>
        </div>
        <div className={classes.Home}>
          <div style={{width: '50%'}}></div>
          <div className={classes.TextBox}>
            <h1>The Hardin County Armory</h1>
            <p style={{fontSize: '1.8rem'}}>The Perfect Venue For A Historic Event</p>
          </div>

        </div>
        <div className={classes.About}>
          <h1>About Us</h1>
          <p style={{margin: '0 20px'}}>
            Welcome to the Hardin County Armory, Ohio's oldest and most unique National Guard Armory.  We are 
            a non-profit foundation made up of volunteers who saw the benefit in saving this unique structure.  
            We now operate the Armory as a reception site.  It is a beautiful location for your next event, and 
            we know you will agree.
          </p>
          <div className={classes.Row} style={{margin: '20px 0'}}>
            <div className={classes.Castle}></div>
            <div className={classes.Ballroom}></div>
          </div>
          <h3>Our Board Of Directors</h3>
          <p>President - Ed Rogers</p>
          <p>Vice-President - Mark Doll</p>
          <p>Secretary - Cindy Rogers</p>
          <p>Tresurer - Doris Blum</p>
          <p>Trustees - Rick Hudgel, Jennifer Rogers</p>
          <p>Honorary Chairman - Red Fillinger</p>
        </div>

        <div className={classes.History}>
          <h1>Our History</h1>
            <div className={classes.Row}>
              <ClickableImage 
                index={0} 
                clicked={(event) => {this.onModalOpened(event, 0)}} 
                visible={this.state.imageOverlayVisibility[0]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 0)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 0)}}/>
              <ClickableImage 
                index={1} 
                clicked={(event) => {this.onModalOpened(event, 1)}} 
                visible={this.state.imageOverlayVisibility[1]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 1)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 1)}}/>
              <ClickableImage 
                index={2} 
                clicked={(event) => {this.onModalOpened(event, 2)}} 
                visible={this.state.imageOverlayVisibility[2]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 2)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 2)}}/>
            </div>
          
            <div className={classes.Row}>
              <ClickableImage 
                index={3} 
                clicked={(event) => {this.onModalOpened(event, 3)}} 
                visible={this.state.imageOverlayVisibility[3]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 3)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 3)}}/>
              <ClickableImage 
                index={4} 
                clicked={(event) => {this.onModalOpened(event, 4)}} 
                visible={this.state.imageOverlayVisibility[4]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 4)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 4)}}/>
              <ClickableImage 
                index={5} 
                clicked={(event) => {this.onModalOpened(event, 5)}} 
                visible={this.state.imageOverlayVisibility[5]}
                mouseEnter={(event) => {this.onMouseOverImage(event, 5)}}
                mouseExit={(event) => {this.onMouseExitImage(event, 5)}}/>
            </div>
        </div>
        <Overlay visible={this.state.modalOpen} clicked={this.onModalClosed}>
          <Modal>
            {modalContents}
          </Modal>
        </Overlay>

        <div className={classes.Receptions}>
          <h1>An Event To Remember</h1>
          <p>
            Every little girl dreams of a fairy tale wedding, complete with the castle.  This building has so 
            much to offer for your next event.  The unique historical site is something your guests will have to 
            see to believe.  A diamond in the rough, this beautiful ballroom sets the perfect tone for your event.  
            Upon entering the main ballroom, your guest's eyes turn upward to the 17-foot wide ornate chandelier.  
            With several wall areas showing off exposed brick, and a balcony surrounding the entire 7,500 
            square-foot ballroom, the building itself will be the conversation piece. 
          </p>
          <br/>
          <p>
            The Armory is now taking reservations!  Looking for a unique location for your wedding ceremony 
            and/or reception?  This building is worth a second look!  Your guests will be amazed at what 
            Kenton, Ohio has to offer.
          </p>
          <br/>
          <p>
            This nationally-recognized historical building in our downtown district is an elegant and 
            artistic approach to wedding receptions.  We are within walking distance of several area 
            churches. Offer your guests a chance to attend a wedding with a small-town feel, and avoid the 
            big-city budgets and headaches.
          </p>
          <br/>
          <p>
            This reception site can handle over 350 guests, and offers a unique balcony level for added space 
            and comfort.  Call to schedule your tour today!  Availability is subject to change.
          </p>
          <CallToAction 
            heading='Ready To Save The Date?' 
            details='Click Below To Check For Date Availability Or To Contact Us To Reserve A Date For Your Next Event!' 
            links ={receptionLinks}/>
          <Overlay visible={this.state.reservationModalOpen} clicked={this.closeReservationModal}>
          <Modal>
            <p>Doris's Details</p>
          </Modal>
          </Overlay>
        </div>
        <div className={classes.Membership}>
          <h1>Become A Member</h1>
          <p>
            This should detail member benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris a dolor cursus, volutpat nisi ut, dictum nunc. Donec malesuada eros quis rutrum lacinia. 
            In et pretium quam. Mauris dictum purus orci, ut porta nulla vulputate et. Curabitur aliquet 
            lectus et odio scelerisque consectetur. 
          </p>
          <CallToAction
            heading='Ready To Join?'
            details='Click Below To Download Our Membership Form'
            links={membershipLinks}
          />
          
        </div>
        <div className={classes.Contact}>
          <h1>Contact Us!</h1>
          <div className={classes.Column}>
            <p>For additional information concerning the Armory or a historical tour call or write</p>
            <p>Ed Rogers - 419-673-8955</p>
            <p>Hardin County Armory Restoration Foundation</p>
            <p>P.O. Box 594</p>
            <p>Kenton, OH  43326</p>
            <p>For information concerning renting the Armory call, email or write</p>
            <p>Doris Blum - 567-674-5618</p>
            <p>P. O. Box 594</p>
            <p>Kenton, OH 43326</p>
            <p>jrogers@hardincountyarmory.com</p>
            <p>The Armory is located at</p>
            <p>128 N. Main St.</p>
            <p>Kenton OH 43326</p>
          </div>

        </div>
        <div className={classes.FAQ}>
          <h1>FAQ</h1>
          <div className={classes.Column}>
            <p>
              The Armory provides approximately: 51 round tables which are 6-foot diameter and 24 8‑foot 
              buffet tables with standard 2" tabletop thickness easily accepts skirting as well as 
              approximately 440 chairs.
            </p>
            <p>
              The rental contract is for a 24-hour period, from 9am Saturday until 9am Sunday. 
            </p>
            <p>
              Friday is available for rent as an add-on to a Saturday contract for an additional fee.
            </p>
            <p>
              No date may be held without a deposit.
            </p>
            <p>
              Table linens are not provided by the Armory; neither set-up nor tear-down is provided.
            </p>
            <p>
              The facility is air-conditioned.
            </p>
            <p>
              We have a ramp for handicapped access.
            </p>
            <p>
              Paper products for the restrooms and trash bags are provided by the Armory.  Trash removal is 
              included in the rental fee.
            </p>
            <p>
              We do not have a preferred list of vendors.
            </p>
          </div>
          <footer className={classes.Footer}>
              <p>Created By Temple Design Solutions, 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
