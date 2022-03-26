import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from 'axios'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    // { name: 'Sandra Bullock', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Sandra_Bullock_%289192365016%29_%28cropped%29.jpg'},
    // { name: 'Drew Barrymore', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Drew_Barrymore_Berlin_2014.jpg'},
    // { name: 'Elon Musk', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/409px-Elon_Musk_2015.jpg'},
    // { name: 'Jeff Bezos', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Jeff_Bezos_2016_crop.jpg'},

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('https://tinder-mern-backend-weekend.herokuapp.com/tinder/cards', { withCredentials: true });
            setPeople(req.data);
        }
        fetchData()
    },[])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    console.log(people);

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard 
                        className="swipe" 
                        key={person.name} 
                        preventSwipe={['up', 'down']}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards