/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import propTypes from 'prop-types';
import {removeSeason, markComplete} from '../Redux/actions/list';
import {connect} from 'react-redux';

const Home = ({navigation, removeSeason, markComplete, listItem}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

//Redux config

const mapStateToProps = state => ({
  listItem: state.list,
});

const mapDispatchToProps = {
  removeSeason: id => removeSeason(id),
  markComplete: id => markComplete(id),
};

// Prop-Type

Home.propTypes = {
  removeSeason: propTypes.func.isRequired,
  markComplete: propTypes.func.isRequired,
  list: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({});
