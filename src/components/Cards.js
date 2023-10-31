import React from "react";

import '../styles/cards.scss';
import Card from "./Card";
import CardDescribe from "./CardDescribe";

import snake from '../img/Snake.jpg';
import calculator from '../img/calc.jpg';
import comment from '../img/comments.jpg';
// import ecommerce from '../img/ecommerce-shop.png';


export default function Cards() {
    return (
        <>

            <div className='cardsContainer'>
                <div>
                    <h1 className='title'>Applications</h1>
                </div>
                <div>
                    <div className="flex-cards">

                        <Card
                            url={comment}
                            link='/comments_app'

                        />
                        <CardDescribe
                            title='Comments App'
                            text='This ToDo style app was build in ReactJS library and use Fetch API to load comments from fake JSON data. It`s contain my own practice with props, states, events, this and fetch. It is not a perfect-styled app but is functional. You can add, like or delete comments.'
                            githubLink='https://github.com/intelborand/bordakovapp/tree/main/src/components/Comments'
                            link='/comments_app' />

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
                            text='This app was build in ReactJS library. You know what is this Calculator. In this app I used reducer Hooks (useReducer). Calculator App contain my own practice with this hook. It`s working and it`s good!'
                            githubLink='https://github.com/intelborand/bordakovapp/tree/main/src/components/CalculatorApp'
                            link='/calculator_app' />

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
                            url={snake}
                            link='/snake_app'

                        />
                        <CardDescribe
                            title='Snake Game'
                            text='This "simple" game was build in ReactJS library. It`s working and it`s great! Have fun!'
                            githubLink='https://github.com/intelborand/bordakovapp/tree/main/src/components/SnakeApp'
                            link='/snake_app' />

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
                            url={snake}
                            link='/synonyms_app'

                        />
                        <CardDescribe
                            // title='Snake Game'
                            // text='This "simple" game was build in ReactJS library. It`s working and it`s great! Have fun!'
                            // githubLink='https://github.com/intelborand/bordakovapp/tree/main/src/components/SnakeApp'
                            link='/synonyms_app'
                        />

                        <style jsx>{`
                    .flex-cards{
                        display: flex;
                        flex-direction:row;
                        margin: 25px auto;
                        justify-content: center;
                    }
                    `}</style>
                    </div>

                    {/* <div className="flex-cards">
            
                    <Card 
                        url={ecommerce}
                        link='/e_commerce_app'
                        
                    />
                    <CardDescribe
                        title='E-Commerce App'
                        text='This webshop app was build in ReactJS library. It`s contain my own practice with props, states, and React Hooks. It is not a perfect-styled app but is functional. You can add, like or delete products from card.'
                        githubLink='https://github.com/intelborand/bordakovapp/tree/main/src/components/ECommerceApp'
                        link='/e_commerce_app'/>

                    <style jsx>{`
                    .flex-cards{
                        display: flex;
                        flex-direction:row;
                        margin: 25px auto;
                        justify-content: center;
                    }
                    `}</style>
                </div> */}
                </div>


            </div>
        </>

    )
};