import React, { Component } from 'react'

export default class Tools extends Component {
    render() {
        const { children,onAction, labelValue } = this.props
        const onlyChild = React.Children.only(children)
        const count = React.Children.count(onlyChild.props.children)
        return (
            <div>
                <div className='list-header'>
                    <select value={labelValue} name="status" onChange={onAction} >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non Active</option>
                    </select>
                </div>
                {children}
                <div> Total {count} items</div>
            </div>
        )
    }
}
