import React, {useCallback} from 'react';

const CloseModalButton = ({styles, close, values,removeIconClass,removeTelClass}) => {
    const closeModal = useCallback(()=>{
        close(false)
        removeIconClass(false)
        removeTelClass(false)
    },[])
    return (
        <button
            className={styles}
            onClick={closeModal}
        >
            {values}
        </button>
    );
};

export default CloseModalButton;
