import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifMasterApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);	
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        
        setCategories( [newCategory, ...categories ] );
    }
    
    return (
        <>
            <h1 className='title'>Gif Master App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

                {
                    categories.map( category => {
                        return (
                            <GifGrid key={ category } category={ category } />
                        )
                    })
                }
        </>
    )
}
