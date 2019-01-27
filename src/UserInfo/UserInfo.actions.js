export const SET_YEAR = 'SET_YEAR'
export const SET_CONCENTRATION = 'SET_CONCENTRATION'
export const SET_FIRST_PATHWAY = 'SET_FIRST_PATHWAY'
export const SET_SECOND_PATHWAY = 'SET_SECOND_PATHWAY'

export function setYearAction(year) {
  return {
    type: SET_YEAR,
    year: year
  }
}

export function setConcentrationAction(concentration) {
  return {
    type: SET_CONCENTRATION,
    concentration: concentration
  }
}

export function setFirstPathwayAction(pathway) {
  return {
    type: SET_FIRST_PATHWAY,
    pathway: pathway
  }
}

export function setSecondPathwayAction(pathway) {
  return {
    type: SET_SECOND_PATHWAY,
    pathway: pathway
  }
}
