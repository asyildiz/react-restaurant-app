function commaToDot(value) {
  return Number(value.replace(",", "."));
}

function dotToComma(value) {
  const replacedValue = value.toString().replace(".", ",");

  if (replacedValue.match(/\,[0-9]{3,}/)) {
    const splittedByDecimal = replacedValue.split(",");
    return `${splittedByDecimal[0]},${splittedByDecimal[1].substring(0, 2)}`;
  }

  return value.toFixed(2).replace(".", ",");
}

export default { commaToDot, dotToComma };
