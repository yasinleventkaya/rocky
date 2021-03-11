import React, {useState, createContext} from 'react';

export const MoodContext = createContext();

export const MoodContextProvider = ({children}) => {
  const initialMood = {
    moodText: 'Neutral',
    moodEmoji: ':|',
    moodLevel: 50,
    moodColor: 'gray',
    updateMood: (next) => {
      setMood((prev) => {
        return {...prev, ...next};
      });
    },
  };

  const [mood, setMood] = useState(initialMood);

  return <MoodContext.Provider value={mood}>{children}</MoodContext.Provider>;
};
