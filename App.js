import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import { Button } from 'react-native-paper';
import MyComponent from './components/modal';
import { useRef } from 'react';
import NoteState from './context/notes/noteState';
import NoteContext from './context/notes/noteContext';
import { useContext } from 'react';
import Home from './components/home';
import { Button } from 'react-native';

export default function App() {
  

  return (
    <>
      <NoteState>
        <SafeAreaView style={{flex:1,overflowX:'hidden'}}>
      <MyComponent/>
       
        <Home/>

   

      </SafeAreaView>
      </NoteState>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
});
