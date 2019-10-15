export function resetPin() {
  return { type: 'RESET_PIN' }
}

export function handleInput(value) {
  return {
    type: "HANDLE_INPUT",
    payload: value
  }
}

export function deletePin() {
  return { type: "DELETE_PIN" }
}