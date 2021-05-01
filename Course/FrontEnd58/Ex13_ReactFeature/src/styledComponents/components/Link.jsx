import React from 'react'
import styled from "styled-components";


export const Link = ({className, children, ...restProps}) => {
    return (
        <a className={className} {...restProps}>
            {children}
        </a>
    )
}

export const StyledLink = styled(Link)`
    color: red!important;
`