angular
  .module('stamplayApp', ['ngStamplay', 'SuggestionService', 'UserService'])
  .controller('MainController', MainController);

function MainController(Suggestion, User) {
  
  var main = this;
  main.suggestionData = {};   // blank object to hold data from suggestion form
  main.loggedUser = {};       // blank object to hold logged in user data

  // ========================================
  // function to logout a user
  // ========================================

  // ========================================
  // get current user =======================
  // ========================================

  // ========================================
  // get all suggestions
  // ========================================

  // ========================================
  // submit a suggestion ====================
  // ========================================

  // ========================================
  // vote on a suggestion
  // ========================================

}