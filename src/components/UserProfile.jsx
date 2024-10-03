import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import avatars from '../constants/avatars.js';
import Icons from './Icons.jsx';

const UserProfile = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0].avatar);
  const [showAvatars, setShowAvatars] = useState(false);
  const [buttonText, setButtonText] = useState("Create account");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userProfile');
        const storedAvatarId = await AsyncStorage.getItem('userAvatar');

        if (storedName) {
          setName(storedName);
          setButtonText("Save changes");
        } else {
          setName("");
          setButtonText("Create account");
        }

        if (storedAvatarId) {
          const avatar = avatars.find(img => img.id === storedAvatarId);
          setSelectedAvatar(avatar ? avatar.avatar : avatars[0].avatar);
        } else {
          setSelectedAvatar(avatars[0].avatar);
        }

        setErrorMessage("");
      } catch (error) {
        console.error('Error loading user profile:', error);
      }
    };

    if (visible) {
      loadProfile();
    }
  }, [visible]);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = async () => {
    if (name.length > 19) {
      setErrorMessage("Name cannot exceed 19 characters.");
      return;
    }

    try {
      const selectedAvatarId = avatars.find(img => img.avatar === selectedAvatar)?.id;
      await AsyncStorage.setItem('userProfile', name);
      await AsyncStorage.setItem('userAvatar', selectedAvatarId || '1');
      console.log('User profile saved successfully!');
      setButtonText("Save changes");
      onClose();
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };

  const toggleAvatarSelection = () => {
    setShowAvatars(!showAvatars);
  };

  const handleAvatarSelect = (avatarUri) => {
    setSelectedAvatar(avatarUri);
    setShowAvatars(false);
  };

  const renderAvatarItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleAvatarSelect(item.avatar)} style={styles.avatarOption}>
      <Image source={item.avatar} style={styles.avatarImage} />
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icons type={'close'}/>
                </TouchableOpacity>
                <View style={styles.upperContainer}>
                  <Text style={styles.title}>Account</Text>
                  <TouchableOpacity onPress={toggleAvatarSelection} style={styles.avatarPlaceholder}>
                    <Image source={selectedAvatar} style={styles.avatarImage} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnChangeAvatar} onPress={toggleAvatarSelection}>
                    <Text style={styles.btnText}>Change avatar</Text>
                  </TouchableOpacity>
                  {showAvatars ? (
                    <FlatList
                      data={avatars}
                      renderItem={renderAvatarItem}
                      keyExtractor={item => item.id}
                      numColumns={4}
                      style={styles.avatarList}
                    />
                  ) : (
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={name}
                        placeholder="Enter your name"
                        placeholderTextColor="#284c61"
                        onChangeText={handleNameChange}
                        style={styles.input}
                      />
                      {errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                      ) : null}
                      <TouchableOpacity style={styles.btnCreate} onPress={handleSubmit}>
                        <Text style={styles.btnText}>{buttonText}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 20,
    flexDirection: "column", 
    justifyContent: "flex-start",
    alignItems: "center",
    width: '90%',
    height: '60%',
    borderRadius: 15,
    backgroundColor: '#a8cce1',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  closeButton: {
    padding: 10,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  upperContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center"
  }, 

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: -15,
    color: '#e4eff6'
  },

  avatarPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4eff6',
    padding: 20
  },

  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },

  inputContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "space-between"
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#284c61",
    borderRadius: 10,
    width: "100%",
    fontSize: 17,
    color: '#284c61',
  },

  btnCreate: {
    width: "100%",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e4eff6",
    borderRadius: 10,
    marginBottom: 10,
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#284c61',
  },

  btnText: {
    fontSize: 18,
    color: 'white'
  },

  avatarList: {
    marginTop: 20,
    height: "39%",
  },

  avatarOption: {
    margin: 5,
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#e4eff6',
    overflow: 'hidden',
    padding: 10
  },

  btnChangeAvatar: {
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#284c61',
    borderRadius: 10,
    marginTop: 15,
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    position: 'absolute',
    top: 100
  }
};

export default UserProfile;
