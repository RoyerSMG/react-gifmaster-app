import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setTnputValue] = useState('One Punch');
    
    const OnInputChange = ({ target }) => {
        setTnputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        setTnputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ (event) => OnInputChange(event) }
            />
        </form>
    )
}
