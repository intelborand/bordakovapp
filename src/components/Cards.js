import React from "react";

import Card from "./Card";
import '../styles/cards.scss';

import comment from '../img/comments.jpg';
import calculator from '../img/calculator.jpg';
import CardDescribe from "./CardDescribe";

export default function Cards() {
    return(
    <>
           
        <div className='cardsContainer'>
            <div>
                <h1 className='title'>Cards</h1>
            </div>
            <div>
                <div className="flex-cards">
            
                    <Card 
                        url={comment}
                        link='/comments_app'
                        
                    />
                    <CardDescribe
                        title='Comments App'
                        text='This ToDo style app was build in ReactJS library. It`s contain my own practice with "props, states, events, this". It is not a perfect-styled app but is functional. You can add, like or delete comments.'
                        link='/comments_app'/>

                    <style jsx>{`
                    .flex-cards{
                        display: flex;
                        flex-direction:row;
                        margin: 25px auto;
                        justify-content: center;
                    }
                    `}</style>
                </div>

                <div className="flex-cards">
                    <Card 
                        url={calculator}
                        link='/calculator_app'
                        
                    />
                    <CardDescribe
                        title='Calculator App'
                        text='This app was build in ReactJS library. It`s contain my own practice with "props, states, events, this". It is not a perfect-styled app but is functional. You can add, like or delete comments.'
                        link='/calculator_app'/>

                    <style jsx>{`
                    .flex-cards{
                        display: flex;
                        flex-direction:row;
                        margin: 25px auto;
                        justify-content: center;
                    }
                    `}</style>
                </div>
            </div>
            

        </div>
    </>    
        
    )
};