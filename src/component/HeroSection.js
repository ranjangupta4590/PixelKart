import React, { useContext } from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import { AppContext } from '../context';

const HeroSection = (props) => {
  const Wrapper = styled.section`
    padding: 4rem 0  5rem 4rem;
  .section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 12rem;
    border-radius:9px;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    max-width: 60rem;
  }
  .section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 90%;
    ${'' /* box-shadow:10px 10px grey;
    transform:translate(-3px,3px); */}
  }
    `;

  const { name, image } = useContext(AppContext);

  return (
    <Wrapper>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='section-data'>
          <p className="hero-top-data">
            This is your pixelKart page
          </p>
          <h1 className="hero-heading"> {name}</h1>
          <p className="pb-7 text-gray-800"> Hello!  A Coder, Developer, youtuber and freelancer. You are at
            right place where you can get high quality images for your websites.
          </p>
          <button type="button" class="text-white w-[9rem] hover:scale-105 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-1.5xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <NavLink to='/contact'>Join Us</NavLink>
          </button>
        </div>
        <div className='section-img'>
          <picture>
            <img src={image} className="hero-img  border rounded-lg transition-all duration-700 ease-in-out w-full hover:-translate-x-3 hover:-translate-y-3" alt='hero-img' />
          </picture>
        </div>
      </div>
    </Wrapper>
  )
}

export default HeroSection;