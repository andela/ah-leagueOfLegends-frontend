const ROUTES = {
  home: '/',
  newArticle: '/article/new',
  article: '/article/:s',
  editArticle: '/article/:s/edit',
  searchResults: '/search',
  reset: '/api/users/reset_password/:s/',
  notFound: '/not-found',
  bookmarks: '/bookmarks',
  getUserProfile: '/profile/:username',
  updateUserProfile: '/profile/:username/edit',
  success: '/Success',
};

export default ROUTES;
