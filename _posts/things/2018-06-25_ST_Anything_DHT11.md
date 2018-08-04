---
layout: post
title: SmartThings + Aduino + DHT11 temperature
tags: [pi]
---

Wemos D1 Rev 1 GPIO
Pin        Function                     ESP-8266 Pin
D0         RX                           GPIO3
D1         TX                           GPIO1
D2         IO                           GPIO16
D3(D15)    IO,SCL                       GPIO5
D4(D14)    IO,SDA                       GPIO4
D5(D13)    IO,SCK                       GPIO14
D6(D12)    IO,MISO                      GPIO12
D7(D11)    IO,MOSI                      GPIO13
D8         IO,Pull-up                   GPIO0
D9         IO,pull-up, BUILTIN_LED      GPIO2
D10        IO,pull-down,SS              GPIO15
A0         Analog Input                 A0

DHT11 (SZH-EK077) connects to board
- + 3.3
- - GND
?ㅏㅣ+SS (GPIO 5)

MQ2

Temperature Measurement 

미세먼지 PM10, 초 미세먼지 PM2.5
수명 8000시간: 