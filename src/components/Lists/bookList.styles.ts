import React from "react";

export const getListItemStyle = (isSelected?: boolean): React.CSSProperties => {
    return { background: isSelected ? 'green' : 'white' };
}