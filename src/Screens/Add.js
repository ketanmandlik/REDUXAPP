/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import shortid from 'shortid';
import propTypes from 'prop-types';
import {addSeason} from '../Redux/actions/list';
import {connect} from 'react-redux';

const Add = ({navigation, addSeason}) => {
  const [name, setName] = useState('');
  const [totalNumberOfSeason, setTotalNoOfSeason] = useState('');

  const handleSubmit = () => {
    try {
      if (!name || !totalNumberOfSeason) {
        return alert('Please enter both fields');
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name,
        totalNumberOfSeason,
        isWatched: false,
      };
      addSeason(seasonToAdd);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
      />
      <TextInput
        placeholder="Season"
        value={totalNumberOfSeason}
        onChangeText={text => setTotalNoOfSeason(text)}
      />

      <>
        <Button onPress={() => handleSubmit()} title="Add Season"></Button>
      </>
    </View>
  );
};

//Redux config

const mapDispatchToProps = {
  addSeason: data => addSeason(data),
};

Add.propTypes = {
  addSeason: propTypes.func.isRequired,
};

//Redux export

export default connect(null, mapDispatchToProps)(Add);

const styles = StyleSheet.create({});
