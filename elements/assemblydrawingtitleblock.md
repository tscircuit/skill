# `<assembly.drawing.titleblock />`

Adds a document title and metadata to the lower right of a
[drawing page](./assemblydrawingpage.md). Put at most one title block
directly inside the page and leave room below the views.

- `title` is required. Optional metadata includes `identificationNumber`,
  `revisionIndex`, `legalOwner`, `creator`, `approvalPerson`, and
  `dateOfIssue`. Use `name` if you need an element identity.
- `sheetNumber` and `numberOfSheets` are optional positive integers. Provide
  the intended numbering when authoring multiple sheets. The total must be
  at least the current sheet number.

The exporter needs a page at least 190 mm wide and 50 mm high for a title block.
See the [title block reference](https://docs.tscircuit.com/elements/assembly-drawing-titleblock).
