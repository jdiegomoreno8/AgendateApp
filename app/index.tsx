import AgendaButton from '@/components/AgendaButton';
import { globalStyles } from '@/styles/global-styles';
import React from "react";
import { Text, View, } from "react-native";



const AgendaApp = () => {
  
  return (
    <View style={globalStyles.agendaAPPContainer}>
{/* Titulo */}
     <Text style= {globalStyles.mainResult}> AgendaApp</Text>    
      

{/* Filas de botones */}
<View style={globalStyles.row}>
  <AgendaButton label='Registrarme' color='white'/>
  <AgendaButton label='Iniciar Sesión' color='white'/>
  <AgendaButton label='Salir' color='white'/>
</View>
    </View>

/* Prueba */



/*Fin prueba*/

  )
}

export default AgendaApp