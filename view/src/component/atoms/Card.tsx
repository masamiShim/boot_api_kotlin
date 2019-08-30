import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
    updated: string;
}

type Props = {
    item: CardProps
}

const Card: React.FC<Props>= (props) => {
    return (
        <div className="flex-wrap rounded-lg shadow-md border">
            <div className='w-full border ml-auto mr-auto h-40' style={{MozBoxSizing: 'border-box'}}>
                <img src={props.item.imageUrl} alt="画像"/>
            </div>
            <div className="mt-6 ml-5 mr-5 pb-5 break-all whitespace-pre-line">
                <p className="text-indigo-400">{props.item.title}</p>
                <p className="mt-2 text-gray-700">{props.item.description}</p>
                <p className="text-gray-500 text-sm mt-2">
                    <FontAwesomeIcon icon="clock" className="mr-4"/>
                    {props.item.updated} ago
                </p>
            </div>
        </div>
    )
};

export default Card;