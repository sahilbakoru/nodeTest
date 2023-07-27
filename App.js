import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react';
// import Dropdown from 'react-native-option-dropdown'
import Dropdown from './Dropdown'


const App = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    let data = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Today'},
        {id: 3, name: 'Yesterday'},
        {id: 4, name: 'Current Week'},
        {id: 5, name: 'Previous Week'},
        {id: 6, name: 'Current Month'},
        {id: 7, name: 'Previous Month'},
        {id: 8, name: 'Current Quarter'},
        {id: 9, name: 'Previous Quarter'},
        {id: 10, name: 'Current Year'},
        {id: 11, name: 'Previous Year'},
        {id: 12, name: 'Current Fiscal Year'},
        {id: 13, name: 'Previous Fiscal Year'},
        {id: 14, name: 'Custom'},
      ];

      const onSelect = item=>{
        setSelectedItem(item);
        alert(item.name)
      } 
  return (
    <View style={{marginTop:'50%', marginHorizontal:'10%'}}>
           <Dropdown
          data={data}
          onSelect={onSelect}
          value={selectedItem}
          transparent ={false}
          alignList={'center'}
          fontSize={20}
          defaultText={"Please Select"}
          animationType={'slide'}
          DropdownWidth={'50%'}
          dropDownStyle ={
            {paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 3,
            minHeight: 32,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            borderColor: '#000',
            borderWidth: 0.5,
          overflow:'scroll',
          }
          }
        />
    </View>
  )
}

export default App

