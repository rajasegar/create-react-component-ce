// Create a new panel
chrome.devtools.panels.elements.createSidebarPane("Create React Component", function(sidebar) {
  sidebar.setPage('sidebar.html')
}
);
