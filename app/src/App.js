import React, { Component } from 'react';

import Overlay from './Components/Overlay/Overlay';
import Modal from './Components/Overlay/Modal/Modal';

import Corner from './Assets/Corner.jpeg';
import Car from './Assets/Car.jpeg';
import Basketball from './Assets/Basketball.jpeg';
import Damage from './Assets/Damage.jpeg';
import Castle from './Assets/Castle.jpeg';
import Ballroom from './Assets/Ballroom.jpeg';

class App extends Component {
  state = {
    yOffset: window.innerHeight,
    modalOpen: false,
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
    ]
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
    return (
      <div>
        <div className='Toolbar'>
          <a onClick={(event) => {this.ScrollToSection(0, event)}}>Home</a>
          <a onClick={(event) => {this.ScrollToSection(1, event)}}>About Us</a>
          <a onClick={(event) => {this.ScrollToSection(2, event)}}>History</a>
          <a onClick={(event) => {this.ScrollToSection(3, event)}}>Receptions</a>
          <a onClick={(event) => {this.ScrollToSection(4, event)}}>Become A Member</a>
          <a onClick={(event) => {this.ScrollToSection(5, event)}}>Contact Us</a>
          <a onClick={(event) => {this.ScrollToSection(6, event)}}>FAQ</a>
        </div>
        <div className='Home'>
          <div style={{width: '50%'}}></div>
          <div className='TextBox'>
            <h1>The Hardin County Armory</h1>
            <p style={{fontSize: '1.8rem'}}>The Perfect Venue For A Historic Event</p>
          </div>

        </div>
        <div className='Receptions'>
          <h1>About Us</h1>
        </div>

        <div className='History'>
          <h1>Our History</h1>
            <div className='Row'>
              <img src={Corner} alt='Corner' onClick={(event) => {this.onModalOpened(event, 0)}}/>
              <img src={Car} alt='Car' onClick={(event) => {this.onModalOpened(event, 1)}}/>
              <img src={Basketball} alt='Corner' onClick={(event) => {this.onModalOpened(event, 2)}}/>
            </div>
          
            <div className='Row'>
              <img src={Damage} alt='Corner' onClick={(event) => {this.onModalOpened(event, 3)}}/>
              <img src={Castle} alt='Car' onClick={(event) => {this.onModalOpened(event, 4)}}/>
              <img src={Ballroom} alt='Corner' onClick={(event) => {this.onModalOpened(event, 5)}}/>
            </div>
        </div>
        <Overlay visible={this.state.modalOpen} clicked={this.onModalClosed}>
          <Modal>
            {modalContents}
          </Modal>
        </Overlay>

        <div className='Receptions'>
          <h1>Receptions</h1>
        </div>
        <div className='Membership'>
          <h1>Become A Member</h1>
        </div>
        <div className='Contact'>
          <h1>Contact</h1>
        </div>
        <div className='FAQ'>
          <h1>FAQ</h1>
          <div className='Column'>
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
        </div>
      </div>
    );
  }
}

export default App;
