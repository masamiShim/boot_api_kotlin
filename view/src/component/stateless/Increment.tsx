import React, {Dispatch} from 'react';

interface Props {
    count: number
    setCount: Dispatch<number>
}

const Increment: React.FC<Props> = (props: Props) => {
    const clickEventHandler = () => {
        props.setCount(props.count + 1)
    }

    return (
        <button className={'border border-gray-200 px-8'} onClick={clickEventHandler}>INCREMENT</button>
    )
};

export default Increment;
