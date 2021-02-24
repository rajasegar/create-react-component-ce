console.log('Create React ' + new Date());

function setSelectedElement(el, name) {
    // do something with the selected element
  const rules = [];

  el.classList.forEach(klass => {
    for(styleSheet of document.styleSheets){
      //console.log(stylesheet);
      const rule = Array.from(styleSheet.cssRules)
        .filter(r => r.selectorText === `.${klass}`)
      rules.push(rule);
    }
  });

  const declarations = rules
    .filter(r => r.length)
    .map(r => r[0].style.cssText).join('\n');
  const code = `const StyledComponent = styled.${el.tagName.toLowerCase()}\`
  ${declarations}
  \`;`;
  console.log(code);
}

chrome.runtime.onConnect.addListener(function(devToolsConnection) {
    // assign the listener function to a variable so we can remove it later
    var devToolsListener = function(message, sender, sendResponse) {
      debugger;
        // Inject a content script into the identified tab
        chrome.tabs.executeScript(message.tabId,
            { file: message.scriptToInject });
    }
    // add the listener
    devToolsConnection.onMessage.addListener(devToolsListener);

    devToolsConnection.onDisconnect.addListener(function() {
         devToolsConnection.onMessage.removeListener(devToolsListener);
    });
});
