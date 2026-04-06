import React from "react"

export default () => (
  <board width="30mm" height="20mm">
    <chip name="U1" footprint="soic8" pcbX={-6} pcbY={0} />
    <resistor name="R1" resistance="10k" footprint="0402" pcbX={6} pcbY={4} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={6} pcbY={-4} />

    {/* Connections to GND */}
    <trace from=".R1 > .pin2" to="net.GND" />
    <trace from=".C1 > .pin2" to="net.GND" />
    <trace from=".U1 > .pin4" to="net.GND" />

    {/* Ground Plane (Copper Pour) */}
    <copperpour
      connectsTo="net.GND"
      layer="bottom"
      clearance="0.2mm"
      padMargin="0.4mm"
    />
  </board>
)
