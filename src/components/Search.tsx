import { InputHTMLAttributes } from "react"

export const Search: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...args }) => {
  return (
    <div className="webflow-style-input">
      <input placeholder="type to search" {...args}></input>
    </div>
  )
}
