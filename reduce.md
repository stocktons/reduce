## Reduce

The reduce array method in JavaScript is often one of the more confusing 
ones for new programmers. If you don’t understand what each part of it does 
before diving in and trying to make it do what you want, it can get 
overwhelming fast.

So let’s talk about what each part does, the two main variations you'll see 
(with and without an initial value), and why you may see it written 
different ways. If you aren’t super comfortable with arrow functions, it 
will be a good idea to watch that video and understand what’s happening 
there first. 

Let’s take a look at the basic pattern that reduce follows first. 

If you look at my commented-out notes on line 4, you'll see the very basic 
bones of reduce. We're looking to get one final thing (either a single 
value, or an object, for example) by calling reduce on an array. Reduce 
takes two parameters, which I've broken down on lines 5 and 6. 

Parameter 1 is a callback function. This can be named or anonymous or an 
arrow function, as we'll see later. This callback takes in four arguments. 
Breathe! I know it seems like a lot packed in there, but the great news is 
that we usually don't use all of them!

Let's look at the last three parameters on line 5 first. Here, I've called 
them currVal, currIdx, and arr. If you're familiar with other array methods 
like map and filter, you'll recognize these as the same three parameters 
that those methods have. You might be used to calling them different things, 
but like any variable, you could call them pizza, taco, and saagPaneer, and 
it would totally work. While tasty, though, that could get confusing fast, 
so let's stick with currVal, currIdx, and arr for now. 

Like the other array methods, it's very rare to use the currIdx and arr 
parameters. So, when they aren't used, we can just leave them out when we 
declare our function. That cuts us down to just having to worry about 
prevVal and currVal. currVal is exactly what it sounds like, it's the value 
of the current index as reduce traverses over the array. 

So let's finally talk about this extra first parameter that reduce has that 
the other array methods don't have. Here, I'm calling it prevVal, though 
sometimes, like I mentioned, you might see it called any number of things. 
The important thing is that it's the first parameter. This is where the 
magic of reduce happens. 

The value of prevVal changes depending on whether or not reduce has a second 
argument - remember, I'm talking about reduce here on line 4, not the 
callback on line 5. Taking a look at line 6, you can see that arg2 is going 
to be an optional initial value. The easiest scenario for introducing reduce 
is to walk through it without this value, so let's do that first.

Take a look at lines 10 through 15. Here, I'm noting that I don't have an 
initial value. Let's step through and identify all the parts that we do have 
and compare it with line 4. 

* 'total' here is our oneFinalThing
* 'array1' is someArray
* 'function thisIsMyCallback(previousValue, currentValue) {
        return previousValue + currentValue;
    }' is yourCallbackFunction(prevVal, currVal) and leaves out currIdx and arr
    we aren't using them, so we don't need to include them!
* and now we hit the final parenthesis - there is no arg2 here

Okay, so let's walk through what is going to happen here. Since there is no
arg 2, previousValue is going to get initialized to be index 0 of array1. 
currentValue is going to get initialized as index 1. So, our reduce loop 
starts at index 1! 

When this runs, line 13 will return previousValue + currentValue on each 
index in the array. So, starting with index 0 as previousValue (that's
1) and index 1 as currentValue (that's 2) and adding them together, a 
total of 3 gets returned. 

Here's the magic part! That 3 is now assigned to "previousValue"!

So now, when reduce moves on, we'll have previousValue (3) + currentValue, 
which is index 2 (value of 3), giving us a total of 6. 

Now, previousValue gets assigned a value of 6, and reduce moves to the next 
index. 6 + index 3 (value of 4) equals 10, and we're done - our array has 
been reduced to a single value of 10 - magic!

Before we move on to talking about what happens when reduce DOES have that 
optional second argument passed to it, let's quickly look at the operations 
on lines 17 through 29. I just want to reiterate that you can call the 
parameters in your callback anything you want (acc, next), (potato, taco), 
(pv, cv), and everything will work just fine. Pick something that's readable 
and makes sense. 

I also want to reiterate that you can use a named function, an anonymous 
function, or an arrow function as the callback function - any will work 
just fine, but it's most common to see an arrow function. 

We've finally gotten to the part where we can talk about the second parameter 
to reduce, the optional intial value. Let's take a look back up top - in 
line 4, remember, the entire callback function from the beginning to the last 
curly brace gets stuffed inside 'arg1'. Then there's a comma, and then we 
can check out what arg2 is. 

Looking down at lines 31 - 34, let's see this in action. We've got our 
rather ridiculously-named (but very clear) oneFinalThing that we're aiming 
for, then array1 that's getting reduced, and an arrow function as the first 
argument, and then after the last curly brace, a comma, and our second 
argument, a 5. Whew!

Here's the major difference between the first version of reduce. When there 
is an optional second argument, previousValue, prevVal, acc, pv, potato, 
whatever! gets initialized as this second argument! 

So, here, pv is 5, cv is now index ZERO in array1, and then we proceed as 
before. So you can just imagine that everything's been dragged to the left 
and we truly start our reduce loop at the beginning of the array now. 

To walk through this, we'll start with 5 as pv, and cv is 1, so the first 
thing that gets returned is 6. 

So pv gets assigned the value of 6, and now we walk to the next index in the 
array for cv, and that's 2. So 6 + 2 is 8.

8 is the new pv, and when we go to the next index, that's a value of 3. 3 + 
8 is 11.

11 is the new pv, so now we add the new cv of 4 for 10, and that's it, so 
we finally return a grand total of 15. 

Obviously this is a very trivial example, but I hope it helps clear up the 
exact mechanics of reduce, so that when you see people passing in an empty 
object (for example) as the optional initial value, it's a little easier 
to imagine what might be going on. 

Let me know what your questions are, and what other topics you might like 
to see! See you all next time. 
