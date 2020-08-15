import { Dispatch } from "redux";
import { connect } from "react-redux";

import { Todos, TodosProps, TodosActions } from "./Todos";
import { selectVisibleItems } from "./state/TodoSelector";
import { add, toggle, remove } from "./state/TodosActions";
import { TodosState } from "./state/TodosModel";

export interface TodosContainerProps {
}

// state is the entire app state, but we only want the TodosState slice
const mapStateToProps = (state: TodosState, ownProps: TodosContainerProps): TodosProps => {
	return {
		items: selectVisibleItems(state),
	};
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: TodosContainerProps): TodosActions => {
	return {
		add: (label: string) => dispatch(add(label)),
		toggle: (id: string) => dispatch(toggle(id)),
		remove: (id: string) => dispatch(remove(id)),
	};
};

export const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);
