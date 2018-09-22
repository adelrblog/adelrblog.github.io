---
published: true
title: Installing Kaldi
layout: post
---

Kaldi is one of the most Speech Recognition softwares written in C++. Installing Kaldi can sometimes be tricky hence, In this post I will explain how to install Kaldi in UNIX based operating systems.

First you need to clone the latest version of Kaldi from 

```
This is the official Kaldi INSTALL. Look also at INSTALL.md for the git mirror installation.
[for native Windows install, see windows/INSTALL]

(1)
go to tools/  and follow INSTALL instructions there.

(2) 
go to src/ and follow INSTALL instructions there.
```

cd tools:

```
To check the prerequisites for Kaldi, first run

  extras/check_dependencies.sh

and see if there are any system-level installations you need to do. Check the
output carefully. There are some things that will make your life a lot easier
if you fix them at this stage. If your system default C++ compiler is not
supported, you can do the check with another compiler by setting the CXX
environment variable, e.g.

  CXX=g++-4.8 extras/check_dependencies.sh

Then run

  make

which by default will install ATLAS headers, OpenFst, SCTK and sph2pipe.
OpenFst requires a relatively recent C++ compiler with C++11 support, e.g.
g++ >= 4.7, Apple clang >= 5.0 or LLVM clang >= 3.3. If your system default
compiler does not have adequate support for C++11, you can specify a C++11
compliant compiler as a command argument, e.g.

  make CXX=g++-4.8

If you have multiple CPUs and want to speed things up, you can do a parallel
build by supplying the "-j" option to make, e.g. to use 4 CPUs

  make -j 4

In extras/, there are also various scripts to install extra bits and pieces that
are used by individual example scripts.  If an example script needs you to run
one of those scripts, it will tell you what to do.

```





```

These instructions are valid for UNIX-like systems (these steps have
been run on various Linux distributions; Darwin; Cygwin).  For native Windows
compilation, see ../windows/INSTALL.

You must first have completed the installation steps in ../tools/INSTALL
(compiling OpenFst; getting ATLAS and CLAPACK headers).

The installation instructions are

  ./configure --shared
  make depend -j 8
  make -j 8

Note that we added the "-j 8" to run in parallel because "make" takes a long
time.  8 jobs might be too many for a laptop or small desktop machine with not
many cores.

For more information, see documentation at http://kaldi-asr.org/doc/
and click on "The build process (how Kaldi is compiled)".
```


Remember that if your IAM data was downloaded incorrectly or your connection was not stable during the installation, remove all the data and download them from the beginning
