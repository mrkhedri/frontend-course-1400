import React from "react";

function Tick() {
  const renderTick = () => {
    return (
      <div>
        <span>It is {new Date().toLocaleTimeString()}.</span>
      </div>
    )
  }

  setInterval(() => {
    console.log(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div>
      {renderTick()}
    </div>
  )
}

export default Tick;
