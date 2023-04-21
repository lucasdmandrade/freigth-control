import { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  checked?: boolean;
}

const Check: FC<Props> = ({
  width = "309.000000pt",
  height = "275.000000pt",
  color = "#000000",
  checked,
}) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 309.000000 275.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)"
      fill={color}
      stroke="none"
    >
      <path
        d="M1275 2565 c-273 -37 -507 -162 -707 -373 -150 -160 -245 -344 -294
        -567 -24 -111 -24 -360 0 -470 59 -268 181 -477 386 -660 307 -273 770 -366
        1165 -233 346 116 632 398 748 738 46 135 62 233 62 390 0 357 -135 653 -406
        895 -252 225 -606 329 -954 280z m400 -60 c112 -23 185 -50 297 -107 499 -254
        738 -843 556 -1373 -132 -387 -448 -664 -858 -752 -116 -25 -334 -25 -450 0
        -116 25 -189 51 -301 108 -629 321 -813 1135 -383 1699 55 73 195 206 264 251
        137 91 309 158 470 184 106 18 296 13 405 -10z"
      />
      {checked && (
        <path
          d="M1695 1440 l-390 -390 -201 201 c-165 165 -205 200 -225 197 -17 -2
        -25 -10 -27 -28 -2 -21 35 -62 222 -248 193 -193 226 -222 242 -214 11 6 203
        195 428 420 375 376 407 411 397 431 -26 48 -44 33 -446 -369z"
        />
      )}
    </g>
  </svg>
);

export default Check;
