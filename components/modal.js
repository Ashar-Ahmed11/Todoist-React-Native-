import * as React from 'react';
import { Modal, Portal, Text, IconButton, Provider } from 'react-native-paper';
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
export default function MyComponent() {

    const context = useContext(NoteContext)
    const { modalRef, showModal, hideModal, visible,todoInput,setTodoInput,addTodo,editor,editTodo,deleteTodo } = context

    const containerStyle = { backgroundColor: 'white', padding: 20 ,borderRadius:20};

    return (
        <>
            <SafeAreaView style={visible && { position: 'absolute', width: '100%', height: '100%', zIndex: 9999999 }}>
                <Provider>
                    <Portal>
                        <Modal style={{ padding: 20 }} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            {editor?<>
                            <View style={{  width: '100%' }}>
                                <Text style={{ fontSize: 20, color: '#7EC8E3', fontWeight: '600' }}>Edit Tasks</Text>
                            </View>
                            <View  style={{ paddingVertical: 20 }}>
                                <TextInput
                                ref={modalRef}
                                    label="Edit your task"
                                    //   value={text}
                                    mode="outlined"
                                    autoCorrect={false}
                                    value={todoInput}
                                    outlineStyle={{borderRadius:10}}
                                    outlineColor="#7EC8E3"
                                    onChangeText={text => setTodoInput(text)}
                                    onSubmitEditing={()=>editTodo()}
                                />
                            </View>
                            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
        
                                <Button textColor='white' onPress={()=>deleteTodo()} mode="elevated" style={{ backgroundColor: '#7EC8E3', color: 'white', width: 100,marginHorizontal:10 }}>
                                    Delete
                                </Button>
                                <Button textColor='white' onPress={()=>editTodo()} mode="elevated" style={{ backgroundColor: '#7EC8E3', color: 'white', width: 100 }}>
                                    Edit
                                </Button>
                            </View>
                            </>:
                            <>
                            <View style={{  width: '100%' }}>
                                <Text style={{ fontSize: 20, color: '#7EC8E3', fontWeight: '600' }}>Create Tasks</Text>
                            </View>
                            <View style={{ paddingVertical: 20 }}>
                                <TextInput
                                    label="Write your task"
                                    //   value={text}
                                    mode="outlined"
                                    autoCorrect={false}
                                    value={todoInput}
                                    outlineStyle={{borderRadius:10}}
                                    outlineColor="#7EC8E3"
                                    onChangeText={text => setTodoInput(text)}
                                    onSubmitEditing={()=>addTodo()}
                                />
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Button textColor='white' onPress={()=>addTodo()} mode="elevated" style={{ backgroundColor: '#7EC8E3', color: 'white', width: 100 }}>
                                    Create
                                </Button>
                            </View>
                            </>}
                        </Modal>
                    </Portal>
                   


                </Provider>
            </SafeAreaView>
        </>
    );

}

