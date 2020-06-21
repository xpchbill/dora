# Switch

The Switch component is used as an alternative for the checkbox component,
switch between enabled or disabled states.

## Installation

```sh
yarn add @ALK-UI/switch

# or

npm i @ALK-UI/switch
```

## Import component

```jsx
import { Switch } from "@ALK-UI/switch"
```

## Usage

```jsx
<Switch />
```

## Sizes

Pass the `size` prop to change the size of the switch.

```jsx
<>
  <Switch size="sm" marginLeft="1rem" colorScheme="green" />

  <Switch size="md" marginLeft="1rem" colorScheme="green" />

  <Switch size="lg" marginLeft="1rem" colorScheme="green" />
</>
```

## Switch background-color

You can change the checked background color of the `switch` by passing the
`colorScheme` prop

```jsx
<Switch colorScheme="blue" />
```
