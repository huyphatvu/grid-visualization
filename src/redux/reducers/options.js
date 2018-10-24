import BoxContent from  '../../json/BoxContent.json'

//(state, action) => newState
const options = (state = BoxContent.BoxContentArr[0], action) => {
  switch (action.type) {
    case 'TOGGLE_OPTION':
      switch(action.contentID){
        case 0:
          return BoxContent.BoxContentArr[0]
        case 1:
          return BoxContent.BoxContentArr[1]
        default:
          return state
      }

    default:
      return state
  }
}

export default options
