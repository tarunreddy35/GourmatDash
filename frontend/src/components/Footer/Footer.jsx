import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>Gourmet Dash</h2> 
                <p> "Experience fast and reliable food delivery with our app. Browse a variety of cuisines, place your order, and enjoy delicious meals delivered right to your door." </p>
               
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-245-9999</li>
                    <li>contact@gourmetdash.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className='footer-copyright'> Copyrights 2024 Gourmetdash.com - All Rights Reserved.</p>
        
    </div>
  )
}

export default Footer