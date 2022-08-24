export const greet = () => {
  const myDate = new Date();
  const currentHour = myDate.getHours();

  let msg;

  if (currentHour < 12) msg = "Good Morning";
  else if (currentHour >= 12 && currentHour <= 17) msg = "Good Afternoon";
  else if (currentHour >= 17 && currentHour <= 24) msg = "Good Evening";
  return msg;
};