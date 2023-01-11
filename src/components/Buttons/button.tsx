import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { IButtonProps } from './button.types';

export const ButtonComponent = (props: IButtonProps) => {
    const [count, setCount] = React.useState<number>(0);

    const handleClick = (): void => {
        setCount(count + 1);
    };

    React.useEffect(() => {
        console.log("Button counter " + count);

        return (): void => {
            console.log("Hello");
        }
    }, [count])

    return (
        <div>
            <PrimaryButton
                styles={{ root: { background: 'red', margin: 20 } }}
                text={props.text}
                onClick={handleClick}
            />
            <text>{count % 2 === 0 ? `${count.toString()} este par` : `${count.toString()} este impar`}</text>
        </div>
    );
};