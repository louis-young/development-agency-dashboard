const getDashboardGreeting = () => {
  const date = new Date();

  const hours = date.getHours();

  const morning = hours < 12;

  const afternoon = hours >= 12 && hours < 18;

  const evening = hours >= 18;

  console.log(hours);

  if (morning) {
    return "Morning";
  }

  if (afternoon) {
    return "Afternoon";
  }

  if (evening) {
    return "Evening";
  }
};

export { getDashboardGreeting };