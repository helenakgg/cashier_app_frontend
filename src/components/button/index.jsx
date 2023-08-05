import React from "react"
import  "./styles.css"

export default React.memo(
    function Button ({
        title,
        variant = "warning",
        onButtonClick
    }) {
        return (
            <button className={`btn btn-${variant}`} onClick={onButtonClick}>
                { title }
            </button>
        )
    }
)