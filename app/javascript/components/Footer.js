import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';



class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-buttons">
          <Link to="/">
            <li className="footer-button">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/search">
            <li className="footer-button">
              <i className="fas fa-search"></i>
              <span>Recherche</span>
            </li>
          </Link>
          <Link to='/movie_reviews'>
            <li className="footer-button">
              <i className="fas fa-edit"></i>
              <span>Noter</span>
            </li>
          </Link>
          <Link to="/bookmarks">
            <li className="footer-button">
              <i className="fas fa-bookmark"></i>
              <span>A voir</span>
            </li>
          </Link>
        </ul>
      </div>
    )
  }
}



export default Footer;
