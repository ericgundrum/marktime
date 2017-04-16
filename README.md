# Mark Time
Record and label the times of a sequence of events.
Then export the list to the clipboard.

## Capabilities
- press _Mark_ to add a segment timestamp to the list
- label each segment in the list
- adjust all segments together, setting an arbitrary start time
- adjust an individual segment, offsetting its start relative to the beginning
- export the list of segment start times and labels as text

## Use Cases
### Create a list of segments
Chris wants to label the start times for each segment of his podcast.
He has a podcast production tool that can embed a list of segment start times and labels for players that recognize such things, but making the list takes too much time.
He hates having to listen to every minute to find each start time.

Chris opens this app as he is preparing to record his podcast.
When he begins recording, he presses the _Mark_ button.
While recording, as he begins a new segment, he presses the _Mark_ button.
At any time during recording or after, Chris enters labels for each segment.

By the end of the podcast, Chris has a list of segment start times with the first one marked _00:00:00_ and each subsequent time indicating how long from the first.

### Adjust start time
The podcast recording actually begins several minutes before the start of the first segment.
To account for this, Chris plays the beginning of the podcast to note the actual start time of the first segment.

Then in the app he enters an offsetting number of seconds so that the displayed time of the first segment matches the actual time.
He notices that all segment start times have moved by the same amount.

### Adjust segment time
Chris wants to be certain the start time for each segment is correct.
Using the values from the list, he jumps to that time in the podcast to check if it is close enough to the start of the segment.

He notices that one segment begins several seconds before its listed start time.
To fix this, Chris enters an offset value for that segment so that the time displayed in the list matches the time shown in the podcast.
He notices that no other segment start times have changed.

### Adjust start time again
While checking the segment start times, Chris got an idea for additional opening content.
He edits the opening segment, adding another 42 seconds.

To account for this, Chris again adjusts the overall start time so that the displayed start of the first segment matches its time in the recording.
Chris trusts that the start times for all segments are adjusted by the same amount so that their times now are correct, too.

### Export segment list
Satisfied that the list of segments and their start times is good enough,
Chris presses the _Copy_ button.
This places the list of segment start times and labels on the clipboard as text.
The text is formatted so that it easily can be imported by his production and embedded in the podcast.

## Building
### Server
Run `yarn run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `yarn run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests
Run `yarn run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `yarn run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app.
