---
published: True
title: POS tagging using NLTK
layout: post
---


POS tagging an essential part in Natural Language Processing. There are numerous existing libraries for Python (e.g. NLTK) and other languages such as Java (e.g. Stanford POS Tagger). In this example, we use NLTK for pos tagging. At first, we import NLTK's pos tagging library using selective import in Python. ```from nltk import pos_tag``` 

Then, as usual, we open and read our text file. 

```
fp = open("output_craigslist.txt", 'r') string_read = fp.readlines()
```

Note that here we have used ```readlines()```. There are 3 different ways to read a file. ```FileObject.read()``` returns the whole stream of text. ```readlinne()``` accepts an input of the line number and returns the corresponding line and finally ```FileObject.readlines()``` returns a list containing all the lines in the FileObject. We will then iterate over the list and tokenize all the lines using ```String.split(" ")```. There are other methods to tokenize the text like using like using nltk.tokenize but for the ease of use, simplicity and running speed we stick to split method. After doing the split we want to remove empty (None) items in the tokenized form. Therefore, we use filter function over our tokenized items. ``` line_tokenized = list(filter(None, line_tokenized))``` In the end, we pos tag our lines and print tags that contain NNP tag which is the tag for Proper Nouns.
 
```
tagged = pos_tag(line_tokenized)
for i in tagged:
if i[1] == 'NNP':
print(i)
```

The outputs for Craigslist dataset are:
```
('Dammam', 'NNP')
('Lexus', 'NNP')
('LX', 'NNP')
('QR', 'NNP')
('Code', 'NNP')
('Link', 'NNP')
('Lexus', 'NNP')
('LX', 'NNP')
('United', 'NNP')
('Belgium', 'NNP')
('Following', 'NNP')
('Lexus', 'NNP')
('LX', 'NNP')
('Lexus', 'NNP')
('LX', 'NNP')
('Lexus', 'NNP')
```
 
Related Github gist:
 
 <script src="https://gist.github.com/adelra/b6a0964ca3ca52d1fcb068b5ae1c515c.js"></script>