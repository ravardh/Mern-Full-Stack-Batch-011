import React, { useEffect, useState } from 'react'

const App = () => {

  const [locker1Item,setLocker1Item] = useState("");
  const [locker2Item,setLocker2Item] = useState("");

  useEffect(()=>{
    console.log("I am useEffect"); 
  },[locker1Item])

  return (
    <>
    <div>
      <input type="text" value={locker1Item} onChange={(e)=>setLocker1Item(e.target.value)}/>
      <br />
      <label>{locker1Item}</label>
    </div>
    <hr />
    <div>
      <input type="text" value={locker2Item} onChange={(e)=>setLocker2Item(e.target.value)}/>
      <br />
      <label>{locker2Item}</label>
    </div>
    </>
  )
}

export default App