import { React, useEffect } from 'react';
import SynonymsApp from './components/SynonymsApp/SynonymsApp';


export default function SynonymsPage() {


    useEffect(() => {
        document.title = 'Synonyms Page'
    })

    return (
        <div >
            <SynonymsApp />
        </div>
    )
}
