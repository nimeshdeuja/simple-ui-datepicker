import React from 'react'

import { DatePick } from 'simple-ui-datepicker'

const App = () => {
  return (
    <DatePick
      fullWidth={true}
      variant='outlined'
      label='DOB'
      className='myClass'
      value={new Date()}
      min={new Date()}
      hideMaxDate={true}
      max={new Date()}
      changed={(item) => console.log(item)}
      size='medium'
      language='pt'
    />
  )
}

export default App
