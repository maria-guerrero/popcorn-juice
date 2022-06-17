# PopcornListMovies

PopcornListMovies renders the movies and displays the listing that the user has searched for. Each movie has a button to add them individually to "My movies" page. Also displays a text when the user has not searched for a movie.

Also has multi-language in english and spanish.

#### Properties
|Name|Type|Description|
|------|-------|-------|
|```movies```|```Array```|List of movies|

#### Events
|Name|Type|Description|
|---------|---------|-------|
|```click```|CustomEvent|Throws the on-click-movie event to the PopcornApp component so that it can be executed.|