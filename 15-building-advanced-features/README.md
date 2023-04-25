# 15 - Building Advanced Features [Youtube]

In the first half, we implemented advanced features in Youtube Clone app like searching, how to improve app performance using debouncing, caching and Integration. Second half, we understood how to implement nested comments features.

### Topics Coverd:-

While creating `youtube clone` covered:
- `Higher Order Component`
- How `search` works?
	- `debouncing with 140ms` as per youtube (to improve performance)
	- `caching` using redux store 
- Created `N-level nested comment` (using recursion) 

## Notes:

- [Notes.md](https://github.com/deltanode/react-playground/blob/main/15-building-advanced-features/notes.md)

## Coding:

<ul>
	<li>Write a High Order Component to modify the VideoCard</li>
	<li>Use youtube search API to build search bar</li>
	<li>Use debouncing to optimise  the network calls</li>
	<li>Use Caching to optimise the search</li>
	<li>Build Nested Comments in the watch page</li>
</ul>

### Quick Code Reference

| Project | Tech Stack | Source Code |
| --- | --- | --- |
| Youtube Clone | React | <ul><li>- [x] [Header.js](./src/components/Header.js)</li><li>- [x] [SearchContainer.js](./src/components/SearchContainer.js)</li><li>- [x] [SearchResult.js](./src/components/SearchResult.js)</li><li>- [x] [searchCacheSlice.js](./src/utils/searchCacheSlice.js)</li><li>- [x] [store.js](./src/utils/store.js)</li><li>- [x] [Body.js](./src/components/Body.js)</li><li>- [x] [WatchPage.js](./src/components/WatchPage.js)</li><li>- [x] [constant.js](./src/utils/constant.js)</li><li>- [x] [CommentContainer.js](./src/components/CommentContainer.js)</li><li>- [x] [Comment.js](./src/components/Comment.js)</li></ul> |


## References:

<p>- BigBucket - YouTube app - <a href="https://bitbucket.org/namastedev/my-youtube/src/master/" rel="noreferrer noopener" role="button" tabindex="0" target="_blank" title="https://bitbucket.org/namastedev/my-youtube/src/master/">https://bitbucket.org/namastedev/my-youtube/src/master/</a></p>
