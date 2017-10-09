DS&A, White Boarding and Big O
===

## Learning Objectives

1. Get comfortable writing readable code on a whiteboard
1. Learn how-to whiteboard and "why"
1. Understand differences and uses of arrays and dictionaries (maps)
1. Explain the scaling characteristics (graph shape) and give examples of: 
    * `O(1)`
    * `O(log n)`
    * `O(n)`
    * `O(n^2)`
    * `O(2^n)` 
1. Evaluate existing code to determine Big O in time or space


# Agenda

* White Boarding
    * Have stations
    * Supplies
        * close lid on wipes
        * erasers
        * throw away dead markers
        * let us know if running low
    * Exercise:
        * write this function:
        ```
        function greet(greeting, times) {
            const result = '';
            for(let i = 0; i < times; i++) {
                result += greeting;
            }
            return result;
        }
        ```
		* Do it multiple times until instruction staff "signs-off"
		* Must have:
			* legible writing
            * consistent font size
            * level horizontally
			* correct indentation
            * syntactically correct
			* good scale for whiteboard
    * Review best practices
* Data Structures: arrays
* Demo exercise
* Exercise `one`
* Data Structures: dictionaries/maps
* Exercise `two`
* Algorythms
    * Big O
        * [Big O Cheat Sheet](http://bigocheatsheet.com/)
* Exercise:
    * push/unshift
    * pop/shift
* Demo:
    * `O-n2.js`
    * `O-n-logn.js`
* Exercise:
    * (both partners) rewrite findDups to be more efficient `O(n*logn)`
