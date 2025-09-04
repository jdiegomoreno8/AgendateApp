import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Pressable, Text, View } from 'react-native';


 interface Props {
    label: string;
    color: string;
    blackText?: boolean,
    onPress?: () => void;
 }


const AgendaButton = ({
    label, 
    color, 
    blackText, 
    onPress
}: Props) => {
  return (

   <View style={globalStyles.button}>



<Pressable style={globalStyles.button} onPress={onPress}></Pressable>

<Text style={ globalStyles.buttonText
}>
    {label}
</Text>
   </View>




  )
}

export default AgendaButton