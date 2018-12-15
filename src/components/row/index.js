import React from 'react';
import ProtoTypes from 'prop-types';

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>


    )
}

Row.ProtoTypes = {
    left: ProtoTypes.node,
    right: ProtoTypes.node
}

export default Row