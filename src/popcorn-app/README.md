# PopcornApp
## Layer 2

In this component we render all the components and manage the functionality of the application.

#### Properties
|Name|Type|Description|
|------|-------|-------|
|```movies```|```Array```|List of movies|
|```myMovies```|```Array```|List of my movies|
|```route```|```String```|Routes for pages|
|```params```|```Object```|Name of the route|
|```query```|```Object```|-|
|```data```|```Object```|information|

#### Events
|Name|Type|Description|
|---------|---------|-------|
|```input-search```|CustomEvent|Search the movie written in the input|
|```on-click-movie```|CustomEvent|Add a movie to "my movies" clicked button|
|```remove-movie```|CustomEvent|Remove a movie from "my movies" clicked button|


