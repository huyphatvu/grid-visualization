import BoxContent from  '../../json/BoxContent.json'

//(state, action) => newState
export default (state = BoxContent.BoxContentArr[0][0], action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':
      console.log(action.demoID)
      return BoxContent.BoxContentArr[action.demoID][action.contentID]
    default:
      return state
  }
}
