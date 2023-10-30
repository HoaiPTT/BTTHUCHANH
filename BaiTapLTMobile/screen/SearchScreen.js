import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FieldSearch from '../component/FieldSearch'
import Options from '../component/Options'

const SearchScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.container}>
      <View style={styles.head}>
     <FieldSearch/>
     <Options/>
     </View>
     <View style={styles.foot}>

     </View>
    </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  head:{
    flex:3,
    backgroundColor:"#fff"
  },
  foot:{
    flex:7.5,
    backgroundColor:"#E8F8EF"
  }
})