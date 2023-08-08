import { Text, StyleSheet, Platform } from "react-native";


function Title ({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === 'android'? 1 : 0,
        borderColor: 'white',
        padding: 12,
        marginTop: 30
    }
})

// here we are using platform to describe certain thing on 
// certain platforms like Android and OS or web app
// there are more options available with platform option
// another way to write the same above code 
// borderWidth: Platform.seclect({ ios: 0, android: 2 })


// or we can create seaprate file android and Ios and 

// just creaet sperparte page with same functionlities and 
// it will automatically selected 
// like we can make 2 pages of color for Android and Ios
