
import React, {FC, InputHTMLAttributes} from 'react';

export interface ISingleCharacterInputProps extends InputHTMLAttributes<HTMLInputElement> {
    readonly pattern: string;
}

const SingleCharacterInput: FC<ISingleCharacterInputProps> = ({pattern} : ISingleCharacterInputProps) => {

    return (
        <input pattern={pattern}/>
    );
}



export default SingleCharacterInput