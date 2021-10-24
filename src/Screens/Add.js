/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import shortid from 'shortid';
import propTypes from 'prop-types';

const Add = ({navigation, addSeason}) => {
  const [name, setName] = useState('');
  const [totalNumberOfSeason, setTotalNoOfSeason] = useState('');

  const handleSubmit = () => {
    try {
      if (!name || !totalNumberOfSeason) {
        return alert('Please enter both fields');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Add screen</Text>
    </View>
  );
};

//Redux config

Add.propTypes = {
  addSeason: propTypes.func.isRequired,
};

//Redux export

export default Add;

const styles = StyleSheet.create({});
