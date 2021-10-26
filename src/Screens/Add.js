/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      <Text>Add screen</Text>
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
