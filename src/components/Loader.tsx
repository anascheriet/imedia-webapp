import React from 'react'
import { ColorRing } from 'react-loader-spinner';


type IProps = {
    colors: [string, string, string, string, string],
}
export const Loader: React.FC<IProps> = ({ colors }) => {

    return (
        <div className="loader">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={colors}
            />
        </div>
    );
}
