

# UI-CUBIC

React primitive UI components built with [styled-components][].

[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)


[downloads-badge]: https://flat.badgen.net/npm/dw/ui-cubic
[version-badge]: https://flat.badgen.net/npm/v/ui-cubic
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/ui-cubic

```sh
npm i ui-cubic
```
or 
```sh
yarn add ui-cubic
```

## Getting Started


**Note:** For now, You have to wrap your main Component with CubeThemeProvider


```jsx
import React from 'react'
import {Button, CubeThemeProvider} from 'ui-cubic'

export default props =>
  <CubeThemeProvider>
    <Button>UI-Cubic</Button>
  </CubeThemeProvider>
```



## Principles

UI-Cubic is built with the following principles in mind.

- **Minimal**
- **Useful**
- **Themeable**

### Related

- [styled-components][]


[styled-components]: https://github.com/styled-components/styled-components


---

[MIT License](LICENSE.md)
