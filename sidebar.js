document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("submit")

  button.addEventListener("click", (e) => {

    chrome.devtools.inspectedWindow.eval("setSelectedElement($0)",
      { useContentScriptContext: true });
  })

  /*
  document.getElementById('btnConfigure').addEventListener('click', (e) => {
    chrome.runtime.openOptionsPage(() => {
      console.log('open options');
    });
  });
  */
})
