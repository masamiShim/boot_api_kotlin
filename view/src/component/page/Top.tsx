import React, {MouseEvent} from 'react';
import TopImage from '../../images/top.jpg';
import Card from "../atoms/Card";
import InputText from "../atoms/InputText";

type InputTextForm = {
    label: string;
    value: string;
}

type SearchForm = {
    area: InputTextForm;
    checkIn: InputTextForm;
    checkOut: InputTextForm;
    adult: InputTextForm;
    children: InputTextForm;
}

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
    updated: string;
}

const Top: React.FC = () => {
    const form: SearchForm = {
        area: {
            label: 'エリア',
            value: '',
        },
        checkIn: {
            label: 'チェックイン',
            value: '',
        },
        checkOut: {
            label: 'チェックアウト',
            value: '',
        },
        adult: {
            label: '大人',
            value: '0',
        },
        children: {
            label: '子ども',
            value: '0',
        },
    };
    const setArea = (val: string) => {form.area.value = val};
    const setCheckIn = (val: string) => {form.checkIn.value = val};
    const setCheckOut = (val: string) => {form.checkOut.value = val};
    const setAdult= (val: string) => {form.adult.value = val};
    const setChildren = (val: string) => {form.children.value = val};


    const cardProps: CardProps = {
        imageUrl: '',
        title: 'title',
        description: 'samplesamplesamplesamplesamplesample',
        updated: '2m'
    }

    const onHandleClick = (e:  MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className='max-w-full'>
            <div style={{position: 'relative'}}>
                <img src={TopImage} className='max-w-full min-w-full bg-cover' style={{height: '400px'}}/>
                <div className="p-5 z-10 bg-gray-900 h-56 opacity-50 w-full"
                         style={{position: 'absolute', bottom: '-20px'}}>
                </div>
                <form className="w-full flex flex-wrap align-middle z-20 absolute"
                      style={{bottom: '12px'}}>
                    <div className='flex justify-around'>
                        <div className="w-2/12">
                            <InputText label={form.area.label} handleChange={setArea}/>
                        </div>
                        <div className="flex flex-wrap w-2/12">
                            <InputText label={form.checkIn.label} handleChange={setCheckIn}/>
                        </div>
                        <div className="flex flex-wrap w-2/12">
                            <InputText label={form.checkOut.label} handleChange={setCheckOut}/>
                        </div>
                        <div className="flex flex-wrap w-2/12">
                            <InputText label={form.adult.label} handleChange={setAdult}/>
                        </div>
                        <div className="flex flex-wrap w-2/12">
                            <InputText label={form.children.label} handleChange={setChildren}/>
                        </div>
                    </div>
                    <div className="w-4/12 mt-6 ml-auto mr-auto mb-0">
                        <button
                            className="appearance-none rounded w-full py-3 px-4 text-gray-200 leading-tight bg-blue-900 hover:bg-blue-700"
                            onClick={onHandleClick}
                        >検索する
                        </button>
                    </div>
                </form>

            </div>
            <div className="pl-20 pr-20 pb-20" style={{position: 'relative'}}>
                <section className='w-full mt-16 pb-20'>
                    <h2 className="text-2xl font-bold">新着</h2>
                    <div className="mt-5 flex justify-between">
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                    </div>
                </section>
                <section className='container mt-16'>
                    <h2 className="text-2xl font-bold">おすすめ</h2>
                    <div className="mt-5 flex justify-between">
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                        <div style={{width: '23%'}}>
                            <Card item={cardProps} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Top;
