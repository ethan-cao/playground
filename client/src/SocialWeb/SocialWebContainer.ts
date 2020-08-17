import { connect } from "react-redux";

import { SocialWeb } from "./SocialWeb";
import { SocialWebState } from "./state/SocialWebModel";
import { selectIsLoading, selectUsers } from "./state/SocialWebSelector";
import { fetchUsers } from "./state/SocialWebActions";

const mapStateToProps = (state: SocialWebState) => {
    return {
        isLoading: selectIsLoading(state),
        users: selectUsers(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        load: () => { dispatch(fetchUsers()) },
    };
}

export const SocialWebContainer = connect(mapStateToProps, mapDispatchToProps)(SocialWeb);
