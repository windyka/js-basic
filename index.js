// String

// String Primitives
const message1 = 'my';
// typeof message
// "string"

// String Object
const another1 = new String('my');
// typeof another
// "object"

const message = 'This is my first message';
// type in console:
// message.length
// 24
// message[0]
// "T"
// message[1]
// "h"
// message.includes('my')
// true
// message.includes('not')
// false
// message.startsWith('This')
// true
// message.startsWith('this')
// false
// message.endsWith('ge')
// true
// message.endsWith('o')
// false
// message.indexOf('my')
// 8
// message.replace('my', 'your')
// "This is your first message"
// message.toUpperCase() 
// "THIS IS MY FIRST MESSAGE"
// message.split(' ')
// (5) ["This", "is", "my", "first", "message"]
// 0: "This"
// 1: "is"
// 2: "my"
// 3: "first"
// 4: "message"
// length: 5
// __proto__: Array(0)


​


// ----------------------- String Escape --------------------- //

// \0	        karakter NUL
// \'	        petik satu
// \"	        petik dua
// \\	        garis miring
// \n	        baris baru
// \r	        carriage return
// \v	        tab vertikal
// \t	        tab
// \b	        backspace
// \f	        form feed
// \uXXXX	    unicode codepoint
// \u{X} ...    \u{XXXXXX}	unicode codepoint
// \xXX	        karakter Latin-1
