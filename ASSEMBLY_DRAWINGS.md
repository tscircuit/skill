# Assembly drawings

Put drawing pages inside the [assembly device](./elements/assemblydevice.md).
Use a [part view](./elements/assemblydrawingpartview.md) to show assembled
geometry, or an [explosion view](./elements/assemblydrawingexplosionview.md) to
show the result of a sequence of moves. Import `assembly` from `@tscircuit/core`
and use the namespaced elements directly.

## Draw a cover and clip removal

The first stage lifts the cover and clip 12 mm. The second moves the clip
another 14 mm along X. The exploded view selects the second stage and includes
both movements. The assembled view uses a reusable drawing stage to select the
cover, clip, and PCB substrate.

```tsx
import { assembly } from "@tscircuit/core"

export default () => (
  <assembly.device name="enclosure">
    <board name="carrier" width={38} height={26} />
    <assembly.part
      name="cover"
      cadModel={{
        jscad: { type: "cuboid", size: [22, 18, 2] },
        positionOffset: { x: -6, y: 0, z: 6 },
      }}
    />
    <assembly.part
      name="clip"
      cadModel={{
        jscad: { type: "cuboid", size: [6, 8, 2] },
        positionOffset: { x: 13, y: 0, z: 4 },
      }}
    />

    <assembly.explosion.stage name="lift-cover">
      <assembly.explosion.move targetRefs={["cover", "clip"]} offZ={12} />
    </assembly.explosion.stage>
    <assembly.explosion.stage name="slide-clip" prevStageRef="lift-cover">
      <assembly.explosion.move targetRef="clip" offX={14} />
    </assembly.explosion.stage>

    <assembly.drawing.stage
      name="complete"
      boardRefs={[".carrier"]}
      partRefs={[".cover", ".clip"]}
    />
    <assembly.drawing.page
      name="cover-removal"
      width={220}
      height={130}
      anchorAlignment="bottom_left"
    >
      <assembly.drawing.titleblock
        title="Cover removal"
        identificationNumber="ENC-01"
        sheetNumber={1}
        numberOfSheets={1}
      />
      <assembly.drawing.partview
        name="assembled"
        displayName="Assembled"
        stageRef=".complete"
        direction="isometric"
        width={78}
        height={65}
        centerX={55}
        centerY={85}
      />
      <assembly.drawing.explosionview
        name="exploded"
        displayName="Exploded"
        stageRef="enclosure.slide-clip"
        direction="isometric"
        width={78}
        height={65}
        centerX={151}
        centerY={85}
        showTrails
      >
        <assembly.drawing.partlabel
          text="Cover"
          partRefs={[".cover"]}
          anchor={{ x: -6, y: 0, z: 7 }}
          xOffsetFromViewCenter={-29}
          yOffsetFromViewCenter={29}
        />
        <assembly.drawing.dimension heightOfView />
      </assembly.drawing.explosionview>
      <assembly.drawing.note
        text="Lift the cover and clip, then slide the clip sideways."
        paperX={16}
        paperY={118}
      />
    </assembly.drawing.page>
  </assembly.device>
)
```

Save the example as `enclosure.circuit.tsx` in a tscircuit project. Build it,
then render the named sheet with the tscircuit SVG service:

```sh
tsci build enclosure.circuit.tsx
jq -c '{circuit_json: .}' dist/enclosure/circuit.json |
  curl -fsS 'https://svg.tscircuit.com/?svg_type=drawing&drawing=cover-removal' \
    -H 'Content-Type: application/json' --data-binary @- -o cover-removal.svg
```

CLI releases with drawing renderer 0.0.3 can build the Circuit JSON but
cannot render this sheet's explosion view, drawing stage, or page anchor.

## Adapt the sheet

- Use an [explosion stage](./elements/assemblyexplosionstage.md) and its
  [moves](./elements/assemblyexplosionmove.md) to author motion once. Choose a
  separate `factor` per explosion view. `0` uses assembled positions and `0.5`
  applies half of every part's final offset through the selected stage.
- Use a [drawing stage](./elements/assemblydrawingstage.md) to reuse an
  assembled parts selection. A PCB substrate goes in `boardRefs`. Use
  `partRefs` for the board's fitted models or a specific component subset.
- Use the [page](./elements/assemblydrawingpage.md) anchor for paper positions.
  A [part label](./elements/assemblydrawingpartlabel.md) attaches to an
  assembled CAD-world point that follows the moved part. A
  [note](./elements/assemblydrawingnote.md) uses paper or view coordinates.
- A [dimension](./elements/assemblydrawingdimension.md) measures the
  displayed pose, including the separation factor and any section cut.
  Leave room at the lower right for a [title block](./elements/assemblydrawingtitleblock.md).
