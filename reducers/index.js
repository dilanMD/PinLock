
const initialState = {
  pin: "",
  correctPin: "0000",
  successAlertShow: false,
  warningAlertShow: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_PIN":
      var randomNumber = Math.floor(Math.random() * 9999) + 1000
      alert("Your new pin is " + randomNumber)
      return { ...state, correctPin: randomNumber }
    case 'HANDLE_INPUT':
      var pinLength = state.pin.length
      if (pinLength < 4) {
        return { ...state, pin: state.pin + action.payload }
      }
      break
    case "DELETE_PIN":
      var pinLength = state.pin.length
      if (pinLength > 0) {
        return { ...state, pin: "" }
      }
      break
  }
  return state
}
