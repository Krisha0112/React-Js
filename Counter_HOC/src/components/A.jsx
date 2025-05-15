import CounterHoc from './CounterHoc'

function componentA({cnt, incBtn, decBtn, showuserBtn, allusers}) {
  return (
    <div align="center">
      <h1>A Component</h1>
      <h2>Counter</h2>
      <h3>Count :- {cnt}</h3>
      <button onClick={ () => incBtn()}>+</button>&nbsp;&nbsp;
      <button onClick={ () => decBtn()}>-</button>&nbsp;&nbsp;
      <button onClick={ () => showuserBtn()}>Show users</button>
      <hr />
      {
        allusers.length == 0? (
            <p>Rcord is not found</p>
        ): (
            allusers.map((item, index) => {
                return (
                    <div key={index}>
                        <p>name : {item.name}</p> 
                        <p>phone : {item.phone}</p>
                    </div>
                )
            })
        )
      }
    </div>
  )
}
let A = CounterHoc(componentA)
export default A
