function areaSqu(a) {
  return a * a;
}

function areaCir(r) {
  return 3.14 * r * r;
}

function areaRec(l, b) {
  return l * b;
}

module.exports = {
  square: areaSqu,
  rectangle: areaRec,
  circle: areaCir,
};
