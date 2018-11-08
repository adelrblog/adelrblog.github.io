---
published: True
title: Language Identification
layout: post
---


Language Identification is a method of determining the language given a string. There are numerous methods for language identification but in general, this task is categorized as a sequence labeling task since we are going to label a sequence and our labels are different languages. For instance, a method for language identification using neural networks can be seen at github.com/adelra/langident 

Considering the fact that training a neural network and on top of that preparing the dataset for the network to train on, is a time-consuming task we will stick to existing methods. 

Langdetect: 
Langdetect is a very lightweight and fast library which detects languages instantly. 

```
from langdetect import detect
>>> detect("I am bigger than you")
'en'
>>> detect("Bonjour, mademoiselle")
'fr'
```

The results from the language detector for Craigslist extracted dataset comes as below:

```
{'fr': 155, 'en': 5179, 'no': 65, 'et': 28, 'id': 52, 'af': 71, 'de': 321, 'da': 73, 'vi': 53, 'ca': 99, 'nl': 91, 'tl': 44, 'sv': 32, 'it': 118, 'so': 43, 'sl': 6, 'hu': 25, 'pt': 47, 'cy': 32, 'hr': 3, 'es': 67, 'sw': 7, 'ro': 64, 'fi': 6, 'pl': 19, 'tr': 17, 'lt': 9, 'lv': 8, 'sq': 5, 'zh-cn': 12, 'cs': 2, 'sk': 6}
```


Github gist:


<script src="https://gist.github.com/adelra/7c5627055c3e69913d19f63456232db0.js"></script>
