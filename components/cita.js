import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

const Cita = ({cita, eliminaPaciente}) => {
  const dialogoEliminar = (id) => {
    console.log('Eliminando...', id);
    eliminaPaciente(id);
  };
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.laber}>Paciente: </Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.laber}>Propietario: </Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.laber}>Sintomas: </Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(cita.id)}
          style={styles.btnEliminar}>
          <Text style={styles.btnTextoEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  laber: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  texto: {
    fontSize: 18,
    marginLeft: 10,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 10,
  },
  btnTextoEliminar: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cita;
