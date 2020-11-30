import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';
import Cita from './components/cita';
import Formulario from './components/formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hooks', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Juan', sintomas: 'No come'},
    {id: '3', paciente: 'Native', propietario: 'Juan', sintomas: 'No come'},
  ]);

  const eliminaPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo2}>Crear nueva cita</Text>
            <Formulario />
          </>
        ) : (
          <>
            <Text style={styles.titulo2}>
              {citas.length > 0 ? ' Administra tus citas' : 'No hay citas'}
            </Text>

            <FlatList
              style={styles.listado}
              keyExtractor={(cita) => cita.id}
              data={citas}
              renderItem={({item}) => (
                <Cita cita={item} eliminaPaciente={eliminaPaciente} />
              )}
            />
          </>
        )}
      </View>
      <View>
        <TouchableHighlight
          onPress={() => setMostrarForm(!mostrarForm)}
          style={styles.btnMostrarFormulario}>
          <Text style={styles.btnTextoMostrar}>
            {mostrarForm ? 'Cancelar' : 'Agregar nueva cita'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  titulo2: {
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnMostrarFormulario: {
    padding: 10,
    backgroundColor: '#590451',
    margin: 10,
    borderRadius: 10,
  },
  btnTextoMostrar: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
