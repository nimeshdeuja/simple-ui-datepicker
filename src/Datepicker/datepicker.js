import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'

// import TextField from '@material-ui/core/TextField'

import { InputAdornment, IconButton } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ptLocale from 'date-fns/locale/pt'
import enGb from 'date-fns/locale/en-GB'
import PropTypes from 'prop-types'

const dateFormatePicker = (date) => {
  return moment(date).format('YYYY/MM/DD HH:mm:ss')
}

const DatePick = ({
  fullWidth = true,
  variant = 'outlined',
  label,
  className,
  value,
  min,
  hideMaxDate,
  max,
  changed,
  size = 'medium',
  language = 'en'
}) => {
  let datepickerLanguage = language === 'en' ? enGb : ptLocale
  let datepickerElement = (
    <DatePicker
      fullWidth={fullWidth}
      inputVariant={variant}
      label={label}
      format='yyyy-MM-dd'
      className={className}
      value={dateFormatePicker(value ? value : new Date())}
      minDate={min && dateFormatePicker(min)}
      maxDate={max ? dateFormatePicker(max) : dateFormatePicker(new Date())}
      views={['year', 'month', 'date']}
      onChange={changed}
      size={size}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton size={size}>
              <DateRangeIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
  if (!hideMaxDate) {
    datepickerElement = (
      <DatePicker
        fullWidth={fullWidth}
        inputVariant={variant}
        label={label}
        format='yyyy-MM-dd'
        className={className}
        value={dateFormatePicker(value ? value : new Date())}
        minDate={min && dateFormatePicker(min)}
        views={['year', 'month', 'date']}
        onChange={changed}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton size={size}>
                <DateRangeIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    )
  }
  return (
    <InputStyled>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={datepickerLanguage}>
        {datepickerElement}
      </MuiPickersUtilsProvider>
    </InputStyled>
  )
}

DatePick.propTypes = {
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  min: PropTypes.any,
  hideMaxDate: PropTypes.bool,
  max: PropTypes.any,
  changed: PropTypes.func.isRequired,
  size: PropTypes.string,
  language: PropTypes.string
}

export default DatePick

const InputStyled = styled.div`
  ${(props) => {
    let theme = props.theme
    let margin = theme.gLG
    if (props.noMargin) margin = '0'
    return `
            display:flex;
            margin-bottom:${margin};
            width:100%;
            .MuiInputBase-root:focus,
            .MuiFormControl-root:focus,
            input{
              border: none;
              -webkit-appearance: none;
              -ms-accelerator: none;
              -moz-appearance: none;
              appearance: none;
              resize: none;
              outline: none;
            }
        `
  }}
`
