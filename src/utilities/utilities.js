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
    const match = Object.values(item).some((value) => {
      if (typeof value !== "string") {
        return false;
      }

      return value.toLowerCase().includes(lowerCaseQuery);
    });

    return match;
  });

  return results;
};

const getActiveLink = (location) => {
  const pathname = location.pathname;

  const delimiter = "/";

  const start = 1;

  const activeLink = pathname.split(delimiter).slice(start).shift();

  return activeLink;
};

export { getTimeOfDay, searchArrayOfObjects, getActiveLink };
