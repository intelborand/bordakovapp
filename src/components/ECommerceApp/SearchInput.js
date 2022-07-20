import React, {useState} from 'react'

export default function SearchInput(props) {

    let [term, setTerm] = useState("");

    function onUpdateData(e) {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateTerm(term);
    }

  return (
    <>
            <input
                type='text'
                className='search-panel'
                placeholder='Find product'
                value={term}
                onChange={onUpdateData}/>
            </>
  )
}
