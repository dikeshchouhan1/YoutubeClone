 export const API_KEY = import.meta.env.VITE_API_KEY// Make sure your key is correct

 export const LIVE_CHAT_COUNT=import.meta.env.VITE_LIVE_CHAT_COUNT;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q";