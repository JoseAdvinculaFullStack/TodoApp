
const CancelSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M11.785.471 11.314 0 5.893 5.421.47 0 0 .471l5.421 5.422L0 11.313l.471.472 5.422-5.421 5.42 5.421.472-.471-5.421-5.421L11.785.47Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CancelSvg
