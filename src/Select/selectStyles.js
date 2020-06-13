
export default (theme, params) => ({
  control: (provided, state) => {
    const backgroundColor = state.isDisabled
      ? '#fafbfc'
      : state.isFocused
        ? 'white'
        : theme.cube.input?.colors.background || theme.input.backgroundColor
    return ({
      ...provided,
      backgroundColor,
      boxShadow: null,
      borderRadius: theme.cube.borderRadius?.md || theme.input.borderRadius,
      borderColor: state.isFocused
        ? params.error
          ? `${theme.cube.palette?.danger?.main || theme.cube.colorRed} !important`
          : (theme.cube.palette?.primary?.main || theme.cube.primaryColor)
        : theme.cube.input?.colors?.border || 'transparent',
      transition: theme.cube.transition,
      height: params.height,
      minHeight: params.height ? 'unset' : '52px',
      '&:hover': {
        backgroundColor: state.isFocused
          ? 'white'
          : theme.cube.input?.colors?.hover || theme.input.backgroundColorHover,
        borderColor: state.isFocused ? (theme.cube.palette?.primary?.main || theme.cube.primaryColor) : 'transparent'
      }
    })
  },
  indicatorSeparator: () => ({}),
  loadingIndicator: (provided, state) => ({
    ...provided,
    '& span': {
      background: state.isFocused
        ? (theme.cube.input?.colors?.label || theme.input.labelColor)
        : (theme.cube.input?.colors?.placeholder || theme.input.placeholderColor)
    }
  }),
  clearIndicator: provided => ({
    ...provided,
    color: theme.cube.input?.colors?.placeholder || theme.input.placeholderColor,
    '&:hover': {
      color: theme.cube.input?.colors?.label || theme.input.labelColor
    }
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    alignItems: 'center',
    color: state.isFocused
      ? params.error
        ? `${theme.cube.palette?.danger?.main || theme.cube.colorRed} !important`
        : (theme.cube.palette?.primary?.main || theme.cube.primaryColor)
      : (theme.cube.input?.colors?.placeholder || theme.input.placeholderColor),
    padding: '0 12px',
    transition: 'color 300ms, transform 150ms',
    transform: params.menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
    '&:hover': {
      color: theme.cube.input?.colors?.label || theme.input.labelColor
    }
  }),
  menuPortal: provided => ({
    ...provided,
    zIndex: 1500
  }),
  menu: provided => ({
    ...provided,
    border: '1px solid',
    borderColor: theme.cube.input?.colors?.border || theme.input.borderColor,
    boxShadow: theme.cube.shadows?.md ||theme.cube.boxShadow,
    borderRadius: theme.cube.borderRadius?.md || theme.input.borderRadius,
    margin: '0',
    top: 'calc(100% + 4px)'
  }),
  menuList: provided => ({
    ...provided,
    padding: '7px'
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? '#EBECFC'
      : state.isFocused
        ? '#F5F6FD'
        : 'none',
    borderRadius: theme.cube.borderRadius?.md || theme.input.borderRadius,
    color: 'inherit',
    cursor: 'pointer',
    padding: '12px',
    transition: theme.cube.transition,
    '&:active': {
      background: '#F5F6FD'
    }
  }),
  valueContainer: (provided, state) => {
    const isMultiWithValues = state.hasValue && state.isMulti
    return {
      ...provided,
      padding: isMultiWithValues ? '4px' : '0 20px'
    }
  },
  singleValue: (provided, state) => {
    const color = state.isDisabled ? (theme.cube.input?.colors?.label || theme.input.labelColor) : 'inherit'
    return ({
      ...provided,
      fontSize: '15px',
      color
    })
  },
  placeholder: provided => ({
    ...provided,
    color: theme.cube.input?.colors?.placeholder || theme.input.placeholderColor,
    fontSize: '15px',
    margin: '0'
  }),
  noOptionsMessage: provided => ({
    ...provided,
    color: theme.cube.input?.colors?.placeholder || theme.input.placeholderColor
  }),
  loadingMessage: provided => ({
    ...provided,
    color: theme.cube.input?.colors?.placeholder || theme.input.placeholderColor
  }),

  multiValue: (provided, state) => {
    const hasValueFocused = state.hasValue && params.menuIsOpen
    const borderColor = state.isDisabled ? (theme.cube.input?.colors?.border || theme.input.borderColor) : 'transparent'
    return {
      ...provided,
      backgroundColor: hasValueFocused
        ? theme.cube.input?.colors?.background || theme.input.backgroundColor
        : '#FAFBFB',
      border: '1px solid transparent',
      borderColor,
      borderRadius: theme.cube.borderRadius?.md || theme.input.borderRadius,
      transition: theme.cube.transition,
      margin: '4px',
      '&:hover': {
        borderColor: theme.cube.input?.colors?.border || theme.input.borderColor
      }
    }
  },
  multiValueLabel: provided => ({
    ...provided,
    fontSize: 'inherit',
    padding: '7px 0',
    paddingLeft: '12px',
    paddingRight: '6px'
  }),
  multiValueRemove: provided => ({
    ...provided,
    alignSelf: 'center',
    borderRadius: '50%',
    color: theme.cube.input?.colors?.placeholder || theme.input.placeholderColor,
    cursor: 'pointer',
    justifyContent: 'center',
    paddingLeft: '0',
    paddingRight: '0',
    marginRight: '12px',
    transition: theme.cube.transition,
    height: '20px',
    width: '20px',
    '&:hover': {
      backgroundColor: '#8591A3',
      color: 'white'
    },
    '& svg': {
      height: '16px',
      width: '16px'
    }
  })
})
