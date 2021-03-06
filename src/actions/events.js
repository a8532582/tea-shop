export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_COMPANYS = 'FETCH_COMPANYS'

export const toggleFilter = (type, id, name) => {
  return {
    type: TOGGLE_FILTER,
    filterType: type, // zone or vendor
    filterId: id,
    filterName: name
  }
}

export const fetchEvents = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/events/get')
      const data = await res.json()
      dispatch({
        type: FETCH_EVENTS,
        data
      })
    } catch (error) {
      console.log('err')
    }
  }
}

export const fetchCompanys = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/events/getCompanys')
      const data = await res.json()
      dispatch({
        type: FETCH_COMPANYS,
        data
      })
    } catch (error) {
      console.log('err')
    }
  }
}
