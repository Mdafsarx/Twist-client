// import React, { useState, useRef, useEffect } from 'react';

// const VoiceSearch = () => {
//   const [transcript, setTranscript] = useState('');
//   const [listening, setListening] = useState(false);
//   const [volume, setVolume] = useState(0); // To control icon animation based on volume
//   const recognitionRef = useRef(null);
//   const audioContextRef = useRef(null);
//   const analyserRef = useRef(null);
//   const microphoneRef = useRef(null);

//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   if (!SpeechRecognition) {
//     return <p>Your browser does not support Speech Recognition.</p>;
//   }

//   const initializeRecognition = () => {
//     const recognition = new SpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = true;
//     recognition.lang = 'en-US';

//     recognition.onresult = (event) => {
//       let interimTranscript = '';
//       for (let i = 0; i < event.results.length; i++) {
//         const result = event.results[i];
//         if (result.isFinal) {
//           setTranscript((prev) => prev + result[0].transcript);
//         } else {
//           interimTranscript += result[0].transcript;
//         }
//       }
//       setTranscript(interimTranscript);
//     };

//     recognitionRef.current = recognition;
//   };

//   const startListening = async () => {
//     if (!audioContextRef.current) {
//       audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     }

//     // Get microphone input for volume analysis
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
//     analyserRef.current = audioContextRef.current.createAnalyser();
//     microphoneRef.current.connect(analyserRef.current);
//     analyserRef.current.fftSize = 256;

//     // Start capturing volume levels
//     const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
//     const checkVolume = () => {
//       analyserRef.current.getByteFrequencyData(dataArray);
//       const volumeLevel = Math.max(...dataArray) / 128; // Normalize the volume level
//       setVolume(volumeLevel); // Update volume state
//       if (listening) requestAnimationFrame(checkVolume);
//     };
//     checkVolume();

//     setListening(true);
//     setTranscript('');
//     recognitionRef.current.start();
//   };

//   const stopListening = () => {
//     setListening(false);
//     recognitionRef.current.stop();
//     if (microphoneRef.current) {
//       microphoneRef.current.disconnect();
//       microphoneRef.current = null;
//     }
//     if (audioContextRef.current) {
//       audioContextRef.current.close();
//       audioContextRef.current = null;
//     }
//   };

//   useEffect(() => {
//     initializeRecognition();
//   }, []);

//   return (
//     <div className='bg-white'>
//       <button onClick={startListening} disabled={listening}>Start Listening</button>
//       <button onClick={stopListening} disabled={!listening}>Stop Listening</button>
      
//       {/* Icon with dynamic animation */}
//       <div
//         style={{
//           width: `${30 + volume * 10}px`, // Adjust width based on volume
//           height: `${30 + volume * 10}px`, // Adjust height based on volume
//           backgroundColor: 'blue', // Color of the icon
//           borderRadius: '50%', // Circular shape
//           transition: 'width 0.1s, height 0.1s', // Smooth animation
//         }}
//       />
      
//       <p>Transcript: {transcript}</p>
//     </div>
//   );
// };

// export default VoiceSearch;
