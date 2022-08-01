const ftoc = function(ftemp) {
    let ctemp;
    ctemp = (ftemp -32)*(5/9);
    ctemp = Math.round(ctemp * 10) /10;
    return ctemp;
  };
  
  const ctof = function(ctemp) {
    let ftemp;
    ftemp = ctemp * (9/5) + 32;
    ftemp = Math.round(ftemp * 10) / 10;
    return ftemp
  };