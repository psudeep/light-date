# Lite Date :alarm_clock:

>  Fast & lightweight date formatting for Node.js. An alternative to moment.js

Our aim is to provide fast and easy way to format dates, while also staying lite.

---
## Installation

- install the package
```
$ npm install lite-date
```

## Usage

```
const litedate = require('lite-date');
let liteDate = litedate.litedate;
```

### function available

- `liteDate.now()`
- `liteDate.day()`
- `liteDate.month()`
- `liteDate.timezone()`
- `liteDate.utc()`

## format date

```
liteDate.formatDate('20/02/2023', 'YYYY-MM-DD');  //=> '2023-02-20'
liteDate.addDays('2023-02-20', 2);
liteDate.subtractDays('2023-02-20', 5);
```

## Benchmarks

```
# Node.js v16.13.1

lite-date              x   1,435,494 ops/sec ±0.18% (96 runs sampled)
date-format            x   835,649 ops/sec ±0.20% (96 runs sampled)
moment                 x   650,721 ops/sec ±2.13% (90 runs sampled)
```

## Issues/Feature Requests

Github [Issues/Features](https://github.com/psudeep/lite-date/issues)

## License

ISC © Prashant Sudeep