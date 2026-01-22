// Minimal board with two components and trace connectivity.
import React from "react"

export default () => (
  <board width="10mm" height="10mm">
    <resistor name="R1" resistance="1k" footprint="0402" pcbX={-2} schX={-2} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={2} schX={2} />

    <trace from=".R1 > .pin1" to=".C1 > .pin1" />
    <trace from=".R1 > .pin2" to="net.GND" />
    <trace from=".C1 > .pin2" to="net.GND" />
  </board>
)
