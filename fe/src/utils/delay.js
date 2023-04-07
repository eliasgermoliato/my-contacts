export default function delay(timeInMsToDelay = 1000) {
  return new Promise((resolve) => { setTimeout(resolve, timeInMsToDelay); });
}
