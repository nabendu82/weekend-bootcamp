import React from 'react'
import styles from './person.module.css'
import styled from 'styled-components'

const containerStyle = {
    backgroundColor: 'lightgray',
    paddding: '10px',
    border: '1px solid black',
    marginBottom: '5px'
}

const Wrapper = styled.section`
    background: lightblue;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Person = ({ person }) => {
    return (
        <div style={containerStyle}>
            <Wrapper>
                <h1 style={{ backgroundColor: 'lightyellow', paddding: '5px'}}>Name: {person.name}</h1>
                <p className={styles.paraStyle}>Age: {person.age}</p>
                <p className={styles.secondPara}>Skills: {person.skills}</p>
                <Button>Normal</Button>
                <Button primary>Primary</Button>
            </Wrapper>
        </div>
    )
}

export default Person