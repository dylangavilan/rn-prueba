import React, { useState, useEffect } from 'react';
import { Text, Alert, Button } from 'react-native';
import * as Google from "expo-auth-session/providers/google";
const AuthScreen = () => {
  const [token, setToken] = useState(null);
  const config = {
    androidClientId: '802672191367-sh2i45pvje1vl7hjd8e5u8cn7l136nmu.apps.googleusercontent.com',
  };
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(config)
  console.log(promptAsync)
  console.log(token)
  useEffect(() => {
    console.log(response)
    if(response?.type === 'success'){
      setToken(response.authentication.accessToken); 
      token && asyncFetchInfo()
    }
  },[response, token])

  const asyncFetchInfo = async () => {
    let response = fetch('https://www.googleapis.com/userinfo/v2/me', 
      { headers: {Authorization: `Bearer ${token}` }})
    const userInfo = await response.json()
    console.log(userInfo)
  }

  return <Button disabled={!request} onPress={() => promptAsync()} title='auth' />;
};

export default AuthScreen;
