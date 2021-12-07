import React from "react";

import Card from "./Card";
import '../styles/cards.scss';

import comment from '../img/comments.jpg';
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
                    title='ToDo style App'
                    text='This app was build in ReactJS library. It`s contain my own practice with "props, states, events, this". It is not a perfect-styled app but is functional. You can add, like or delete comments.'
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
            
            {/* <Card 
                title='Shark Week: How to Watch It Like a Scientist'
                url='https://ipla.pluscdn.pl/dituel/cp/is/isj851tttp3b7dbdqe65u82idtdtk221.jpg'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                link='/'
            />
            <Card 
                title="Who's Afraid of the Self-Driving Car?"
                url='https://ipla.pluscdn.pl/dituel/cp/is/isj851tttp3b7dbdqe65u82idtdtk221.jpg'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                link='/'
            />
            <Card 
                title='Card Title'
                url='https://ipla.pluscdn.pl/dituel/cp/is/isj851tttp3b7dbdqe65u82idtdtk221.jpg'
                text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            /> */}
            </div>
            

        </div>
    </>    
        
    )
};