/** This module opens and closes the searcher window **/

function toggleSearcher () {
  // Initialization variables
  const searchModalWindow = document.getElementById(
    'searcher',
  );
  const isSearcherOpen = (localStorage.getItem('isSearcherOpen') === 'true');

  // Checking the opening status. Opening or closing the searcher window
  if (isSearcherOpen) {
    searchModalWindow.style.display = 'none';
    localStorage.setItem('isSearcherOpen', 'false');
  } else {
    searchModalWindow.style.display = 'block';
    localStorage.setItem('isSearcherOpen', 'true');
  }
}

export default toggleSearcher;
