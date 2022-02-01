import { connect } from "react-redux";

import { SocialWeb, SocialWebActions, SocialWebProps } from "./SocialWeb";
import { SocialWebStoreSlice } from "./state/SocialWebModel";
import { selectIsLoading, selectUsers } from "./state/SocialWebSelector";
import { fetchUsers } from "./state/SocialWebActions";

const mapStateToProps = (state: SocialWebStoreSlice): SocialWebProps => {
    return {
        isLoading: selectIsLoading(state),
        users: selectUsers(state),
    }
};

const mapDispatchToProps = (dispatch: any): SocialWebActions => {
    return {
        loadUsers: () => { dispatch(fetchUsers()) },
    };
}

export const SocialWebContainer = connect(mapStateToProps, mapDispatchToProps)(SocialWeb);
