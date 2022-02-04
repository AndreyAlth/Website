import React from 'react';

function LinkItem(
    {
        title,
        link
    }
) {
    return (
        <>
        <a 
        className='button link-tree-button'
        href={link}>
            {title}
        </a>
        </>
    );
}

export default LinkItem;
