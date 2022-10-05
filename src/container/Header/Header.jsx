import React from 'react';
import { SubHeading } from '../../components';
import{images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__headerapp__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title='The new goodess'/>
      <h1 className="app__header-h1"> This is good menu</h1>
      <p className="p__opensans" style={{margin:'3rem 0'}}> tell me  ua order</p>
      <button type='button' className='custom__button'>See menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img "/>
      </div>

    </div>

 

);

export default Header;
