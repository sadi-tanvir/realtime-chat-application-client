import React from 'react';

const Collapse = ({header,children}) => {
    return (
        <>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 mx-3 bg-base-100 rounded-box mt-2">
                <div class="collapse-title text-xl font-medium">
                    {header}
                </div>
                <div class="collapse-content">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Collapse;