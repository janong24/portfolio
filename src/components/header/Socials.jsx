import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {SlSocialGithub} from 'react-icons/sl'
import {SlSocialDribbble} from 'react-icons/sl'

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'><SlSocialLinkedin /></a>
      <a href='https://github.com' target='_blank'><SlSocialGithub /></a>
      <a href='https://dribbble.com' target='_blank'><SlSocialDribbble /></a>
    </div>
  )
}

export default Socials