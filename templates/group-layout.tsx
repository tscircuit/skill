// Demonstrates <group /> for positioning multiple components together.
// This example focuses on layout—add <trace /> elements for connectivity.
import React from "react"

export default () => (
  <board width="20mm" height="20mm">
    <group pcbX={5} pcbY={5}>
      <resistor name="R1" resistance="1k" footprint="0402" pcbX={2.5} pcbY={2.5} />
      <resistor name="R2" resistance="1k" footprint="0402" pcbX={2.5} pcbY={0} />
      <resistor name="R3" resistance="1k" footprint="0402" pcbX={2.5} pcbY={-2.5} />
    </group>
  </board>
)
