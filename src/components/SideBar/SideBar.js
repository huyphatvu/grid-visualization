import React from 'react'
import JumpLink from './JumpLink/JumpLink'

export default () => {
  return (
    <div className="sidebar">

      <ul>
        <li><h4>Draft</h4></li>
        <li>
          <h3> Grid Display </h3>
          <JumpLink to="demo-0"> Grid Display </JumpLink>
        </li>
        <li>
          <h3> Explicit Grid </h3>
          <JumpLink to="demo-1"> Grid Template Columns </JumpLink>
          <JumpLink to="demo-2"> Grid Template Rows </JumpLink>
          <JumpLink to="demo-3"> Grid Template Areas </JumpLink>
        </li>

      </ul>
    </div>
  )
}
