import React,{Component} from 'react';
import {princes} from './database/usersDB';
import UserComponent from "./components/user/UserComponent";
class App extends Component {
    render() {
        return (
            <div>
                {
                  princes.map((princesa,index)=>{
                      let clsX= princesa.footSize===38 ? 'even' : 'odd' ;
                      return(
                      <UserComponent
                      item={princesa}
                      cls={clsX}
                      key={index}/>)
                  })
                }
            </div>
        );
    }
}
export default App;