import React, { Component } from 'react'
import ListItem from './ListItem'
import Tools from './Tools';

const arr = [
    {
        id: 1,
        title: "Appointment for October",
        descr: "The Patient is rescheduled to October",
        isActive: false
    },
    {
        id: 2,
        title: "Appointment for November",
        descr: "The Patient is rescheduled to November",
        isActive: true
    },
    {
        id: 3,
        title: "Appointment for November",
        descr: "The Patient is rescheduled to November",
        isActive: false
    },
]
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: arr
        }
    }

    onListChanged = (eve) => {
        const selectedValue = eve.target.value
        const newList = arr.filter((iteam) => {
            if ('all' === selectedValue)
                return true
            if ('active' === selectedValue)
                return iteam.isActive === true
            if ('non-active' === selectedValue)
                return iteam.isActive === false
            return false
        })
        this.setState({
            data: newList
        });
    }
    render() {
        return (
            <Tools onAction={this.onListChanged}>
                <div>
                    {
                        this.state.data.map((iteam) => {
                            return <ListItem key={iteam.id} title={iteam.title} descr={iteam.descr} isActive={iteam.isActive} />
                        })
                    }
                </div>
            </Tools>
        );
    }
}
