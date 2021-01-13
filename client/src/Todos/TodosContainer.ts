import { Dispatch } from "redux";
import { connect } from "react-redux";

import { Todos, TodosProps, TodosActions } from "./Todos";
import { selectVisibleItems } from "./state/TodosSelector";
import { add, toggle, remove, test_reselect } from "./state/TodosActions";
import { TodosState } from "./state/TodosModel";

export interface TodosContainerProps {
}

// mapStateToProps() subscribes component to Redux store change, it is invoked when store is changed
// state: the entire app state, but we are only interested in the TodosState slice
// ownProps: props passed to container
// it returns an object, which will be merged into the component’s props.
const mapStateToProps = (state: TodosState, ownProps: TodosContainerProps): TodosProps => {
	return {
		items: selectVisibleItems(state),
	};
};

// mapDispatchToProps() gives component.props access to action creator and dispatch action 
// it could be function mapDispatchToProps(dispatch, ownProps), returns an object containing action creator with dispatch bound
// it could be object, where each field is an action creator, and connect() will automatically call bindActionCreators for actions
const mapDispatchToProps = (dispatch: Dispatch, ownProps: TodosContainerProps): TodosActions => {
	return {
		add: (label: string) => dispatch(add(label)),
		toggle: (id: string) => dispatch(toggle(id)),
		remove: (id: string) => dispatch(remove(id)),
		test_reselect: () => dispatch(test_reselect()),
	};
};

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options) connects a React component to a Redux store
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosContainer;
