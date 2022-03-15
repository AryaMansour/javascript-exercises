const ftoc = (ftemp) => {
  ftemp = (ftemp - 32) * 0.5556;
  return ftemp.toFixed(1)
};

const ctof = (ctemp) => {
  ctemp = (ctemp * 9/5) + 32;
  return ctemp.toFixed(1);
};

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
