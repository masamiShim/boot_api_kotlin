import React, {ChangeEvent} from 'react';

type Props = {
    label: string;
    handleChange: Function
}

const InputText: React.FC<Props> = (props) => {
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value ? e.target.value : '';
        props.handleChange(v);
    };
    return (
        <div>
            <label className="text-gray-300">{props.label}</label>
            <input
                className="appearance-none border-2 border-gray-400 rounded w-full mt-1 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"
                type="text" onChange={onChangeValue}/>
        </div>
    )
};

export default InputText;