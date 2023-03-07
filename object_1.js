const potions = [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    {},
    { name: "Stone skin", price: 520 },
  ]

  const isObjectEmpty = function (obj) {
    return Object.keys(obj).length === 0;
  }

  
  let res = isObjectEmpty({});
  console.log(res);
  res = isObjectEmpty({ name: "Stone skin", price: 520 });
  console.log(res);