import React from 'react'

interface MouthProps {
  top?: number
  left?: number
  state?: 'open' | 'smile' | 'serious'
}

export const Mouth: React.FunctionComponent<MouthProps> = ({
  left = 0,
  state,
  top = 0,
}) => {
  const open = React.useRef(null)
  const smile = React.useRef(null)
  const serious = React.useRef(null)

  React.useEffect(() => {
    switch (state) {
      case 'smile':
        return smile.current?.beginElement()
      case 'serious':
        return serious.current?.beginElement()
      case 'open':
      default:
        return open.current?.beginElement()
    }
  }, [state])

  return (
    <g id="Mouth" transform={`translate(${left}, ${top})`}>
      <path
        d="M1.10526316,3 C1.10526316,12 11.0526316,20 21,20 C30.9473684,20 40.8947368,12 40.8947368,3 C40.8947368,2 39.7894737,1 38.6842105,1 C23.4365906,1 11.1485351,1 3.31578947,1 C2.20993615,1 1.10526316,2 1.10526316,3 Z"
        fill="#0F0F0F"
        id="Mouth"
      />
      <path
        d="M26.2860412,13 C29.7983959,13 32.6952879,14.3421244 33.1075988,16.0743864 C29.6082295,18.5022433 25.3041147,20 21,20 C16.6958502,20 12.3917004,18.5022189 8.89338487,16.0737254 C9.30581784,14.3416122 12.2022744,13 15.7139588,13 C17.8401965,13 19.7408915,13.4918353 21.0013983,14.2643168 C22.2601566,13.4915641 24.1603898,13 26.2860412,13 Z"
        fill="#FF4F6D"
        id="Tongue"
      />
      <path
        d="M37.5789474,1 C37.5789474,4 35.3684211,6 32.0526316,6 L9.94736842,6 C6.63157895,6 4.42105263,4 4.42105263,1 L37.5789474,1 Z"
        fill="#FFFFFF"
        id="Teeth"
      />
      <path
        d="M39.6666667,0 C40.8333333,0 42,1.10526316 42,2.21052632 C42,12.1578947 31.5,21 21,21 C10.5,21 1.25653873e-13,12.1578947 1.25653873e-13,2.21052632 C1.25653873e-13,1.15331808 1.06685285,0.0961098398 2.18118097,0.00617719197 L2.33333333,0 L39.6666667,0 Z M38.6842105,1 C32.7894737,1 26.8947368,1 21,1 C15.1052632,1 9.21052632,1 3.31578947,1 C2.20993615,1 1.10526316,2 1.10526316,3 C1.10526316,12 11.0526316,20 21,20 C30.9473684,20 40.8947368,12 40.8947368,3 C40.8947368,2 39.7894737,1 38.6842105,1 Z"
        fill="#BD946E"
        id="Lips"
      >
        <animate
          attributeName="d"
          begin="indefinite"
          dur="150ms"
          fill="freeze"
          ref={open}
          to="M39.6666667,0 C40.8333333,0 42,1.10526316 42,2.21052632 C42,12.1578947 31.5,21 21,21 C10.5,21 1.25653873e-13,12.1578947 1.25653873e-13,2.21052632 C1.25653873e-13,1.15331808 1.06685285,0.0961098398 2.18118097,0.00617719197 L2.33333333,0 L39.6666667,0 Z M38.6842105,1 C32.7894737,1 26.8947368,1 21,1 C15.1052632,1 9.21052632,1 3.31578947,1 C2.20993615,1 1.10526316,2 1.10526316,3 C1.10526316,12 11.0526316,20 21,20 C30.9473684,20 40.8947368,12 40.8947368,3 C40.8947368,2 39.7894737,1 38.6842105,1 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="150ms"
          fill="freeze"
          ref={smile}
          to="M39.6666667,0 C40.8333333,0 42,1.10526316 42,2.21052632 C42,12.1578947 31.5,21 21,21 C10.5,21 1.25653873e-13,12.1578947 1.25653873e-13,2.21052632 C1.25653873e-13,1.15331808 1.06685285,0.0961098398 2.18118097,0.00617719197 L2.33333333,0 L39.6666667,0 Z M35.3684211,6 C31.6842105,8 26.8947368,9 21,9 C15.1052632,9 10.3157895,8 6.63157895,6 C5.52572562,6 4.42105263,6 4.42105263,7 C4.42105263,9 11.0526316,12 21,12 C30.9473684,12 37.5789474,9 37.5789474,7 C37.5789474,6 36.4736842,6 35.3684211,6 Z"
        />

        <animate
          attributeName="d"
          begin="indefinite"
          dur="150ms"
          fill="freeze"
          ref={serious}
          to="M39.6666667,0 C40.8333333,0 42,1.10526316 42,2.21052632 C42,12.1578947 31.5,21 21,21 C10.5,21 1.25653873e-13,12.1578947 1.25653873e-13,2.21052632 C1.25653873e-13,1.15331808 1.06685285,0.0961098398 2.18118097,0.00617719197 L2.33333333,0 L39.6666667,0 Z M32.0526316,8 C30.5789474,8.66666667 26.8947368,9 21,9 C15.1052632,9 11.4210526,8.66666667 9.94736842,8 C8.8415151,8 7.73684211,8 7.73684211,9 C7.73684211,11 11.0526316,12 21,12 C30.9473684,12 34.2631579,11 34.2631579,9 C34.2631579,8 33.1578947,8 32.0526316,8 Z"
        />
      </path>
    </g>
  )
}
