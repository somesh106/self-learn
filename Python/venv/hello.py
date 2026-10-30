# if 20 > 10:
#     print("Twenty is greater than ten!")
#     print("Hello World!!!")
# -----------
# import sys
# print (sys.version)
# -----------
# print("Hello World!!!")
# print("Statement - 1")
# print("Statement - 2")
# print("Statement - 3")
# print("Statement - 4")
# ---------------------------------------

# print("Hello", end=" ")
# print("World")
# ------------
# print(5); print(10); print(15); print(20)
# print(2+4); print(4+8)
# print(8+2)
# ------------

# print ("I'm", 28, "years", end = " "); print("old.")
# -----------
# """Multiline comments
# print("Hello World!!!")
# print("Statement - 1")
# print("Statement - 2")
# print("Statement - 3")
# print("Statement - 4")
# """

# --------------------------------------
# x = 5; y = "John"
# print(x)
# print(y)
# ----------------
# x = 5
# x = "Sally"
# print(x)
# ----------------
# x = 5
# y = "John"
# print(type(x))
# print(type(y))
# ----------------
# x = "John"
# print(x)
# x = 'Sally'
# print(x)
# ----------------
# a = 4
# A = "Virat"
# print(a)
# print(A)
# ----------------
# x = str(5); y = int(5)
# z = float(5)
# ---------------
# myvar = "John"; print(myvar)
# my_var = "John"; print(my_var)
# _my_var = "John"; print(_my_var)
# myVar = "John"; print(myVar)
# MYVAR = "John"; print(MYVAR)
# myvar2 = "John"; print(myvar2)
# ---------------
# myVariableName = "Camel Case"; print(myVariableName)
# MyVariableName = "Pascal Case"; print(MyVariableName)
# my_variable_name = "Snake Case"; print(my_variable_name)
# --------------
# x, y, z = "A", "B", "C"
# print(x); print(y)
# print(z)
# --------------
# x = y = z = "Orange"
# print(x); print(y)
# print(z)
# --------------
# fruits  = ["Apple", "Banana", "Orange"]
# x, y, z = fruits
# print(x); print(y); print(z)              #Apple, Banana, Orange
# print(x); print(y)                        #Apple, Banana

# x, y, z, a = fruits
# print(x); print(y); print(z); print(a)      #Error (expected 4, got 3)
# print(x); print(y); print(z); print(a)      #Error (expected 4, got 3)
# --------------
# x = "Virat"
# y = "Kohli"
# z = 32
# # print(x, y, z)
# print(x, y, end = " ")
# print(z)
# --------------
# x = "Virat"
# y = "Kohli"
# print(x + " " + y + " ", end = "Can only concatinate Strings not int.")
# --------------
# x = 4
# y = 6
# print(x + y)
# --------------
# x = "Virat Kohli"
# y = 30
# print(x, y)
# --------------
# print ("Virat", "kohli")
# --------------
# x = "Virat Kohli"                             # Global Variable
# def myFun():
#     print(x, end = " is 30 yrs old.")
# myFun()
# --------------
# x = "Virat"
# def myFun():
#     x = "Rohit"
#     print(x)
# myFun()
# print(x)
# --------------
# def myFun():
#     global x
#     x = "Virat"
# myFun()
# print(x)
# --------------
# x = "Virat"
# def myFun():
#     global x
#     x = "Rohit"
# myFun()
# print(x)
# --------------
# x = [1, 2, 3, 4, 5]                                  #List Mutable
# x[0] = 6
# print(x)
# --------------
# x = "Hello World"
# print(type(x))
# x = 20	                                            #int
# x = 20.5	                                            #float
# x = 1j	                                            #complex
# x = ["apple", "banana", "cherry"]	                    #list
# x = ("apple", "banana", "cherry")	                    #tuple
# x = range(6)	                                        #range
# x = {"name" : "John", "age" : 36}	                    #dict (dictionary)
# x = {"apple", "banana", "cherry"}	                    #set
# x = frozenset({"apple", "banana", "cherry"})	        #frozenset
# x = True                                              #boolean
# x = b"Hello"	                                        #bytes
# x = bytearray(5)	                                    #bytearray
# x = memoryview(bytes(5))	                            #memoryview
# x = None	                                            #NoneType
# --------------
# c = 3 + 2j
# print(c.real)  # 3.0
# print(c.imag)  # 2.0
# --------------
# List
# fruits = ["Apple","Banana"]
# fruits[0] = "Mango"
# print(fruits); print(fruits[0])

# Tuple
# point = (10, 20, 30, 40)
# print(point); print (point[2])

# Range
# numbers = range (1,8)
# print (list(numbers))
# numbers = range (10)
# print (list(numbers))
# --------------
# Dict
# player = {
#     "name": "Virat",
#     "age": 30
# }
# print(player); print(player["age"]); print(player["name"])
# --------------
# Set - 1) set
# numbers = {10, 20, 30, 30, 40, 50}
# print(numbers)
# print(numbers.add(60))             #None(means can't add like that)
# numbers.add(60)                    #Add like that way
# print(numbers)

# # 2) frozenset
# numbers = frozenset ([10, 20, 30, 40, 30, 50])
# numbers = frozenset ((10, 20, 30, 40, 30, 50))
# numbers = frozenset ({10, 20, 30, 40, 30, 50})
# print(numbers)
# --------------
# Boolean
# age = 20
# print(age > 18)
# print(age < 18)

# is_student = True
# print(is_student)
# print(type(is_student))
# ---------------
# Binary Type 1) bytes
# x = b"Hello"
# print(x)
# print(x[2])

# 2) bytearray
# x = bytearray(b"Hello")
# print(x)
# print(x[0])

# 3) memoryview
# x = bytearray(b"Hello")
# y = memoryview(x)
# print(y[0])
# --------------
# Numbers

# int
# x = 1
# y = 2.8
# z = 1j
# print(type(x)); print(type(y))
# print(type(z))

# float
# x = 35e3
# y = 12E4
# z = -87.7e100
# print(type(x))
# print(type(y))
# print(type(z))

# complex
# x = 3+5j
# y = 5j
# z = -5j
# print(type(x))
# print(type(y))
# print(type(z))

# Type conversion
# x = float(5); print(x); print(type(x))              #int ==> float
# x = int(5.8); print(x); print(type(x))              #float ==> int ?(o/p => 5)
# x = complex(5); print(x); print(type(x))            #int ==> complex
# x = complex(5.8); print(x); print(type(x))          #float ==> complex
# x = int(5.8 + 0j); print(x); print(type(x))         #Error

# Random
# import random
# print(random.randrange(1, 20))
# ---------------

# String
# multiline string
# a = """Lorem ipsum dolor sit amet,
# consectetur adipiscing elit,
# sed do eiusmod tempor incididunt
# ut labore et dolore magna aliqua."""
# print(a)

# a = "Virat, Kohli"; print(a[7])

# x = "Virat, Kohli"; print(len(x))

# for x in "Banana":
#     print(x)

# text = "Virat is a good cricketer of India and a Batsman"
# print("Good" in text)

# text = "Virat is a good cricketer of India is and a Batsman"
# print("is" in text)

# text = "Virat is a good cricketer of India and a Batsman"
# if "good" in text:
#     print(" 'good' is in the Sentence")

# text = "Virat is a good cricketer of India and a Batsman"
# print("Kohli" not in text)

# text = "Virat is a good cricketer of India and a Batsman"
# if "Kohli" not in text:
#     print("'Kohli' is not in the senttence")

# Slicing String
# x = "Virat Kohli"
# print(x[2 : 5])
# print(x[:8])
# print(x[2:])

# x = "ABCDEFGHIJ"
# print(x[-5 : -2])

# Modify String
# x = "      Virat Kohli "
# print(x.upper`())
# print(x.lower())
# print(x.strip())
# print(x.replace("a", "A"))

# x = "Virat, Kohli"
# print(x.split("a"))

# Concatenate String
# a = "Virat"
# b = "Kohli"
# print(a + " " + b)

# Format()
# age = 32
# print("My name is John, I am {age} years old.")

# Placeholders and Modifiers
# price = 50
# print(f"The Price is {price: .2f} dollors")

# print(f"The Price is {20 * 40} dollors")

# print("This is a symbol of \"Escape Character\".")

# String Methods
# x = "Banana"; print(x.capitalize())                   # Capitalize
# x = "Banana"; print(x.casefold())                     # casefold
# x = "Banana"; print(x.center(15, "0"))                # center
# x = "I love Banana, Banana are my favorite fruit"     # count
# print(x.count("Banana", 10, 24))
# x = "welcome to the jungle"; print(x.split())         # split
# x = "welcome to the jungle"                           # join
# seperator = "TEST"; print(seperator.join(x))
# x = {"name": "John", "country": "Norway"}
# seperator = "TEST"; print(seperator.join(x))
# x = "welcome to the jungle"; print(x.find("o"))       # find
# x = "Hello, welcome to my world."                     # startswith
# print(x.startswith("wel", 7, 20))
# x = "Hello, welcome to my world."                     # endswith
# print(x.endswith("world.", 7, 20))
# print(x.endswith("world."))
# x = "welcome to the jungle"; print(x.title())         # title
# x = "welcome to the jungle"; print(x.isalpha())       # isalpha
# x = "5000"; print(x.isdigit())                        # isdigit
# x = "Virat18"; print(x.isalnum())                     # isalnum
# x = "WelCome tO The Jungle"; print(x.swapcase())      # swapcase

# Ternary Operator
# num = 5
# x = "Fri" if num == 5 else "Sat" if num == 6 else "Sun" if num == 7 else "weekday"
# print(x)

# num = 6
# x = "WEEKEND!" if num > 5 else "Workday"
# print(x)

# Chaining Comparision
# x = 5; print(1 < x and x < 10)

# Identity Operator
# x = ["apple", "banana"]
# y = ["apple", "banana"]
# z = x
# print(x is z); print(x is y); print(x == y)

# MemberShip Operator and String
# x = ["A", "B", "C", "D"]
# print("B" in x); print("E" in x); print("E" not in x)
# print("h" in x); print("H" in x)

# Precedence Operator
# print(5 + 4 - 7 + 3)                # left-to-right evaluation
# --------------------------------------------------------------------------------

# List

# List Constructor
# x = list(("A", "B", "C", "D")); print(x)

# x = list(); print(x)
# x = (1, 2, 3, 4); y = list(x); print(y)
# x = "Virat"; y = list(x); print(y)
# x = range(1, 8); y = list(x); print(y)

# Access List Item
# x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
# print(x[1]); print(x[-1]); print(x[2:5]); print(x[:8]); print(x[1:]); print(x[-6:-2]); print(x[-2:]); print(x[:-2])

# Change List Item
# x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "C", "W"]
# x[2] = "E"; print(x)
# x[2:5] = ["M", "N"]; print(x)
# x[2:3] = ["M", "N", "O"]; print(x)
# x.insert(2, "Z"); print(x)

# y = ["X", "Y", "Z"]
# y = ("X", "Y", "Z")                     # Tuple Added
# x.extend(y); print(x)

# x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "C", "W"]
# x.remove("C"); print(x)
# x.pop(1); print(x)
# x.pop(); print(x)
# del x[0]; print(x)
# del x; print(x)                       #error list deleted already
# x.clear(); print(x)

# Loops through a list
# for a in x:
#     print(a)

# for i in range(len(x)):
#     print(x[i])

# While Loop
# x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "C", "W"]
# i = 0
# while i < len(x):
#     print(x[i])
#     i = i + 1
# ----------------------------
# List Comprehesion
# Normal way
# numbers = []
# for i in range(5):
#     numbers.append(i)
# print(numbers)

# Comprehension way
# numbers = [i for i in range(5)]; print(numbers)
# squares = [i*i for i in range(1, 6)]; print(squares)

# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = [x for x in fruits if "a" in x]
# print(newlist)

# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = [x if x != "banana" else "orange" for x in fruits]
# print(newlist)

# newlist = [x.upper() for x in fruits]
# print(newlist)

# newlist = [x for x in fruits if x != "apple"]
# print(newlist)

# newlist = [x for x in range(10)]
# newlist = [x for x in range(10) if x < 5]
# print(newlist)
# -----------------------------------

# thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
# thislist.sort(); print(thislist)

# thislist = [100, 50, 65, 82, 23]
# thislist.sort(); print(thislist)

# x = ["orange", "mango", "kiwi", "pineapple", "banana"]
# x.sort(); print(x)
# x.sort(reverse = True); print(x)                                           #Sort Descending
# x = [100, 50, 65, 82, 23]; x.sort(reverse= True); print(x)

# Customized Sort
# def function(n):
#     return abs(n-50)
# x = [100, 50 ,65, 70 ,45, 23, 5]
# x.sort(key = function)
# print(x)

# thislist = ["banana", "Orange", "Kiwi", "cherry"]                         # Case-Sensitive Capital => Small
# thislist.sort(); print(thislist)

# thislist = ["banana", "Orange", "Kiwi", "cherry"]                         # Small => Capital
# thislist.sort(key = str.lower); print(thislist)

# thislist = ["banana", "Orange", "Kiwi", "cherry"]                           # ReversreOrder
# thislist.reverse(); print(thislist)
# ---------------------------------------

# name = input("Enter Name => ")
# age = input("Enter Age => ")
# print(name, age)

# x = [1,2,3,[3,4],[3,5]]
# x[3] = [5,6,7,8]
# print(x)

# fruits = ["apple", "banana", "cherry"]
# fruits.insert(1, "lemon"); print(fruits)
# ---------------------------------------

# Copy List
# list1 = ["apple", "banana", "cherry"]
# list2 = list1.copy(); print(list2)                           # Copy Method
# list2 = list(list1); print(list2)                            # Built-in Method => list()
# list2 = list1[:]; print(list2)                               # Slice Operator

# Join List
# list1 = ["A", "B"]
# list2 = [1, 2]
# list3 = list1 + list2; print(list3)                          # Normal Join List

# for x in list2:                                              # With Append
# list1.append(x); print(list1)

# list1 = ["a", "b" , "c"]
# list2 = [1, 2, 3]
# list1.append(list2); print(list1)

# list1.extend(list2); print(list1)                            # With Extend

# a = ['a', 'b', 'c']                                          # Nested Lists
# n = [1, 2, 3]
# x = [a, n]; print(x)
# print(x[0][1])
# -------------------------------------------------------------------------------------

# Tuples
# t = ("a", "b", "c", "d")                                  # With ()
# print(type(t)); print(t)
# t = "a", "b", "c", "d"                                    # Without ()
# print(type(t)); print(t)

# Access
# t = ("a", "b", "c", "d")
# print(t[1]); print(t[-1]);print(t[1:3]); print(t[:3]); print(t[0:]); print(t[-3:-1])

# if "b" in t:    print("Exists")                           # Check

# t = ("a", "b", "c", "d")                                  # Update
# x = list(t); print(x)
# x[1] = "e"
# t = tuple(x); print(t)

# t = ("a", "b", "c", "d")                                  # Add
# x = list(t)
# x.append("e")
# t = tuple(x); print(t)

# t = ("a", "b", "c", "d")                                  # Tuple to Tuple Add
# x = ("e",)
# t += x; print(t)

# t = ("a", "b", "c", "d")                                  # Remove
# x = list(t)
# x.remove("c")
# t = tuple(x); print(t)

# t = ("a", "b", "c", "d")                                  # Delete
# del t; print(t)                                           # Error

# t = ("a", "b", "c", "d")                                  # Packing of Tuple
# (pink, green, blue, red) = t                              # UnPacking
# print(pink); print(green); print(blue); print(red)

# t = ("a", "b", "c", "d")
# (pink, green, *blue) = t
# print(pink); print(green); print(blue)
# (pink, *green, blue) = t
# print(pink); print(green); print(blue)

# Loop
# t = ("a", "b", "c", "d")
# for x in t:
#     print(x)

# t = ("a", "b", "c", "d")                                  # Through index number
# for i in range(len(t)):
#     print(t[i])

# t = ("a", "b", "c", "d")
# i = 0
# while i < len(t):
#     print(t[i])
#     i = i + 1

# Join
# t1 = ("a", "b", "c", "d")
# t2 = (1, 2, 3, 4, True)
# t3 = t1 + t2; print(t3)

# Multiply
# t = ("a", "b", "c", "d")
# multiply = t * 2; print(multiply)

# Methods
# t = ("a", "b", "c", "d", "a", "e", "f", "a", "b", "m", "n")
# print(t.count("a"))                                       # Count Method
# print(t.index("a", 5, 9))                                 # Index Method
# ----------------------------------------------------------------------------

# Set  - {}

# s = {"apple", "banana", "cherry", "apple"}
# s = {1, "apple", 0, "banana", "cherry", True, False, 0, 1, 2}
# print(s); print(len(s))

# s = {"apple", "banana", "cherry"}                           # Access
# for x in s:
#     print(x)

# s = {"apple", "banana", "cherry"}                           # Check
# print("banana" in s); print("mango" not in s)

# s = {"apple", "banana", "cherry"}                           # Add Item => add()
# s.add("mango"); print(s)

# s1 = {"apple", "banana", "cherry"}                          # Add Set => update()
# s2 = {1, 2, "mango", False}
# s1.update(s2); print(s1)

# s = {"apple", "banana", "cherry"}                           # Add Iterable( list, tuple, dict ) => update()
# t = ("a", 1, True, 2, 0)
# s.update(t); print(s)

# l = ["a", 1, True, 2, 0]
# s.update(l); print(s)

# d = {"name": "Virat"}
# s.update(d); print(s)                                       # For Key
# s.update(d.values()); print(s)                              # For Key-Value both

# s = {"apple", "banana", "cherry"}
# s.remove("banana"); print(s)                                # Remove Item => remove()
# s.remove("mango"); print(s)                                 # Generates Error coz item not exists

# s.discard("banana"); print(s)                               # dsicard Item => remove()
# s.discard("mango"); print(s)                                # NOT Generates Error if item not exists

# x = s.pop()                                                 # Remove Random item
# print(x)
# print(s)

# s.clear(); print(s)                                         # Clear()
# del s; print(s)                                             # Error

# for x in s: print(x)                                        # For Loop

# Join Sets
# s1 = {"apple", "banana", "cherry"}
# s2 = {1, 2, True, "D", 0}
# s3 = {"name": "virat"}
# s3 = s1.union(s2); print(s3)                                # Union() => Not change original creates new set
# s1.update(s2); print(s1)                                    # Update() => Chnage original set
# s4 = s1.union(s2, s3); print(s4)                            # Add Multiple Sets
# s4 = s1.union(s2, s3.items()); print(s4)                    # Add Items also

# s4 = s1 | s2; print(s4)                                     # Dist k sath work nhi krta

# s1 = {"apple", "banana", "cherry", 1, False}
# s2 = {0, True, "Virat"}
# z = s.union(t); print(z)                                    # Set + Tuple

# s3 = s2.intersection(s1); print(s3)                         # Intersection keeps on Duplicates
# s3 = s2 & s1; print(s3)

# s1 = {"apple", "banana", "cherry", 1, False}
# s2 = {True, "Virat", "apple","cherry"}
# s1.intersection_update(s2); print(s1)                       # intersection_update()

# s3 = s1.difference(s2); print(s3)                           # difference
# s3 = s1 - s2; print(s3)
# s1.difference_update(s2); print(s1)                         # difference_update()

# s3 = s1.symmetric_difference(s2); print(s3)                 # symmetric_difference()
# s3 = s1 ^ s2; print(s3)
# -------------------------------------------------------------------------------------

# Frozenset({})

# x = frozenset({"a", "b", "c", "d", "e", "f"})
# print(x); print(type(x))

# b = x.copy(); print(b)                                      # Copy()

# a = frozenset({1, 2, 3, 4})
# b = frozenset({3, 4, 5, 6})
# c = frozenset({5, 3})

# print(b.difference(a))                                      # Difference()
# print(a - b)

# print(a.intersection(b))                                    # intersection()
# print(a & b)

# print(a.isdisjoint(b))                                      # isdisjoint()
# print(a.isdisjoint(c))

# a = frozenset({1, 2, 3})                                    # issubset()
# b = frozenset({1, 2, 4, 5, 6, 3})
# print(a.issubset(b))                                        # o/p => True
# print(b.issubset(a))                                        # o/p => False

# a = frozenset({1, 2, 3, 4})
# b = frozenset({3, 4, 5, 6})
# print(a.symmetric_difference(b))                            # symmetric_difference()
# print(a ^ b)                                                # o/p => ({1, 2, 5, 6})

# print(a.union(b))                                           # union()
# print(a | b)
# --------------------------------------------------------------------------------------------

                                        # Dictionary

# d = {"name": "Virat", "age": 32}
# print(d)

# d = {
#   "brand": "Ford",
#   "electric": False,
#   "year": 1964,
#   "colors": ["red", "white", "blue"]
# }
# print(d)
# print(type(d))

# d = dict(name = "Virat", age = 32)                          # dict-constructor
# print(d)

# d = {
#   "brand": "Ford",
#   "electric": False,
#   "year": 1964,
#   "color": ["red", "white", "blue"]
# }
# x = d["year"]; print(x)                                     # Access
# x = d.get("color"); print(x)

# x = d.keys(); print(x)                                      # get keys()
# print(d.values())                                           # get values()

# d["year"] = 2000
# print(d.items())                                            # get items()

# d[ "drive" ] = "Four Wheel Drive"                           # Add new item in key: value form
# print(d)

# if "brand" in d:                                            # check exists or not
#     print("Yes")

# d [ "color" ] = "pink"; print(d)                            # change item value

# d = { "name": "Virat", "age": 30, "surname": "Kohli"}
# d.update({"name": "Rohit"}); print(d)                       # update()
# d["surname"] = "Kohli"; print(d)                            # add()

# d.pop("age"); print(d)                                      # remove specific - pop()
# d.popitem(); print(d)                                       # remove last inserted - popitem()

# d.clear(); print(d)                                         # clear all - clear()

# Loops
# d = { "name": "Virat", "age": 30, "surname": "Kohli"}
# for x in d:
#     print(x)                                                # Returns - keys

# for x in d.keys():
#     print(x)

# for x in d:
#     print(d[x])                                             # Returns - values

# for x in d.values():
#     print(x)

# for x, y in d.items():                                      # Returns both - key & value
#     print(y, x)

# d1 = { "name": "Virat", "age": 30, "surname": "Kohli"}
# d2 = d1.copy(); print(d2)                                   # copy()
# d2 = dict(d1); print(d2)

# Nested
# d = {
#   "child1" : { "name" : "Emil", "year" : 2004 },
#   "child2" : { "name" : "Tobias", "year" : 2007 },
#   "child3" : { "name" : "Linus", "year" : 2011 }
# }
# print(d)

# p1 = { "name": "Virat", "age": 30}
# p2 = { "name": "Rohit", "age": 32}
# p3 = { "name": "Dhoni", "age": 32}
# d = { "P1": p1, "P2": p2, "P3": p3}
# print(d)

# d = {
#   "child1" : { "name" : "Emil", "year" : 2004 },
#   "child2" : { "name" : "Tobias", "year" : 2010 },
#   "child3" : { "name" : "Linus", "year" : 2011 }
# }; print(d["child2"]["year"])
#---------------------------------------------------------------------

                              # If...else
# a = 4
# b = 6
# if a > b:
#   print("a is Greater.")
# else:
#   print("b is Greater.")

# age = 2
# if age > 18:                                                    # Multi Statement
#   print("You are Adult.")
#   print("You can Vote.")
# else:
#   print("Can Not")

# logged_in = False                                               # Using Variables
# if logged_in:
#   print("Welcome Back.")
# else:
#   print("Please Login.")

# marks = 85                                                      # Elif keywod with multiple If
# if marks >= 90:
#   print("Grade - A")                                            # If - Elif - Else chain
# elif marks >= 80:
#   print("Grade - B")
# elif marks >= 70:
#   print("Grade - c")
# elif marks >= 60:
#   print("Grade - D")

# a = 200                                                       # Else 
# b = 33
# if b > a:
#   print("b is greater than a")
# elif a == b:
#   print("a and b are equal")
# else:
#   print("a is greater than b")

# username = "Emil"
# if len(username) > 0:
#   print(f"Welcome, {username}!")
# else:
#   print("Error: Username cannot be empty")
#--------------

# a = 5; b = 5
# if a > b: print("a is Geater.")                               # Short Hand if - single line if statement

# print("A") if a > b  else print("B")                          # Short Hand if - else

# bigger = a if a > b else b                                    # Assign value with if - else
# print("Bigger is => ", bigger)
                                                                # Multi condittions in one line
# print("A is Bigger.") if a > b else print("A = B") if a == b else print("B is Bigger.")

# bigger = "a" if a > b else "b"                                    # Ternary Operator
# print("Bigger is => ", bigger)

# Logical Operator
# a = 200; b = 100; c = 400
# if a > b and c > a:                                           # AND
  # print("Both conditions True.")

# if a > b or a > c:                                            # OR
  # print("Atleast one condition is True.")

# if not a > c:                                                 # NOT - reverse the result
  # print("C is Greater.")

# age = 25; is_student = True; has_discount_code = True                 # Combining Multiple operators
# if (age < 18 or age > 65) and not is_student or has_discount_code:
#   print("Duscount Applied.")

# username = "Tobias"
# password = "secret123"
# is_verified = True
# if username and password and is_verified:
#   print("Login successful")
# else:
#   print("Login failed")

# age = 25
# has_license = True
# if age >= 18:                                                   # Nested If
#   if has_license:
#     print("You can drive")
#   else:
#     print("You need a license")
# else:
#   print("You are too young to drive")

# x = 40
# if x > 10:
#   print("Above ten,")
#   if x > 20:
#     print("and also above 20!")
#   else:
#     print("but not above 20.")

# temperature = 25
# is_sunny = True
# if temperature > 20:
#   if is_sunny:
#     print("Perfect beach weather!")                           # Both are same

# if temperature > 20 and is_sunny:                             # Both are same
#   print("Perfect bach weather!")

# a = 20; b = 40                                                # having an empty if statement like this, would 
# if b > a:                                                     # raise an error without the pass statement
#   pass

# day = 7                                                       # Match
# match day:
#   case 1:
#     print("Monday")
#   case 2:
#     print("Tuesday")
#   case 3:
#     print("Wednesday")
#   case 4:
#     print("Thursday")
#   case 5:
#     print("Friday")
#   case 6:
#     print("Saturday")
#   case 7:
#     print("Sunday")

# day = 4                                                # Add _ to the last to set Default value if No Msatch
# match day:
#   case 6:
#     print("Today is Saturday")
#   case 8:
#     print("Today is Sunday")
#   case _:
#     print("Looking forward to the Weekend")

# day = 4                                                        # Pipe | => to check mulitple conditions
# match day:
#   case 1 | 2 | 3 | 4 | 5:
#     print("Today is a weekday")
#   case 6 | 8:
#     print("I love weekends!")
#---------------------------------------------

# Loops - while loop

# i = 1
# while i < 9:                                                # While loop
#   print(i)
#   i += 1

# i = 1
# while i < 9:                                                # Break with while loop
#   print(i)
#   if i == 4:
#     break
#   i += 1

# i = 0
# while i < 6:                                                # continue statement
#   i += 1
#   if i == 3:
#     continue
#   print(i)

# i = 1
# while i < 6:                                                # while with else
#   print(i)
#   i += 1
# else:
#   print("i is no longer less than 6")
#---------
# for loop

# for x in "banana":
#   print(x)

# fruits = ["apple", "banana", "cherry"]
# for x in fruits:
  # print(x) 

# for x in fruits:                                             # break statement
#   print(x)
#   if x == "banana":
#     break

# for x in fruits:
#   if x == "banana":
#     break
#   print(x)

# for x in fruits:                                            # continue statement
#   if x == "banana":
#     continue
#   print(x)

# Range
# for x in range(8):                                          # (end)
# for x in range(2, 9):                                       # (start, end)
# for x in range(2, 30, 3):                                   # (start, end, increament by)
  # print(x)

# for x in range(9):                                          # else with for loop
#   print(x)
# else:
#   print("Finally Finished.")

# fruits = ["apple", "banana", "cherry"]                      # Nested Loops
# colors = ["red", "yellow", "pink"]
# for x in fruits:
#   for y in colors:
    # print(x, y)

# for x in colors:
#   for y in fruits:
#     print(x, y)
#---------------------------------------------------------------------------

                              # Function()
# def fun():
#   print("Hello World")
# fun()

# def fun():                                                  # Function name
# return "Hello World"                                        # Return Statementt
# print(fun())                                                # Function call

# def fun():
#   return ("Hello World")
# msg = fun()
# print(msg)

# def myfun(fname):                                           # Parameter pass
#   print(fname + " " + "Kohli")
# myfun("Virat")

# def myfun(fname, oname):                                    # Parameter pass
#   print(fname + " " + "Kohli")
#   print(oname + " " + "Sharma")
# myfun("Virat", "Rohit")                                     # Arguments pass

# def my_function(name = "friend"):                           # Default Parameter
#   print("Hello", name)
# my_function("Emil")
# my_function("Tobias")
# my_function()
# my_function("Linus")

# def myfun(animal, name):
#   print("I have " + animal + ". It's name is ", name)
# myfun("Dog", "Bruno")

# myfun(animal = "Dog", name = "Bruno")

# def myfun(animal, name, age):                               # Mixing Positional and Keyword Argument
#   print(animal + " - " + name + " - " + str(age))
# myfun("Dog", age = 5, name = "Bruno")

# def myfun(fruits):
#   for x in fruits:
#     print(x)
# myfruits = ["apple", "banana", "cherry"]
# myfun(myfruits)

# def myfun(person):
#   print("Name:", person["name"])
#   print("Age:", person["age"])
# myperson = {"name": "Virat", "age": 30}
# myfun(myperson)

# def get_greeting():
#   return "Hello from a function"
# print(get_greeting())

# message = get_greeting()
# print(message)

# def myfun(x, y):                                          # Return value
#   return x + y
# result = myfun(4, 6)
# print(result)

# def myfun(name, /):                                       # Positional-Only Arguments
#   print("hello", name)
# myfun("Virat")

# def myfun(*, name):                                       # Keyword-Only Arguments
#   print("Hello", name)
# myfun(name = "Virat")

# def my_function(a, b, /, *, c, d):                        # Positional-Only + Keyword-Only Combined Arguments
#   return a + b + c + d
# result = my_function(5, 10, c = 15, d = 20)
# print(result)
#---------------

                              # *args / *kwargs
# def myfun(*players):                                      # Unkown number of arguments
#   print("The Wicket Keeper is: " + players[1])
# myfun("Virat", "Dhoni", "Rohit")

# def myfun(*args):
#   print("Type: ", type(args))
#   print("1st Argument: ", args[0])
#   print("2nd Argument: ", args[1])
#   print("All Arguments: ", args)
# myfun("Virat", "Dhoni", "Rohit")

# def myfun(greet, *players):
#   for name in players:
#     print(greet, name)
# myfun("Hello", "Virat", "Rohit")

# def myfun(*numbers):
#   total = 0
#   for num in numbers:
#     total += num
#   return total
# print(myfun(1, 2, 3))
# print(myfun(10, 20, 30))
# print(myfun(5))

# def myfun(*numbers):                                            # args => * (arguments)
#   if len(numbers) == 0:
#     return None
#   max_num = numbers[0]
#   for num in numbers:
#     if num > max_num:
#       max_num = num
#   return max_num
# print(myfun(1, 2,  4, 6 ,8,20, 40))

# def myfun(**player):                                            # args => ** (keyword arguments)
#   print("Surname is : " + player["lname"])
# myfun(fname = "Virat", lname = "Kohli")

# def myfun(**player):                                            # kwargs
#   print("Type : ", type(player))
#   print("Name : ", player["name"])
#   print("Age : ", player["age"])
#   print("A ll Details : ", player)
# myfun(name = "Virat", surname = "Kohli", age = 30, city = "Indore")

# def myfun(username, **details):
#   print("Username : ", username)
#   print("Additional Information : ")
#   for key, value in details.items():
#     print(" ", key + ":", value)
# myfun("Virat", age = 32, city ="Indore", hobby = "Cricketer")

# def myfun(title, *args, **kwargs):
#   print("Title : ",  title)
#   print("Posiotional Arguments : ", args)
#   print("Keyword Arguments : ", kwargs)
# myfun("User Info : ", "Virat", "Rohit", age = 30, city = "Indore")

# def myfun(a, b, c):
#   return a + b + c
# numbers = [1, 2, 3]
# result = myfun(*numbers)
# print(result)

# def myfun(fname, lname):
#   print("Hello", fname, lname)
# person = {"fname": "Virat", "lname": "Kohli"}
# myfun(**person)
#-----------

# def my_function(fname, lname):
#   print("Hello", fname, lname)
# person = {"fname": "Virat", "lname": "Kohli"}
# my_function(**person)                                   # Same as - my_function(fname="Emil", lname="Refsnes")
#-----------

                                # Scope
# def myfun():
#   x = 20                                                        # Local scope 
#   print(x)
# myfun()

# def myfun():
#   x = 20
#   def innerfun():                                               # function inside function
#     print(x)
#   innerfun()
# myfun()

# x = 20                                                          # Global Scope
# def myfun():
#   print(x)
# myfun()
# print(x)

# x = 200
# def myfun():
#   x = 400
#   print(x)
# myfun()
# print(x)

# def myfun():
#   global x                                                      # Global Keyword
#   x = 300
# myfun()
# print(x)

# def myfun1():
#   x = "Virat"
#   def myfun2():
#     nonlocal x
#     x = "Hello"
#   myfun2()
#   return x
# print(myfun1())

# x = "Global"                                                   # LEGB Rule
# def outer():
#   x = "Enclosing"
#   def inner():
#     x = "Local"
#     print("Inner : ", x)
#   inner()
#   print("Outer : ", x)
# outer()
# print("Global : ", x)

# def changecase(fun):                                          # Function Decorators
#   def inner():
#     return fun().upper()
#   return inner

# @changecase                                                   # Decorator Name
# def myfun():
#   return "Hello Virat"
# print(myfun())
#----------
# def changecase(fun):
#   def inner():
#     return fun().upper()
#   return inner

# @changecase                                                   # Multiple Decoators
# def myfun1():
#   return "Hello"
# @changecase
# def myfun2():
#   return "Virat"

# print(myfun1())
# print(myfun2())
#----------

# def channgecase(fun):                                         # Decorator with Argument
#   def inner(x):
#     return fun(x).upper()
#   return inner
# @channgecase
# def myfun(name):
#   return "Hello " + name
# print(myfun("Virat"))

# def changecase(func):
#   def myinner(*args, **kwargs):
#     return func(*args, **kwargs).upper()
#   return myinner
# @changecase
# def myfunction(name):
#   return "Hello " + name
# print(myfunction("John"))

# def changecase(n):
#   print(n)
#   def changecase(fun):
#     print(fun)
#     def inner():
#       if n == 1:
#         a = fun().lower()
#       else:
#         a = fun().upper()
#       return a
#     return inner
#   return changecase

# @changecase(2)
# def myfun():
#   return "Hello"
# print(myfun())

# def changecase(fun):                                        # Multiple Decorators
#   def innerchange():
#     return fun().upper()
#   return innerchange
# def greet(fun):
#   def innergreet():
#     return "Hello " + fun()
#   return innergreet

# @changecase
# @greet
# def myfun():
#   return "Virat"
# print(myfun())

# def myfun():                                                # Preserving function Metadata
#   return "hello"
# print(myfun.__name__)

# def changecase(fun):                                        # Preserving Function Metadata
#   def inner():
#     return fun().upper()
#   return inner

# @changecase
# def myfun():
#   return "Hello"

# print(myfun.__name__)
#---------------------------
                                  # Lambda Function
# x = lambda a : a + 10
# print(x(5))

# x = lambda a, b : a * b
# print(x(5, 6))

# x = lambda a, b, c : a + b + c
# print(x(5, 6, 2))

# def myfun(n):
#   return lambda a : a * n
# result = myfun(2)
# print(result(10))
# result = myfun(4)
# print(result(10))

# def myfun(n):
#   return lambda a : a * n
# result1 = myfun(2)
# result2 = myfun(4)
# print(result1(10))
# print(result2(10))

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# result = list(map(lambda x : x * 2, numbers))                     # map() with Lambda
# print(result)
# result = list(filter(lambda x : x % 2 != 0, numbers))             # filter()
# print("Odd Numbers : ", result)
# players = [("Virat", 18), ("Rohit", 45), ("Dhoni", 7)]            # sorted()
# result = sorted(players, key = lambda x : x[1])
# print(result)

# words = ["apple", "pie", "banana", "cherry"]
# sorted_words = sorted(words, key=lambda x: len(x))
# print(sorted_words)

                                  # Recursion
# def countdown(n):
#   if n <= 0:
#     print("Done !")
#   else:
#     print(n)
#     countdown(n - 1)
# countdown(5)

# def factorial(n):
  # if n == 0 or n == 1:                                         # Base case
    # return 1
  # else:
    # return n * factorial(n - 1)                                # Recursive case
# print(factorial(5))

# def fibonacci(n):
#   if n <= 1:
#     return 1
#   else:
#     return fibonacci(n - 1) + fibonacci(n - 2)
# print(fibonacci(7))

# def sum(n):                                                    # Recursion with List
#   if len(n) == 0:
#     return 0
#   else:
#     return n[0] + sum(n[1:])
# numbers = [1, 2, 3, 4, 5]
# print(sum(numbers))

# def find_max(n):                                                # find maximum
#   if len(n) == 1:
#     return n[0]
#   else:
#     max = find_max(n[1:])
#     return n[0] if n[0] > max else max
# numbers = [2, 3, 4, 6 , 8, 20, 10, 11, 13, 15]
# print(find_max(numbers))

# import sys                                                      # recursion limit =  1000
# print(sys.getrecursionlimit())
# sys.setrecursionlimit(2000)                                     # increase limit
# print(sys.getrecursionlimit())

# def generator_fun():                                            # generator function()
#   yield 1
#   yield 2
#   yield 3
# for value in generator_fun():
#   print(value)

# def count(n):
#   count = 1
#   while count <= n:
#     yield count
#     count = count + 1
# for num in count(5):
#   print(num)

# def larger_sequence(n):                                         # generator saves memory
#   for i in range(n):
#     yield i
# gen = larger_sequence(1000000)
# print(next(gen))
# print(next(gen))
# print(next(gen))
# print(next(gen))
# print(next(gen))

# def players():                                                  # using next() to iterate manually
#   yield "Virat"
#   yield "Rohit"
#   yield "Dhoni"
#   yield "Sachin"
# gen = players()
# print(next(gen)); print(next(gen)); print(next(gen)); print(next(gen))

# def players():                                                  # using next() to iterate manually
#   yield "Virat"
#   yield "Rohit"
#   yield "Dhoni"
# gen = players()
# print(next(gen)); print(next(gen)); print(next(gen)); print(next(gen))

# comp_list = [x * x for x in range(5)]                           # generator expression
# print(comp_list)
# gen = (x * x for x in range(5))
# print(gen)
# print(list(gen))

# total = sum(x * x for x in  range(10))
# print(total)

# def fibonacci():
#   a, b = 0, 1
#   while True:
#     yield a
#     a, b = b, a + b

# gen = fibonacci()
# for _ in range(100):
#   print(next(gen))

# def echo_generator():                                          # generator method
#   while True:
#     received = yield
#     print("Received : ", received)
# gen = echo_generator()
# next(gen)
# gen.send("Hello")                                              # send()
# gen.send("World")

# def my_gen():
#   try:
#     yield 1
#     yield 2
#     yield 3
#     yield 4
#   finally:
#     print("Generator Closed.")
# gen = my_gen()
# print(next(gen))
# print(next(gen))
# gen.close()
#---------------
                                # Range()
# x = range(10); print(x)

# for x in range(10):
#   print(x)

# print(list(range(5)))
# print(list(range(1, 6)))
# print(list(range(5, 20, 3)))

# r = list(range(10))                                       # range slicing()
# print(r[4])
# print(r)
# print(r[:6])

# r = range(0, 10, 2)                                       # membership testing
# print(4 in r)
# print(9 in r)

# r = range(0, 10)                                          # length
# r = range(0, 10, 2)
# print(list(r))
# print(len(r))
#------------------
                                    # Array
# x = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"]

# print(x[4])                                               # access of array item

# x[4] = "Kiwi"; print(x)                                   # change value

# print(len(x))                                             # length of array

# for i in x:                                               # looping - for in
#   print(i)

# x.append("Kiwi")                                          # adding in array
# print(x)

# x.pop(1)                                                  # removing in array
# print(x)
# x.remove("Banana")
# print(x)
#----------------
                              # Itrator vs Iterable
# mytuple = ("apple", "banana", "cherry", "mango")
# myit = iter(mytuple)
# print(next(myit))
# print(next(myit))
# print(next(myit))

# str = "Banana"                                            # Iterate over String
# mystr = iter(str)
# print(next(mystr))
# print(next(mystr))

# tple =  ("apple", "banana", "cherry", "mango")            # for loop to iterate through an iterable object
# for x in tple:
#   print(x)

# str = "Banana"                                            # for loop in string
# for x in str:
#   print(x)

# class Numbers:
#   def __iter__(self):
#     self.a = 1
#     return self
#   def __next__(self):
#     x = self.a
#     self.a += 1
#     return x
# obj = Numbers()
# myiter = iter(obj)
# print(next(obj)); print(next(obj))
# print(next(obj)); print(next(obj))

# class MyNumbers:                                        # raise StopIteration =>to stop iteration
#   def __iter__(self):
#     self.a = 1
#     return self
#   def __next__(self):
#     if self.a <= 20:
#       x = self.a
#       self.a += 1
#       return x
#     else:
#       raise StopIteration
# obj = MyNumbers()
# myiter = iter(obj)
# for x in myiter:
#   print(x)

#--------------------------------------------
# s = "qazwsxedcrfvtgbyhnujmikolp"
# s = list(s)
# # for A in l:
# #   print(A)
# s.sort()
# print(s)
# s = " ".join(s)
# print(s)

# s = "qazwsxedcrfvtgbyhnujmikolp"
# s = list(s)
# for i in range(len(s)):
#     for j in range(len(s) - 1 - i):
#         if s[j] > s[j + 1]:
#             temp = s[j]
#             s[j] = s[j + 1]
#             s[j + 1] = temp
# result = ""
# for ch in s:
#     result = result + ch

# print(result)
#------------------------

                                  # Classes & Objects
# class MyClass:                                          # create class
#   x = 5
# print(MyClass)

# class MyClass:
#   x = 5
# obj = MyClass()                                         # create object
# print(obj.x)

# class MyClass:                                        
#   x = 5
# obj1 = MyClass()
# obj2 = MyClass()
# obj3 = MyClass()
# print(obj1.x)
# print(obj2.x)
# print(obj3.x)

# class MyClass:                                          # pass statement
#   pass
#----------------
                                  #__init__()
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
# obj = Person("Virat", 30)
# print(obj.name)
# print(obj.age)

# class Person:                                           # w/o __init__()
#   pass
# obj = Person()
# obj.name = "Virat"
# obj.age = 30
# print(obj.name); print(obj.age)

# class Person:
#   def __init__(self, name, age = 30):                  # default values
#     self.name = name
#     self.age = age
# obj1 = Person("Virat")
# obj2 = Person("Rohit", 32)
# print(obj1.name, obj1.age)
# print(obj2.name, obj2.age)

# class Player:
#   def __init__(self, name, age, city = "Delhi", country = "India"):             # multiple parameter
#     self.name = name
#     self.age = age
#     self.city = city
#     self.country = country
# obj = Player("Virat", 30)
# print(obj.name); print(obj.age)
# print(obj.city); print(obj.country)

# class Player:
#   def __init__(self, name, age):                        # self parameter
#     self.name = name
#     self.age = age
#   def greet(self):
#     print("Hello" + self.name)
# obj = Player("Virat", 25)
# obj.greet()

# class Car:
#   def __init__(self, brand, model, year):               # Accssing properties with self
#     self.brand = brand
#     self.model = model
#     self.year = year
#   def display_info(self):
#     print(f"{self.model} - {self.brand} - {self.year}")
# obj = Car("Toyota", "Corolla", 2020)
# obj.display_info()

# class Person:
#   def __init__(self, name):                             # Calling Method  with self - method inside method
#     self.name = name
#   def greet(self):
#     return "Hello " + self.name
#   def welcome(self):
#     msg = self.greet()
#     print(msg + " Welcome")
# obj = Person("Virat")
# obj.welcome()
#----------------
                                # Class Properties
# class Person:                                                  # Class / Class Name
#     country = "India"                                          # Class property
#     def __init__(self, name):                       # __init__() => Constructor Method -- self => Current Object
#         self.name = name                                       # Instance / Attribute Property
# obj = Person("Virat")                               # Object / Instance --("Virat") =>  Argument / Values
# print(obj.name); print(obj.country)

# class Car:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
# obj = Car("Toyota", "Corolla")
# print(obj.brand)
# print(obj.model)                                     # Access Class Property

# class Player:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
# obj = Player("Virat", 30); print(obj.name)
# obj.name = "Rohit"                                   # Modify Class Property
# obj.age = 32
# print(obj.name); print(obj.age)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
# obj = Person("Virat", 30); print(obj.name); print(obj.age)
# del obj.age                                                       # Delete Class Property
# print(obj.name); print(obj.age)

# class Person:                                         # Class Property vs Instance Property
#   species = "Human"                                   # Class Property
#   def __init__(self, name):
#     self.name = name                                  # Instance Property
# obj1 = Person("Virat")
# obj2 = Person("Rohit")
# print(obj1.name); print(obj1.species)
# print(obj2.name); print(obj2.species)

# class Person:
#   lname = ""
#   def __init__(self, name):
#     self.name = name
# obj1 = Person("Virat")                                # Modifying Class Property
# obj2 = Person("Rohit")                                # It affects all objects
# Person.lname = "Kohli"
# print(obj1.lname)
# print(obj2.lname)

# class Person:
#   def __init__(self, name):
#     self.name = name
# obj = Person("Virat")
# obj.age = 25                                          # Add Class Property
# obj.city = "Delhi"
# print(obj.name); print(obj.age); print(obj.city)
#---------------
                                      # Class Methods
# class Person:
#   def __init__(self, name):
#     self.name = name
#   def greet(self):
#     print("Hello " + self.name)
# obj =Person("Virat")
# obj.greet()

# class Person:
#   country = "India"
#   @classmethod                                        # shows that it is class method
#   def show_country(cls):                              # show_country(cl) => class method
#     print(cls.country)
# Person.show_country()

# class Calculator:                                     # Methods with Parameters
#   def add(self, a, b):
#     return a + b
#   def  multiply(self, a, b):
#     return a * b
# calc = Calculator()
# print(calc.add(4, 5)); print(calc.multiply(5, 6))

# class Person:                                         # Method accessing Properties
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def get_info(self):
#     return f"{self.name} - {self.age}"
# obj = Person("Virat", 28)
# print(obj.get_info())

# class Person:                                         # Method Modifying the Property
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def celebrate_birthday(self):
#     self.age += 1
#     print(f"You are now {self.age}")
# obj = Person("Virat", 30)
# obj.celebrate_birthday()
# obj.celebrate_birthday()

# class Person:                                         # __str__() method
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __str__(self):
#     return f"{self.name}({self.age})"
# obj = Person("Virat", 30)
# print(obj)

# class Playlist:                                       # Multiple Methods
#   def __init__(self, name):
#     self.name = name
#     self.songs = []
#   def add_song(self, song):
#     self.songs.append(song)
#     print(f"Added : {song}")
#   def remove_song(self, song):
#     for song in self.songs:
#       self.songs.remove(song)
#       print(f"Removed : {song}")
#   def show_song(self):
#     print(f"Playlist : {self.name}")
#     for song in self.songs:
#       print(f" - {song}")
# obj = Playlist("Favorites")
# obj.add_song("Hello")
# obj.add_song("Hiee")
# obj.show_song()

# class Person:                                          # Delete Method
#   def __init__(self, name):
#     self.name = name
#   def greet(self):
#     print("Hello!")
# p1 = Person("Emil")
# del Person.greet
# p1.greet()                                             # This will cause an error
#--------------
                                          # Magic Methods
# class Person:
#   def __init__(self, name):                            # __init__()
#     self.name = name
#   def __str__(self):                                   # __str__()
#     return f"Person : {self.name}"
# obj = Person("Virat")
# print(obj)

# class Person:
#   def __init__(self, age):
#     self.age = age
#   def __str__(self):                                   # Error occur coz str returns string
#     return self.age
# obj = Person(30)
# print(obj)

# class Student:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def __repr__(self):                                                        # __repr__()
#         return f"Student(name='{self.name}', age={self.age})"
# obj = Student("Rahul", 20)
# print(obj)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __eq__(self, other):                                                     # __eq__()
#     return self.name == other.name and self.age == other.age
# obj1 = Person("Virat", 30)
# obj2 = Person("Virat", 30)
# print(obj1 == obj2)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __add__(self, other):                                                    # __add__()
#     return self.age + other.age
# obj1 = Person("Virat", 30)
# obj2 = Person("Rohit", 32)
# print(obj1 + obj2)

# class Team:
#   def __init__(self, players):
#     self.players = players
#   def __len__(self):                                                          # __len__()
#     return len(self.players)
# obj = Team (["Virat", "Rohit", "Dhoni", "CR7"])
# print(len(obj))

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __lt__(self, other):                                                    # __lt__()
#     return self.age < other.age
# obj1 = Person("Virat", 30)
# obj2 = Person("Rohit", 32)
# print(obj1 < obj2)

# class Team:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __lt__(self, other):
#     return self.age < other.age
# obj1 = Team("Dhoni", 32)
# obj2 = Team("Rohit", 30)
# obj3 = Team("Virat", 28)
# x = sorted([obj1, obj2, obj3])                                                # __lt__() with sort()
# print(x[0].age)

# class Team:
#   def __init__(self, players):
#     self.players = players
#   def __contains__(self, name):                                               # __contains__()
#     return name in self.players
# obj = Team(["Virat", "Rohit", "Dhoni"])
# print("Virat" in obj); print("Sachin" in obj)

# class ClickCounter:
#   def __init__(self):
#     self.clicks = 0
#   def __call__(self):                                                         # __call__()
#     self.clicks += 1
#     return self.clicks
# button_clicks = ClickCounter()
# print(button_clicks()); print(button_clicks())
# print(button_clicks()); print(button_clicks())

# class Person:
#   def __init__(self, fname, lname):                                           # inheritance()
#     self. firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
# x = Person("Virat", "Kohli")
# x.printname()

# class Person:
#   def __init__(self, fname, lname):                                 # super()
#     self.firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
# class Student(Person):
#   def __init__(self, fname, lname):
#      super().__init__(fname, lname)
# x = Student("Mike", "Olsen")
# x.printname()

# class Person:
#   def __init__(self, fname, lname):                                 # Add Properties
#     self.firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
# class Student(Person):
#   def __init__(self, fname, lname):
#     super().__init__(fname, lname)
#     self.graduationyear = 2016
# x = Student("Mike", "Olsen")
# print(x.graduationyear)

# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
# class Student(Person):
#   def __init__(self, fname, lname, year):
#     super().__init__(fname, lname)
#     self.graduationyear = year
# x = Student("Mike", "Olsen", 2016)
# print(x.graduationyear)

# class Person:
#   def __init__(self, fname, lname):                         # add method
#     self.firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
# class Student(Person):
#   def __init__(self, fname, lname, year):
#     super().__init__(fname, lname)
#     self.graduationyear = year
#   def welcome(self):
#     print("Welcome", self.firstname, self.lastname, self.graduationyear)
# x = Student("Mike", "Olsen",  2022)
# x.welcome()

# str = "Virat Kohli"                                                   # String length
# print(len(str))

# tupl = ("apple", "banana", "cherry", "mango", "kiwi")                 # Tuple length
# print(len(tupl))

# dictionary = {                                                        # Dictionary length
#   "brand" : "TATA",
#   "Model" : "Sierra",
#   "Year" : 2025,
#   "Owner" : "Virat"
# }
# print(len(dictionary))

# class Car:                                                    # Class Polymorphism
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Drive !!")
# class Boat:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Sail !!")
# class Plane:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Fly !!")
# carobj = Car("TATA", "Safari")
# boatobj = Boat("Ibiza", "Touring 20")
# planeobj = Plane("Boeing", "747")
# for x in (carobj, boatobj, planeobj):
#   x.move()

# class Vehicle:                                                  # Inheritance Class  Polymorphism
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Move !!")
# class Car(Vehicle):
#   pass
# class Boat(Vehicle):
#   def move(self):
#     print("Sail !!")
# class Plane(Vehicle):
#   def move(self):
#     print("Fly !!")
# carobj = Car("TATA", "Safari")
# boatobj = Boat("Ibiza", "Touring 20")
# planeObj = Plane("Boeing", "747")
# for x in (carobj, boatobj, planeObj):
#   print(x.brand)
#   print(x.model)
#   x.move()

# class Person:                                                       # Encapsulation
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age                                                # Private Property
# obj = Person("Virat", 30)
# print(obj.name)
# print(obj.age)                                                      # Error

# class Person:
#   def __init__(self, age):
#     self.__age = age
#   def get__age(self):                                               # Access Private Property
#     return self.__age
# obj = Person(30)
# print(obj.get__age())

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age
#   def get_age(self):
#     return self.__age
#   def set_age(self, age):                                          # set function
#     if age > 0:
#       self.__age = age
#     else:
#       print("Age must be Positive")
# obj = Person("Virat", 30)
# print(obj.get_age())
# obj.set_age(32)                                                   # set method
# print(obj.get_age())

# class Student:
#   def __init__(self, name):
#     self.name = name
#     self.grade = 0
#   def set_grade(self, grade):
#     if 0 <= grade <= 100:
#       self.__grade = grade
#     else:
#       print("Grade must be b/w 0 and 100.")
#   def get_grade(self):
#     return self.__grade
#   def get_status(self):
#     if self.__grade >= 60:
#       return "Passed"
#     else:
#       return "Failed"
# obj = Student("Emil")
# obj.set_grade(85)
# print(obj.get_grade())
# print(obj.get_status())

# class Person:
#   def __init__(self, name, salary):
#     self.name = name
#     self._salary =  salary                                # Protected Property with => _
# obj = Person("Virat", 500000)
# print(obj.name)
# print(obj._salary)

# class Calculator:
#   def __init__(self):
#     self.result = 0
#   def __validate(self, num):                              # Private method
#     if not isinstance(num, (int, float)):
#       return False
#     return True
#   def add(self, num):
#     if self.__validate(num):
#       self.result += num
#     else:
#       print("Invalid Number")
# obj = Calculator()
# obj.add(10)
# obj.add(5)
# print(obj.result)

# class Test:                                              # Private Method => hello()
#     def __hello(self):
#         print("Hello")
# obj = Test()
# obj._Test__hello()

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age                                     # Name Mangling
# obj = Person("Virat", 30)
# print(obj._Person__age)                                  # Name Mangling 

# class Outer:
#   def __init__(self):
#     self.name = "Outer Class"
#   class Inner:                                           # Inner Class accessing from Outside
#     def __init__(self):
#       self.name = "Inner Class"
#     def dislplay(self):
#       print("This is the Inner Class.")
# outer = Outer()
# print(outer.name)
# inner = Outer.Inner()
# inner.dislplay()

# class Outer:                                             # Accessing Outer Class from Inner
#   def __init__(self):
#     self.name = "Virat"
#   class Inner:
#     def __init__(self, outer):
#       self.outer = outer
#     def display(self):
#       print(f"Outer Class Name :  {self.outer.name}")
# outer = Outer()
# inner = outer.Inner(outer)
# inner.display()

# class Car:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#     self.engine = self.Engine()
#   class Engine:
#     def __init__(self):
#       self.status = "Off"
#     def start(self):
#       self.status = "Running"
#       print("Engine Started")
#     def stop(self):
#       self.status = "Off"
#       print("Engine Stopped")
#   def drive(self):
#       if self.engine.status == "Running":
#         print(f"Driving the : {self.brand} - {self.model}")
#       else:
#         print("Start the Engine first!")
# obj = Car("TATA","Safari")
# obj.drive()
# obj.engine.start()
# obj.drive()

# class Computer:                                            # Multiple Inner class accessing
#   def __init__(self):
#     self.cpu = self.CPU()
#     self.ram = self.RAM()
#   class CPU:
#     def processor(self):
#       print("Processing Data.")
#   class RAM:
#     def store(self):
#       print("Storing Data.")
# obj = Computer()
# obj.cpu.processor()
# obj.ram.store()
#--------------------------------------------------------

                                      # File Handling
# f = open("practice.py")
# print(f.read())                                           # read() => to read whole file.
# print(f.readline())                                       # readline() => to read single line
# print(f.read(20))                                         # read specific position content.
# print(f.read(20) [10:20])                                 # read between specific positions.

# print(f.readline())                                       # read number of line you want by no. of print
# print(f.readline())                                         statements.

# with open("practice.py") as f:                            # looping the lines
#   for x in f:
#     print(x)

# with open("practice.py", "a") as f:                       # "a" => Append or Add at the end of file.
#   f.write("Append at the last")
# with open("practice.py") as f:
#   print(f.read())

# with open("practice.py", "w") as f:                       # "w" => Delete all content of thst file.
#   f.write("Delete all the content and Add this line.")
# with open("practice.py") as f:
#   print(f.read())

# f = open("demo.py", "x")                                  # "x" => Create new file.

# import os
# if os.path.exists("demo.py"):                             # delete a file
#   os.remove("demo.py")
# else:
#   print("File does not exists.")

# import os
# os.rmdir("myfolder")                                      # delete folder
#------------------------------------------------------------------------------------

                                           # Modules
# import practice
# print(practice.a)

# import practice
# practice.module_function("Virat")

# import practice
# print(practice.person["age"])                         # Variables in module

# import practice as pr                                 # Re-naming module
# print(pr.person["age"])

# import platform                                       # Built-in module
# print(platform.system())

# import platform
# print(dir(platform))

# from practice import person                           # using - froms
# print(person["name"])

# import datetime
# print(datetime.datetime.now())

# import datetime
# x = datetime.datetime.now()
# print(x.year)
# print(x.strftime("%A"))                               # Friday
# print(x.strftime("%a"))                               # Fri

# import datetime                                       # creating date-time
# x = datetime.datetime(2020, 4, 25)
# print(x)

# import datetime
# x = datetime.datetime(2018, 6, 1)
# print(x.strftime("%B"))

# x = min(5, 10, 25)                                    # min()
# y = max(5, 10, 25)                                    # max()
# print(x)
# print(y)

# x = abs(-7.25)                                        # abs() => returns absolute positive value
# print(x)

# x = pow(4, 2)                                         # pow()
# print(x)

# import math
# print(math.sqrt(64))                                  # math.sqrt()

# print(math.ceil(1.4))                                 # upwords to the highest integer
# print(math.floor(1.6))                                # downwords to the highest integer

# print(math.pi)

# import json
# x =  '{ "name":"Virat", "age":30, "city":"India"}'
# print(json.loads(x)["age"])                           # JSON => Python

# x =  {
#   "name": "Virat",
#   "age": 32,
#   "country": "India"
# }
# print(json.dumps(x))                                  # Python => JSON

# print(json.dumps({"name": "John", "age": 30}))        # dict => JSON
# print(json.dumps(["apple", "bananas"]))               # list => JSON
# print(json.dumps(("apple", "bananas")))               # tuple => JSON
# print(json.dumps("hello"))                            # string => JSON
# print(json.dumps(42))                                 # integer => JSON
# print(json.dumps(31.76))                              # float => JSON
# print(json.dumps(True))                               # boolean true => JSON
# print(json.dumps(False))                              # boolean false => JSON
# print(json.dumps(None))                               # None => JSON

# import json                                           # Python => Json containing all DataTypes
# x = {
#   "name": "John",
#   "age": 30,
#   "married": True,
#   "divorced": False,
#   "children": ("Ann","Billy"),
#   "pets": None,
#   "cars": [
#     {"model": "BMW 230", "mpg": 27.5},
#     {"model": "Ford Edge", "mpg": 24.1}
#   ]
# }
# print(json.dumps(x))
# print(json.dumps(x, indent=4))                              # Format the Result with INDENT key word
# print(json.dumps(x, indent=4, separators=(". ", " = ")))
# print(json.dumps(x, indent=4, sort_keys=True))
#--------------------------------------------------
                                    # Try - Except
# x = "Virat"
# try:
#   print(x)
# except:
#   print("Error")

# try:                                                      # Many Except
#   raise ValueError("Not found")
# except ValueError as v:
#   print("x is not defined.",v)
# except NameError:
#   print("Something else went wrong.")
# except:
#   print("Something else went wrong.")

# try:                                                        # Else block executes if try executed.
#   print("Hello")
# except:
#   print("Something went wrong.")
# else:
#   print("Nothing went wrong.")

# def ExceptionFunction():                                    # Finally execute hoga hi hoga.
# 	x = 5
# 	try:
#   	  print(x); return
# 	except:
#   		print("Something went wrong")
# 	else:
#   		print("asfds")
# 	finally:
#   		print("The 'try except' is finished")
# ExceptionFunction()

# try:
#   f = open("practice.py", w)                                  # f = open("practice.py")
#   print(f)
#   try:
#     f.write("Added Words.")
#   except:
#     print("Something went wrong.")
#   finally:
#     f.close()
# except:
#   print("Something went wrong during open the File.")

# x = -4                                                        # Raise Error
# if x < 0:
#   raise Exception("X is -Ve.")

# x = "Virat"
# if not type(x) is int:
#   raise TypeError("Not an Integer.")
#----------------------------------------------------------------------

                                    # Format String
# x = f"The Pice is => 50 Rupees"
# print(x)

# price = 50
# x = f"Price is => {price:.3f} Rupees"
# print(x)

# x = f"{20 * 5}"
# print(x)

# fruit = "apples"                                          # functions in f-string
# txt = f"I love {fruit.upper()}"
# print(txt)

# def myconverter(x):
#   return x * 0.3048
# txt = f"The plane is flying at a {myconverter(30000)} meter altitude"
# print(txt)

# def myfun(x):
#   return x * 0.3048
# text = f"The plane is flying at a {myfun(30000)} meter altitude"
# print(text)

# price = 49                                              #  format string
# txt = "The price is {:.2f} dollars"
# print(txt.format(price))

# quantity = 3
# itemno = 567
# price = 49
# myorder = "I want {} pieces of item number {} for {:.2f} dollars."
# print(myorder.format(quantity, itemno, price))

# quantity = 3
# itemno = 567
# price = 49
# myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
# print(myorder.format(quantity, itemno, price))

# myorder = "I have a {carname}, it is a {model}."
# print(myorder.format(carname = "Ford", model = "Mustang"))

# result = None
# if result is None:                                                # None
#   print("No result yet")
# else:
#   print("Result is ready")

# result = None
# if result is not None:                                            # not None
#   print("No result yet")
# else:
#   print("Result is ready")s

# name = input("Enter your name:")                                  # input()
# print(f"Hello {name}")

# name = input("Enter your name:")                                  # Multiple input()
# print(f"Hello {name}")
# fav1 = input("What is your favorite animal:")
# fav2 = input("What is your favorite color:")
# fav3 = input("What is your favorite number:")
# print(f"Do you want a {fav2} {fav1} with {fav3} legs?")

# import math                                                       # input number
# x = input("Enter a number:")
# y = math.sqrt(float(x))
# print(f"The square root of {x} is {y}")

# y = True
# while y == True:
#   x = input("Enter a number:")
#   try:
#     x = float(x)
#     # y = False
#   except:
#     print("Wrong input, please try again.")
# print("Thank you!")

# import cowsay
# cowsay.cow("Good Mooooorning!")
# cowsay.cow("Hello World!")

# I recently completed my python learning journey, Now wan to move to fastapi. So your a 5 experrienced python developer and your task is to teach me fastapi from scratch to advance and he roadmap of it must be 30 days. Keep in mind I will create notes of each content and also once I got the basic crud then we need to crete a project fro hand on leaning. So let's start

# x = input("Enter Name = ", )

arr = list(input("Enter Name: ").split())
print("Good Morning", arr)