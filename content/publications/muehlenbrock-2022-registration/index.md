---
title: Fast, accurate and robust registration of multiple depth sensors without need
  for RGB and IR images
date: '2022-05-01'
draft: true
publishDate: '2023-05-24T08:17:42.883767Z'
authors:
- Andre Mühlenbrock
- Roland Fischer
- Christoph Schröder-Dering
- René Weller
- Gabriel Zachmann
publication_types:
- '2'
abstract: 'Registration is an essential prerequisite for many applications when a multiple-camera setup is used. Due to the noise in depth images, registration procedures for depth sensors frequently rely on the detection of a target object in color or infrared images. However, this prohibits use cases where color and infrared images are not available or where there is no mapping between the pixels of different image types, e.g., due to separate sensors or different projections. We present our novel registration method that requires only the point cloud resulting from the depth image of each camera. For feature detection, we propose a combination of a custom-designed 3D registration target and an algorithm that is able to reliably detect that target and its features in noisy point clouds. Our evaluation indicates that our lattice detection is very robust (with a precision of more than 0.99) and very fast (on average about 20 ms with a single core). We have also compared our registration method with known methods: Our registration method achieves an accuracy of 1.6 mm at a distance of 2 m using only the noisy depth image, while the most accurate registration method achieves an accuracy of 0.7 mm requiring both the infrared and depth image.'
featured: false
publication: '*The Visual Computer*'
doi: 10.1007/s00371-022-02505-2
cover:
    image: 'teaser.webp'
---

Paper: [PDF](https://cgvr.cs.uni-bremen.de/papers/the_visual_computer/tvc_registration.pdf)