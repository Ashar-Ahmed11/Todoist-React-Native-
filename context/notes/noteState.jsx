
import NoteContext from './noteContext'
import { useState } from 'react'
import React from 'react'
import { useRef } from 'react'
import useLocalStorage from '../../components/useLocalStorage'
import { useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'


const NoteState = (props) => {


  const _storeData = async () => {
    
  };

  


  const _retrieveData = async () => {
    
    try {
      const value = await AsyncStorage.getItem('foo');
      if (value !== null) {
        // We have data!!
        // console.log(value)
        setTodo(JSON.parse(value));
    
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {

    _retrieveData()
  },[] )
  




  const modalRef = useRef(null)
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [todo, setTodo] = useState([])


  const [todoInput, setTodoInput] = useState("")
  const addTodo = async () => {
    setTodo([...todo, { value: todoInput }])
    setTodoInput("")
    hideModal()
   


    try {
      await AsyncStorage.setItem(
        'foo',
        JSON.stringify([...todo, { value: todoInput }]),
      );
    } catch (error) {
      // Error saving data
    }
   



  }
  const deleteTodo = async () => {
    const arr = todo.filter((e, i) => i !== todoIndex)
    setTodo([...arr])


    
    try {
      await AsyncStorage.setItem(
        'foo',
        JSON.stringify([...arr]),
      );
    } catch (error) {
      // Error saving data
    }

    hideModal()
  }

  const [todoIndex, setTodoIndex] = useState(null)
  const editTodo = async () => {
    setTodoInput(todo[todoIndex].value)
    todo[todoIndex].value = todoInput
    setTodo([...todo])


    try {
      await AsyncStorage.setItem(
        'foo',
        JSON.stringify([...todo]),
      );
    } catch (error) {
      // Error saving data
    }

    hideModal()

  }


  if (visible) {
    setTimeout(() => {

      modalRef.current?.focus()
    }, 0);
  }

  const [editor, setEditor] = useState(false)

  return (

    <NoteContext.Provider value={{ visible, deleteTodo, editTodo, setTodoIndex, todoIndex, editor, setEditor, modalRef, visible, setVisible, showModal, hideModal, setTodoInput, setTodo, todo, addTodo, todoInput }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState