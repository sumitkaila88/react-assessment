export function getDateinText(date) {
  const miliseconds = 86400000;
    const diff = ((new Date().getTime()) - date.getTime()) / miliseconds;
    if (diff < 7) {
        const text = (diff <= 1) ? 'a day ago' : `${diff} days ago`
        return text; 
    } else if (diff < 28) {
        const weeks = Math.floor(diff / 7);
        const text = (weeks <= 1) ? 'a week ago' : `${weeks} weeks ago`
        return text; 
    } else if (diff < 365) {
        const month = Math.floor(diff / 30);
        const text = month <= 1 ? 'a month ago' : `${month} months ago`
        return text; 
    } else {
        const year = Math.floor(diff / 365);
        const text = (year <= 1) ? 'an year ago' : `${year} years ago`
        return text; 
    }
  }

export function getDomain(url) {
    return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
}

export function filteredNewWithTitle(newslist) {
  return newslist.filter(item => item.title !== null && item.url !== null);
}