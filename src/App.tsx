import { TiposBasicos } from "./typescript/TiposBasicos"
import {ObjetosLiterales}  from "./typescript/ObjetosLiterales";
import UseStateComponent from "./UseStateComponent"
import UseContextComponent from "./UseContextComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHooks from "./CustomHooks";
const App = () => {
  return (
    <div className="mt-2">
      <h1>TS - REACT</h1>
      <hr/>

      <TiposBasicos></TiposBasicos>
      <ObjetosLiterales></ObjetosLiterales>

      <h1>CustomHooks</h1> 
      <CustomHooks></CustomHooks>

      <h1>UseRef</h1> 
      <UseRefComponent></UseRefComponent>


      <h1>UseRef</h1> 
      <UseRefComponent></UseRefComponent>

      <h1>UseReducer</h1> 
      <UseReducerComponent></UseReducerComponent>

      <h1>UseContext</h1> 
      <UseContextComponent></UseContextComponent>

      <h1>UseState</h1>
      <UseStateComponent></UseStateComponent>

      <h1>UseEffect</h1> 
      <UseEffectComponent></UseEffectComponent>
      

    </div>
  )
}

export default App;