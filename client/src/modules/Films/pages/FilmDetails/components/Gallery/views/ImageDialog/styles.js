const styles = () => ({
    image: {
        width: '100%',
        height: 'auto',
        zIndex: '1'
    },
    firstHalf: {
        width: '50%',
        height: '100%',
        zIndex: '5',
        position: 'absolute',
        left: '-100px',
        cursor: 'pointer'
    },
    secondHalf: {
        width: '50%',
        height: '100%',
        zIndex: '5',
        position: 'absolute',
        right: '-100px',
        cursor: 'pointer'
    },
    paper: {
        overflowY: 'visible',
    }
});

export default styles;