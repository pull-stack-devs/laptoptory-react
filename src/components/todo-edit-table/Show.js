import React from 'react'

export default function Show(props) {
    
    return (props.condition) ? props.children : null;
    
}
