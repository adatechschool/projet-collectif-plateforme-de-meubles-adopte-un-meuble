import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
    return (
        // <div className="flex p-[0.625rem] flex-col items-start gap-[0.625rem] self-stretch">
        <div className="w-80 h-[443px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
        {/* </div><div className="flex h-[18.75rem] flex-col justify-center items-start self-stretch"> */}
        <div className="self-stretch h-[300px] flex-col justify-center items-start flex">
            {/* <img className="w-[36rem] h-[24.0625rem] shrink-0" src={props.image} /> */}
            <img className="w-[576px] h-[385px]" src={props.image} />
        </div>
        {/* <div className="flex flex-col items-start gap-[0.3125rem] self-stretch"> */}
        <div className="self-stretch h-[113px] flex-col justify-start items-start gap-[5px] flex">
            {/* <div className="text-stone-900 font-['Inter'] text-[1.875rem] not-italic font-bold leading-normal">{props.title}</div> */}
            <div className="text-stone-900 text-3xl font-bold font-['Inter']">{props.title}</div>
            {/* <div className="flex flex-col items-start"> */}
            <div className="flex-col justify-start items-start flex">
                {/* <div className="flex justify-end items-start gap-[0.625rem]">{props.price}</div> */}
                <div className="text-black text-xl font-bold font-['Inter']">{props.price}</div>
            </div>
            <div className="text-stone-900 text-xl font-medium font-['Inter']">{props.divers}</div>
            {/* <div className="text-stone-900 font-['Inter'] text-[1.25rem] not-italic font-medium leading-normal">{props.seller}</div> */}
            <div className="text-stone-900 text-xl font-medium font-['Inter']">{props.seller}</div>
        </div>
    </div>     
    )
}

export default ProductCard;

