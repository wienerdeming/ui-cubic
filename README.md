

# UI-CUBIC

React primitive UI components built with [styled-components][].

[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
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


By proving theme props you can customize styling


```jsx
import React from 'react'
import {Button, CubeThemeProvider} from 'ui-cubic'
const theme = {
    boxShadow: '0px 4px 15px rgba(211, 216, 224, 0.5)',
    borderRadius: '5px',
    palette: {
      text: {
        main: '#36434E',
        light: '#9AA6AC',
      },
      primary: {
        main: '#2F80ED',
        text: '#fff',
        hover: '#2F73DF',
        active: '#2F80ED',
        focus: '#2F80ED'
      },
      secondary: {
        main: '#e3e7ea',
        text: '#73839c',
        hover: '#d3d7da',
        active: '#d3d7da',
        focus: '#d3d7da'
      },
      danger: {
        main: '#FF2E63',
        text: '#fff',
        hover: '#FF2E63',
        active: '#FF2E63',
        focus: '#FF2E63'
      },
      warning: {
        main: '#E7A324'
      }
    },
    input: {
      borderRadius: '10px',
      colors: {
        background: '#F1F3F5',
        hover: '#EDEFF2',
        label: '#8F9BB0',
        placeholder: '#AEB7C6',
        border: '#e0e0e0',
        icon: '#9AA6AC'
      }
    }
  }

export default props =>
  <CubeThemeProvider theme={theme}>
    <Button>UI-Cubic</Button>
  </CubeThemeProvider>
```



When all values for theming is provided, the usage of CubeThemeProvider is not required,
You can just pass cube object to Styled-Components's ThemeProvider


```jsx
import React from 'react'
import {ThemeProvider} from 'styled-component'
import {Button, CubeThemeProvider} from 'ui-cubic'
const cubeTheme = {
    boxShadow: '0px 4px 15px rgba(211, 216, 224, 0.5)',
    borderRadius: '5px',
    palette: {
      text: {
        main: '#36434E',
        light: '#9AA6AC',
      },
      primary: {
        main: '#2F80ED',
        text: '#fff',
        hover: '#2F73DF',
        active: '#2F80ED',
        focus: '#2F80ED'
      },
      secondary: {
        main: '#e3e7ea',
        text: '#73839c',
        hover: '#d3d7da',
        active: '#d3d7da',
        focus: '#d3d7da'
      },
      danger: {
        main: '#FF2E63',
        text: '#fff',
        hover: '#FF2E63',
        active: '#FF2E63',
        focus: '#FF2E63'
      },
      warning: {
        main: '#E7A324'
      }
    },
    input: {
      borderRadius: '10px',
      colors: {
        background: '#F1F3F5',
        hover: '#EDEFF2',
        label: '#8F9BB0',
        placeholder: '#AEB7C6',
        border: '#e0e0e0',
        icon: '#9AA6AC'
      }
    }
  }

const theme = {
    // Your values ...
    .... 
    //
    cube: cubeTheme,

}
export default props =>
  <ThemeProvider theme={theme}>
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
