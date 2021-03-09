# simple-ui-datepicker

> Simple UI date picker width @material-ui/pickers, styled-components, moment.

## Install

```bash
npm i --save simple-ui-datepicker
```

## Usage

```jsx
import { DatePick } from 'simple-ui-autocomplete'
<DatePick
  fullWidth={true}
  variant='standard' // options 'outlined','filled','standard'
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

### Peer Dependencies

> Make sure that your project has all these packages installed.

```bash
npm i @material-ui/core@4.11.3
npm i styled-components@5.2.1
npm i @material-ui/pickers@3.2.10
npm i @material-ui/icons@4.11.2
npm i date-fns@2.18.0
npm i @date-io/date-fns@1.3.13
npm i moment@2.29.1
```

## Author

Nimesh Deuja
