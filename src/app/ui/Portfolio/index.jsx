import React from 'react';
import Link from 'next/link';
import Div from '../Div';

export default function Portfolio({ src, variant }) {
  return (
    < Div
      className={`cs-portfolio cs-bg ${variant ? variant : 'cs-style1'}`}
    >
      <>
        <Div className="cs-portfolio_hover" />
        <Div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
      </>
    </Div>
  );
}
