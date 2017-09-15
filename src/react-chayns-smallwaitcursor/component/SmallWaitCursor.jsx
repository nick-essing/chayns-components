import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SmallWaitCursor = ({ show, style, absolute }) => {
    const waitCursorClasses = classNames('wait--cursor--wrapper', {
        absolute,
        hidden: !show
    });

    return (
        <div className={waitCursorClasses} style={style}>
            <div className="small--wait--cursor chayns__background-color--10">
                <div className="spinner chayns__border-color--80" />
            </div>
        </div>
    );
};

SmallWaitCursor.propTypes = {
    absolute: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    style: PropTypes.object,
};

SmallWaitCursor.defaultProps = {
    style: null,
};

export default SmallWaitCursor;
