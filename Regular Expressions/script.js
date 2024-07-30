// * /cat/g // regular expression starts and ends with '/', the part after '/' are flags
// * /the/i // case insensetive ('i') is not sensitive to capital letters
// * /e+/g // as we put '+' we are searching for string of 'e'
// * /ea?/g // as we put '?' it is optional to get 'a'
// * /ea*/g // '*' functions as both '+' and '?'
// * /\./g // '\.' matches antthing before line ends
// ! CAPITAL 'S' AND 'W' MATCHES OPPOSITE OF WHAT THEY MATCH NORMALLY
// * /\we/g // '\w' matches any word
// * /\s/g // '\s' matches any white space
// * /\w{4,}/g // getting words more than 4 characters (including 4)
// * /\w{4, 6/g // getting words with minimum 4, maximum 6 characters (including 4 and 6)
// *  /[fc]at/g // getting words starts with 'f' or 'c' and ends with 'at'
// * /[a-z]at/g // getting words starting with any letter and ending with 'at'
// * /[a-zA-Z]at/g // getting words starting with any letter and ending with 'at' (including capital letters)
// * /[0-9]/g // getting any number
// ! when we take letters in parenthesis they will be together
// * /(t|T|p|P){2, 3}/g // '||' means or, getting words starting with capital or small 't' and 'p', 2 to 3 letters long
// * //g //
// * /^I/gm // getting the beginning of lines, with 'm' we are declaring every line as individual line
