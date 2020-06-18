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

An hourglass is defined as the follwing matrix:

```[1,2,3]```
  ```[3]```
```[1,2,3]```

Find all the hourglasses in a given array. Calculate the sum of each individual hourglass, and return the sum value which is the highest out of all hourglasses.

## Exercise five

A given array has common values. Find how many pairs of common values are inside the array.

Exemple data: 

```array: [10, 20, 20, 10, 10, 30, 50, 10, 20]```

Result: ```3``` (two pairs of ```10``` and one pair of ```20```)

