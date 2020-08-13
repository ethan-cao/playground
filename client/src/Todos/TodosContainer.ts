import { Todos, TodosProps } from "./Todos";
import { connect } from "react-redux";
import { RootState } from "../AppStore";
import { selectVisibleItems } from "./state/TodoSelector";
import { add } from "./state/TodoActions";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
	return {
		items: selectVisibleItems(state),
	};
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: TodosProps) => {
	return {
		add: (label: string) => dispatch(add(label)),
		toggle: () => null,
		remove: () => null,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
