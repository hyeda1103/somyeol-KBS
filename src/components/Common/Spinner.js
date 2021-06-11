import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const Spinner = () => {
    return (
    <Loader>
        <div />
        <div />
    </Loader>
    )
}

export default Spinner

const loading = keyframes`
    0% {
        top: 28px;
        left: 28px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: -1px;
        left: -1px;
        width: 58px;
        height: 58px;
        opacity: 0;
    }
`

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    background: #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${loading} 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.7s;
  }
` 

