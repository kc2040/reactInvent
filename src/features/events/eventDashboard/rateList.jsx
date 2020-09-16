import React from 'react';
import RateListItem from './rateListItem';

export default function RateList(props){
    return (
        <div>
     
        {props.rates.map(rate => (<RateListItem rate={rate} key={rate.id} /> ))}


        </div>
    );
}