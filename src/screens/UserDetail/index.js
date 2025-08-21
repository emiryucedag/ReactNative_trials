// src/screens/UserDetail/index.js
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const UserDetail = ({ route }) => {
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(id);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setUserId((c) => (c + 1 === 11 ? 1 : c + 1))}
        >
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    getData();
  }, [userId]);

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(data);
      setLoading(false);

      if (data?.name) {
        navigation.setOptions({ title: data.name });
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Unknown error');
    }
  };

  if (loading) {
    return <Loading text={'Loading user...'} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const initials =
    user?.name?.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase() ||
    '?';

  const openTel = () => {
    const tel = user?.phone?.replace(/[^+\d]/g, '');
    if (tel) Linking.openURL(`tel:${tel}`);
  };

  const openWeb = () => {
    if (!user?.website) return;
    const url = user.website.startsWith('http')
      ? user.website
      : `https://${user.website}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile */}
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{user?.name}</Text>
            {!!user?.username && (
              <Text style={styles.username}>@{user.username}</Text>
            )}
          </View>
        </View>

        <Row icon="mail-outline" text={user?.email} />
        <Row icon="call-outline" text={user?.phone} onPress={openTel} link />
        <Row icon="globe-outline" text={user?.website} onPress={openWeb} link />
      </View>

      {/* Address info */}
      <View style={styles.card}>
        <Text style={styles.section}>Address</Text>
        <Text style={styles.value}>
          {user?.address?.street} {user?.address?.suite}
        </Text>
        <Text style={styles.value}>
          {user?.address?.zipcode} {user?.address?.city}
        </Text>
      </View>

      {/* company info */}
      <View style={styles.card}>
        <Text style={styles.section}>Company</Text>
        <Text style={styles.value}>{user?.company?.name}</Text>
        {!!user?.company?.catchPhrase && (
          <Text style={styles.muted}>"{user.company.catchPhrase}"</Text>
        )}
        {!!user?.company?.bs && (
          <Text style={styles.muted}>{user.company.bs}</Text>
        )}
      </View>
    </ScrollView>
  );
};

function Row({ icon, text, onPress, link }) {
  if (!text) return null;
  const Cmp = onPress ? TouchableOpacity : View;
  return (
    <Cmp style={styles.row} onPress={onPress} activeOpacity={0.6}>
      <Ionicons name={icon} size={18} style={styles.rowIcon} />
      <Text style={[styles.value, link && styles.link]} numberOfLines={1}>
        {text}
      </Text>
    </Cmp>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F4F5F7',
  },
  next: { color: '#fff', fontWeight: '700', paddingHorizontal: 6 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    // ios shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    
    elevation: 2,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FFE0CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { fontWeight: '700', fontSize: 18, color: '#D35400' },
  name: { fontSize: 18, fontWeight: '700', color: '#222' },
  username: { marginTop: 2, color: '#707987' },

  section: {
    fontSize: 13,
    fontWeight: '700',
    color: '#707987',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6 },
  rowIcon: { marginRight: 8, color: '#707987' },
  value: { fontSize: 16, color: '#222', flex: 1 },
  muted: { color: '#707987', marginTop: 4 },
  link: { color: '#0A84FF' },
  stil: { fontSize: 25 },
});

export default UserDetail;