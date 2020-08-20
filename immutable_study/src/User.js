import React, { Component } from 'react';

class User extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }
  render() {
    const { username } = this.props.user.toJS(); // 비 구조화 할당
    // const username = this.props.user.get('username') 해도 됨.
    // const username = this.props.user 해도 됨.

    console.log('%s가 렌더링 되고있어요!!!', username);

    return (
      <div>
        {username}
      </div>
    );
  }
}

export default User;