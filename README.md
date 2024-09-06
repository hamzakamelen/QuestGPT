# QuestGPT App

Welcome to QuestGPT! This app leverages the Gemini API to create dynamic and engaging questions from users. Whether you're a fan of interactive storytelling, adventure games, or learning through exploration, QuestGPT offers a unique experience tailored to your interests.

## Features

- **Dynamic Quests**: Generate personalized quests based on user preferences and interactions.
- **Interactive Storytelling**: Engage with AI-driven narratives that evolve based on your choices.
- **Real-Time Feedback**: Receive immediate responses and updates as you progress through quests.

## Getting Started

### Prerequisites

- Node.js
- Gemini API Key (sign up on [Gemini's website](https://www.gemini.com) if you haven't already)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/questgpt-app.git
   cd questgpt-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ---
   npm i dotenv
   ```

3. **Configure the Gemini API**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the Application**

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

- Open the app in your web browser.
- Follow the on-screen instructions to start a quest.
- Customize your quest settings and enjoy the interactive experience!

## API Integration

QuestGPT uses the Gemini API to generate and manage questions. The integration handles:

- **Quest Generation**: Requests to generate quests based on user inputs.
- **Progress Tracking**: Updates and tracks user progress within quests.

Refer to the [Gemini API documentation](https://www.gemini.com/api/docs) for more details on available endpoints and usage.