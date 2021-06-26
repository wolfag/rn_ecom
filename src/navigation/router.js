export const Router = {
  // insight bottom tab bar
  BottomTabBar: {
    key: 'BottomTabBar',
    children: {
      Shop: 'Shop',
      Explore: 'Explore',
      Cart: 'Cart',
      Heart: 'Heart',
      Profile: 'Profile',
      HomeAuth: 'HomeAuth',
    },
  },

  // auth
  Auth: {
    key: 'Auth',
    children: {
      Login: 'Login',
      Register: 'Register',
      ForgotPassword: 'ForgotPassword',
    },
  },
};
