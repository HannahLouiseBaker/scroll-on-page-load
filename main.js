function init() {
  // Check if search exist
  const searchBar = document.querySelectorAll('#search');
  
  // Only run when search element exist
  if (!searchBar.length) {
    return;
  }

  /**
  * Focus on selected filter if page URL contains a query string */
  function focusSelectedFilter() {
    // Check window location if applicable    
    // if (window.location.search) {
      const selectedFilter = document.querySelector('main .search-link--selected');
      selectedFilter?.focus();     
      selectedFilter?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // }
  }
  
  // Call the function after page loads
  if (document.readyState === 'complete') {
    focusSelectedFilter();
  } else {
    window.addEventListener('load', focusSelectedFilter);
  }
}

init();
