// const YOUTUBE_API_KEY = "AIzaSyClaE8A"
// export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&chart=mostPopular&maxResults=50&key=" + YOUTUBE_API_KEY

// using .env variable
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&chart=mostPopular&maxResults=50&key=" + process.env.REACT_APP_YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + process.env.REACT_APP_YOUTUBE_API_KEY
// Live Chat >>>> Infinite Scroll >>>>>> Pagination

export const LIVE_CHAT_COUNT = 25
// export const OFFSET_LIVE_CHAT = 25

export const commentData = [
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: []
  },
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Ram Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: []
      },
      {
        name: "Ram Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Ram Sharma",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Ram Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Ram Sharma",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Ram Sharma",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                      }
                    ]
                  },
                  {
                    name: "Ram Sharma",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: []
  },
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: []
  },
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: []
  },
  {
    name: "Ram Sharma",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: []
  }
]
