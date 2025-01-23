import React from 'react'
import { useEffect } from 'react';
const InputHotel = () => {

  useEffect(() => {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  })
  
  return (
    <div>
      <input type="date" name="dates" id=""/>
    </div>
  )
}

export default InputHotel