import React from 'react'

import Container from './Container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and <a href="https://es.reactjs.org/">React</a>
    
    </div>
  </Container>
)

export default Footer
