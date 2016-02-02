---
published: false
title: Time Frequency Function
layout: post
---
When considering how the frequency changes in a given time domain we often judge by looking at (or hopefully calculating) the frequency change but there are times that utterances are being prolonged;(mostly duration is a function of tone i.e. our tone will alter duration; With that being said most of my calculations do not consider duration or time as an independent variable) This increase in producing the utterance does have a pragmatic effect and thus it is worthwhile to consider it in transcribing prosody.
 
``ToBI`` is a system of transcribing prosodic features of speech. ToBI is easy to learn, easy to share, and easy to use. these 3 features has made ToBI a wildly used system for transcribing. But ToBI has some downfalls too. Since it is based on the **phonological level** of the speech it does not contain phonetic features of speech. I have some ideas to implement phonetic features of prosody in ToBI and on top adding frequency change in ToBI. 

I, therefore, decided to design a formula based on frequency time change. The formula is:

![formula](http://blog.adelr.ir/image/formula.JPG)

Where Z is the ``time frequency function`` on the scale from 1.0 to 4.0 where Z from **1.0 to 2.0** is low **2.0 to 3.0** is medium and lastly **3.0 to 4.0** is high. I have written a Python code that plots the distribution of the outputs across X and Y axis.

![formula](http://blog.adelr.ir/image/formula2.png)


The Python code is:

{% highlight Python %}
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np

# introduce bases
freq_min, freq_max, freq_spacing = 75., 300., 5.
freqs = np.arange(freq_min, freq_max + freq_spacing, freq_spacing)

t_min, t_max, t_spacing = 0.1, 5., 0.1
ts = np.arange(t_min, t_max + t_spacing, t_spacing)

# do calculation
F, T = np.meshgrid(freqs, ts)
Z =  F  /  T * 2
Z2 = np.log10(Z)
print (Z2)
# display result
fig = plt.figure()
ax = fig.gca(projection='3d')
surf = ax.plot_surface(F, T, Z2,
    rstride=1, cstride=1, cmap=cm.RdPu, antialiased=True, linewidth=0.2)
ax.view_init(elev=35, azim=160)
ax.dist = 10
plt.show()

{% endhighlight %}

