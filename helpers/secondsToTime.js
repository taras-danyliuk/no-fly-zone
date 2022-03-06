const secondsToTime = seconds => {
  const minutes = seconds / 60;
  const hours = seconds / 3600;
  const days = seconds / (3600 * 24);

  let text = "";
  let value = 0;
  if (days >= 1) {
    text = `${Math.floor(days)} day${Math.floor(days) > 1 ? "s" : ""}`;
    value = 10;
  }
  else if (hours >= 1) {
    text = `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? "s" : ""}`;
    value = 10;
  }
  else if (minutes >= 1) {
    text = `${Math.floor(minutes)} minute${Math.floor(minutes) > 1 ? "s" : ""}`;
    value = 10;
  }
  else {
    text = `${Math.ceil(seconds)} second${Math.ceil(seconds) > 1 ? "s" : ""}`;
    value = 100;
  }

  return {
    text: text,
    value: value
  }
}

export default secondsToTime;
