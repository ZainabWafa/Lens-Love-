import analyticsTypes from './analytics.types'

// export const fetchAnalyticsAdmin=()=>({
//     type:analyticsTypes.FETCH_ANALYTICS_ADMIN,
//   })
  
//   export const setAnalyticsAdmin=orders=>({
//     type:analyticsTypes.SET_ANALYTICS_ADMIN,
//     payload:orders
//   })

export const addAnalyticsStart=(analyticsData)=>({
  type:analyticsTypes.ADD_ANALYTICS_START,
  payload:analyticsData
})