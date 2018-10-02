import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import logo from './DOI-2x.png'

const Footer = () => (
  <footer
    style={{
      background: '#086996',
      marginBottom: '0',
    }}
  >
    <div class='footer-content'
    >
        <div
          class='footer-img'
        >
          <a href='https://doi.gov/'>
              <img
                  src={logo}
                  alt={`Department of the Interior logo`}
                  style={{
                    marginRight: rhythm(1 / 2),
                    paddingLeft: '7px',
                    margin: 'auto',
                    maxWidth: '130px',
                  }}
              />
          </a>
        </div>
      <div
        class='footer-contact'
        style={{
          display: 'block',
        }}  
      />
      <h3 style={{ margin: 0 }}>
        <a
          href="https://www.onrr.gov/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Office of Natural Resources Revenue
        </a>
      </h3>
      <p
        style={{
          fontSize: '.8rem',
          color: 'white',
          lineHeight: rhythm(-1),
        }}
      >
        U.S. Department of the Interior <br />
        1849 C Street NW MS 5134 <br />
        Washington, D.C. 20240 <br />
        <a
          style={{
            color: 'white',
          }} 
          href="mailto:nrrd@onrr.gov">nrrd@onrr.gov</a>
      </p>
    </div>
  </footer>
)

export default Footer