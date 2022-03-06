import React from 'react'
import Person from './Person'

const PersonList = () => {
    // const names = ['Max', 'Manu', 'Stephanie']
    const persons = [
        {
            id: 1,
            name: 'Max',
            age: 28,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Manu',
            age: 30,
            skills: 'HTML'
        },
        {
            id: 3,
            name: 'Stephanie',
            age: 35,
            skills: 'Angular'
        },
    ]

    return persons.map(person => <Person key={person.id} person={person} />)
}

export default PersonList