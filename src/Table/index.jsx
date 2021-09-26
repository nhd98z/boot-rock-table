import React, {memo} from 'react';
import './index.scss';

export default memo(function Table({data, holiday}) {
  const dates = Array.from({length: 31}, (value, index) => index + 1)

  const getClassName = (shopIndex, date) => {
    const shopOpenDateRanges = data[shopIndex].openDates
    const matchedRange = shopOpenDateRanges.find(({ open, close }) => open <= date && date <= close)
    if (matchedRange) {
      let res = 'cls'
      if (date === matchedRange.open) res += ' cls-left'
      if (date === matchedRange.close) res += ' cls-right'
      return res
    }
    return undefined
  }

  return (
    <table>
      <thead>
      <tr>
        <th style={{flex: 1, minWidth: '200px', padding: '16px'}}>
          <div>Tên cửa hàng</div>
        </th>
        {dates.map((date, index) => <th key={index}
                                        className={holiday.blue.includes(date) ? 'blue' : holiday.red.includes(date) ? 'red' : holiday.yellow.includes(date) ? 'yellow' : undefined}>
          <div>
            <div>{date}</div>
            <div>日</div>
          </div>
        </th>)}
      </tr>
      </thead>
      <tbody>
      {data.map((item, i) => <tr key={i}>
        <td style={{flex: 1, minWidth: '200px', padding: '16px'}}>
          <div>{item.name}</div>
        </td>
        {dates.map((date, j) => <td key={j}
                                        className={holiday.blue.includes(date) ? 'blue' : holiday.red.includes(date) ? 'red' : holiday.yellow.includes(date) ? 'yellow' : undefined}>
          {/*<div className="cls cls-left cls-right"/>*/}
          <div className={getClassName(i, date)}/>
        </td>)}
      </tr>)}
      </tbody>
    </table>
  );
})
