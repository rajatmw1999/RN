# NPM

npm means node package manager
whenver we are writing code in a langauge, we need libraries,
Libraries are bundles of code available on the internet for free use
npm is used for installing libraires into our code
npm is installed along with NodeJS

The command to install libraries is:
-  `npm install react`
-  `npm install`

Running the first command, the package `react` will be installed in that folder.
Running the second command, all the packages mentioned in the package.json will be installed in that folder

- A simulator mimics the basic behavior of a device.
- An emulator duplicates the thing exactly as it exists in real life.

# REACT

A react component is a function that returns JSX. JSX looks similar to HTML.


An array is a bunch of elements in one variable.
var names = ["Nishant","VIpin","Rajat","Raghav","Soham"];
var ages  = [22,26,22,21,15];
var address = ["Noida","Noida","Mahavir Enc.","Mahavir Enc.","Noida"];

An element is any number or a text.

FlatList Element in react native is used to display arrays.

## Importance of key

A key in a element is its unique identifier. It is used for performance optimization.
If a particular element in our code is changed, then that element will be directly affected/changed in the screen and not all the elements of that screen, if the 
key is present. If the key is not present for each element in a list, then all the elements on the screen will be changed on a single change in code.