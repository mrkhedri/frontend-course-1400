function selectItem(e) {
  // remove all active class
  const listElements = document.getElementById('header-list')

  Array.from(listElements.children).forEach(item => {
    item.classList.remove('active')
  });

  // add class
  e.classList.add('active')

  // display content
  const currentItemType = e.getAttribute('data-type')
  const contentElements = document.getElementById('content-list')

  Array.from(contentElements.children).forEach(item => {
    item.classList.remove('active')

    const itemType = item.getAttribute('data-type')

    if (currentItemType === itemType) {
      item.classList.add('active')
    }
  });
}


