import React from 'react'
import JumpLink from './JumpLink/JumpLink'

export default () => {
  return (
    <div className="sidebar">

      <ul>
        <li><h4>Draft</h4></li>
        <li>
          <h3> Grid Display </h3>
          <JumpLink to="demo-0"> show grid </JumpLink>
          <JumpLink to="demo-1"> show grid </JumpLink>
          <JumpLink to="demo-0"> show grid </JumpLink>
        </li>
        <li>
          <h3> Grid Display </h3>
          <a href="/"> show grid </a>
          <a href="/"> show grid </a>
          <a href="/"> show grid </a>
        </li>
      </ul>
    </div>
  )
}
