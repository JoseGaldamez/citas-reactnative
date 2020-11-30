import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  // Mostrar Pickers
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Ocultar Pickers
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    const f = new Date(date);
    const m = f.getMonth();
    setFecha(`${f.getDate()} de ${meses[m]} de ${f.getFullYear()}`);
    hideDatePicker();
    return;
  };

  const handleConfirmTime = (time) => {
    const h = new Date(time);
    setHora(`${h.getHours()}:${h.getMinutes()}`);
    //console.log(hora);
    hideTimePicker();
  };

  const guardarCita = () => {
    // Validamos los datos
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }
  };

  // Dialogo de alerta por si algo falla

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los datos son requeridos', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.formulario}>
          <View>
            <Text style={styles.label}>Paciente:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto) => setPaciente(texto)}
            />
          </View>
          <View>
            <Text style={styles.label}>Propietario:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto) => setPropietario(texto)}
            />
          </View>
          <View>
            <Text style={styles.label}>Contacto:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto) => setTelefono(texto)}
              keyboardType="numeric"
            />
          </View>

          <View>
            <View>
              <Text style={styles.label} />
              <Button
                style={styles.btnTime}
                title={fecha ? 'Cambiar fecha' : 'Seleccionar fecha'}
                onPress={showDatePicker}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
                locale="es_ES"
                headerTextIOS="Elige una fecha"
                cancelTextIOS="Cancelar"
                confirmTextIOS="Confirmar"
              />
              <Text style={styles.time}>{fecha ? fecha : 'Sin fecha'}</Text>
            </View>
          </View>

          <View>
            <View>
              <Button
                style={styles.btnTime}
                title={hora ? 'Cambiar hora' : 'Seleccionar hora'}
                onPress={showTimePicker}
              />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
                locale="es_ES"
                headerTextIOS="Elige una hora"
                cancelTextIOS="Cancelar"
                confirmTextIOS="Confirmar"
                is24Hour
              />
              <Text style={styles.time}>{hora ? hora : 'Sin hora'}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={(texto) => setSintomas(texto)}
              keyboardType="numeric"
            />
          </View>

          <View>
            <TouchableHighlight
              onPress={() => guardarCita()}
              style={styles.btnGuardar}>
              <Text style={styles.btnTextoGuardar}>Crear nueva cita</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 30,
    flex: 1,
  },
  btnTime: {
    marginTop: 20,
  },
  btnGuardar: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginTop: 10,
    borderRadius: 5,
  },
  btnTextoGuardar: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 7,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Formulario;
