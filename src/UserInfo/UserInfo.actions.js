export const SET_CONCENTRATION = 'SET_CONCENTRATION'

export function setConcentrationAction(concentration) {
  return {
    type: SET_CONCENTRATION,
    concentration: concentration
  }
}
