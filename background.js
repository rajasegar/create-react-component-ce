console.log('Create React Component - ' + new Date());

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function setSelectedElement(el, name) {
    // do something with the selected element
  const rules = [];

  try {
  el.classList.forEach(klass => {
    for(styleSheet of document.styleSheets){
      console.log(stylesheet);
      if(styleSheet.cssRules) {
      const rule = Array.from(styleSheet.cssRules)
        .filter(r => r.selectorText === `.${klass}`)
      rules.push(rule);
      } else {
        console.error('Stylesheet rules cannot be read');
      }
    }
  });

  const declarations = rules
    .filter(r => r.length)
    .map(r => r[0].style.cssText).join('\n');
  const code = `const StyledComponent = styled.${el.tagName.toLowerCase()}\`
  ${declarations}
  \`;`;
  console.log(code);
  copyToClipboard(code);
  } catch(ex) {
    console.log(ex);
  }
}


