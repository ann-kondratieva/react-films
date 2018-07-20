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
                theme: 'modern',
                plugins: 'print preview  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools contextmenu colorpicker textpattern help',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright',
                forced_root_block: '',
                force_br_newlines: true,
                force_p_newlines: false,
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