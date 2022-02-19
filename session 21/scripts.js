function handleOnChange() {
  const element = document.getElementById("onchange-event")
  const { value } = element;

  element.setAttribute('value', value)

  console.log(value)
}

function handleOnClick() {
  alert('Clicked Me')
}

function handleOnMouseover() {
  console.log('Mouse pointer over me')
}

function handleOnMouseout() {
  console.log('Mouse pointer out me')
}

function handleOnKeyup() {
  const element = document.getElementById("onkeyup-event")
  const { value } = element;

  const names = {
    Ali: 'Ali',
    Mohadeseh: 'Mohadeseh',
    Hamid: 'Hamid',
    Yasamin: 'Yasamin',
  }


  switch(value) {
    case names.Ali:
      console.log(names.Ali + ' Typed')
      break;
    case names.Mohadeseh:
      console.log(names.Mohadeseh + ' Typed')
      break;
    case names.Hamid:
      console.log(names.Hamid + ' Typed')
      break;
    case names.Yasamin:
      console.log(names.Yasamin + ' Typed')
      break;
    default:
      console.log('Value is not Your names')
  }


  // if (value === 'Ali') console.log('Ali Typed')
  //
  // else if (value === 'Mohadeseh') console.log('Mohadeseh Typed')
  //
  // else if (value === 'Hamid') console.log('Hamid Typed')
  //
  // else if (value === 'Yasamin') console.log('Yasamin Typed')
  //
  // else console.log('Value is not Your names')
}
