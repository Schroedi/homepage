---
title: 'DynCam: A Reactive Multithreaded Pipeline Library for 3D Telepresence in VR'
date: '2018-01-01'
draft: true
publishDate: '2023-05-24T08:17:42.764648Z'
authors:
- Christoph Schröder
- Mayank Sharma
- Jörn Teuber
- René Weller
- Gabriel Zachmann
publication_types:
- '1'
abstract: 'We contribute a new library, DynCam, for real-time, low latency, streaming point cloud processing with a special focus on telep- resence in VR. Our library combines several RGBD-images from multiple distributed sources to a single point cloud and transfers it through a network. This processing is organized as a pipeline that supports implicit multithreading. The pipeline uses functional reactive programming to describe transformations on the data in a declarative way. In contrast to previous libraries, DynCam is plat- form independent, modular and lightweight. This makes it easy to extend and allows easy integration into existing applications. We have prototypically implemented a telepresence application in the Unreal Engine. Our results show that DynCam outperforms competing libraries concerning latency as well as network traffic.'
featured: false
publication: '*Proc. of the 20th ACM Virtual Reality International Conference (VRIC
  2018). ACM*'
doi: 10.1145/3234253.3234299
cover:
    image: 'teaser.webp'
---

Paper: [PDF](https://cgvr.cs.uni-bremen.de/papers/vric2018/Schroeder_DynCam_VRIC18_preprint.pdf)

Slides: [PDF](https://cgvr.cs.uni-bremen.de/papers/vric2018/Schroeder_DynCam_VRIC18_Presentation.pdf)