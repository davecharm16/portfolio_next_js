import { TypeAnimation } from 'react-type-animation';

export const TypeText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hi, I am Dave Charm', // Types 'One'
        2000, // Waits 1s
        'Hi, I am a Freelancer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Hi, I am a Student',
        2000, // Waits 2s
        'Hi, I am a Full Stack Developer', 
        2000, // Waits 2s
        'Hi, I am a Mobile App Developer',
        2000, // Waits 2s//Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      // style={{ fontSize: '2em' }}
    />
  );
};