import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((options) => (
        <option key={options.value} value={options.value}>
          {options.name}
        </option>
      ))}
    </select>
  )
}
export default MySelect
