import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState, useRef } from "react";
import auth from "./firebase/firebase.config";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

  // states
  const [User, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)



  const googleProvider = new GoogleAuthProvider();

  function Google() {
    return signInWithPopup(auth, googleProvider)
  }

  const RegisterUser = function (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const Logout = function () {
    signOut(auth).then(() => toast.success('Logout Successful')).catch(error => toast.error(error.message))
  }

  // voice search
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  // voice speech api
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return <p>Your browser does not support Speech Recognition.</p>;
  }

  const initializeRecognition = () => {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          setTranscript((prev) => prev + result[0].transcript);
        } else {
          interimTranscript += result[0].transcript;
        }
      }
      setTranscript(interimTranscript);
    };

    recognition.onend = () => {
      if (listening) {
        recognition.start(); // Restart if still listening
      }
    };

    recognitionRef.current = recognition;
  };

  useEffect(() => {
    initializeRecognition();
  }, []);

  const startListening = () => {
    setListening(true);
    setTranscript('');
    recognitionRef.current.start();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (transcript.trim() === '') {
        stopListening();
      }
    }, 4500);
  };

  const stopListening = () => {
    setListening(false);
    recognitionRef.current.stop();
    clearTimeout(timeoutRef.current);
  };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  // for my-cart
  const { data: totalCart, isLoading: totalCartLoading, refetch: totalCartRefetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_HTTP}/Cart?email=${User?.email}`)
      const data = await res.data
      return data
    },
    enabled: !!User?.email,
  })


  return (
    <AuthContext.Provider value={{ Google, RegisterUser, updateUser, LoginUser, User, Logout, loading, setRefresh, refresh, startListening, stopListening, listening, transcript, totalCart, totalCartLoading, totalCartRefetch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;