import React from 'react';

const Avatar = ({ status, img }) => {
    return (
        <>
            <div class={`avatar ${status}`}> {/* offline */}
                <div class="w-9 rounded-full">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Avatar;