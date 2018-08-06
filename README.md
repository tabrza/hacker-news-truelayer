# Description
Command line challenge from TrueLayer to output top posts from Hackers News in an API format.

### Installation
```
npm init
```

### Run
```
node server.js hackernews --posts n
n refers to a positive integer <= 100
```

### Testing
```
npm test
```

### Libraries
- request: an easy, clean way to make http calls
- request-promise: in sync with the above but comes with promise support
- mocha: testing framework for node. Easy to use, provides accurate reporting and a large community to support it.
- chai: an assertion library to help verify results. Has great documentation

### Points for improvement
While I feel I managed to hit all the requirements, my testing could be improved upon mainly with server calls and handling promises.

*____________________________________________________________________________________________________________________________________________________________________**

# Hacker News Scraper

At TrueLayer we love to stay up to date with what is hot in technology and we read [Hacker News](https://news.ycombinator.com/) every day.

In order to make it more fun to read for robots (and easier to integrate in our workflow) we would like to write a simple command line application that would output to `STDOUT` the top posts in `JSON`

### Output format
```json
[
    {
        "title": "Web Scraping in 2016",
        "uri": "https://franciskim.co/2016/08/24/dont-need-no-stinking-api-web-scraping-2016-beyond/",
        "author": "franciskim",
        "points": 133,
        "comments": 80,
        "rank": 1
    },
    {
        "title": "Instapaper is joining Pinterest",
        "uri": "http://blog.instapaper.com/post/149374303661",
        "author": "ropiku",
        "points": 182,
        "comments": 99,
        "rank": 2
    }
]
```

### Input arguments
We expect the application to take these arguments:
```
hackernews --posts n
```

- `--posts` how many posts to print. A positive integer <= 100.

### Please also ensure that:

- `title` and `author` are non empty strings not longer than 256 characters.
- `uri` is a [valid URI](https://tools.ietf.org/html/rfc3986)
- `points`, `comments` and `rank` are integers >= 0.

Feel free to use any language framework and library you want. Make it concise, readable and correct.

### Please describe in `README.md`:
- how to run it (don't assume anything already installed)
- what libraries you used and why

### Bonus points for:
- unit tests
- robust input checking
- good comments
- Dockerfile

Have fun, take your time and when you are done please send a link to your public Github repo at [join@truelayer.com](mailto:join@truelayer.com)
