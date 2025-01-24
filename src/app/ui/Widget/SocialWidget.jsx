import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://github.com/Arshadvk' className="cs-center">
        <Icon icon="fa6-brands:github" />
      </Link>
      <Link href='https://www.linkedin.com/in/arshad-vk/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:facebook" />              
      </Link>
    </Div>
  )
}
