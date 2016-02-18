---
published: true
title: Time Frequency Function 
layout: post
---
When considering how the frequency changes in a given time domain 

we often judge by looking at (or hopefully calculating) the 

frequency change but there are times that utterances are being 

prolonged (mostly duration is a function of tone i.e. our tone 

will alter duration; With that being said most of my calculations 

do not consider duration or time as an independent variable); 

This increase in producing the utterance does have a pragmatic 

effect and thus it is worthwhile to consider it in transcribing 

prosody.
 
``ToBI`` is a system of transcribing prosodic features of speech. 

ToBI is easy to learn, easy to share, and easy to use. these 3 

features have made ToBI a widely used system for transcribing 

prosody. But ToBI has some downfalls too. Since it is based on 

the **phonological level** of the speech it does not contain 

phonetic features of speech. I have some ideas to implement 

phonetic features of prosody in ToBI and on the top of that 

adding frequency change in the ToBI system. 

I, therefore, decided to design a formula based on frequency time 

change. The formula is:

![formula](http://blog.adelr.ir/images/formula.JPG)

Z is the ``time frequency function`` on the scale from 
``1.0 to 4.0`` 
where Z from ``1.0 to 2.0`` is flagged as low
 ``2.0 to 3.0`` 
flagged as medium and lastly ``3.0 to 4.0`` flagged as 
high. F is the frequency in Hertz and it is scaled from
 ``75 to 300``
. T is short for Time on FFT  frequency display. Both F and 
T are indicators of the change in the pitch track and hence they 
are calculated as: ``F2 - F1`` and ``T2 - T1 ``. T is always 
positive bud F can sometimes be negative so I used Absolute value 
in the formula to avoid F being zero.

 I have written a Python code that plots the distribution of the 

outputs across Z axis. X axis is T and Y axis is F.

![formula](http://blog.adelr.ir/images/formula2.png)


The Python code is:

{% highlight Python %}
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np

# introduce bases
freq_min, freq_max, freq_spacing = 75., 300., 5.
freqs = np.arange(freq_min, freq_max + freq_spacing, 

freq_spacing)

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
    rstride=1, cstride=1, cmap=cm.RdPu, antialiased=True, 

linewidth=0.2)
ax.view_init(elev=35, azim=160)
ax.dist = 10
plt.show()

{% endhighlight %}

The proposed symbols for transcribing this scale in ToBI is using 

commas, semicolons, and colons.

<b> a)</b> because it's more intuitive 

<b>b)</b> because it is easily read.

``[comma]`` for low change, ``[semicolon]`` for medium change, 

and ``[colon]`` for high change. examples are: 

<b>(a)</b> L+H:% (Indicaating high frequency change in the given 

time domain)

<b>(b)</b> L+H;* (Indicating medium frequency change in the given 

time domain)

<b>(c)</b> H,* (Indicating low frequency change in the given time 

domain)
 

Consider the following example:

This is a recording from Kurmanji Kurdish. 

![Praat](http://blog.adelr.ir/images/praat.JPG)


The values for F and T are:

{% highlight  Python %}
f1 : 187.61 Hz
t1 : 1.55 
f2 : 104.12 Hz
t2 : 1.81

T : .26
F : 83.49

{% endhighlight  %}

Calculating the above data we will get:

{% highlight  Python %}

>>> import numpy as np
>>> F = 83.49
>>> T = 0.26
>>> Z =  F  /  T * 2
>>> Z2 = np.log10(Z)
>>> print (Z2)
2.80769110875
{% endhighlight  %}

`` 2.80 `` in our Time Frequency Function (TFF) is considered 

``Medium`` change so we transcribe it as: ``H+L;%``

Edit Feb 16: On the second thought I observed that there are numerous problems with the ToBI and the AM so I'm thinking of changing the framework. I'll post later if I had another idea.