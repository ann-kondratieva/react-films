import React from 'react';
import PropTypes from 'prop-types';

import TinyMCEInput from 'react-tinymce-input';

const RenderTinymceField = ({
    input,
    label,
    meta: { touched, error },
    ...custom,
}) => {
    return (
        <TinyMCEInput
            value={input.value}
            {...input}
            {...custom}
            error={touched && error}
            placeholder={label}
            onChange={e => input.onChange(e)}
            tinymceConfig={{
                plugins: 'autolink link image lists print preview',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
            }}
        />
    );
};

RenderTinymceField.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired
};

export default RenderTinymceField;