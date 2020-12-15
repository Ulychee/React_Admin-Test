export default {
  //当用户试图登录时调用
  login:({username}) => {
    localStorage.setItem('username',username);
    return Promise.resolve();
  },
  //当用户点击注销按钮时调用
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  //当API返回错误时调用
  checkError: ({status}) => {
    if(status === 401 || status === 403){
      localStorage.removeItem('username')
      return Promise.reject();
    }
  },
  //当用户导航到新位置时调用，以检查身份验证
  checkAuth: () => {
    return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
  },
  //当用户导航到新位置时调用，以检查权限/角色
  getPermissions: () => Promise.resolve()

}