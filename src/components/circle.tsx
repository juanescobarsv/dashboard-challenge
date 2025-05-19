import React from "react";

interface CircleIconProps {
  radius?: number;
  strokeColor?: string;
  fillColor?: string;
  textColor?: string;
  fontSize?: number;
  number?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const CircleIcon: React.FC<CircleIconProps> = ({
  radius = 10,
  strokeColor = "currentColor",
  fillColor = "var(--white)",
  textColor = "currentColor",
  fontSize = 12,
  number,
  className,
  style,
}) => {
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
