import React from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 mr-2"
    />
  )
}

export default Checkbox
