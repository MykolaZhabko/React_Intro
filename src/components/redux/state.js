let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello React and World!", like_count: 33 },
      { id: 2, message: "Hello React and Mykola!", like_count: 40 },
      { id: 3, message: "Passing props from INDEX.js", like_count: 100 },
    ],
  },
  messagesPage: {
    contacts: [
      { id: 1, name: "Mykola" },
      { id: 2, name: "Olena" },
      { id: 3, name: "Gabriella" },
      { id: 4, name: "Sofija" },
      { id: 5, name: "Beatrice" },
      { id: 6, name: "Daniela" },
    ],
    dialogs: [
      { time: 123, person: "Ikin", message: "How are you?" },
      { time: 123, person: "Ikin", message: "What is your name" },
      { time: 123, person: "Me", message: "Try to check my profile!" },
      { time: 123, person: "Ikin", message: "How old are you?" },
      { time: 123, person: "Me", message: "I am not born yet" },
      { time: 123, person: "Ikin", message: "Are you kidding me?" },
    ],
  },
};

export default state;
