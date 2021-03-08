# simple-ui-datepicker

> Simple ui datepicker width @material-ui/pickers, styled-components, moment

## Install

```bash
npm i --save simple-ui-datepicker
```

## Usage

```jsx
import { DatePick } from 'simple-ui-autocomplete'
<DatePick
  fullWidth={true}
  variant='outlined' // options 'outlined'
  label='DOB'
  className='myClass'
  value={new Date()}
  min={new Date()} // min date user can select
  hideMaxDate={true}
  max={new Date()} // max date user can select if hideMaxDate is true
  changed={(item)=>}
  size='medium' // options 'small','medium','large'
  language='en' // options 'en','pt'
/>
```

## Author

Nimesh Deuja
