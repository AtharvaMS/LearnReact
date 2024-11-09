

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // React renders component coming from jsx function. Updates real dom compairing with virtual dom.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function renderComponent(reactComponent, container) {
  // //for single elemment============================================
  // const domElement = document.createElement(reactComponent.type)
  // domElement.innerHTML = reactComponent.children
  // domElement.setAttribute('href', reactComponent.props.href)
  // domElement.setAttribute('target', reactComponent.props.target)
  // container.appendChild(domElement)
  // ===================================================================
//   for multiple childs
//  ==================================================================
  const domElement = document.createElement(reactComponent.type);
  domElement.innerHTML = reactComponent.children
  for(const prop in reactComponent.props){
    if(prop === "children") continue;
    domElement.setAttribute(prop, reactComponent.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  children: "Click me to go to google!",
};

const mainContainer = document.querySelector("#root");

renderComponent(reactElement, mainContainer);
