import React, { Component } from 'react'
import ListItem from './ListItem'
import Tools from './Tools';

const arr=[
    {
        title:"Appointment for October",
        descr:"The Patient is rescheduled to October",
        isActive:false
    },
    {
        title:"Appointment for November",
        descr:"The Patient is rescheduled to November",
        isActive:true
    },
    {
        title:"Appointment for November",
        descr:"The Patient is rescheduled to November",
        isActive:false
    },
]
export default class List extends Component {
    render() {
        return (
            <Tools>
            <div>
                {
                    arr.map((iteam)=>{
                        return <ListItem title={iteam.title} descr={iteam.descr} isActive={iteam.isActive}/>
                    })
                }
            </div>
            </Tools>
        );
    }
}
