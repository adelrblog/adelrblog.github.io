---
published: True
title: Stop-word removal using NLTK
layout: post
---

  stop-words is a crucial task in information retrieval. Most indexing mechanisms include this step as an essential part since it will improve the performance of the information retrieval process. 
  Stop-words are mostly very frequent words like ```which, that, a``` that have no distinct meaning. Luckily, NLTK has a list of existing stop-words that can be used for filtering stop-words. This corpus can be downloaded via ```nltk.download('stopwords')``` there is also a parameter for the function: stop_word_removal where you can set the data_download to True or False. 
Sample output from sample Craiglist dataset:
 
``` 'water', 'bottle', 'never', 'added', 'bike.', 'call', 'interested', 'meet', 'location', 'people', 'like' 
```

Github gist:
<script src="https://gist.github.com/adelra/9055155504c2652a1f006220f2def520.js"></script>