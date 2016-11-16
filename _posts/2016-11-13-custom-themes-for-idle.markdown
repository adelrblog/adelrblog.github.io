---
published: true
title: Custom themes for IDLE
layout: post
---
The IDLE (Integrated DeveLopment Environment or Integrated Development and Learning Environment) has numerous .... but the biggest is how the idle looks...odd colors and white background (that I'm sure no programmer ever likes), and 

defining your theme in IDLE is easy as...well not that easy because in different operating systems you have different directories and in different versions of python you have different directories to go in. As I have Windows 10 (x64) installed on my computer and using python 3.4 config directory on my computer is `c:\python34\lib\idlelib\` within this directory you can find the file `config-highlight.def` you can edit this file with a text editor (sublime, Vim, and Atom to name a few) and then you can add your custom theme. Here a great theme I use:
<script src="https://gist.github.com/dsosby/1122904.js"></script>

after appending this code in the end of the config file you have to go to the `IDLE => Options => Configure IDLE => Highlighting` under Highlighting theme you can find the custom theme you have defined.

Here is what it looks like:
![idletheme](http://blog.adelr.ir/images/idletheme.png)
