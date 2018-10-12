const ROUTES = {
  home: '/',
  newArticle: '/article/new',
  article: '/article/:s',
  editArticle: '/article/:s/edit',
  searchResults: '/search',
  reset: '/api/users/reset_password/:s/',
  notFound: '/not-found',
  profile: '/profile',
  getUserProfile: '/profile/:username',
  updateUserProfile: '/profile/:username/edit',
};

export default ROUTES;
