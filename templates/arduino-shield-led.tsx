// Requires: npm install @tscircuit/common
import React from "react"
import { ArduinoShield } from "@tscircuit/common"

export default () => (
  <ArduinoShield name="example">
    <resistor name="R1" resistance="220ohm" footprint="0805" pcbX={0} pcbY={5} />
    <led name="LED1" color="red" footprint="0603" pcbX={0} pcbY={-5} />

    <trace from=".D13" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".LED1 > .pin1" />
    <trace from=".LED1 > .pin2" to=".GND2" />
  </ArduinoShield>
)
