export const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};