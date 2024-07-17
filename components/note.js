// To convert and render markdown responses saved in an array in your React Native app, follow these steps:

// 1. **Install the `react-native-markdown-display` library**:
//    ```bash
//    expo install react-native-markdown-display
//    ```

// 2. **Update your `handleSendMessage` function to properly render markdown responses**:
//    ```jsx
//    import React, { useState } from 'react';
//    import { SafeAreaView, ScrollView, StyleSheet, TextInput, Button, View } from 'react-native';
//    import Markdown from 'react-native-markdown-display';

//    const App = () => {
//      const [messages, setMessages] = useState([]);
//      const [input, setInput] = useState('');
//      const [loading, setLoading] = useState(false);

//      const handleSendMessage = async () => {
//        try {
//          setLoading(true);
//          const myChatData = [...messages, { senderId: "02", text: input }];
//          setMessages(myChatData);

//          const request = await fetch(`https://libra-ai-backend.vercel.app/api/get-response?prompt=${input}`);
//          const data = await request.json();
//          if (!data.success) {
//            Alert.alert("Error in getting response");
//          }

//          setMessages([...myChatData, { senderId: "01", text: data.data }]);
//          setInput('');
//        } catch (e) {
//          console.log("Error:", e);
//        } finally {
//          setLoading(false);
//        }
//      };

//      return (
//        <SafeAreaView style={styles.container}>
//          <ScrollView>
//            {messages.map((msg, index) => (
//              <View key={index} style={styles.message}>
//                <Markdown>{msg.text}</Markdown>
//              </View>
//            ))}
//          </ScrollView>
//          <TextInput
//            style={styles.input}
//            value={input}
//            onChangeText={setInput}
//            placeholder="Type a message"
//          />
//          <Button title="Send" onPress={handleSendMessage} disabled={loading} />
//        </SafeAreaView>
//      );
//    };

//    const styles = StyleSheet.create({
//      container: {
//        flex: 1,
//        padding: 20,
//      },
//      message: {
//        marginBottom: 10,
//        padding: 10,
//        backgroundColor: '#f0f0f0',
//        borderRadius: 5,
//      },
//      input: {
//        borderWidth: 1,
//        borderColor: '#ccc',
//        padding: 10,
//        borderRadius: 5,
//        marginBottom: 10,
//      },
//    });

//    export default App;
//    ```

// 3. **Explanation**:
//    - **Library Import**: `react-native-markdown-display` is used to render markdown.
//    - **State Management**: Manage the state of messages, input, and loading.
//    - **Function Update**: Update the `handleSendMessage` function to include markdown rendering.
//    - **Rendering**: Use the `Markdown` component to display each message within a `ScrollView`.

// This setup will allow you to display markdown responses from your API within your React Native app.