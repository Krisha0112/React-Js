import CounterHoc from './CounterHoc'

function componentB({cnt, incBtn, decBtn}) {
  return (
    <div align="center">
        <h1>B Component</h1>
        <h2>Counter</h2>
        <h3>Count :- {cnt}</h3>
        <button onClick={ () => incBtn()}>+</button>&nbsp;&nbsp;
        <button onClick={ () => decBtn()}>-</button>
    </div>
  )
}
let B = CounterHoc(componentB)
export default B
