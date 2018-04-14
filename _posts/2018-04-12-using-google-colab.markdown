---
published: true
title: Using Google Colab
layout: post
---
Google Colab is an awesome tool to use. It provides you with free GPUs for 12 hours. all this for FREE!
Colab uses VMs that connects to a Python Jupyter nootbook which provides you with the command line to enter the commands.
However, Using Google Colab is a bit tricky. First you have to create a Jupyter notebook in <a href='http://colab.research.google.com'>Colab.research.google.com</a>
Now you have your Jupyter notebook. Go to ```edit -> notebook settings -> Hardware accelerator``` select GPU.

![Alt text](Picture.png?raw=true "picture")

Google will provide you with Tesla K80 GPUs 

To install all the necessary pacakges and add your google drive insert the code below and run. you'll be prompt to enter a code from your google account twice:
```
!apt-get install -y -qq software-properties-common python-software-properties module-init-tools
!add-apt-repository -y ppa:alessandro-strada/ppa 2>&1 > /dev/null
!apt-get update -qq 2>&1 > /dev/null
!apt-get -y install -qq google-drive-ocamlfuse fuse
from google.colab import auth
auth.authenticate_user()
from oauth2client.client import GoogleCredentials
creds = GoogleCredentials.get_application_default()
import getpass
!google-drive-ocamlfuse -headless -id={creds.client_id} -secret={creds.client_secret} < /dev/null 2>&1 | grep URL
vcode = getpass.getpass()
!echo {vcode} | google-drive-ocamlfuse -headless -id={creds.client_id} -secret={creds.client_secret}
```

To install libraries you can do the following:
```
!pip install NLTK
```

To check if you have GPU enabled and your TensorFlow recognizes your GPU run the below command:
```
import tensorflow as tf
device_name = tf.test.gpu_device_name()
if device_name != '/device:GPU:0':
	raise SystemError('GPU device not found')
	print('Found GPU at: {}'.format(device_name))
```

to mount your drive folder into your VM: 
```
!mkdir -p drive
!google-drive-ocamlfuse drive -o nonempty
```
remember ```-o nonempty``` is for the time you are mounting your data from a nonempty directory.
to run a sample script enter:

```
!python main.py --data_path=drive/app/data/
```

If your VM was not resposive and you needed to restart it just follow the below command:

```
!kill -9 -1
```