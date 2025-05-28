interface CircleIconProps {
  className?: string;
  style?: React.CSSProperties;
  number?: number | string;
  fillColor?: string;
  fontSize?: number;
  radius?: number;
  strokeColor?: string;
  textColor?: string;
}

const CircleIcon = ({
  className,
  style,
  number,
  fillColor = "var(--white)",
  fontSize = 12,
  radius = 10,
  strokeColor = "currentColor",
  textColor = "currentColor",
}: CircleIconProps) => {
  const diameter = radius * 2;

  let displayNum: string;
  if (number === undefined) {
    displayNum = "";
  } else if (typeof number === "number") {
    displayNum = number > 3 ? "+3" : number.toString();
  } else {
    displayNum = number;
  }

  return (
    <svg
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      className={className}
      style={style}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - 1}
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth="1"
      />

      {number !== undefined && (
        <text
          x={radius}
          y={radius + fontSize * 0.05}
          fontSize={fontSize}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
        >
          {displayNum}
        </text>
      )}
    </svg>
  );
};

export default CircleIcon;
