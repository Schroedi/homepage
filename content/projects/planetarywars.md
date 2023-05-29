---
title: "Planetary Wars"
date: 2023-05-01T00:29:03+02:00
draft: false
cover:
    image: "projects/planetarywars/icon.png"
---

Planetary Wars is a fast-paced real time strategy game. Conquer enemy planets with your fleets of ships to eradicate the whole galaxy. The basics are easy to learn but for real success it needs a good strategy.

Featuring:
- Infinite number of unique levels
- Adaptive AI
- Online highscore
- Daily challanges

Available on: [Google Play](https://play.google.com/store/apps/details?id=com.chris.pwars)

## Development

In 2010, the [HTC Dream](https://en.wikipedia.org/wiki/HTC_Dream) was the first Android phone you could buy. With only 192MB of RAM and minimal documentation available, my goal was to finance my own Dream by learning OpenGL and Android development.

At the time, Eclipse was the go-to IDE for Android development, and while many developers despised it, I found it a pleasure to work with. Compile times were fast and it allowed me to iterate easily.

Planetary Wars uses OpenGL ES directly with its fixed function pipeline and some texture blitting for faster rendering. Besides the lack of documentation, the biggest challenge was getting the swarm logic of the ships to work fast enough on the HTC Dream. For the first versions, I had to use JNI to call C functions to update the ship positions.

Then in 2011, BlackBerry announced their own tablet called the PlayBook. They offered a free PlayBook for successfully submitting an app to their store. I programmed a blood alcohol level calculator app that was approved and received my free tablet. Despite running on QNX, a real-time operating system, the PlayBook was later able to run Android apps, so I set out to port Planetary Wars to the PlayBook. By now, most phones were significantly faster than the old Dream, so I reimplemented the swarm logic in Java for easier portability. As a result, the old version of the game still runs on today's Android phones without any changes on my part.

For highscore tracking I wrote a PHP and SQL based backend together with my friend Philipp. The game uses Google Ads and allows to remove the ads for a small fee with an in-app purchase. Unfortunately Google requires new SDK versions for their payment processing and soon to be added services. So this part of the game will not work anymore. At the same time, the server hosting the highscore is still working fine and I am glad I did not rely solely on the Play Services highscore system that came out later. 

While the ads didn't make me rich, I was able to pay for my HTC Dream and learned a lot along the way.
