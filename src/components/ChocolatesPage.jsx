import { useState } from 'react';
import confetti from 'canvas-confetti';

// You can easily customize the messages for your girlfriend here.
// Just change the text within the quotes!

const messages = [
  "You have the most beautiful smile I've ever seen Babe.",
  "May the sparkles of your eyes not go dim my love.",
  "My next world must have you in it.",
  "You are annoying though.",
  "I hope we have better moments ahead.",
  "I pray we fall in love more and more each day Becca.",
  "Happy valentine Day, my love...,lovving you has been most beautiful things that has ever happened to me .You don't just make my days better you make my life lighter .Even with our imperfections, i still choose your smile, your voice, your energy, your heart. I may not always get everything right, but one thing i'm sure of is that i want you by my side. Today and always it's You.I dont just love You i value You, Forever is the goal, you stress me sometimes but i wouldn't trade you for anything. i'm lucky to call you mine...Yours lovingly Emenike",
  "I hope thinking about me makes you smile.",
  "Happy Valentine's Day, my love!",
];

function ChocolatesPage() {
  const [selectedMessage, setSelectedMessage] = useState('Click on a tab to reveal a message!');
  const [openedChocolates, setOpenedChocolates] = useState([]);

  const handleChocolateClick = (index) => {
    setSelectedMessage(messages[index]);
    if (!openedChocolates.includes(index)) {
      setOpenedChocolates([...openedChocolates, index]);
      
      // Trigger confetti on the last chocolate
      if (index === messages.length - 1) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          duration: 3000,
        });
      }
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Boxes of Messages For You</h1>
        <div className="mb-8 p-4 bg-pink-100 rounded-lg min-h-[100px] flex items-center justify-center">
          <p className="text-lg text-pink-800">{selectedMessage}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:max-h-[200px] overflow-y-auto">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-transform duration-300 transform hover:-translate-y-1
                ${openedChocolates.includes(index)
                  ? 'bg-pink-300 text-gray-800'
                  : 'bg-pink-800 text-white'
                }`}
              onClick={() => handleChocolateClick(index)}
            >
              <span className="text-2xl font-bold">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ChocolatesPage;
