// const YOUTUBE_API_KEY = "AIzaSyClaE8A"
// export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&chart=mostPopular&maxResults=50&key=" + YOUTUBE_API_KEY

// using .env variable
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&chart=mostPopular&maxResults=50&key=" + process.env.REACT_APP_YOUTUBE_API_KEY
