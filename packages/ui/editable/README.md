# @ALK-UI/editable

EditableText is used for inline renaming of some text. It appears as normal UI
text but transforms into a text input field when the user clicks or focuses on
it.

## Installation

```sh
yarn add @ALK-UI/editable

# or

npm i @ALK-UI/editable
```

## Import component

```js
import { Editable, EditableInput, EditablePreview } from "@ALK-UI/core"
```

## Usage

```jsx
<Editable defaultValue="Take some chakra">
  <EditablePreview />
  <EditableInput />
</Editable>
```
