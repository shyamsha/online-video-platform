import React, { Component, Dispatch, Fragment } from 'react'
import { connect } from 'react-redux';
import { loginRequest } from '../actions';


interface PropsFromState {
    loading: boolean;
    errors: {  };
  };

  interface PropsDispatchFromState {
    onLogin: typeof loginRequest;

  };

  type AllProps = PropsFromState & PropsDispatchFromState;

  interface State {};


class Login extends Component<AllProps,State> {
    state:State={}

    componentDidMount() {
        this.props.onLogin()
    }


    render() {
        return (
            <Fragment>
               <div>first</div>
               <div>second</div>
            </Fragment>
        )
    }
}

const mapStateToProps: any = () => ({

});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    onLogin: () => dispatch(loginRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Login);
