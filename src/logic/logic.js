
const formulae = {
  electricity: ({sunlight, wind}, {pvCells, turbines}) => sunlight * pvCells + wind * turbines;
  food: ({sunlight}) => sunlight * 4;
  gas: ({compost}, {biodigesters}) => compost * biodigesters;
  water: ({rain}, {rainCatchment}) => rain * rainCatchment;
}

const computeResources = (inputs, artifacts) => {
  return _.mapValues(formulae, v => v(inputs, artifacts));
}
