# Binary and Hexadecimal Notation

## Why Binary and Hexadecimal?
- Binary and hexadecimal are important to us in computing because of their connection to bits and bytes.
- A bit is a single digit, representing two states: on (1) and off (0)
- A byte is a sequence of 8 bits. If we think about this sequence in decimal like we are most used to, it can represent 2^8 or 256 different values (0 to 255).
- The 8 digits of a byte can be broken up into two groups of four. Four digits means we have 16 possible values in binary, which is where hexadecimal comes in: We can represent a byte with two digits of a hexadecimal number (16^2 = 256).

## Converting Bases
- It's often easiest for us to think about numbers in bases other than 10 (decimal) by converting them back to decimal first.
- When we are representing numbers, each digit represents the base raised to a different power.
- Converting from other bases into base-10 (decimal) involves us multiplying each digit's base-10 value by the respective base^digit's place. For example:
  - When we say 476 in our standard base-10 or decimal notation, we are saying that we have `4*10^2 + 7*10^1 + 6*10^0 = 476`.
  - This same logic applies when we are talking about other bases.
  - In binary or base-2, if we have 1101, we are talking about `1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 9`
  - In hexadecimal or base-16, our digits go from 0-9, A-F, meaning if we have F13, we are talking about `15*16^2 + 1*16^1 + 3*16^0 = 3859`
- Converting decimal into other bases follows a reversed process. Dividing our base-10 number by the base we are converting into will give us a remainder that represents the corresponding digit, continuing until we've captured all digits:
  - To convert 217 into binary:
    - Smallest digit: 217 / 2 = 108 remainder 1 => 1
    - Next digit: 108 / 2 = 54 remainder 0 => 0
    - Next digit: 54 / 2 = 27 remainder 0 => 0
    - Next digit: 27 / 2 = 13 remainder 1 => 1
    - Next digit: 13 / 2 = 6 remainder 1 => 1
    - Next digit: 6 / 2 = 3 remainder 0 => 0
    - Next digit: 3 / 2 = 1 remainder 1 => 1
    - Next digit: 1 / 2 = 0 remainder 1 => 1
    - All together, largest to smallest digit: 11011001
  - To convert 497 to hexadecimal:
    - Smallest digit: 497 / 16 = 31 remainder 1 => 1
    - Next digit: 31 / 16 = 1 remainder 15 => F (our hexadecimal digit)
    - Next digit: 1 / 16 = 0 remainder 1 => 1
    - All together, largest to smallest: 1F1

## How is this relevent to networking specifically?
- As with most computing, at the lowest level, networking is just a series of 1s and 0s.
- The packets of information that we send across the internet and are deciphered on the other end are made up of binary digits.
- Hexadecimal is an easy way for us to easily reference sections of these binary streams in a more condensed format (a quarter the size!)
- Specifically, we'll see that the version of IP that we are using is version `0100` for IPv4 and version `0110` for IPv6. We'll also see that IPv6 IP addresses and MAC addresses for physical devices use hexadecimal in order to condense the very large number of possible outcomes as opposed to the long strings that their binary counterparts would require.

## Applications to JavaScript
- We can convert a standard decimal number into a different base representation by supplying the base that we are wanting as an argument to the `toString` method:
  - `Number(30).toString(16); // 1e`
  - `Number(30).toString(2); // 11110`
- We can convert these string representations back into a number in base-10 by supplying a second argument to `parseInt` to indicate what base we are parsing from:
  - `parseInt('1e', 16); // 30`
  - `parseInt('11110', 2); // 30`


# Main Takeaways
- Recognize and be able to convert between simple base-10 (decimal) numbers and our other common computing bases, base-2 (binary) and base-16 (hexadecimal)
