const getTimeOfDay = () => {
  const date = new Date();

  const hours = date.getHours();

  const morning = hours < 12;

  const afternoon = hours >= 12 && hours < 18;

  const evening = hours >= 18;

  if (morning) {
    return "morning";
  }

  if (afternoon) {
    return "afternoon";
  }

  if (evening) {
    return "evening";
  }
};

const searchArrayOfObjects = (array, query) => {
  if (!query) {
    return;
  }

  const lowerCaseQuery = query.toLowerCase();

  const results = array.filter((item) => {
    const match = Object.values(item).some((value) => value.toLowerCase().includes(lowerCaseQuery));

    return match;
  });

  return results;
};

export { getTimeOfDay, searchArrayOfObjects };
