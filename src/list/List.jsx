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
            data: arr,
            activeState: 'all'
        }
    }

    onListChanged = (eve) => {
        const selectedValue = eve.target.value
        this.setState({
            activeState: selectedValue
        });
    }

    onDelete = (id) => {
        const newList = this.state.data.filter((iteam) => iteam.id !== id)
        this.setState({ data: newList })
    }
    render() {
        const {
            data,
            activeState
        } = this.state;

        const newList = data.filter((iteam) => {
            if ('all' === activeState)
                return true
            if ('active' === activeState)
                return iteam.isActive === true
            if ('non-active' === activeState)
                return iteam.isActive === false
            return false
        })
        return (

            <Tools onAction={this.onListChanged}>
                <div>
                    {
                        newList.map((iteam) => {
                            return <ListItem
                                key={iteam.id}
                                title={iteam.title}
                                descr={iteam.descr}
                                isActive={iteam.isActive}
                                onDelete={() => this.onDelete(iteam.id)} />
                        })
                    }
                </div>
            </Tools>
        );
    }
}
