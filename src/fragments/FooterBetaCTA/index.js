import React, { Component, PropTypes } from 'react'
import Button from '../../components/Button'
import Auth from '../../components/Auth'
import styles from './index.css'

const propTypes = {
  children: PropTypes.any
}
export default class FooterBetaCTA extends Component {
  render() {
    return (
      <Auth loggedInComponent={<span />}>
        <div className={styles.ctaBottom}>
          <div className={styles.ctaBottomInner}>
            <div className={styles.ctaBottomRowOne} />
            <div className={styles.ctaBottomRowTwo}>
              <h2 className={styles.ctaBottomCopy}>
                The ZMGC Chapter's Platform is coming
              </h2>
              <Button
                kind='yellow'
                className={styles.btn}
                style={{ display: 'inline-block', marginTop: 20 }}
                onClick={this.login}
              >
                Sign up for early access
              </Button>
            </div>
          </div>
        </div>
      </Auth>
    )
  }
}

FooterBetaCTA.propTypes = propTypes
