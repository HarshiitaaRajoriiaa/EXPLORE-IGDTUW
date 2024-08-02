import React from 'react';
import './Card.css';

const Card = ({ name, about, imageUrl }) => {
    return (
        <div className="relative h-[450px] w-[400px] flip-card shadow-lg">
            <div className="flip-card-inner rounded-3xl">
                <div className="flip-card-front">
                    <img
                        src={imageUrl}
                        className="z-0 h-full w-full rounded-3xl object-cover"
                        alt="Card front"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-3xl"></div>
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="text-lg font-semibold text-white">{name}</h1>
                    </div>
                </div>
                <div className="flip-card-back flex items-center justify-center bg-[#344955] text-white rounded-3xl">
                    <p className="p-4">{about}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
{/* <Card name="Name of Faculty/" about="about" imageUrl ="https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> */}

