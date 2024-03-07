import React from 'react'

function ProductCard(props) {
    return (
        <div className="w-80 h-[443px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-[300px] flex-col justify-center items-start flex">
            <img className="w-[576px] h-[385px]" src={props.image} />
        </div>
        <div className="self-stretch h-[113px] flex-col justify-start items-start gap-[5px] flex">
            <div className="text-stone-900 text-3xl font-bold font-['Inter']">{props.title}</div>
            <div className="flex-col justify-start items-start flex">
                <div className="text-black text-xl font-bold font-['Inter']">{props.price}</div>
            </div>
            <div className="text-stone-900 text-xl font-medium font-['Inter']">{props.divers}</div>
            <div className="text-stone-900 text-xl font-medium font-['Inter']">{props.seller}</div>
        </div>
    </div>     
    )
}

export default ProductCard;

