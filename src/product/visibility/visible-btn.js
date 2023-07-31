import React from 'react'
import {Link } from 'react-router-dom'

export const VisibleBtn = ({to="edit"}) => {
  return (
    <Link to={to}>
  <span className="material-symbols-outlined">visibility</span>
    </Link>
  )
}
