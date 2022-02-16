import React from 'react'

export default function Wave() {
  return (
    <svg width="100%" height="150" viewBox="0 0 500 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="white">
        <animate
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="8s"
          values="
          M0 75C0 75 35 0 126 0C217 0 280 86.1487 356 86.1487C432 86.1487 500 38.5135 500 38.5135V150H0V75Z;

          M0 23.8684C0 23.8684 57 76 148 76C239 76 271 0 364 0C457 0 500 61 500 61V150H0V23.8684Z;

          M0 75C0 75 35 0 126 0C217 0 280 86.1487 356 86.1487C432 86.1487 500 38.5135 500 38.5135V150H0V75Z
          " />
      </path>
    </svg>
  )
}