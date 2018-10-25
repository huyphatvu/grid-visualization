import BoxContent from  '../../json/BoxContent.json'

//(state, action) => newState
export default (state = {contentScript: null, triggeredDemoID: null}, action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':
      // console.log(action.demoID)
      return {
        contentScript: BoxContent.BoxContentArr[action.demoID][action.contentID],
        triggeredDemoID: action.demoID
      }
    default:
      return state
  }
}
