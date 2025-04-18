export const getCurrentTime = (timeZone: string): string => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timeZone,
  };

  const timeString = now.toLocaleTimeString("en-US", options);

  return `${timeString}`;
};
