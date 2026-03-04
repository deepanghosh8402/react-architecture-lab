import React from 'react'
import ListItem from './ListItem'

export default function SimpleList(props) {
    const { newList, onDelete, onLabelChange } = props
    return (
        <div>
            {
                newList.map((iteam) => {
                    return <ListItem
                        key={iteam.id}
                        title={iteam.title}
                        descr={iteam.descr}
                        isActive={iteam.isActive}
                        onDelete={() => {onDelete(iteam.id)}}
                        onLabelChange={onLabelChange} />
                })
            }
        </div>
    )
}
