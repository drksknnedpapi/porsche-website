import React from "react"

function Example() {
  return (
    <div>
      <h1 className="font-porsche-regular">Regular Text</h1>
      <h2 className="font-porsche-bold">Bold Text</h2>

      {/* Or using inline styles */}
      <p style={{ fontFamily: "PorscheNext, sans-serif" }}>This also uses the Porsche font</p>
    </div>
  )
}

export default Example

