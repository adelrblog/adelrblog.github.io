---
published: true
title: Capturing Time Frequency Function pt II
layout: post
---
In the <a href="http://blog.adelr.ir/2016/02/03/time-frequency-function.html">previous post</a> I tried to introduce a function of duration and frequency. after some thoughts I decided to work on two fundamental questions:

<b> a) </b> The Aim

 <b> b) </b> The process

**The Aim** of this scale and the whole transcription is to provide a hybrid model of intonation transcription which is suitable for both computational processing and human transcription (I will soon do a detailed analysis of existing intonational models),

**The process** is rather tricky. In the beginning I would really wanted to work on the ToBI system. It's **fast**, it's <b>easy to read</b>
and finally it's **easy to implement**. The thing about ToBI is that it's not quite...you know...right. what I mean is that the ToBI system throws off a tremendous amount of prosodic data that we can't quite say we don't need.

The ``Time Frequency Function`` or in short TFF tries to compensate the ``duration`` loss and 
``frequency`` loss in ToBI. As I explained in the previous post we can use the mentioned formula to calculate 
``how much frequency change did we have?`` 
This solely can help us on our aim in collecting pitch data. consider the following example:

![pic 1](http://blog.adelr.ir/images/praatkurdi.jpg)

``Actually I just realized that my audio was stereo and it was too late for me to downmix it to mono, apologies in advance``

In the pitch track below which belongs to the audio above I have transcribed the prosodic events in the following order: **r** for Raising pitch and **f** for falling pitch. The scaled number after the raising and falling mark is the amount in which the frequency has changed over the time period from 1.00 to 4.00. In the example below the transcription number 6 is scaled as a 
``2.02``
which indicates that this prosodic event is less important than number 2 and so on.

![pic 1](http://blog.adelr.ir/images/praatkurdi3.JPG)

The second example is another Kurdish utterance transcribed:


![pic 1](http://blog.adelr.ir/images/praatkurdi4.JPG)

The last example is a comparison between ToBI and the proposed model:

![pic 1](http://blog.adelr.ir/images/praatkurdi5.JPG)

``audio retrieved from: K-ToBI (Korean ToBI) Labelling Conventions, (version 3.1, in November 2000)
Sun-Ah Jun
Dept. of Linguistics, UCLA``
<a href="http://www.linguistics.ucla.edu/people/jun/ktobi/k-tobi.html">http://www.linguistics.ucla.edu/people/jun/ktobi/k-tobi.html</a>