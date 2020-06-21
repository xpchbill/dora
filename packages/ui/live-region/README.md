# Live Regions

ARIA Live Regions are used to communicate important information to screen reader
software.

## Installation

```sh
yarn add @ALK-UI/live-region
```

## Import components

```jsx
import { LiveRegion, useLiveRegion } from "@ALK-UI/live-region"
```

## Usage

```jsx
import { useLiveRegion } from "@ALK-UI/live-region"

function Example() {
  const region = useLiveRegion()
  return (
    <button
      onClick={() => {
        region.speak("Filtering categories was successful")
      }}
    >
      Click me
    </button>
  )
}
```
