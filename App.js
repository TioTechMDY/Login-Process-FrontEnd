import React, { useEffect } from 'react';
import * as SQLite from 'expo-sqlite';
import AppNavigator from './navigation/AppNavigator';

const db = SQLite.openDatabase('MyApp.db');

const App = () => {
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT);'
      );
    });
  }, []);

  return <AppNavigator />;
};

export default App;
