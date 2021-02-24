console.log('Create React ');

function setSelectedElement(el) {
    // do something with the selected element
  console.log(el);
  const rules = [];
  el.classList.forEach(klass => {
      console.log(klass);
    for(styleSheet of window.document.styleSheets){
      console.log(stylesheet);
      const rule = Array.from(styleSheet.cssRules)
        .filter(r => r.selectorText === klass)
      rules.push(rule);
    }
  });

  rules.forEach(r => console.log(r[0].cssText));
}
