import Table from './Table'

const holiday = {
  "blue": [2, 9, 16, 23, 30],
  "red": [3, 10, 20, 24, 31],
  "yellow": [13]
}

const data = [
  {
    name: "Cửa hàng bánh kẹo Hà Nội",
    openDates: [{open: 1, close: 31}]
  },
  {
    name: "Cửa hàng đồ chơi",
    openDates: [{open: 5, close: 13}, {open: 16, close: 20}]
  },
  {
    name: "Cửa hàng quần áo",
    openDates: [{open: 1, close: 2}, {open: 4, close: 5}, {open: 7, close: 7}, {open: 9, close: 9}]
  },
  {
    name: "Cửa hàng tạp hoá",
    openDates: [{open: 2, close: 10}, {open: 20, close: 24}]
  },
  {
    name: "Cửa hàng mỹ phẩm",
    openDates: [{open: 3, close: 8}]
  },
]

function App() {
  return (
    <div style={{
      background: '#fafaed',
      height: '500px',
      width: 'fit-content',
      border: '1px solid black',
      padding: '16px'
    }}>
      <Table data={data} holiday={holiday}/>
    </div>
  );
}

export default App;
