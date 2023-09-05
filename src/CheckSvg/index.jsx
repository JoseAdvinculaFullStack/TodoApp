import * as React from "react"
const CheckSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} fill="#fff" stroke="#E3E4F1" />
    <circle id="check" cx={10} cy={10} r={10} fill="url(#a)" visibility={props.active =="true" ? "visible" : "hidden"} />
    <path stroke="#fff" strokeWidth={2} d="M6.667 10.253 8.913 12.5l5-5" />
    <defs>
      <linearGradient
        id="a"
        x1={-10}
        x2={10}
        y1={10}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5DF" />
        <stop offset={1} stopColor="#C058F3" />
      </linearGradient>
    </defs>
  </svg>
)
export default CheckSvg
