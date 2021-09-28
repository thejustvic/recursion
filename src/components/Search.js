import React from 'react'

export const Search = ({ ...args }) => {
  return (
    <div className="webflow-style-input">
      <input placeholder="type to search" {...args}></input>
    </div>
  )
}
