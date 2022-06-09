import React from 'react';

const Avatar = ({ status, img, divClass }) => {
    return (
        <>
            <div class={`avatar ${status} ${divClass}`}> {/* offline */}
                <div class="w-9 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Avatar;