import React from 'react';

const Avatar = ({ status, img, divClass,size }) => {
    return (
        <>
            <div class={`avatar ${status} ${divClass}`}> {/* offline */}
                <div class={`rounded-full ${size}`}>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Avatar;