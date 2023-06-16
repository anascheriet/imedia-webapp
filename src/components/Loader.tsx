import React from 'react'
import { Audio, ColorRing } from 'react-loader-spinner';

export const Loader = () => {

    return (
        <div className="loader">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#FFCC01', '#365EAB', '#365EAB', '#365EAB', '#365EAB']}
            />
        </div>
    );
}
