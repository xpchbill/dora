# @ALK-UI/checkbox

Checkbox component is used in forms when a user needs to select multiple values
from several options.

## Installation

```sh
yarn add @ALK-UI/checkbox

# or

npm i @ALK-UI/checkbox
```

## Import component

```jsx
import { Checkbox } from "@ALK-UI/checkbox"
```

## Usage

```jsx
<Checkbox>This is a checkbox</Checkbox>
```

### CheckboxGroup

CheckboxGroup is used to bind multiple checkboxes into a group, and it indicates
whether one or more options are selected.

```jsx
<CheckboxGroup defaultValue={["one", "two"]}>
  <Checkbox value="one">One</Checkbox>
  <Checkbox value="two">Two</Checkbox>
  <Checkbox value="three">Three</Checkbox>
</CheckboxGroup>
```
