export const toPersianNum = num => {
  let arr = [];
  const persian = {0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};

  String(num).split('').map((number,index)=>{
    arr[index] = (persian[number]);
  });

  return arr.join('');
}

export const toPriceNum = num => {
  let price = "";

  for ( let i = 0; i < num.length; i++ ) {
    let c = num.substr( num.length - i - 1, 1 );

    if ( i % 3 === 0 && i > 0 ) {
      price = c + ',' + price;
    } else {
      price = c + price;
    }
  }

  return price;
}
