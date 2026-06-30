<
!
-
-


S
P
D
X
-
F
i
l
e
C
o
p
y
r
i
g
h
t
T
e
x
t
:
 
2
0
2
6
 
o
p
e
n
D
e
s
k
 
E
d
u
 
C
o
n
t
r
i
b
u
t
o
r
s


S
P
D
X
-
L
i
c
e
n
s
e
-
I
d
e
n
t
i
f
i
e
r
:
 
A
p
a
c
h
e
-
2
.
0


-
-
>




#
 
C
o
m
p
l
i
a
n
c
e
 
C
h
e
c
k
l
i
s
t
s




P
r
e
-
d
e
p
l
o
y
m
e
n
t
 
a
n
d
 
p
e
r
i
o
d
i
c
 
c
o
m
p
l
i
a
n
c
e
 
v
e
r
i
f
i
c
a
t
i
o
n
 
c
h
e
c
k
l
i
s
t
s
 
f
o
r
 
c
r
i
t
i
c
a
l


p
l
a
t
f
o
r
m
 
s
e
r
v
i
c
e
s
.
 
E
a
c
h
 
c
h
e
c
k
l
i
s
t
 
m
a
p
s
 
t
o
 
s
p
e
c
i
f
i
c
 
s
p
e
c
 
r
e
q
u
i
r
e
m
e
n
t
s
 
a
n
d


M
U
S
T
 
b
e
 
c
o
m
p
l
e
t
e
d
 
b
e
f
o
r
e
 
p
r
o
d
u
c
t
i
o
n
 
d
e
p
l
o
y
m
e
n
t
 
a
n
d
 
a
f
t
e
r
 
e
a
c
h
 
u
p
g
r
a
d
e
.




#
#
 
K
e
y
c
l
o
a
k
 
(
O
I
D
C
/
S
A
M
L
 
I
d
P
)




#
#
#
 
P
r
e
-
D
e
p
l
o
y
m
e
n
t
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
R
e
a
l
m
 
`
o
p
e
n
d
e
s
k
`
 
c
r
e
a
t
e
d
 
w
i
t
h
 
r
e
q
u
i
r
e
d
 
c
l
i
e
n
t
 
s
c
o
p
e
s


-
 
[
 
]
 
A
l
l
 
1
9
 
O
I
D
C
/
S
A
M
L
 
c
l
i
e
n
t
s
 
r
e
g
i
s
t
e
r
e
d
 
w
i
t
h
 
c
o
r
r
e
c
t
 
r
e
d
i
r
e
c
t
 
U
R
I
s


-
 
[
 
]
 
C
l
i
e
n
t
 
s
e
c
r
e
t
s
 
s
t
o
r
e
d
 
i
n
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s
 
(
N
O
T
 
i
n
 
v
a
l
u
e
s
 
f
i
l
e
s
)


-
 
[
 
]
 
B
r
u
t
e
-
f
o
r
c
e
 
p
r
o
t
e
c
t
i
o
n
 
e
n
a
b
l
e
d
 
(
N
E
V
E
R
 
d
i
s
a
b
l
e
d
 
i
n
 
p
r
o
d
u
c
t
i
o
n
)


-
 
[
 
]
 
L
D
A
P
 
u
s
e
r
 
f
e
d
e
r
a
t
i
o
n
 
c
o
n
f
i
g
u
r
e
d
 
(
s
y
n
c
 
f
r
o
m
 
O
p
e
n
L
D
A
P
)


-
 
[
 
]
 
S
e
s
s
i
o
n
 
t
i
m
e
o
u
t
 
c
o
n
f
i
g
u
r
e
d
 
(
d
e
f
a
u
l
t
 
3
0
 
m
i
n
u
t
e
s
)


-
 
[
 
]
 
A
d
m
i
n
 
c
o
n
s
o
l
e
 
a
c
c
e
s
s
 
r
e
s
t
r
i
c
t
e
d
 
t
o
 
i
n
t
e
r
n
a
l
 
n
e
t
w
o
r
k


-
 
[
 
]
 
H
T
T
P
S
 
e
n
f
o
r
c
e
d
 
(
n
o
 
H
T
T
P
 
a
c
c
e
s
s
 
t
o
 
a
d
m
i
n
 
c
o
n
s
o
l
e
)




#
#
#
 
P
o
s
t
-
U
p
g
r
a
d
e
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
A
l
l
 
c
l
i
e
n
t
 
s
e
c
r
e
t
s
 
s
t
i
l
l
 
m
a
t
c
h
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s


-
 
[
 
]
 
U
s
e
r
 
f
e
d
e
r
a
t
i
o
n
 
s
y
n
c
 
s
t
i
l
l
 
o
p
e
r
a
t
i
o
n
a
l


-
 
[
 
]
 
T
o
k
e
n
 
i
s
s
u
a
n
c
e
 
l
a
t
e
n
c
y
 
<
 
5
0
0
m
s
 
u
n
d
e
r
 
l
o
a
d


-
 
[
 
]
 
E
x
i
s
t
i
n
g
 
s
e
s
s
i
o
n
s
 
r
e
m
a
i
n
 
v
a
l
i
d
 
a
f
t
e
r
 
u
p
g
r
a
d
e




#
#
 
P
o
s
t
g
r
e
S
Q
L
 
(
s
h
a
r
e
d
 
d
a
t
a
b
a
s
e
 
c
l
u
s
t
e
r
)




#
#
#
 
P
r
e
-
D
e
p
l
o
y
m
e
n
t
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
T
L
S
 
b
e
t
w
e
e
n
 
c
l
i
e
n
t
 
p
o
d
s
 
a
n
d
 
P
o
s
t
g
r
e
S
Q
L
 
e
n
a
b
l
e
d


-
 
[
 
]
 
R
e
p
l
i
c
a
t
i
o
n
 
c
o
n
f
i
g
u
r
e
d
 
(
i
f
 
H
A
 
p
r
o
f
i
l
e
)


-
 
[
 
]
 
C
o
n
n
e
c
t
i
o
n
 
p
o
o
l
i
n
g
 
c
o
n
f
i
g
u
r
e
d
 
(
P
g
B
o
u
n
c
e
r
 
o
r
 
b
u
i
l
t
-
i
n
)


-
 
[
 
]
 
P
e
r
-
d
a
t
a
b
a
s
e
 
c
r
e
d
e
n
t
i
a
l
s
 
s
t
o
r
e
d
 
i
n
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s


-
 
[
 
]
 
`
m
a
x
_
c
o
n
n
e
c
t
i
o
n
s
`
 
s
e
t
 
a
p
p
r
o
p
r
i
a
t
e
l
y
 
f
o
r
 
1
1
 
s
e
r
v
i
c
e
s


-
 
[
 
]
 
A
u
t
o
m
a
t
e
d
 
b
a
c
k
u
p
s
 
c
o
n
f
i
g
u
r
e
d
 
(
k
8
u
p
 
o
r
 
p
g
_
d
u
m
p
)




#
#
#
 
P
o
s
t
-
U
p
g
r
a
d
e
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
A
l
l
 
1
1
 
s
e
r
v
i
c
e
s
 
c
a
n
 
c
o
n
n
e
c
t
 
t
o
 
t
h
e
i
r
 
d
a
t
a
b
a
s
e
s


-
 
[
 
]
 
N
o
 
o
r
p
h
a
n
 
c
o
n
n
e
c
t
i
o
n
s
 
f
r
o
m
 
p
r
e
v
i
o
u
s
 
v
e
r
s
i
o
n


-
 
[
 
]
 
R
e
p
l
i
c
a
t
i
o
n
 
l
a
g
 
<
 
1
 
s
e
c
o
n
d
 
(
i
f
 
H
A
)




#
#
 
M
a
r
i
a
D
B
 
(
s
h
a
r
e
d
 
d
a
t
a
b
a
s
e
 
c
l
u
s
t
e
r
)




#
#
#
 
P
r
e
-
D
e
p
l
o
y
m
e
n
t
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
I
L
I
A
S
 
M
a
r
i
a
D
B
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r
 
q
u
o
r
u
m
 
v
e
r
i
f
i
e
d
 
(
3
 
n
o
d
e
s
)


-
 
[
 
]
 
E
x
t
e
r
n
a
l
 
M
o
o
d
l
e
 
M
a
r
i
a
D
B
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
M
o
o
d
l
e
 
p
o
d
s


-
 
[
 
]
 
P
e
r
-
d
a
t
a
b
a
s
e
 
c
r
e
d
e
n
t
i
a
l
s
 
s
t
o
r
e
d
 
i
n
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s


-
 
[
 
]
 
T
L
S
 
b
e
t
w
e
e
n
 
c
l
i
e
n
t
 
p
o
d
s
 
a
n
d
 
M
a
r
i
a
D
B
 
e
n
a
b
l
e
d


-
 
[
 
]
 
P
a
s
s
w
o
r
d
 
s
y
n
c
h
r
o
n
i
z
a
t
i
o
n
 
v
e
r
i
f
i
e
d
 
(
H
e
l
m
-
m
a
n
a
g
e
d
 
v
s
.
 
r
u
n
n
i
n
g
 
i
n
s
t
a
n
c
e
)




#
#
#
 
P
o
s
t
-
U
p
g
r
a
d
e
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
A
l
l
 
8
 
s
e
r
v
i
c
e
s
 
c
a
n
 
c
o
n
n
e
c
t
 
t
o
 
t
h
e
i
r
 
d
a
t
a
b
a
s
e
s


-
 
[
 
]
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r
 
s
t
a
t
u
s
:
 
`
w
s
r
e
p
_
c
l
u
s
t
e
r
_
s
t
a
t
u
s
:
 
P
r
i
m
a
r
y
`


-
 
[
 
]
 
M
a
r
i
a
D
B
 
p
a
s
s
w
o
r
d
 
m
a
t
c
h
e
s
 
H
e
l
m
-
m
a
n
a
g
e
d
 
s
e
c
r
e
t
 
(
r
u
n
 
`
A
L
T
E
R
 
U
S
E
R
`
 
i
f
 
n
e
e
d
e
d
)




#
#
 
M
i
n
I
O
 
/
 
S
3
 
(
o
b
j
e
c
t
 
s
t
o
r
a
g
e
)




#
#
#
 
P
r
e
-
D
e
p
l
o
y
m
e
n
t
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
B
u
c
k
e
t
 
p
e
r
-
s
e
r
v
i
c
e
 
i
s
o
l
a
t
i
o
n
 
c
o
n
f
i
g
u
r
e
d


-
 
[
 
]
 
A
c
c
e
s
s
 
k
e
y
s
 
s
t
o
r
e
d
 
i
n
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s


-
 
[
 
]
 
L
i
f
e
c
y
c
l
e
 
p
o
l
i
c
i
e
s
 
c
o
n
f
i
g
u
r
e
d
 
f
o
r
 
t
e
m
p
o
r
a
r
y
 
u
p
l
o
a
d
s


-
 
[
 
]
 
Q
u
o
t
a
 
l
i
m
i
t
s
 
s
e
t
 
p
e
r
 
b
u
c
k
e
t
 
(
p
r
e
v
e
n
t
 
r
u
n
a
w
a
y
 
s
t
o
r
a
g
e
)




#
#
#
 
P
o
s
t
-
U
p
g
r
a
d
e
 
C
h
e
c
k
l
i
s
t




-
 
[
 
]
 
A
l
l
 
6
 
s
e
r
v
i
c
e
s
 
c
a
n
 
r
e
a
d
/
w
r
i
t
e
 
t
o
 
t
h
e
i
r
 
b
u
c
k
e
t
s


-
 
[
 
]
 
O
b
j
e
c
t
 
v
e
r
s
i
o
n
i
n
g
 
s
t
i
l
l
 
e
n
a
b
l
e
d


-
 
[
 
]
 
B
a
c
k
u
p
 
t
a
r
g
e
t
 
`
s
3
:
h
t
t
p
s
:
/
/
s
3
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
/
b
a
c
k
u
p
s
`
 
r
e
a
c
h
a
b
l
e




#
#
 
K
e
y
c
l
o
a
k
 
A
d
a
p
t
e
r
 
S
e
r
v
i
c
e
s
 
(
O
I
D
C
 
c
l
i
e
n
t
s
)




#
#
#
 
S
e
r
v
i
c
e
s
 
R
e
q
u
i
r
i
n
g
 
O
I
D
C
 
C
l
i
e
n
t
 
V
e
r
i
f
i
c
a
t
i
o
n




|
 
S
e
r
v
i
c
e
 
|
 
C
l
i
e
n
t
 
I
D
 
|
 
R
e
q
u
i
r
e
d
 
S
c
o
p
e
s
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
S
O
G
o
 
|
 
`
s
o
g
o
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|


|
 
O
p
e
n
C
l
o
u
d
 
|
 
`
o
p
e
n
d
e
s
k
-
o
p
e
n
c
l
o
u
d
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|


|
 
E
l
e
m
e
n
t
 
|
 
`
o
p
e
n
d
e
s
k
-
m
a
t
r
i
x
`
 
|
 
`
o
p
e
n
i
d
,
 
p
r
o
f
i
l
e
`
 
|


|
 
J
i
t
s
i
 
|
 
`
o
p
e
n
d
e
s
k
-
j
i
t
s
i
`
 
|
 
`
o
p
e
n
d
e
s
k
-
j
i
t
s
i
-
s
c
o
p
e
`
 
|


|
 
X
W
i
k
i
 
|
 
`
o
p
e
n
d
e
s
k
-
x
w
i
k
i
`
 
|
 
`
o
p
e
n
d
e
s
k
-
x
w
i
k
i
-
s
c
o
p
e
`
 
|


|
 
P
l
a
n
k
a
 
|
 
`
p
l
a
n
k
a
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|


|
 
E
t
h
e
r
p
a
d
 
|
 
`
o
p
e
n
d
e
s
k
-
e
t
h
e
r
p
a
d
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|


|
 
N
o
t
e
s
 
|
 
`
o
p
e
n
d
e
s
k
-
n
o
t
e
s
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|


|
 
T
Y
P
O
3
 
|
 
`
o
p
e
n
d
e
s
k
-
t
y
p
o
3
`
 
|
 
`
o
p
e
n
i
d
,
 
e
m
a
i
l
,
 
p
r
o
f
i
l
e
`
 
|




#
#
#
 
S
A
M
L
 
S
e
r
v
i
c
e
 
P
r
o
v
i
d
e
r
s




|
 
S
e
r
v
i
c
e
 
|
 
E
n
t
i
t
y
 
I
D
 
|
 
N
a
m
e
I
D
 
F
o
r
m
a
t
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
`
h
t
t
p
s
:
/
/
n
e
x
t
c
l
o
u
d
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|


|
 
O
X
 
A
p
p
S
u
i
t
e
 
|
 
`
h
t
t
p
s
:
/
/
o
x
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|


|
 
B
i
g
B
l
u
e
B
u
t
t
o
n
 
|
 
`
h
t
t
p
s
:
/
/
b
b
b
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|


|
 
I
L
I
A
S
 
|
 
`
h
t
t
p
s
:
/
/
i
l
i
a
s
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
t
r
a
n
s
i
e
n
t
`
 
|


|
 
M
o
o
d
l
e
 
|
 
`
h
t
t
p
s
:
/
/
m
o
o
d
l
e
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
t
r
a
n
s
i
e
n
t
`
 
|


|
 
B
o
o
k
S
t
a
c
k
 
|
 
`
h
t
t
p
s
:
/
/
b
o
o
k
s
t
a
c
k
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|


|
 
Z
a
m
m
a
d
 
|
 
`
h
t
t
p
s
:
/
/
z
a
m
m
a
d
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|


|
 
O
p
e
n
P
r
o
j
e
c
t
 
|
 
`
h
t
t
p
s
:
/
/
o
p
e
n
p
r
o
j
e
c
t
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
`
 
|
 
`
p
e
r
s
i
s
t
e
n
t
`
 
|




#
#
 
L
D
A
P
-
D
e
p
e
n
d
e
n
t
 
S
e
r
v
i
c
e
s




|
 
S
e
r
v
i
c
e
 
|
 
B
i
n
d
 
M
e
t
h
o
d
 
|
 
S
e
a
r
c
h
 
B
a
s
e
 
|
 
S
p
e
c
i
a
l
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
|


|
 
L
i
m
e
S
u
r
v
e
y
 
|
 
S
i
m
p
l
e
 
b
i
n
d
 
|
 
U
s
e
r
 
t
r
e
e
 
|
 
R
e
a
d
-
o
n
l
y
 
a
c
c
e
s
s
 
|


|
 
S
e
l
f
-
S
e
r
v
i
c
e
 
P
a
s
s
w
o
r
d
 
|
 
S
i
m
p
l
e
 
b
i
n
d
 
|
 
U
s
e
r
 
t
r
e
e
 
|
 
W
r
i
t
e
 
a
c
c
e
s
s
 
(
p
a
s
s
w
o
r
d
 
c
h
a
n
g
e
)
 
|


|
 
S
O
G
o
 
|
 
S
A
S
L
 
b
i
n
d
 
|
 
U
s
e
r
 
+
 
g
r
o
u
p
 
t
r
e
e
s
 
|
 
A
d
d
r
e
s
s
 
b
o
o
k
 
s
y
n
c
 
|


|
 
X
W
i
k
i
 
|
 
S
i
m
p
l
e
 
b
i
n
d
 
|
 
G
r
o
u
p
 
t
r
e
e
 
|
 
G
r
o
u
p
 
`
o
p
e
n
d
e
s
k
K
n
o
w
l
e
d
g
e
m
a
n
a
g
e
m
e
n
t
G
r
o
u
p
`
 
|


|
 
K
e
y
c
l
o
a
k
 
|
 
L
D
A
P
 
f
e
d
e
r
a
t
i
o
n
 
|
 
F
u
l
l
 
t
r
e
e
 
|
 
U
s
e
r
 
s
y
n
c
 
+
 
g
r
o
u
p
 
s
y
n
c
 
|




#
#
 
B
r
u
t
e
-
F
o
r
c
e
 
P
r
o
t
e
c
t
i
o
n
 
V
e
r
i
f
i
c
a
t
i
o
n




T
h
e
 
f
o
l
l
o
w
i
n
g
 
s
e
r
v
i
c
e
s
 
M
U
S
T
 
h
a
v
e
 
b
r
u
t
e
-
f
o
r
c
e
 
p
r
o
t
e
c
t
i
o
n
 
e
n
a
b
l
e
d
 
i
n


p
r
o
d
u
c
t
i
o
n
.
 
D
i
s
a
b
l
i
n
g
 
b
r
u
t
e
-
f
o
r
c
e
 
p
r
o
t
e
c
t
i
o
n
 
i
s
 
N
E
V
E
R
 
p
e
r
m
i
t
t
e
d
.




|
 
S
e
r
v
i
c
e
 
|
 
P
r
o
t
e
c
t
i
o
n
 
M
e
c
h
a
n
i
s
m
 
|
 
V
e
r
i
f
i
c
a
t
i
o
n
 
C
o
m
m
a
n
d
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
B
u
i
l
t
-
i
n
 
B
r
u
t
e
 
F
o
r
c
e
 
D
e
t
e
c
t
i
o
n
 
|
 
C
h
e
c
k
 
r
e
a
l
m
 
s
e
t
t
i
n
g
s
 
|


|
 
N
e
x
t
c
l
o
u
d
 
|
 
`
a
u
t
h
.
b
r
u
t
e
f
o
r
c
e
.
p
r
o
t
e
c
t
i
o
n
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`
 
|
 
O
c
c
 
w
e
b
 
U
I
 
|


|
 
O
X
 
A
p
p
S
u
i
t
e
 
|
 
B
u
i
l
t
-
i
n
 
l
o
g
i
n
 
f
a
i
l
u
r
e
 
l
o
c
k
o
u
t
 
|
 
A
d
m
i
n
 
U
I
 
|


|
 
S
O
G
o
 
|
 
F
a
i
l
2
B
a
n
 
o
r
 
e
q
u
i
v
a
l
e
n
t
 
|
 
C
h
e
c
k
 
f
a
i
l
2
b
a
n
 
s
t
a
t
u
s
 
|


|
 
E
l
e
m
e
n
t
/
S
y
n
a
p
s
e
 
|
 
`
r
c
_
l
o
g
i
n
_
a
d
d
r
e
s
s
`
 
r
a
t
e
 
l
i
m
i
t
 
|
 
S
y
n
a
p
s
e
 
c
o
n
f
i
g
 
|




#
#
 
D
e
p
e
n
d
s
 
O
n




-
 
K
e
y
c
l
o
a
k
 
(
c
l
i
e
n
t
 
r
e
g
i
s
t
r
y
)


-
 
P
o
s
t
g
r
e
S
Q
L
 
(
c
l
i
e
n
t
 
s
e
c
r
e
t
s
 
s
t
o
r
a
g
e
)


-
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
s
 
m
a
n
a
g
e
m
e
n
t




#
#
 
I
n
t
e
g
r
a
t
e
s
 
W
i
t
h




-
 
`
.
.
/
s
e
c
u
r
i
t
y
`
 
(
n
e
t
w
o
r
k
 
p
o
l
i
c
i
e
s
,
 
P
o
d
 
S
e
c
u
r
i
t
y
 
A
d
m
i
s
s
i
o
n
)


-
 
`
.
.
/
s
e
c
u
r
i
t
y
/
t
h
r
e
a
t
-
m
o
d
e
l
/
`
 
(
t
h
r
e
a
t
 
m
i
t
i
g
a
t
i
o
n
s
)


-
 
`
.
.
/
m
o
n
i
t
o
r
i
n
g
`
 
(
S
L
O
 
v
e
r
i
f
i
c
a
t
i
o
n
)


-
 
`
.
.
/
d
i
s
a
s
t
e
r
-
r
e
c
o
v
e
r
y
`
 
(
r
e
c
o
v
e
r
y
 
v
e
r
i
f
i
c
a
t
i
o
n
)


-
 
`
.
.
/
u
p
g
r
a
d
e
-
m
i
g
r
a
t
i
o
n
`
 
(
p
o
s
t
-
u
p
g
r
a
d
e
 
c
h
e
c
k
l
i
s
t
s
)

