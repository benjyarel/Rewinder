import React from 'react';
import './Footer.scss'


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer-buttons">
          <li className="footer-button">
            <i className="fas fa-search"></i>
            <span>Recherche</span>
          </li>
          <li className="footer-button">
            <i className="fas fa-edit"></i>
            <span>Noter</span>
          </li>
          <li className="footer-button">
            <i className="fas fa-bookmark"></i>
            <span>Favoris</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer;
