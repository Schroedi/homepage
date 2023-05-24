---
title: 'Dynparity: Dynamic disparity adjustment to avoid stereo window violations
  on stationary stereoscopic displays'
date: '2022-08-01'
draft: false
publishDate: '2023-05-24T08:17:42.471165Z'
authors:
- Christoph Schröder-Dering
- Gabriel Zachmann
- René Weller
publication_types:
- '2'
abstract: 'We propose a novel method to avoid stereo window violations at screen borders. These occur for objects in front of the zero parallax plane, which appear in front of the (physical) screen, and that are clipped for one eye while still being visible for the other eye. This contradicts other stereo cues, particularly disparity, potentially resulting in eye strain and simulator sickness. In interactive and dynamic virtual environments, where the user controls the camera, e.g., via head tracking, it is impossible to avoid stereo window violations completely. We propose *Dynparity*, a novel rendering method to eliminate the conflict between clipping and negative disparity, by introducing a non-uniform stereoscopic projection. For each vertex in front of the zero parallax plane, we compute the stereoscopic projection such that the parallax approaches zero towards the edge of the screen. Our approach works entirely on the GPU in real-time and can be easily included in modern game engines. We conducted a user study comparing our method to the standard stereo projection on a large-screen stereo wall with head tracking. Our results show significantly reduced simulator sickness when using Dynparity compared to the standard stereo rendering.'
featured: false
publication: '*Computer Animation and Virtual Worlds*'
doi: 10.1002/cav.2099
cover:
    image: "teaser.png"
---


Paper: [PDF](https://cgvr.cs.uni-bremen.de/papers/dynparity/dynparity.pdf)

Slides: [PDF](https://cgvr.cs.uni-bremen.de/papers/dynparity/slides.pdf)