import { Todos } from "./Todos";
import { connect } from "react-redux";
import { RootState } from "../AppStore";
import { selectVisibleItems } from "./state/TodoSelector";
import {add} from "./state/TodoActions";

const mapStateToProps = (state: RootState) => {
    return {
        items: selectVisibleItems(state),
    };
};

const mapDispatchToProps = () => {
    return {
        add: add,
        toggle: () => null,
        remove: () => null, 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
