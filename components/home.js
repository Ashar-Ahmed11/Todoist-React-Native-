import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Button } from 'react-native-paper';
import MyComponent from './modal';
import { useRef } from 'react';
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Home() {
  const context = useContext(NoteContext)
  const { visible,editor,modalRef, showModal, setVisible, todo, setEditor, setTodoIndex, setTodoInput } = context


  const scrollRef = useRef()
  
  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={{ width: '100%', alignItems: 'center', flex: 1 }}>
          <Text style={{ fontSize: 40, color: '#7EC8E3', marginLeft: 1, fontWeight: '600', alignItems: 'center' }}>Your Tasks</Text>
        </View>


        <View style={{ width: '100%', flex: 10 }}>
          {todo[0]?<ScrollView ref={scrollRef}  onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}>
            {todo.map((e, i) => {
              return  <Card onPress={() => { setEditor(true); setVisible(true); setTodoIndex(i); setTodoInput(e.value) }} key={i} elevation={3} style={{ padding: 20, margin: 20, shadowColor: '#619cb1' }} mode='elevated'>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ alignItems: 'center', backgroundColor: '#7EC8E3', borderRadius: 30, padding: 10, position: 'absolute', top: -30, left: -30 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>{i + 1}</Text>
                  </View>
                  <View style={{ paddingHorizontal: 20, flexWrap: 'wrap', width: '100%' }}>
                    <Text style={{ flexWrap: 'wrap', width: '100%', fontSize: 20, color: '#619cb1' }}>{e.value}</Text>
                  </View>
                </View>

              </Card>
            })}
          
          </ScrollView>
          :
          <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ padding: 20, textAlign: 'center', color: '#619cb1', justifyContent: 'center', alignItems: 'center' }}>Welcome!, there are currently no tasks. Tap the "Add" button to create new tasks.</Text>
            </View>}
        </View>





        <View style={{ flex: 1, width: "100%",opacity:visible?0:1 }}>
          <View style={{ position: 'absolute', bottom: 5, left: 5, width: '100%' }}>
            <Text style={{ color: '#619cb1', fontWeight: 'bold' }}>By Ashar Ahmed</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Button elevation={5} onPress={() => { showModal(); setEditor(false); setTodoInput("")}} mode='elevated' labelStyle={{ fontSize: 20, color: "white" }} style={{ alignSelf: "center", elevation: '5', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7EC8E3', marginTop: 10, marginBottom: 10, shadowColor: '#619cb1' }}>
              Add
            </Button>
          </View>

        </View>


        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3edf6',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight

  },
});