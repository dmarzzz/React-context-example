export const profileReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USERNAME":
        return [
          {
            username : action.Profile.username,
            token : state[0].token
          }
        ];
        case "CHANGE_TOKEN":
        return [
          {
            username : state[0].username, 
            token : action.Token.token
          }
        ];
      default:
        return state;
    }
  };