
# 🪞 Smart Mirror – Magic Mirror Built with React & Next.js

This is a smart mirror project we developed in high school – a fully functional “magic mirror” display built using React, Next.js, and web-based APIs. It displays real-time information like time, weather, calendar events, and news on a minimalist mirrored interface.

## 🚀 Features

- 📅 Live time and date
- ☁️ Weather widget (via OpenWeatherMap API)
- 📰 News headlines (via RSS/News API)
- 🗣️ Voice control integration (basic command set)
- 🌐 Built with Next.js and deployed on a local display device (Raspberry Pi)

## 🔧 Tech Stack

- **Frontend:** React, Next.js
- **APIs:** OpenWeatherMap, NewsAPI
- **Voice:** Web Speech API (browser-native)
- **Deployment:** Raspberry Pi with Chromium in kiosk mode

## 💡 How It Works

The mirror is powered by a Raspberry Pi behind a two-way glass panel. The React/Next.js app runs full screen and fetches real-time data using external APIs. Voice commands trigger interface changes and updates using browser-native speech recognition.

## 🛠️ Installation (Local Dev)

```bash
git clone https://github.com/yourusername/smart-mirror
cd smart-mirror
npm install
npm run dev
