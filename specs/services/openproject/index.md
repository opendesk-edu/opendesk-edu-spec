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




#
#
 
P
u
r
p
o
s
e




P
r
o
j
e
c
t
 
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
 
p
l
a
t
f
o
r
m
 
w
i
t
h
 
a
g
i
l
e
 
b
o
a
r
d
s
,
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
t
a
s
k
 
t
r
a
c
k
i
n
g
,


t
i
m
e
l
i
n
e
 
p
l
a
n
n
i
n
g
,
 
a
n
d
 
N
e
x
t
c
l
o
u
d
 
f
i
l
e
 
s
t
o
r
e
 
i
n
t
e
g
r
a
t
i
o
n
,
 
w
i
t
h
 
S
A
M
L
 
2
.
0


a
u
t
h
e
n
t
i
c
a
t
i
o
n
 
a
n
d
 
c
o
m
p
r
e
h
e
n
s
i
v
e
 
p
r
o
j
e
c
t
 
o
v
e
r
s
i
g
h
t
.




#
#
 
S
c
o
p
e




T
h
i
s
 
s
p
e
c
 
d
e
f
i
n
e
s
:


-
 
✅
 
*
*
I
n
 
s
c
o
p
e
*
*
:
 
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
 
p
r
o
j
e
c
t
 
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
,
 
a
g
i
l
e
 
b
o
a
r
d
s
,
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
t
a
s
k
 
t
r
a
c
k
i
n
g
,
 
t
i
m
e
l
i
n
e
 
p
l
a
n
n
i
n
g
,
 
N
e
x
t
c
l
o
u
d
 
f
i
l
e
 
s
t
o
r
e
 
i
n
t
e
g
r
a
t
i
o
n
,
 
S
A
M
L
 
2
.
0
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
,
 
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
 
b
a
c
k
e
n
d
,
 
M
i
n
I
O
/
S
3
 
a
t
t
a
c
h
m
e
n
t
 
s
t
o
r
a
g
e
,
 
M
e
m
c
a
c
h
e
d
 
c
a
c
h
i
n
g


-
 
❌
 
*
*
O
u
t
 
o
f
 
s
c
o
p
e
*
*
:
 
A
I
-
a
s
s
i
s
t
e
d
 
p
r
o
j
e
c
t
 
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
 
(
e
x
t
e
r
n
a
l
 
t
o
o
l
)
,
 
r
e
s
o
u
r
c
e
 
l
e
v
e
l
i
n
g
 
a
l
g
o
r
i
t
h
m
s
 
(
m
a
n
u
a
l
 
s
c
h
e
d
u
l
i
n
g
 
o
n
l
y
)
,
 
m
u
l
t
i
-
t
e
n
a
n
t
 
S
a
a
S
 
m
o
d
e
 
(
s
i
n
g
l
e
-
o
r
g
 
o
n
l
y
)




#
#
 
N
o
n
-
G
o
a
l
s




-
 
A
I
-
a
s
s
i
s
t
e
d
 
p
r
o
j
e
c
t
 
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
 
(
e
x
t
e
r
n
a
l
 
t
o
o
l
)


-
 
R
e
s
o
u
r
c
e
 
l
e
v
e
l
i
n
g
 
a
l
g
o
r
i
t
h
m
s
 
(
m
a
n
u
a
l
 
s
c
h
e
d
u
l
i
n
g
 
o
n
l
y
)


-
 
M
u
l
t
i
-
t
e
n
a
n
t
 
S
a
a
S
 
m
o
d
e
 
(
s
i
n
g
l
e
-
o
r
g
a
n
i
z
a
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
 
o
n
l
y
)




#
#
 
A
P
I
 
C
o
n
t
r
a
c
t
s




-
 
[
K
e
y
c
l
o
a
k
 
S
A
M
L
 
2
.
0
 
S
P
-
S
S
O
]
(
.
.
/
.
.
/
i
n
t
e
g
r
a
t
i
o
n
s
/
a
p
i
-
c
o
n
t
r
a
c
t
s
/
#
c
o
n
t
r
a
c
t
-
k
e
y
c
l
o
a
k
-
s
a
m
l
-
2
0
-
s
p
-
i
n
i
t
i
a
t
e
d
-
s
s
o
)
 
—
 
S
A
M
L
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n


-
 
[
S
3
 
O
b
j
e
c
t
 
S
t
o
r
a
g
e
]
(
.
.
/
.
.
/
i
n
t
e
g
r
a
t
i
o
n
s
/
a
p
i
-
c
o
n
t
r
a
c
t
s
/
#
c
o
n
t
r
a
c
t
-
s
3
-
o
b
j
e
c
t
-
s
t
o
r
a
g
e
)
 
—
 
f
i
l
e
/
m
e
d
i
a
 
s
t
o
r
a
g
e


#
#
 
S
e
c
u
r
i
t
y
 
C
o
n
t
e
x
t




|
 
C
o
m
p
o
n
e
n
t
 
|
 
R
u
n
A
s
U
s
e
r
 
|
 
C
a
p
a
b
i
l
i
t
i
e
s
 
|
 
S
e
c
c
o
m
p
 
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
 
P
u
m
a
 
(
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
)
 
|
 
1
0
0
0
 
(
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
)
 
|
 
d
r
o
p
:
 
A
L
L
 
|
 
R
u
n
t
i
m
e
D
e
f
a
u
l
t
 
|




#
#
 
K
n
o
w
n
 
Q
u
i
r
k
s




*
*
S
A
M
L
 
a
t
t
r
i
b
u
t
e
 
m
a
p
p
i
n
g
*
*
:
 
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
 
r
e
q
u
i
r
e
s
 
s
p
e
c
i
f
i
c
 
S
A
M
L
 
a
t
t
r
i
b
u
t
e
s
 
(
`
m
a
i
l
`
,
 
`
l
o
g
i
n
`
)
.
 
I
f
 
K
e
y
c
l
o
a
k
 
d
o
e
s
 
n
o
t
 
m
a
p
 
t
h
e
s
e
 
a
t
t
r
i
b
u
t
e
s
,
 
S
A
M
L
 
l
o
g
i
n
 
f
a
i
l
s
 
w
i
t
h
 
a
 
g
e
n
e
r
i
c
 
e
r
r
o
r
.


*
*
S
e
e
d
 
j
o
b
*
*
:
 
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
 
s
e
e
d
e
r
 
j
o
b
 
c
r
e
a
t
e
s
 
i
n
i
t
i
a
l
 
d
a
t
a
 
w
i
t
h
 
s
e
t
g
i
d
.
 
C
e
p
h
F
S
 
P
V
C
 
m
u
s
t
 
s
u
p
p
o
r
t
 
s
t
i
c
k
y
 
b
i
t
 
i
n
h
e
r
i
t
a
n
c
e
 
f
o
r
 
c
o
r
r
e
c
t
 
f
i
l
e
 
p
e
r
m
i
s
s
i
o
n
s
.




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
 
*
*
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
*
*
 
(
d
a
t
a
b
a
s
e
)
:
 
S
t
o
r
e
s
 
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
 
d
a
t
a
 
i
n
c
l
u
d
i
n
g
 
p
r
o
j
e
c
t
s
,
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
u
s
e
r
s
,
 
c
o
n
f
i
g
u
r
a
t
i
o
n
s


-
 
*
*
M
e
m
c
a
c
h
e
d
*
*
 
(
c
a
c
h
i
n
g
)
:
 
P
r
o
v
i
d
e
s
 
d
i
s
t
r
i
b
u
t
e
d
 
c
a
c
h
i
n
g
 
f
o
r
 
s
e
s
s
i
o
n
 
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
 
a
n
d
 
q
u
e
r
y
 
r
e
s
u
l
t
 
c
a
c
h
i
n
g


-
 
*
*
M
i
n
I
O
/
S
3
*
*
 
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
:
 
S
t
o
r
e
s
 
f
i
l
e
 
a
t
t
a
c
h
m
e
n
t
s
 
w
i
t
h
 
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
 
a
n
d
 
r
e
t
e
n
t
i
o
n
 
p
o
l
i
c
i
e
s


-
 
*
*
N
e
x
t
c
l
o
u
d
*
*
 
(
b
o
o
t
s
t
r
a
p
 
o
n
l
y
)
:
 
V
a
l
i
d
a
t
e
s
 
a
d
m
i
n
 
a
c
c
o
u
n
t
 
e
x
i
s
t
e
n
c
e
 
f
o
r
 
c
r
o
s
s
-
a
p
p
l
i
c
a
t
i
o
n
 
f
i
l
e
 
s
t
o
r
e
 
i
n
t
e
g
r
a
t
i
o
n


-
 
*
*
S
M
T
P
 
r
e
l
a
y
*
*
 
(
e
m
a
i
l
 
n
o
t
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
:
 
S
e
n
d
s
 
p
r
o
j
e
c
t
 
n
o
t
i
f
i
c
a
t
i
o
n
s
,
 
m
e
n
t
i
o
n
s
,
 
a
n
d
 
d
e
a
d
l
i
n
e
 
r
e
m
i
n
d
e
r
s




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
 
*
*
K
e
y
c
l
o
a
k
*
*
 
(
a
u
t
h
e
n
t
i
c
a
t
i
o
n
)
:
 
U
s
e
s
 
S
A
M
L
 
2
.
0
 
f
o
r
 
u
s
e
r
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
 
a
n
d
 
a
t
t
r
i
b
u
t
e
 
m
a
p
p
i
n
g


-
 
*
*
N
e
x
t
c
l
o
u
d
*
*
 
(
f
i
l
e
 
s
t
o
r
a
g
e
)
:
 
P
r
o
v
i
d
e
s
 
s
h
a
r
e
d
 
f
i
l
e
 
s
t
o
r
e
 
f
o
r
 
p
r
o
j
e
c
t
 
a
t
t
a
c
h
m
e
n
t
s
 
v
i
a
 
O
A
u
t
h
2
 
i
n
t
e
g
r
a
t
i
o
n


-
 
*
*
P
o
s
t
f
i
x
*
*
 
(
e
m
a
i
l
 
d
e
l
i
v
e
r
y
)
:
 
R
e
l
a
y
s
 
e
m
a
i
l
 
n
o
t
i
f
i
c
a
t
i
o
n
s
 
f
o
r
 
i
n
t
e
r
n
a
l
 
u
n
i
v
e
r
s
i
t
y
 
r
e
c
i
p
i
e
n
t
s




#
#
 
R
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




#
#
#
 
R
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
:
 
P
r
o
j
e
c
t
 
a
n
d
 
w
o
r
k
 
p
a
c
k
a
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




U
s
e
r
s
 
S
H
A
L
L
 
c
r
e
a
t
e
 
p
r
o
j
e
c
t
s
,
 
m
a
n
a
g
e
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
a
s
s
i
g
n
 
t
a
s
k
s
,
 
a
n
d
 
t
r
a
c
k


p
r
o
g
r
e
s
s
 
u
s
i
n
g
 
a
g
i
l
e
 
b
o
a
r
d
s
 
a
n
d
 
t
i
m
e
l
i
n
e
 
v
i
e
w
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
U
s
e
r
 
c
r
e
a
t
e
s
 
a
 
p
r
o
j
e
c
t


-
 
G
I
V
E
N
 
a
n
 
a
u
t
h
e
n
t
i
c
a
t
e
d
 
u
s
e
r
 
w
i
t
h
 
p
r
o
j
e
c
t
 
c
r
e
a
t
i
o
n
 
p
e
r
m
i
s
s
i
o
n
s


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
r
e
a
t
e
s
 
a
 
n
e
w
 
p
r
o
j
e
c
t
 
w
i
t
h
 
n
a
m
e
,
 
t
y
p
e
 
(
e
.
g
.
,
 
"
S
o
f
t
w
a
r
e
 
D
e
v
e
l
o
p
m
e
n
t
"
)


-
 
T
H
E
N
 
t
h
e
 
p
r
o
j
e
c
t
 
i
s
 
s
t
o
r
e
d
 
i
n
 
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


-
 
A
N
D
 
t
h
e
 
u
s
e
r
 
i
s
 
s
e
t
 
a
s
 
p
r
o
j
e
c
t
 
a
d
m
i
n
i
s
t
r
a
t
o
r


-
 
A
N
D
 
t
h
e
 
u
s
e
r
 
c
a
n
 
a
d
d
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
a
n
d
 
a
s
s
i
g
n
 
t
e
a
m
 
m
e
m
b
e
r
s


-
 
A
N
D
 
d
e
f
a
u
l
t
 
a
g
i
l
e
 
b
o
a
r
d
 
i
s
 
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
 
c
o
l
u
m
n
s
 
(
B
a
c
k
l
o
g
,
 
R
e
a
d
y
,
 
I
n
 
P
r
o
g
r
e
s
s
,
 
D
o
n
e
)




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
W
o
r
k
 
p
a
c
k
a
g
e
 
c
r
e
a
t
i
o
n
 
a
n
d
 
a
s
s
i
g
n
m
e
n
t


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
i
n
 
a
 
p
r
o
j
e
c
t
 
w
i
t
h
 
w
o
r
k
 
p
a
c
k
a
g
e
 
c
r
e
a
t
i
o
n
 
p
e
r
m
i
s
s
i
o
n
s


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
r
e
a
t
e
s
 
a
 
w
o
r
k
 
p
a
c
k
a
g
e
 
w
i
t
h
 
t
y
p
e
,
 
s
u
b
j
e
c
t
,
 
d
e
s
c
r
i
p
t
i
o
n
,
 
a
s
s
i
g
n
e
e


-
 
T
H
E
N
 
t
h
e
 
w
o
r
k
 
p
a
c
k
a
g
e
 
i
s
 
s
t
o
r
e
d
 
i
n
 
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


-
 
A
N
D
 
t
h
e
 
a
s
s
i
g
n
e
e
 
r
e
c
e
i
v
e
s
 
n
o
t
i
f
i
c
a
t
i
o
n


-
 
A
N
D
 
t
h
e
 
w
o
r
k
 
p
a
c
k
a
g
e
 
a
p
p
e
a
r
s
 
o
n
 
t
h
e
 
p
r
o
j
e
c
t
 
b
o
a
r
d


-
 
A
N
D
 
s
t
a
t
u
s
 
f
i
e
l
d
 
d
e
f
a
u
l
t
s
 
t
o
 
"
N
e
w
"




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
W
o
r
k
f
l
o
w
 
s
t
a
t
u
s
 
t
r
a
n
s
i
t
i
o
n
s


-
 
G
I
V
E
N
 
a
 
w
o
r
k
 
p
a
c
k
a
g
e
 
i
n
 
"
N
e
w
"
 
s
t
a
t
u
s


-
 
W
H
E
N
 
t
h
e
 
a
s
s
i
g
n
e
e
 
c
l
i
c
k
s
 
"
S
t
a
r
t
 
W
o
r
k
"


-
 
T
H
E
N
 
t
h
e
 
w
o
r
k
 
p
a
c
k
a
g
e
 
t
r
a
n
s
i
t
i
o
n
s
 
t
o
 
"
I
n
 
P
r
o
g
r
e
s
s
"


-
 
A
N
D
 
t
h
e
 
t
i
m
e
l
i
n
e
 
u
p
d
a
t
e
s
 
w
i
t
h
 
s
t
a
r
t
 
t
i
m
e


-
 
A
N
D
 
t
h
e
 
w
o
r
k
 
p
a
c
k
a
g
e
 
m
o
v
e
s
 
f
r
o
m
 
R
e
a
d
y
 
t
o
 
I
n
 
P
r
o
g
r
e
s
s
 
c
o
l
u
m
n




#
#
#
 
R
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
:
 
S
A
M
L
 
2
.
0
 
A
u
t
h
e
n
t
i
c
a
t
i
o
n




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
 
S
H
A
L
L
 
a
u
t
h
e
n
t
i
c
a
t
e
 
u
s
e
r
s
 
v
i
a
 
S
A
M
L
 
2
.
0
S
P
 
w
i
t
h
 
K
e
y
c
l
o
a
k
.


E
x
p
e
c
t
e
d
 
t
o
 
i
n
c
l
u
d
e
 
n
e
w
 
a
d
m
i
n
 
b
o
o
t
s
t
r
a
p
 
(
o
p
e
n
i
d
-
c
o
n
f
i
g
 
i
n
t
e
g
r
a
t
i
o
n
 
w
i
t
h
 
N
e
x
t
c
l
o
u
d
)
 
t
o
 
r
e
f
l
e
c
t
 
I
n
t
e
r
c
o
m
 
p
a
t
t
e
r
n
 
f
o
r
 
f
a
i
r
 
a
l
i
g
n
m
e
n
t
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
U
s
e
r
 
l
o
g
s
 
i
n
 
v
i
a
 
S
A
M
L


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
a
c
c
e
s
s
i
n
g
 
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


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
i
s
 
r
e
d
i
r
e
c
t
e
d
 
t
o
 
K
e
y
c
l
o
a
k
 
f
o
r
 
S
A
M
L
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n


-
 
A
N
D
 
K
e
y
c
l
o
a
k
 
v
a
l
i
d
a
t
e
s
 
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
 
v
i
a
 
D
F
N
-
A
A
I
 
i
d
e
n
t
i
t
y
 
p
r
o
v
i
d
e
r


-
 
T
H
E
N
 
a
 
S
A
M
L
R
e
s
p
o
n
s
e
 
i
s
 
p
o
s
t
e
d
 
b
a
c
k
 
t
o
 
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
'
s
 
A
C
S
 
e
n
d
p
o
i
n
t


-
 
A
N
D
 
e
m
a
i
l
 
a
t
t
r
i
b
u
t
e
 
(
`
m
a
i
l
`
)
 
i
s
 
u
s
e
d
 
f
o
r
 
u
s
e
r
 
i
d
e
n
t
i
f
i
c
a
t
i
o
n


-
 
A
N
D
 
d
i
s
p
l
a
y
 
n
a
m
e
 
(
`
d
i
s
p
l
a
y
N
a
m
e
`
)
 
i
s
 
u
s
e
d
 
f
o
r
 
u
s
e
r
 
p
r
o
f
i
l
e


-
 
A
N
D
 
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
 
(
`
s
t
u
d
e
n
t
`
,
 
`
f
a
c
u
l
t
y
`
)
 
d
e
t
e
r
m
i
n
e
s
 
u
s
e
r
 
g
r
o
u
p
 
m
e
m
b
e
r
s
h
i
p




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
G
r
o
u
p
 
m
a
p
p
i
n
g
 
f
r
o
m
 
S
A
M
L
 
a
t
t
r
i
b
u
t
e
s


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
l
o
g
g
i
n
g
 
i
n
 
w
i
t
h
 
`
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
=
s
t
u
d
e
n
t
`


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
i
s
 
a
u
t
h
e
n
t
i
c
a
t
e
d


-
 
T
H
E
N
 
t
h
e
 
u
s
e
r
 
i
s
 
a
d
d
e
d
 
t
o
 
"
S
t
u
d
e
n
t
"
 
r
o
l
e
 
i
n
 
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


-
 
A
N
D
 
p
r
o
j
e
c
t
 
p
e
r
m
i
s
s
i
o
n
s
 
a
r
e
 
a
u
t
o
m
a
t
i
c
a
l
l
y
 
a
s
s
i
g
n
e
d
 
b
a
s
e
d
 
o
n
 
r
o
l
e


-
 
A
N
D
 
g
r
o
u
p
 
s
y
n
c
 
r
u
n
s
 
e
v
e
r
y
 
h
o
u
r
 
v
i
a
 
b
o
o
t
s
t
r
a
p
 
j
o
b




#
#
#
 
R
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
:
 
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
 
p
e
r
s
i
s
t
e
n
c
e




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
 
S
H
A
L
L
 
s
t
o
r
e
 
a
l
l
 
p
r
o
j
e
c
t
 
d
a
t
a
 
i
n
 
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
 
w
i
t
h
 
a
d
e
q
u
a
t
e
 
s
t
o
r
a
g
e


c
a
p
a
c
i
t
y
 
f
o
r
 
l
o
n
g
-
t
e
r
m
 
p
r
o
j
e
c
t
 
a
r
c
h
i
v
i
n
g
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
P
r
o
j
e
c
t
 
d
a
t
a
 
p
e
r
s
i
s
t
e
n
c
e


-
 
G
I
V
E
N
 
a
 
p
r
o
j
e
c
t
 
w
i
t
h
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
a
t
t
a
c
h
m
e
n
t
s
,
 
a
n
d
 
t
i
m
e
l
i
n
e


-
 
W
H
E
N
 
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
 
p
o
d
 
r
e
s
t
a
r
t
s


-
 
T
H
E
N
 
a
l
l
 
p
r
o
j
e
c
t
 
d
a
t
a
 
p
e
r
s
i
s
t
s
 
i
n
 
R
W
O
 
P
V
C


-
 
A
N
D
 
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
 
s
e
r
v
e
s
 
l
a
t
e
s
t
 
s
t
a
t
e
 
w
i
t
h
o
u
t
 
d
a
t
a
 
l
o
s
s


-
 
A
N
D
 
R
W
O
 
P
V
C
 
`
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
-
p
o
s
t
g
r
e
s
-
d
a
t
a
`
 
i
s
 
e
x
c
l
u
d
e
d
 
f
r
o
m
 
k
8
u
p
 
s
c
h
e
d
u
l
e




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
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
 
h
a
n
d
l
i
n
g


-
 
G
I
V
E
N
 
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


-
 
W
H
E
N
 
d
a
t
a
b
a
s
e
 
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
 
p
o
o
l
 
i
s
 
i
n
i
t
i
a
l
i
z
e
d


-
 
T
H
E
N
 
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
 
c
o
n
n
e
c
t
s
 
t
o
 
`
p
o
s
t
g
r
e
s
q
l
:
5
4
3
2
`
 
w
i
t
h
 
u
s
e
r
 
`
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
_
u
s
e
r
`


-
 
A
N
D
 
m
a
x
i
m
u
m
 
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
 
i
s
 
5
0
 
(
t
u
n
a
b
l
e
 
v
i
a
 
c
o
n
f
i
g
)


-
 
A
N
D
 
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
 
t
i
m
e
o
u
t
 
i
s
 
1
0
 
s
e
c
o
n
d
s




#
#
#
 
R
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
:
 
M
e
m
c
a
c
h
e
d
 
a
p
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
a
c
h
i
n
g




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
 
S
H
A
L
L
 
u
s
e
 
M
e
m
c
a
c
h
e
d
 
f
o
r
 
a
p
p
l
i
c
a
t
i
o
n
-
l
e
v
e
l
 
c
a
c
h
i
n
g
 
t
o
 
r
e
d
u
c
e


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
 
l
o
a
d
 
a
n
d
 
i
m
p
r
o
v
e
 
r
e
s
p
o
n
s
e
 
t
i
m
e
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
C
a
c
h
e
 
c
o
n
f
i
g
u
r
a
t
i
o
n


-
 
G
I
V
E
N
 
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
 
d
e
p
l
o
y
e
d
 
w
i
t
h
 
M
e
m
c
a
c
h
e
d


-
 
T
H
E
N
 
M
e
m
c
a
c
h
e
d
 
i
s
 
a
v
a
i
l
a
b
l
e
 
a
t
 
`
m
e
m
c
a
c
h
e
d
:
1
1
2
1
1
`


-
 
A
N
D
 
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
 
u
s
e
s
 
i
t
 
f
o
r
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
 
(
3
0
 
m
i
n
 
T
T
L
)


-
 
A
N
D
 
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
 
u
s
e
s
 
i
t
 
f
o
r
 
p
a
g
e
 
c
a
c
h
i
n
g
 
(
5
 
m
i
n
 
T
T
L
)


-
 
A
N
D
 
c
a
c
h
e
 
h
i
t
 
r
a
t
i
o
 
i
s
 
>
 
8
0
%
 
u
n
d
e
r
 
n
o
r
m
a
l
 
l
o
a
d




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
C
a
c
h
e
 
i
n
v
a
l
i
d
a
t
i
o
n


-
 
G
I
V
E
N
 
a
 
w
o
r
k
 
p
a
c
k
a
g
e
 
u
p
d
a
t
e
d
 
i
n
 
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


-
 
W
H
E
N
 
t
h
e
 
u
p
d
a
t
e
 
i
s
 
c
o
m
m
i
t
t
e
d


-
 
T
H
E
N
 
r
e
l
a
t
e
d
 
c
a
c
h
e
 
e
n
t
r
i
e
s
 
a
r
e
 
i
n
v
a
l
i
d
a
t
e
d


-
 
A
N
D
 
s
u
b
s
e
q
u
e
n
t
 
r
e
q
u
e
s
t
s
 
f
e
t
c
h
 
f
r
e
s
h
 
d
a
t
a
 
f
r
o
m
 
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


-
 
A
N
D
 
c
a
c
h
e
 
r
e
p
o
p
u
l
a
t
i
o
n
 
i
s
 
t
r
a
n
s
p
a
r
e
n
t
 
t
o
 
u
s
e
r
s




#
#
#
 
R
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
:
 
S
3
 
O
b
j
e
c
t
 
S
t
o
r
a
g
e
 
f
o
r
 
a
t
t
a
c
h
m
e
n
t
s




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
 
S
H
A
L
L
 
s
t
o
r
e
 
f
i
l
e
 
a
t
t
a
c
h
m
e
n
t
s
 
i
n
 
S
3
-
c
o
m
p
a
t
i
b
l
e
 
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
 
(
M
i
n
I
O
)


w
i
t
h
 
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
 
a
n
d
 
r
e
t
e
n
t
i
o
n
 
p
o
l
i
c
i
e
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
A
t
t
a
c
h
m
e
n
t
 
u
p
l
o
a
d


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
u
p
l
o
a
d
i
n
g
 
a
 
P
D
F
 
a
t
t
a
c
h
m
e
n
t
 
(
1
0
M
B
)
 
t
o
 
a
 
w
o
r
k
 
p
a
c
k
a
g
e


-
 
W
H
E
N
 
t
h
e
 
u
p
l
o
a
d
 
c
o
m
p
l
e
t
e
s


-
 
T
H
E
N
 
t
h
e
 
f
i
l
e
 
i
s
 
s
t
o
r
e
d
 
i
n
 
t
h
e
 
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
 
S
3
 
b
u
c
k
e
t
 
(
`
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
`
)


-
 
A
N
D
 
p
a
t
h
 
i
s
 
`
/
p
r
o
j
e
c
t
s
/
{
p
r
o
j
e
c
t
_
i
d
}
/
w
o
r
k
_
p
a
c
k
a
g
e
s
/
{
w
p
_
i
d
}
/
a
t
t
a
c
h
m
e
n
t
s
/
{
f
i
l
e
n
a
m
e
}
`


-
 
A
N
D
 
f
i
l
e
 
i
s
 
s
e
r
v
e
d
 
v
i
a
 
M
i
n
I
O
 
S
3
 
A
P
I


-
 
A
N
D
 
N
e
x
t
c
l
o
u
d
 
c
a
n
 
a
c
c
e
s
s
 
i
m
m
u
t
a
b
l
e
 
s
n
a
p
s
h
o
t
s
 
(
w
h
e
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
)




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
3
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n


-
 
G
I
V
E
N
 
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
 
S
3


-
 
W
H
E
N
 
a
t
t
a
c
h
m
e
n
t
s
 
a
r
e
 
u
p
l
o
a
d
e
d
/
d
o
w
n
l
o
a
d
e
d


-
 
T
H
E
N
 
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
 
a
u
t
h
e
n
t
i
c
a
t
e
s
 
v
i
a
 
`
A
W
S
_
A
C
C
E
S
S
_
K
E
Y
_
I
D
`
 
a
n
d
 
`
A
W
S
_
S
E
C
R
E
T
_
A
C
C
E
S
S
_
K
E
Y
`


-
 
A
N
D
 
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
 
a
r
e
 
s
t
o
r
e
d
 
i
n
 
`
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
-
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
`
 
s
e
c
r
e
t


-
 
A
N
D
 
S
3
 
e
n
d
p
o
i
n
t
 
i
s
 
`
h
t
t
p
:
/
/
m
i
n
i
o
:
9
0
0
0
`
 
(
c
l
u
s
t
e
r
-
l
o
c
a
l
)




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
V
e
r
s
i
o
n
 
c
o
n
t
r
o
l
 
a
n
d
 
r
e
t
e
n
t
i
o
n
 
(
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
-
o
n
l
y
 
v
i
a
 
N
e
v
e
r
 
f
o
r
 
n
o
w
)


-
 
G
i
v
e
n
 
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
 
i
s
 
r
e
q
u
i
r
e
d
 
b
u
t
 
w
i
l
l
 
n
o
t
 
b
e
 
e
n
g
a
g
e
d
 
a
t
 
t
h
i
s
 
t
i
m
e
 
(
W
o
r
k
i
n
g
 
a
s
s
u
m
p
t
i
o
n
:
 
n
o
 
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
 
f
o
r
 
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
 
i
n
 
c
u
r
r
e
n
t
 
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
s
)


-
 
W
h
i
l
e
 
f
i
l
e
 
r
e
t
e
n
t
i
o
n
 
i
s
 
e
n
f
o
r
c
e
d
 
f
o
r
 
7
 
y
e
a
r
s
 
e
x
t
e
r
n
a
l
l
y
 
(
r
e
t
e
n
t
i
o
n
 
p
o
l
i
c
y
:
 
o
u
t
 
o
f
 
s
p
e
c
 
s
c
o
p
e
 
h
e
r
e
)


-
 
M
a
r
k
 
a
s
 
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
-
o
n
l
y
 
f
o
r
 
c
u
r
r
e
n
t
 
u
s
e
.




#
#
#
 
R
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
:
 
N
e
x
t
c
l
o
u
d
 
f
i
l
e
 
s
t
o
r
e
 
i
n
t
e
g
r
a
t
i
o
n




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
 
S
H
A
L
L
 
b
o
o
t
s
t
r
a
p
 
a
d
m
i
n
 
a
c
c
o
u
n
t
 
u
s
i
n
g
 
N
e
x
t
c
l
o
u
d
 
A
P
I
 
v
3
 
a
d
m
i
n
 
p
a
s
s
w
o
r
d


f
o
r
 
c
r
o
s
s
-
a
p
p
l
i
c
a
t
i
o
n
 
f
i
l
e
 
s
t
o
r
e
 
i
n
t
e
g
r
a
t
i
o
n
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
A
d
m
i
n
 
b
o
o
t
s
t
r
a
p


-
 
G
I
V
E
N
 
a
 
f
r
e
s
h
 
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


-
 
W
H
E
N
 
t
h
e
 
b
o
o
t
s
t
r
a
p
 
j
o
b
 
r
u
n
s


-
 
T
H
E
N
 
N
e
x
t
c
l
o
u
d
 
A
P
I
 
v
3
 
`
G
E
T
 
/
o
c
s
/
v
2
.
p
h
p
/
c
l
o
u
d
/
u
s
e
r
s
/
a
d
m
i
n
`
 
v
a
l
i
d
a
t
e
s
 
a
d
m
i
n
 
e
x
i
s
t
e
n
c
e


-
 
A
N
D
 
a
d
m
i
n
 
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
 
`
s
e
c
r
e
t
.
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
n
e
x
t
c
l
o
u
d
_
p
a
s
s
w
o
r
d
`


-
 
A
N
D
 
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
 
a
d
m
i
n
 
i
s
 
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
 
s
a
m
e
 
p
a
s
s
w
o
r
d


-
 
A
N
D
 
s
u
b
s
e
q
u
e
n
t
 
N
e
x
t
c
l
o
u
d
 
i
n
t
e
g
r
a
t
i
o
n
 
(
R
S
p
e
c
 
v
i
a
 
p
r
e
-
a
p
p
r
o
v
e
)
 
c
a
n
 
f
u
n
c
t
i
o
n




#
#
#
 
R
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
:
 
S
M
T
P
 
e
m
a
i
l
 
n
o
t
i
f
i
c
a
t
i
o
n
s




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
 
S
H
A
L
L
 
s
e
n
d
 
e
m
a
i
l
 
n
o
t
i
f
i
c
a
t
i
o
n
s
 
f
o
r
 
w
o
r
k
 
p
a
c
k
a
g
e
 
u
p
d
a
t
e
s
,
 
m
e
n
t
i
o
n
s
,


a
n
d
 
d
e
a
d
l
i
n
e
 
r
e
m
i
n
d
e
r
s
 
v
i
a
 
S
M
T
P
 
r
e
l
a
y
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
N
o
t
i
f
i
c
a
t
i
o
n
 
d
e
l
i
v
e
r
y


-
 
G
I
V
E
N
 
a
 
w
o
r
k
 
p
a
c
k
a
g
e
 
a
s
s
i
g
n
e
d
 
t
o
 
u
s
e
r
1


-
 
W
H
E
N
 
u
s
e
r
2
 
u
p
d
a
t
e
s
 
t
h
e
 
w
o
r
k
 
p
a
c
k
a
g
e


-
 
T
H
E
N
 
u
s
e
r
1
 
r
e
c
e
i
v
e
s
 
e
m
a
i
l
 
n
o
t
i
f
i
c
a
t
i
o
n


-
 
A
N
D
 
e
m
a
i
l
 
i
s
 
s
e
n
t
 
v
i
a
 
P
o
s
t
f
i
x
 
S
M
T
P
 
r
e
l
a
y
 
(
`
p
o
s
t
f
i
x
:
5
8
7
`
 
S
T
A
R
T
T
L
S
)


-
 
A
N
D
 
F
r
o
m
 
a
d
d
r
e
s
s
 
i
s
 
`
n
o
r
e
p
l
y
@
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
e
d
u
`


-
 
A
N
D
 
e
m
a
i
l
s
 
f
o
r
 
`
*
@
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
e
d
u
`
 
a
r
e
 
d
e
l
i
v
e
r
e
d
 
b
y
 
l
o
c
a
l
 
r
e
l
a
y




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
M
T
P
 
r
e
l
a
y
 
h
a
n
d
l
i
n
g


-
 
G
i
v
e
n
 
o
u
t
b
o
u
n
d
 
e
m
a
i
l
 
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
 
r
e
c
i
p
i
e
n
t
s
 
(
`
*
@
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
e
d
u
`
)


-
 
W
h
e
n
 
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
 
s
e
n
d
s
 
n
o
t
i
f
i
c
a
t
i
o
n


-
 
T
h
e
n
 
e
m
a
i
l
 
i
s
 
r
e
l
a
y
e
d
 
v
i
a
 
P
o
s
t
f
i
x
 
l
o
c
a
l
 
r
e
l
a
y
 
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
m
a
i
l
`


-
 
A
n
d
 
e
x
t
e
r
n
a
l
 
r
e
c
i
p
i
e
n
t
s
 
u
s
e
 
t
h
e
 
i
n
b
o
u
n
d
 
r
e
l
a
y
 
a
t
 
`
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`




#
#
#
 
R
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
:
 
H
e
a
l
t
h
 
a
n
d
 
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
 
S
H
A
L
L
 
b
e
 
h
e
a
l
t
h
y
 
a
n
d
 
m
o
n
i
t
o
r
a
b
l
e
 
w
i
t
h
 
h
e
a
l
t
h
 
e
n
d
p
o
i
n
t
s
 
a
n
d
 
m
e
t
r
i
c
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
H
e
a
l
t
h
 
c
h
e
c
k
s


-
 
G
I
V
E
N
 
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


-
 
W
H
E
N
 
t
h
e
 
c
o
n
t
a
i
n
e
r
 
r
e
s
p
o
n
d
s
 
o
n
 
H
T
T
P
 
p
o
r
t
 
8
0
8
0
 
(
h
e
a
l
t
h
 
c
h
e
c
k
)
 
a
n
d
 
`
a
p
i
/
v
3
/
s
t
a
t
u
s
`
 
(
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
)


-
 
T
H
E
N
 
t
h
e
 
p
o
d
 
i
s
 
m
a
r
k
e
d
 
h
e
a
l
t
h
y


-
 
A
N
D
 
h
e
a
l
t
h
 
e
n
d
p
o
i
n
t
 
r
e
t
u
r
n
s
 
`
{
"
s
t
a
t
u
s
"
:
"
o
k
"
}
`
 
w
h
e
n
 
d
a
t
a
b
a
s
e
 
a
n
d
 
S
3
 
a
r
e
 
r
e
a
c
h
a
b
l
e


-
 
A
N
D
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
 
v
a
l
i
d
a
t
e
s
 
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
 
a
n
d
 
M
e
m
c
a
c
h
e
d
 
c
o
n
n
e
c
t
i
v
i
t
y




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
M
e
t
r
i
c
s
 
a
n
d
 
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


-
 
G
I
V
E
N
 
P
r
o
m
e
t
h
e
u
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
 
s
c
r
a
p
i
n
g


-
 
W
H
E
N
 
P
r
o
m
e
t
h
e
u
s
 
s
c
r
a
p
e
s
 
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
 
m
e
t
r
i
c
s


-
 
T
H
E
N
 
m
e
t
r
i
c
s
 
i
n
c
l
u
d
e
 
w
o
r
k
 
p
a
c
k
a
g
e
 
c
r
e
a
t
i
o
n
 
r
a
t
e
,
 
c
a
c
h
e
 
h
i
t
 
r
a
t
e
,
 
d
a
t
a
b
a
s
e
 
l
a
t
e
n
c
y


-
 
A
n
d
 
A
l
e
r
t
M
a
n
a
g
e
r
 
s
e
n
d
s
 
a
l
e
r
t
s
 
w
h
e
n
 
w
o
r
k
 
p
a
c
k
a
g
e
 
c
r
e
a
t
i
o
n
 
r
a
t
e
 
d
r
o
p
s
 
b
e
l
o
w
 
t
h
r
e
s
h
o
l
d


-
 
O
r
 
M
e
t
r
i
c
s
 
i
n
c
l
u
d
e
 
d
a
i
l
y
 
(
o
r
 
o
t
h
e
r
)
 
a
g
g
r
e
g
a
t
e
d
 
c
o
u
n
t
s
 
(
s
t
o
r
e
d
 
v
i
a
 
P
r
o
m
e
t
h
e
u
s
,
 
e
n
a
b
l
i
n
g
 
v
i
s
u
a
l
i
z
a
t
i
o
n
)




#
#
#
 
R
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
:
 
C
a
p
a
c
i
t
y
 
p
l
a
n
n
i
n
g
 
a
n
d
 
s
i
z
i
n
g




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
 
S
H
A
L
L
 
s
u
p
p
o
r
t
 
c
a
p
a
c
i
t
y
 
p
l
a
n
n
i
n
g
 
w
i
t
h
 
r
e
s
o
u
r
c
e
 
d
e
f
a
u
l
t
s
 
f
o
r
 
t
y
p
i
c
a
l


u
n
i
v
e
r
s
i
t
y
 
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
 
s
e
t
t
i
n
g
s
.




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
M
e
m
o
r
y
 
a
n
d
 
C
P
U
 
d
e
f
a
u
l
t
s
 
(
b
a
s
e
l
i
n
e
)


-
 
G
i
v
e
n
 
a
 
m
e
d
i
u
m
 
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
 
(
5
0
0
 
u
s
e
r
s
)


-
 
A
n
d
 
t
y
p
i
c
a
l
 
l
o
a
d
 
(
5
0
 
c
o
n
c
u
r
r
e
n
t
 
r
e
q
u
e
s
t
s
/
s
e
c
)


-
 
R
e
c
o
m
m
e
n
d
e
d
 
m
e
m
o
r
y
:
 
4
 
G
i
B
 
(
o
r
 
a
c
t
u
a
l
 
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
 
s
p
e
c
:
 
2
 
G
i
B
 
a
p
p
,
 
4
 
G
i
B
 
D
B
;
 
8
 
G
i
B
 
a
p
p
,
 
8
 
G
i
B
 
D
B
)


-
 
R
e
c
o
m
m
e
n
d
e
d
 
C
P
U
:
 
4
 
c
o
r
e
s
 
(
o
r
 
a
c
t
u
a
l
 
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
 
s
p
e
c
:
 
2
 
c
o
r
e
s
 
a
p
p
,
 
4
 
c
o
r
e
s
 
D
B
;
 
4
 
c
o
r
e
s
 
a
p
p
,
 
4
 
c
o
r
e
s
 
D
B
)


-
 
S
t
o
r
a
g
e
:
 
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
 
R
W
O
 
P
V
C
 
(
3
0
 
G
i
B
 
i
n
c
r
e
m
e
n
t
a
l
 
g
r
o
w
t
h
)
 
+
 
S
3
 
(
n
o
 
l
i
m
i
t
;
 
b
u
c
k
e
t
 
l
i
f
e
c
y
c
l
e
:
 
7
 
y
e
a
r
s
 
r
e
t
e
n
t
i
o
n
)




#
#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
t
o
r
a
g
e
 
g
r
o
w
t
h
 
p
r
o
j
e
c
t
i
o
n


-
 
G
i
v
e
n
 
5
0
0
 
p
r
o
j
e
c
t
s
 
p
e
r
 
s
e
m
e
s
t
e
r
,
 
a
v
e
r
a
g
i
n
g
 
5
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
p
e
r
 
p
r
o
j
e
c
t


-
 
W
i
t
h
 
1
0
0
 
K
B
 
p
e
r
 
w
o
r
k
 
p
a
c
k
a
g
e
 
(
t
e
x
t
 
+
 
s
m
a
l
l
 
a
t
t
a
c
h
m
e
n
t
s
)


-
 
E
s
t
i
m
a
t
e
d
 
s
e
m
e
s
t
e
r
 
g
r
o
w
t
h
:
 
2
5
0
 
M
B
 
(
p
r
o
j
e
c
t
s
)
 
+
 
5
 
G
B
 
a
t
t
a
c
h
m
e
n
t
s
 
m
i
n
 
(
S
3
 
b
u
c
k
e
t
)


-
 
A
n
n
u
a
l
 
g
r
o
w
t
h
:
 
2
 
G
B
 
(
p
r
o
j
e
c
t
s
)
 
+
 
2
0
 
G
B
 
a
t
t
a
c
h
m
e
n
t
s
 
m
i
n
 
(
S
3
 
b
u
c
k
e
t
)


-
 
R
e
c
o
m
m
e
n
d
e
d
 
P
V
C
 
s
i
z
e
 
i
n
c
r
e
m
e
n
t
s
:
 
1
0
 
G
B
 
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
 
p
e
r
 
y
e
a
r
 
(
a
c
t
u
a
l
:
 
3
0
 
G
i
B
 
b
a
s
e
l
i
n
e
)


-
 
R
e
c
o
m
m
e
n
d
e
d
 
S
3
 
b
u
c
k
e
t
 
q
u
o
t
a
:
 
1
0
0
 
G
B
 
(
c
a
n
 
s
c
a
l
e
 
w
i
t
h
 
M
i
n
I
O
)






#
#
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e




|
 
P
r
o
p
e
r
t
y
 
|
 
V
a
l
u
e
 
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
|


|
 
C
h
a
r
t
 
|
 
U
p
s
t
r
e
a
m
 
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
 
(
O
C
I
 
r
e
g
i
s
t
r
y
:
 
`
o
p
e
n
c
o
d
e
.
d
e
`
)


|
 
D
a
t
a
b
a
s
e
 
|
 
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
`
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
`
 
D
B
,
 
`
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
_
u
s
e
r
`
)
 
|


|
 
S
t
o
r
a
g
e
 
|
 
R
W
O
 
P
V
C
 
(
`
p
o
s
t
g
r
e
s
-
d
a
t
a
`
 
3
0
G
i
)
 
+
 
S
3
 
(
`
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
-
u
p
l
o
a
d
s
`
 
b
u
c
k
e
t
)
 
|


|
 
C
a
c
h
e
 
|
 
R
e
d
i
s
 
(
`
c
a
c
h
e
.
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
h
o
s
t
:
p
o
r
t
`
)
 
|


|
 
L
i
c
e
n
s
e
 
|
 
G
P
L
-
3
.
0
 
|


|
 
C
o
n
f
i
g
 
|
 
`
`
h
e
l
m
f
i
l
e
/
a
p
p
s
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
/
v
a
l
u
e
s
.
y
a
m
l
.
g
o
t
m
p
l
`
`
 
|


|
 
I
m
a
g
e
 
|
 
U
p
s
t
r
e
a
m
 
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
 
(
O
C
I
 
r
e
g
i
s
t
r
y
)
 
|


|
 
R
e
p
l
i
c
a
s
 
|
 
2
 
(
d
e
f
a
u
l
t
)
 
|




#
#
 
S
L
O




*
*
T
i
e
r
*
*
:
 
H
i
g
h
 
(
i
m
p
o
r
t
a
n
t
 
f
o
r
 
p
r
o
j
e
c
t
 
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
,
 
c
a
n
 
d
e
g
r
a
d
e
 
g
r
a
c
e
f
u
l
l
y
)




|
 
M
e
t
r
i
c
 
|
 
T
a
r
g
e
t
 
|
 
M
e
a
s
u
r
e
m
e
n
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
|
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


|
 
*
*
A
v
a
i
l
a
b
i
l
i
t
y
*
*
 
|
 
9
9
.
5
%
 
(
3
.
6
 
h
o
u
r
s
 
d
o
w
n
t
i
m
e
/
m
o
n
t
h
 
m
a
x
)
 
|
 
U
p
t
i
m
e
 
o
v
e
r
 
3
0
-
d
a
y
 
w
i
n
d
o
w
 
|


|
 
*
*
L
a
t
e
n
c
y
 
(
P
9
5
)
*
*
 
|
 
<
5
0
0
m
s
 
(
p
a
g
e
 
l
o
a
d
)
 
|
 
N
g
i
n
x
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|


|
 
*
*
L
a
t
e
n
c
y
 
(
P
9
5
)
*
*
 
|
 
<
1
s
 
(
w
o
r
k
 
p
a
c
k
a
g
e
 
u
p
d
a
t
e
)
 
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
 
A
P
I
 
r
e
s
p
o
n
s
e
 
m
e
t
r
i
c
s
 
|


|
 
*
*
E
r
r
o
r
 
R
a
t
e
*
*
 
|
 
<
0
.
5
%
 
(
H
T
T
P
 
5
x
x
)
 
|
 
N
g
i
n
x
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|


|
 
*
*
C
a
c
h
e
 
H
i
t
 
R
a
t
e
*
*
 
|
 
>
8
0
%
 
(
M
e
m
c
a
c
h
e
d
)
 
|
 
M
e
m
c
a
c
h
e
d
 
m
e
t
r
i
c
s
 
|




*
*
A
l
e
r
t
s
*
*
:


-
 
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
 
5
x
x
 
e
r
r
o
r
 
r
a
t
e
 
>
1
%
 
f
o
r
 
1
0
 
m
i
n
u
t
e
s
 
→
 
P
2
 
a
l
e
r
t


-
 
D
a
t
a
b
a
s
e
 
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
 
p
o
o
l
 
e
x
h
a
u
s
t
e
d
 
→
 
P
2
 
a
l
e
r
t


-
 
M
e
m
c
a
c
h
e
d
 
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
 
f
a
i
l
u
r
e
s
 
>
3
 
i
n
 
5
 
m
i
n
u
t
e
s
 
→
 
P
2
 
a
l
e
r
t


-
 
S
A
M
L
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
 
f
a
i
l
u
r
e
s
 
>
5
%
 
f
o
r
 
5
 
m
i
n
u
t
e
s
 
→
 
P
1
 
a
l
e
r
t


-
 
S
3
 
a
t
t
a
c
h
m
e
n
t
 
u
p
l
o
a
d
 
f
a
i
l
u
r
e
s
 
>
2
%
 
f
o
r
 
1
0
 
m
i
n
u
t
e
s
 
→
 
P
3
 
a
l
e
r
t




*
*
C
a
p
a
c
i
t
y
*
*
:


-
 
2
,
0
0
0
 
c
o
n
c
u
r
r
e
n
t
 
u
s
e
r
s


-
 
1
0
,
0
0
0
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
c
r
e
a
t
e
d
 
p
e
r
 
m
o
n
t
h
 
(
t
y
p
i
c
a
l
)


-
 
5
,
0
0
0
 
A
P
I
 
r
e
q
u
e
s
t
s
 
p
e
r
 
m
i
n
u
t
e
 
(
p
e
a
k
)


-
 
D
a
t
a
b
a
s
e
:
 
1
0
 
G
B
 
(
t
y
p
i
c
a
l
)
,
 
1
0
0
 
G
B
 
(
l
a
r
g
e
 
i
n
s
t
i
t
u
t
i
o
n
)


-
 
S
3
 
a
t
t
a
c
h
m
e
n
t
s
:
 
1
 
T
B
 
(
t
y
p
i
c
a
l
)
,
 
1
0
 
T
B
 
(
l
a
r
g
e
 
i
n
s
t
i
t
u
t
i
o
n
)




#
#
 
D
i
s
a
s
t
e
r
 
R
e
c
o
v
e
r
y




*
*
T
i
e
r
*
*
:
 
H
i
g
h
 
(
R
P
O
:
 
1
 
h
o
u
r
,
 
R
T
O
:
 
4
 
h
o
u
r
s
)




*
*
B
a
c
k
u
p
 
S
t
r
a
t
e
g
y
*
*
:


-
 
*
*
D
a
t
a
b
a
s
e
*
*
 
(
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
)
:
 
H
o
u
r
l
y
 
i
n
c
r
e
m
e
n
t
a
l
 
+
 
d
a
i
l
y
 
f
u
l
l
 
b
a
c
k
u
p
,
 
P
I
T
R
 
e
n
a
b
l
e
d


-
 
*
*
S
3
 
a
t
t
a
c
h
m
e
n
t
s
*
*
:
 
D
a
i
l
y
 
s
n
a
p
s
h
o
t
,
 
3
0
-
d
a
y
 
r
e
t
e
n
t
i
o
n


-
 
*
*
M
e
m
c
a
c
h
e
d
 
s
t
a
t
e
*
*
:
 
S
t
a
t
e
l
e
s
s
 
(
n
o
 
b
a
c
k
u
p
 
n
e
e
d
e
d
)


-
 
*
*
C
o
n
f
i
g
u
r
a
t
i
o
n
*
*
:
 
G
i
t
O
p
s
-
m
a
n
a
g
e
d




*
*
R
e
c
o
v
e
r
y
 
O
r
d
e
r
*
*
:


1
.
 
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
 
d
a
t
a
b
a
s
e
 
r
e
s
t
o
r
e
 
-
 
2
0
 
m
i
n


2
.
 
S
3
 
a
t
t
a
c
h
m
e
n
t
 
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
 
-
 
1
5
 
m
i
n


3
.
 
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
 
a
p
p
l
i
c
a
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
 
-
 
1
5
 
m
i
n


4
.
 
M
e
m
c
a
c
h
e
d
 
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
 
-
 
5
 
m
i
n


5
.
 
S
A
M
L
 
S
P
 
c
o
n
f
i
g
u
r
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
c
a
t
i
o
n
 
-
 
5
 
m
i
n


6
.
 
N
e
x
t
c
l
o
u
d
 
i
n
t
e
g
r
a
t
i
o
n
 
t
e
s
t
 
-
 
5
 
m
i
n


7
.
 
S
M
T
P
 
r
e
l
a
y
 
c
o
n
f
i
g
u
r
a
t
i
o
n
 
t
e
s
t
 
-
 
5
 
m
i
n


8
.
 
S
m
o
k
e
 
t
e
s
t
s
 
(
l
o
g
i
n
,
 
p
r
o
j
e
c
t
 
c
r
e
a
t
i
o
n
,
 
w
o
r
k
 
p
a
c
k
a
g
e
 
u
p
d
a
t
e
)
 
-
 
1
0
 
m
i
n


9
.
 
U
s
e
r
 
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
o
r
a
t
i
o
n
 
-
 
1
5
 
m
i
n




*
*
C
r
i
t
i
c
a
l
 
D
a
t
a
*
*
:


-
 
P
r
o
j
e
c
t
s
,
 
w
o
r
k
 
p
a
c
k
a
g
e
s
,
 
a
n
d
 
t
i
m
e
l
i
n
e
s


-
 
U
s
e
r
 
a
s
s
i
g
n
m
e
n
t
s
 
a
n
d
 
p
e
r
m
i
s
s
i
o
n
s


-
 
F
i
l
e
 
a
t
t
a
c
h
m
e
n
t
s
 
(
S
3
)


-
 
C
o
m
m
e
n
t
s
 
a
n
d
 
a
c
t
i
v
i
t
y
 
l
o
g
s


-
 
C
u
s
t
o
m
 
f
i
e
l
d
s
 
a
n
d
 
w
o
r
k
f
l
o
w
s




*
*
F
a
i
l
u
r
e
 
S
c
e
n
a
r
i
o
s
*
*
:


-
 
*
*
D
a
t
a
b
a
s
e
 
c
o
r
r
u
p
t
i
o
n
*
*
:
 
R
e
s
t
o
r
e
 
f
r
o
m
 
P
I
T
R
,
 
v
e
r
i
f
y
 
p
r
o
j
e
c
t
 
d
a
t
a
 
i
n
t
e
g
r
i
t
y


-
 
*
*
S
3
 
a
t
t
a
c
h
m
e
n
t
 
l
o
s
s
*
*
:
 
R
e
s
t
o
r
e
 
f
r
o
m
 
s
n
a
p
s
h
o
t
,
 
v
e
r
i
f
y
 
c
h
e
c
k
s
u
m
s


-
 
*
*
S
A
M
L
 
m
i
s
c
o
n
f
i
g
u
r
a
t
i
o
n
*
*
:
 
R
e
-
r
e
g
i
s
t
e
r
 
S
P
 
i
n
 
K
e
y
c
l
o
a
k
,
 
v
e
r
i
f
y
 
S
S
O
 
f
l
o
w


-
 
*
*
C
o
m
p
l
e
t
e
 
f
a
i
l
u
r
e
*
*
:
 
R
e
d
e
p
l
o
y
 
f
r
o
m
 
G
i
t
O
p
s
,
 
r
e
s
t
o
r
e
 
D
B
 
+
 
a
t
t
a
c
h
m
e
n
t
s
,
 
r
e
-
r
e
g
i
s
t
e
r
 
S
A
M
L
 
S
P



