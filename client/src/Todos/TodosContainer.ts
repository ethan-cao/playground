import { Todos } from "./Todos";
import { connect } from "react-redux";
import { RootState } from "../AppStore";
import { selectVisibleItems } from "./state/TodoSelector";

const mapStateToProps = (state: RootState) => {
    return {
        items: selectVisibleItems(state),
    };
};

const mapDispatchToProps = () => {
    return {
        toggle : () => null,
        remove : () => null, 
        add: ()=> null,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
