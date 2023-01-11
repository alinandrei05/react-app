import React from "react";

interface IHello {
    text: string;
}

// function component
export const HelloFunction: React.FC<IHello> = (props: IHello): JSX.Element => {
    return (<h1>{props.text}</h1>)
}


//class component
export class HelloClass extends React.Component<IHello> {
    render() {
        return (<h1>{this.props.text}</h1>)
    }
}

//React API
export const HelloReactApi = (props: IHello): JSX.Element => {
    const element = React.createElement(
        'h1',
        { className: 'greeting' },
        props.text
    );

    return element;
}