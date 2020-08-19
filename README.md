# Coding Exercises

## Exercise one

Find the matching anagrams and return only the first one from the patching pair. (An anagram is a word or phrase that's formed by rearranging the letters of another word or phrase.)

Example data: 

```array: ['code', 'life', 'cdoe', 'lfie']```

Result: ```['code', 'life']```

Note: values are case sensitive

## Exercise two

Find the users who were signed in for less than a given span time

Example of data format: 

```data: ["100 3 sign_in"```, ```"100 5 sign_out"]``` 
(```100``` = user_id; ```3, 15``` = timestamps; ```sign_in, sign_out``` = user's actions)

```span: 5``` (```5``` = span time)

Result: ```users: ["100"]```

## Exercise three

Rotate any given array to the left x number of times

Example data:

```array: [1, 2, 3, 4]```

```times: 3```

Result: ```[4, 1, 2, 3]```

## Exercise four

An hourglass is defined as the follwing shape:

```[1,2,3]```
  ```[3]```
```[1,2,3]```

Find all the hourglasses in a given 2D 6x6 array. Calculate the sum of each individual hourglass, and return the sum value which is the highest out of all hourglasses.

## Exercise five

A given array has common values. Find how many pairs of common values are inside the array.

Exemple data: 

```array: [10, 20, 20, 10, 10, 30, 50, 10, 20]```

Result: ```3``` (two pairs of ```10``` and one pair of ```20```)

## Exercise six

Given a string which includes the values ```U``` and ```D``` only and which revelas the journey of a counter. Find out how many times the counter value fell under ```0``` given the fact that:

* ```U = +1``` 
* ```D = -1```

Example data: ```UDUUUDDDU```
Counter journey: ```1 - 1 + 1 + 1 + 1 - 1 -1 - 1 + 1```
Result: ```0```

## Exercise seven

Get the first ```n``` numbers of the Fibonacci list of numbers and return the ```nth``` number. 

Example data: 

```n = 6```

Result: ```5```

## Exercise eight

String A is given and a number of charcters string B should have. String B is made of String A based on the number of characters it has. Count as many times ```a``` is found in String B. 

Example data:

1.

```stringA = 'aba'```
```stringBNum = 10```
```stringB = 'abaabaabaa'``` meaning ```aba + aba + aba + a -> 10 characters```

Result: ```7```

2.

```stringA = 'ababasdkbhkqaskjd'```
```stringBNum = 6```
```stringB = 'ababas'``` meaning ```ababas -> 6 characters```

Result: ```3```

## Exercise nine

An array of 0s and 1s is given. Get the minimum number of times it takes to reach the end of the array by jumping from one 0 to another 0 given the fact that:

* from one 0, you can jump accross maximum of 2 indexes. Ex: if index 1 = 0, one can jump from index 1 to index 2 or index 3 only.
* you cannot land on an index of which value equals 1

## Exercise ten

An array of numbers is given which reflects changes that were made to an ascending sorted array. Get the number of changes made from the sorted array to the current array given the fact that:

* each change was made only by one element
* each element can make move to the left maximum 2 indexes. Ex: index 5 can become index 4 or index 3 only. If element moved more than 2 indexes, 'Too chaotic' should be the return value instead
* Each index change counts as one movement. Ex: if index 5 value becomes index 4 value, the change number equals 1; if index 5 value becomes index 3 value, the change number equals 2.

## Exercise eleven

Given a 2D array, calculate the sum of the array diagonals and return the absolute difference of these sums.

## Exercise twelve - recursion

Given an array which includes multiple nested arrays, flatten the array to a one dimensional array.

## Exercise thirteen

Find the number of zeros that can be found at the end of a given number.

## Exercise fourteen

Return the first word from a given text.
