import { Text, StyleSheet} from "react-native";


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
        borderWidth: 0,
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