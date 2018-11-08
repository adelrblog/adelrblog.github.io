---
published: True
title: Removing OOVs
layout: post
---

One of the main tasks when building a corpus is to remove out-of-vocabulary words. These words are mostly proper nouns and used very infrequently. For this task, it can be done via a Python counter. The default threshold that I have put in the code is 100. The output for 1000 and above frequent words for sample Craigslist dataset is:
 
```{'': 26506, '\n': 1451, 'to': 2304, 'a': 1313, 'the': 1649, 'and': 2496, 'for': 1032, 'of': 1146}
```


Github gist:

<script src="https://gist.github.com/adelra/bc6d88f63c91c06ff43799eebce4ef9c.js"></script>