import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// get data from the store
// it is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

// mapDispatchToProps: this parameter can either be a function, or an object.
//  If it’s a function, it will be called once on component creation.
//      It will receive dispatch as an argument, and should return an object full of functions that use dispatch to dispatch actions.
//  If it’s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called.
//      Note: We recommend using this “object shorthand” form.
// create a prop named toggleTodo for  TodoList, whenever invoke it --> dispatch an action --> trigger reducer --> trigger mapStatetoProps --> Update Content
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// `connect` returns a new function that accepts the component to wrap:
// and that function returns the connected, wrapper component:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
