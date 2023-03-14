import * as React from "react"
import animations from "@/styles/animations.module.css"

const IconTaggyTriangle = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 195.4 168.2"
    className={animations.trianglePosition} 
    {...props}
  >
    <g
      style={{
        opacity: 0.15,
      }}
    >
      <path
        style={{
          fill: "#333",
        }}
        d="M98.3 35.4 21.7 168h153.1L98.3 35.4z"
      />
      <path
        d="M177.5 184.1H23.6l.2-.4 76.8-132.9.2.4Zm-153.1-.5h152.3L100.6 51.8Z"
        transform="translate(-2.3 -15.9)"
        style={{
          fill: "gray",
        }}
      />
    </g>
    <g
      style={{
        opacity: 0.15,
      }}
    >
      <path
        style={{
          fill: "#333",
        }}
        d="M77 .5.4 133.1h153.1L77 .5z"
      />
      <path
        d="M156.3 149.2H2.3l.2-.4L79.3 15.9l.2.4Zm-153.1-.5h152.2L79.3 16.9Z"
        transform="translate(-2.3 -15.9)"
        style={{
          fill: "gray",
        }}
      />
    </g>
    <g
      style={{
        opacity: 0.15,
      }}
    >
      <path
        style={{
          fill: "#333",
        }}
        d="M118.4 2.3 41.8 134.9h153.1L118.4 2.3z"
      />
      <path
        d="M197.7 151h-154l.3-.3 76.7-133 .2.4Zm-153.1-.5h152.2L120.7 18.7Z"
        transform="translate(-2.3 -15.9)"
        style={{
          fill: "gray",
        }}
      />
    </g>
    <path
      style={{
        fill: "#333",
      }}
      d="M98.3 13 21.7 145.6h153.1L98.3 13z"
    />
    <defs>  
        <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%" >   
            <stop offset="0%" stop-color="#ff3385">
                <animate attributeName="stop-color" values="#ff3385; #5EAD27; #ff3385" dur="1s" repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stop-color="#5EAD27">
                <animate attributeName="stop-color" values="#5EAD27; #ff3385; #5EAD27" dur="1s" repeatCount="indefinite"></animate>
            </stop>
        </linearGradient> 
    </defs>
    <path
      d="M177.5 161.7H23.6l.2-.3 76.8-133 .2.4Zm-153.1-.4h152.3L100.6 29.4Z"
      transform="translate(-2.3 -15.9)"
      style={{
        fill: "url(#gradient)",
      }}
    />

  </svg>
)

export default IconTaggyTriangle