import Enums from "./enums";

export function convertTimeToDate(timestamp, pathname) {
  const date = new Date(timestamp * 1000);
  const d = date.toString().split(" ");

  if (pathname.indexOf(Enums.BEST_STORIES) !== -1) {
    return `(${d[1]} ${d[2]} ${d[3] % 2000})`;
  } else if (pathname.indexOf(Enums.TOP_STORIES) !== -1) {
    return `(${d[1]} ${d[2]} ${d[3] % 2000})`;
  } else if (pathname.indexOf(Enums.NEW_STORIES) !== -1) {
    const dateNow = new Date();
    const diffInMilisecond = dateNow - date;
    const diffInMinutes = (diffInMilisecond / (1000 * 60)).toFixed(0);
    const diffInHours = (diffInMilisecond / (1000 * 60 * 60)).toFixed(0);
    let retVal = "";
    if (diffInMinutes < 60) retVal += `(${diffInMinutes} min)`;
    else if (diffInHours < 24)
      retVal += `(${diffInHours} hour ${diffInMinutes % 60} min)`;
    return retVal;
  }
}
