# `<assembly.drawing.dimension />`

Measures physical geometry in a [part view](./assemblydrawingpartview.md) or
[explosion view](./assemblydrawingexplosionview.md). Measurements are in
millimetres. Core resolves the dimension after applying any explosion
displacement, view factor, and section cut.

Choose one measurement per element:

- `widthOfView` or `heightOfView` measures the displayed geometry's extent
  along the view's horizontal or vertical axis.
- `edgeRef=".plate > .bore"` measures the projected span of a named CAD
  feature. Define the feature in the native CAD model first.
- `fromRef=".H1" toRef=".H2" axis="x"` measures the
  horizontal distance between two selected features. The optional `axis`
  uses the view's axes. Use `fromAnchor` / `toAnchor` to override inferred
  anchors with `"center"`, `"left"`, `"right"`, `"top"`, or `"bottom"`.
  PCB holes use center anchors.

An optional `name` identifies the dimension. Labels and line placement are
automatic. References must resolve to visible geometry in the view. Use
`await circuit.renderUntilSettled()` when generating Circuit JSON in code
so geometry can load before dimension records are emitted.

See the [dimension reference](https://docs.tscircuit.com/elements/assembly-drawing-dimension).
