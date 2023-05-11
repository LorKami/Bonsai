import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from "react-scroll";
import '../Monitor/Monitor.css';

import { FaTwitter, FaLink } from 'react-icons/fa';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

import bonsai1 from '../../images/bonsai1.png';
import bonsai3 from '../../images/bonsai3.png';


function handleNavClick(section) {
  animateScroll.scrollTo(section);
}

const Monitor = () => {
  return (
    <div>
      
      <section id='Home'>
    <div className='NavbarSection'>
      <div className='Navbarboxes'>
        <div className='NavbarMenuLeft'>
        <Link to="Monitor" smooth={true} spy={true} offset={0} duration={1500}><a>Home</a></Link>
        <Link to="About" smooth={true} spy={true} offset={0} duration={1500}><a>About</a></Link>
        <Link to="WhitePaper" smooth={true} spy={true} offset={0} duration={1500}><a>WhitePaper</a></Link>
        </div>
        <div className='NavbarLogoCenter'>
          <h2>BONSAI</h2>
        </div>
        <div className='NavbarSocialsRight'>
          <div className='NavbarSocialsRightFix'>
          <a href='https://twitter.com/_BonsaiCoin' target='_blank'><FaTwitter size='1.5rem'/></a>
          <a href='#' target='_blank'><FaLink size='1.5rem'/></a>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id='Monitor'>

      <div className='MonitorSection'>

        <div className='MonitorBoxes'>

          <div className='MonitorBonsai'>
            <img src={bonsai1} />
          </div>

          <div className='MonitorIntro'>

            <div className='MonitorInfo'>
            <h2>WELCOME TO BONSAI</h2>
            <div className='MonitorInfoText'>
            <p>Behold the majestic sight as our magnificent Bonsai trees take root within the Solana ecosystem!</p>
            <p>$BON is a community-driven project created by Solana maxis, with the firm belief that we can enhance the ecosystem and, most importantly, provide significant value to our holders</p>
            <p>This initiative offers a chance to enrich the Solana ecosystem and, what's even more significant, to give back to the Solana community</p>
            </div>
            </div>

            <div className='MonitorButtons'>
            <a href='#' target='_blank'>Buy on Pinksale</a>
            <a href='#' target='_blank'>View BirdEye</a>
          </div>

          </div>
          
        </div>
      </div>
    </section>

    <section id='About'>
      <div className='AboutSection'>
        <div className='Aboutbox'>
          <div className='AboutText'>
            <img src={bonsai3} />
            <h2>ABOUT US</h2>
            <p>Whispers may suggest testing meme names ad infinitum, but pay no heed to their advice. Instead, let the resounding call of Bonsai echo through time, challenging all who hear it to embrace this sublime choice</p>
          </div>
        </div>
      </div>
    </section>

    <section id='WhitePaper'>

      <div className='WhitePaperSection'>

        <div className='WhitePaperBoxes'>
        <h2>WHITEPAPER</h2>

        <div className="accordion">

     <input type="radio" name="select" class="accordion-select" checked />
    <div className="accordion-title"><span>Unite with the Community:</span></div>
    <div className="accordion-content">Here, no centralized authority reigns, nor does a governing body of Pepe Mama hold sway. Power is bestowed upon the valiant token holders who, with a shared purpose, strive to safeguard the entity's greater good</div> 
         
         <input type="radio" name="select" class="accordion-select" />
    <div className="accordion-title"><span>Embark on the Journey of Development:</span></div>
    <div className="accordion-content">Behold the meticulously crafted smart contract, born from fervent demand for an unwavering meme token. Witness the renunciation of our contract, discarding all taxes on buy, sell, and transfer, as the entirety of liquidity courses through our veins</div> 
        
         <input type="radio" name="select" class="accordion-select" />
    <div className="accordion-title"><span>Total Supply</span></div>
    <div className="accordion-content">1,000,000,000,000 Bonsai tokens stand ready, poised to ignite the spirit of growth and prosperity.</div> 
         
         <input type="radio" name="select" class="accordion-select" />
    <div className="accordion-title"><span>Taxes</span></div>
    <div className="accordion-content">Rejoice, for Bonsai finds strength in the inherent value it holds, transcending mere monetary gains. With a resolute stance, we declare a 0% tax on every transaction.</div> 
</div> 
        </div>
      </div>

    </section>

    <div className='BottonUp'>
      <Link to="Home" smooth={true} spy={true} offset={0} duration={1500}><BsFillArrowUpSquareFill size='2rem'/></Link>
      </div>

    <div className='FooterSection'>
      <div className='FooterBox'>
        <p>COPYRIGHT © 2023 BONSAI - ALL RIGHTS RESERVED</p>
      </div>
    </div>

    </div>
  )
}

export default Monitor