import type { ChipProps } from "tscircuit"

const pinLabels = {
  pin1: "GND",
  pin2: "TRIG",
  pin3: "OUT",
  pin4: "RESET",
  pin5: "CTRL",
  pin6: "THRES",
  pin7: "DISCH",
  pin8: "VCC",
} as const

export const NE555 = (props: ChipProps<typeof pinLabels>) => (
  <chip
    {...props}
    pinLabels={pinLabels}
    pinAttributes={{
      VCC: { requiresPower: true },
      RESET: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["RESET", "CTRL", "THRES", "TRIG"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "OUT", "DISCH", "GND"],
      },
    }}
    supplierPartNumbers={{ jlcpcb: ["C46749"] }}
    footprint="dip8"
  />
)

export default () => (
  <board width="40mm" height="30mm">
    <NE555 name="U1" />
    <resistor name="R1" resistance="1k" footprint="0402" />
    <resistor name="R2" resistance="10k" footprint="0402" />
    <capacitor name="C1" capacitance="10uF" footprint="0805" />
    <capacitor name="C2" capacitance="10nF" footprint="0402" />
    <capacitor name="C3" capacitance="100nF" footprint="0402" />

    <trace name="vcc" from="U1.VCC" to="net.VCC" />
    <trace name="gnd" from="U1.GND" to="net.GND" />
    <trace name="reset" from="U1.RESET" to="net.VCC" />
    <trace name="vcc" from="C3.pin1" to="net.VCC" />
    <trace name="gnd" from="C3.pin2" to="net.GND" />

    <trace name="ctrl" from="U1.CTRL" to="C2.pin1" />
    <trace name="gnd" from="C2.pin2" to="net.GND" />

    <trace name="vcc" from="R1.pin1" to="net.VCC" />
    <trace name="disch" from="R1.pin2" to="U1.DISCH" />
    <trace name="disch" from="U1.DISCH" to="R2.pin1" />
    <trace name="timing" from="R2.pin2" to="net.TIMING" />

    <trace name="timing" from="U1.THRES" to="net.TIMING" />
    <trace name="timing" from="U1.TRIG" to="net.TIMING" />
    <trace name="timing" from="C1.pin1" to="net.TIMING" />
    <trace name="gnd" from="C1.pin2" to="net.GND" />
  </board>
)
