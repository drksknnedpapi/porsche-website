import React from "react"

function TailwindExample() {
  return (
    <div>
      <h1 className="font-porsche">This uses the Porsche font</h1>
      {/* For specific weights */}
      <p className="font-porsche font-normal">Regular weight</p>
      <p className="font-porsche font-bold">Bold weight</p>
    </div>
  )
}

export default TailwindExample

