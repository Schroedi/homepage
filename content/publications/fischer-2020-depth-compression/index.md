---
title: Improved Lossless Depth Image Compression
date: '2020-01-01'
draft: false
publishDate: '2023-05-24T08:17:42.718928Z'
authors:
- Roland Fischer
- Philipp Dittmann
- Christoph Schro"der
- Gabriel Zachmann
publication_types:
- '2'
abstract: 'Since RGB-D sensors became massively popular and are used in a wide range of applications, depth data compression became an important research topic. Live-streaming of depth data requires quick compression and decompression. Accurate preservation of information is crucial in order to prevent geometric distortions. Custom algorithms are needed considering the unique characteristics of depth images. We propose a real-time, lossless algorithm which can achieve significantly higher compression ratios than RVL. The core elements are an adaptive span-wise intra-image prediction, and parallelization. Additionally, we extend the algorithm by inter-frame difference computation and evaluate the performance regarding different conditions. Lastly, the compression ratio can be further increased by a second encoder, circumventing the lower limit of four-bit per valid pixel of the original RVL algorithm.'
featured: false
publication: "*WSCG'2020*"
doi: 10.24132/JWSCG.2020.28.21
cover:
    image: 'teaser.webp'
---

Paper: [PDF](https://cgvr.cs.uni-bremen.de/papers/wscg20/H19.pdf)