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

My goal was to finance my first smartphone the [HTC Dream](https://en.wikipedia.org/wiki/HTC_Dream) which was the first Android phone you could buy. With 192MB of RAM and the sparse Android documentation that was available at that time, I set out to learn OpenGL and Android development. 

Back in 2010, Eclipse was the IDE of choice for Android development and for small projects like this it was actually pleasent to work with. Compile times where fast. Many hated it but I still think that it was much faster for iterating compared to the gradle based build that was introduced some years later. But I am sure that situation has improved a lot since back then. This is also the reason the game was not updated: I would need to convert everything to new SDKs and use a new build system.

The game uses OpenGL ES with it's fixed function pipeline and some texture blitting for faster rendering. Besides the rendering on the first Android phones, the hardest part was to make the swarm logic of the ships work fast enough. First prototypes in Java made it clear that the HTC Dream in combination with the Java runtime at that time was very slow. So the first versions of the game used JNI to call C functions to update the space ship's positions.

In 2011, BlackBerry announced their own tablet, the PlayBook. There was an offer to receive a free PlayBook on a successfull submission of an app for their store. So I programmed a stupid blood alcohol calculator app that was approved.
While the table ran QNX, the real-time OS, it supported Android apps. With my new tablet, I set out to port Planetary Wars to the PlayBook. 
Re-implemented swarm in java for Blackberry Tablet, which could run Android apps even though it was running the real time OS [...].

Php and SQL for highscore

Ads

Didn't get rich but was able to finance my phone and learned a lo