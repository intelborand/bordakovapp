import React, { useState } from 'react'
import SearchInput from './SearchInput'

export default function Categories (props) {
  //   constructor(props){
  //       super(props)
  //       this.state = {
  //           "categories" : [
  //               {
  //                   key: "all",
  //                   name: "All"
  //               },
  //               {
  //                   key: "alcohol",
  //                   name: "Alcohol"
  //               },
  //               {
  //                   key: "non-alcohol",
  //                   name: "Non-Alcohol"
  //               }
  //           ]
  //       }
  //   }

    
  // render() {

let [state, setState] = useState({categories: [ 
                   {
                      key: "all",
                      name: "All"
                  },
                  {
                      key: "alcohol",
                      name: "Alcohol"
                  },
                  {
                      key: "non-alcohol",
                      name: "Non-Alcohol"
                  }]}
);



    return (
      <div className='categories-nav'>
        {state.categories.map(item => <div key={item.key} className='categories-item'  onClick={() => props.onChooseCategory(item.key)}>{item.name}</div>)}
        <SearchInput onUpdateTerm={props.onUpdateTerm}/>
      </div>
    )
  }


// export default Categories