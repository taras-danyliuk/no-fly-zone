import { WAR_START } from "./constants";


const getChartValues = data => {
  const diffInSeconds = (new Date(data.updatedAt).valueOf() - WAR_START.valueOf()) / 1000;
  const rate = diffInSeconds / data.currentNumber;
  const timeSinceUpdate = (new Date().valueOf() - new Date(data.updatedAt).valueOf()) / 1000;

  const nextIn = 1 - (timeSinceUpdate / rate) % 1;
  const nextInSeconds = nextIn * rate;

  const minutes = nextInSeconds / 60;
  const hours = nextInSeconds / 3600;
  const days = nextInSeconds / (3600 * 24);

  let text = "";
  if (days >= 1) {
    text = `${Math.floor(days)} day${Math.floor(days) > 1 ? "s" : ""}`;
  }
  else if (hours >= 1) {
    text = `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? "s" : ""}`;
  }
  else if (minutes >= 1) {
    text = `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? "s" : ""}`;
  }
  else {
    text = `${Math.ceil(nextInSeconds)} second${Math.ceil(nextInSeconds) > 1 ? "s" : ""}`;
  }

  return {
    text: text,
    value: nextInSeconds < 1 ? 100 : (1 - nextIn) * 100,
  }
}

export default getChartValues;
