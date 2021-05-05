import React, { ReactNode } from 'react'
//export the interface of the set of props of a particualar component

export interface HeadingProps {
    title: string;
}

export const Heading = ({ title }: HeadingProps) => {
    return <h1>{title}</h1>;
}


export function List<ListItem>({ items, render }: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}


function TestComponent() {
    return (
        <div>
            <Heading title="Heeey" />
            <List items={['a', 'b', 'c']} render={(str) => <strong>{str}</strong>} />
        </div>
    )

}

export default TestComponent
