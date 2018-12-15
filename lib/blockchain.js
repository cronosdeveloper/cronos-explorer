
const params = {
  LAST_POW_BLOCK: 250,
  RAMP_TO_BLOCK: 0,
  LAST_SEESAW_BLOCK: 0
};

const avgBlockTime = 120; // 2 minutes (120 seconds)

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 720

const blocksPerWeek = blocksPerDay * 7; // 6720

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 29220

const blocksPerYear = blocksPerDay * 365.25; // 350640

const mncoins = 10000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = blockValue * 0.8;
  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;

  if (nHeight === 1) {
    nSubsidy = 15000.00;
  } else if (nHeight < 15000 && nHeight > 0) {
      nSubsidy = 250;
  } else if (nHeight < 30000 && nHeight >= 15000) {
      nSubsidy = 200;
  } else if (nHeight < 50000 && nHeight >= 30000) {
      nSubsidy = 150;
  } else if (nHeight < 100000 && nHeight >= 50000) {
      nSubsidy = 125;
  } else if (nHeight < 150000 && nHeight >= 100000) {
      nSubsidy = 100;
  } else if (nHeight < 200000 && nHeight >= 150000) {
      nSubsidy = 80;
  } else if (nHeight < 250000 && nHeight >= 200000) {
      nSubsidy = 60;
  } else if (nHeight < 500000 && nHeight >= 250000) {
      nSubsidy = 50;
  } else if (nHeight < 750000 && nHeight >= 500000) {
      nSubsidy = 40;
  } else if (nHeight < 1000000 && nHeight >= 750000) {
      nSubsidy = 30;
  } else if (nHeight < 1250000 && nHeight >= 1000000) {
      nSubsidy = 22;
  } else {
    let reductions = (nHeight / 250000) - 5;
    nSubsidy = 22;
    // Subsidy is cut by 20% ever 250,000 blocks which will occur approximately every 347 days
    for(let i = 0; i <= reductions; i++){
      nSubsidy *= 0.8;
    }
  }

  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 182700
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};
