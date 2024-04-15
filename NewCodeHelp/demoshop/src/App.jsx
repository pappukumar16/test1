import './App.css'
import Item from './component/Item'
import UseDate from './component/UseDate'
import Card from './component/Card'

function App() {
  
  const itemTwo = "car"
  const res = [
    {
      name:'watch',
      day:"saturday",
      month:2,
      year:2024
    },

    {
      name:'Easy',
      day:'Monday',
      month:12,
      year:2024
    },
    {
      name:'hc543',
      day:"wednesday",
      month:1,
      year:2024
    },
  ]

  return (
    <>
  <Card>
  <Item name={res[0].name} >This is my custum tex</Item>
   <UseDate day={res[0].day} month={res[0].month} year={res[0].year}></UseDate>

   <Item name={res[1].name} ></Item>
   <UseDate day={res[1].day} month={res[1].month} year={res[1].year}></UseDate>

   <Item name={res[2].name} ></Item>
   <UseDate day={res[2].day} month={res[2].month} year={res[2].year}></UseDate>
  </Card>
 
 
    </>
  )
}

export default App
