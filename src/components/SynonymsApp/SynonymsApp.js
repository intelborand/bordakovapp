import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
const styles = {
    display: 'flex',
    marginTop: '5%',
    textAlign: 'center',
    backgroundColor: 'red'
};

const inputLabelStyles = {
    marginRight: 10
}
export default function SynonymsApp() {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState();

    const fetchData = (word) => {
        fetch(`https://api.datamuse.com/words?rel_syn=${word}`).then((response) => response.json()).then((data) => { setSynonyms(data) });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(word);

    }

    const handleSynonymClicked = (newWord) => {
        setWord(newWord);
        fetchData(newWord);
    }

    return (
        <>
            <div style={styles}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label style={inputLabelStyles} htmlFor='input' >Your word</Form.Label>
                        <Form.Control value={word} id='input' type="text" onChange={(e) => setWord(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type='submit'>Submit</Button>
                </Form>
            </div>
            <div style={{ marginTop: 20, marginLeft: '40%' }}>
                {synonyms && <h1>Synonyms</h1>}
                <ul>
                    {synonyms && synonyms.map(syn => {
                        return (
                            <li style={{ cursor: 'pointer' }} onClick={() => handleSynonymClicked(syn.word)} key={syn.word}>{syn.word}, Score: {syn.score}</li>
                        )
                    })}
                </ul>
            </div>

        </>

    )
}
