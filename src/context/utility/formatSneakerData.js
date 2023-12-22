//lastWearDate, lastWearActivity, lastWearWeather, weatherOptions, timesWorn, conditionGrade, isFavorite
//will all need to be collected by setting up another screen(s) to fill these properties in
export const transformNewSneakerToCollectionData = (sneaker) => {
  return {
    ...sneaker,
    lastWearDate: '--',
    lastWearActivity: '--',
    lastWearWeather: '--',
    weatherOptions: [],
    timesWorn: 0,
    conditionGrade: 'A',
    isPersonal: true,
    isFavorite: false,
    dateAdded: new Date().toString(),
  };
};
