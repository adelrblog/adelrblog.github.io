---
published: true
title: Transfer files to your devices with IIS
layout: post
---
IIS is a great web server from good guys at Microsoft. Since it's Microsoft technology it is natively supported in all the version of Microsoft windows. We're gonna use IIS as a web server for our home computer and use it to transfer files to other devices like iPad.
Requirements: 

 - You must have Windows computers
 - All the devices mus be connected to the same WiFi

Steps:

 - IIS Activation
 - IIS Configuration

**First Step: Activation**

First (on some devices) you need to activate IIS in the Control Panel:

Go to `` Control Panel --> All Control Panel Items --> Programs and Features`` or simply copy the below address in your address bar: 

``Control Panel\All Control Panel Items\Programs and Features``

Now Click on ``Turn Windows Features On or Off`` and then check ``Internet Information Services``.

![IIS](http://blog.adelr.ir/images/IIS.JPG)

Now you have our IIS set-up and running all the files in ``c:\inetpub`` will be published in localhost (supposing your Windows is installed in Drive C)
Go to the address ``localhost`` in your browser and voila!

**Second Step: Configuration**

Now go to IIS configuration it is located in ``Control Panel\All Control Panel Items\Administrative Tools``
open ``Internet Information Services (IIS) Manager`` and go to ``Directory Browsing``

![IIS](http://blog.adelr.ir/images/IIS2.JPG)

Now, All you have to do is to know you computer's IP address in your local network simply go to CMD (By pressing ``Win key + R`` now type ``CMD``. In the Command Prompt window type ``Ip config``. Copy your IPv4 address.

![IIS](http://blog.adelr.ir/images/IIS3.JPG)

Now go to your inetpub folder and copy anything you want to transfer to you devices. enter the IP Address you had copied previously in your iPad, iPhone etc. and hit go.