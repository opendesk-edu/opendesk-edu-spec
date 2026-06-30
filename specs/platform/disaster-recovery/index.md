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
 
R
u
n
b
o
o
k




#
#
 
P
u
r
p
o
s
e




D
e
f
i
n
e
s
 
t
h
e
 
r
e
c
o
v
e
r
y
 
o
r
d
e
r
,
 
R
P
O
/
R
T
O
 
t
a
r
g
e
t
s
,
 
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
 
p
r
o
c
e
d
u
r
e
s
,
 
a
n
d


r
e
s
p
o
n
s
i
b
i
l
i
t
i
e
s
 
f
o
r
 
r
e
s
t
o
r
i
n
g
 
t
h
e
 
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
 
p
l
a
t
f
o
r
m
 
f
r
o
m
 
b
a
c
k
u
p
 
o
r


c
o
m
p
l
e
t
e
 
c
l
u
s
t
e
r
 
f
a
i
l
u
r
e
.
 
T
h
i
s
 
s
p
e
c
 
s
e
r
v
e
s
 
a
s
 
t
h
e
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
r
e
c
o
v
e
r
y


r
e
f
e
r
e
n
c
e
 
f
o
r
 
p
l
a
t
f
o
r
m
 
o
p
e
r
a
t
o
r
s
.




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
 
B
a
c
k
u
p
 
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
 
a
n
d
 
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
 
(
s
e
e
 
`
.
.
/
p
l
a
t
f
o
r
m
/
b
a
c
k
u
p
/
`
)


-
 
I
n
d
i
v
i
d
u
a
l
 
s
e
r
v
i
c
e
 
t
r
o
u
b
l
e
s
h
o
o
t
i
n
g
 
(
s
e
e
 
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
 
s
p
e
c
s
)


-
 
H
a
r
d
w
a
r
e
 
r
e
p
l
a
c
e
m
e
n
t
 
p
r
o
c
e
d
u
r
e
s
 
(
n
o
d
e
-
l
e
v
e
l
,
 
h
a
n
d
l
e
d
 
b
y
 
H
R
Z
 
i
n
f
r
a
s
t
r
u
c
t
u
r
e
)




-
-
-




#
#
 
R
P
O
 
/
 
R
T
O
 
T
a
r
g
e
t
s




|
 
T
i
e
r
 
|
 
S
e
r
v
i
c
e
s
 
|
 
R
P
O
 
|
 
R
T
O
 
|


|
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
|
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
|


|
 
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
*
*
 
|
 
K
e
y
c
l
o
a
k
,
 
O
p
e
n
L
D
A
P
,
 
N
u
b
u
s
 
P
o
r
t
a
l
 
|
 
1
 
h
o
u
r
 
|
 
3
0
 
m
i
n
u
t
e
s
 
|


|
 
*
*
H
i
g
h
*
*
 
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
/
O
p
e
n
C
l
o
u
d
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
,
 
M
a
r
i
a
D
B
 
|
 
2
4
 
h
o
u
r
s
 
|
 
2
 
h
o
u
r
s
 
|


|
 
*
*
M
e
d
i
u
m
*
*
 
|
 
I
L
I
A
S
,
 
M
o
o
d
l
e
,
 
B
B
B
,
 
O
X
/
S
O
G
o
,
 
E
l
e
m
e
n
t
 
|
 
2
4
 
h
o
u
r
s
 
|
 
4
 
h
o
u
r
s
 
|


|
 
*
*
L
o
w
*
*
 
|
 
C
r
y
p
t
P
a
d
,
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
,
 
N
o
t
e
s
 
|
 
7
 
d
a
y
s
 
|
 
8
 
h
o
u
r
s
 
|


|
 
*
*
I
n
f
r
a
s
t
r
u
c
t
u
r
e
*
*
 
|
 
H
A
P
r
o
x
y
 
I
n
g
r
e
s
s
,
 
C
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
,
 
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
 
|
 
N
/
A
 
|
 
1
5
 
m
i
n
u
t
e
s
 
|




-
-
-




#
#
 
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




S
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
 
b
e
 
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
 
t
h
i
s
 
e
x
a
c
t
 
o
r
d
e
r
.
 
E
a
c
h
 
p
h
a
s
e
 
d
e
p
e
n
d
s
 
o
n
 
t
h
e


p
r
e
v
i
o
u
s
 
p
h
a
s
e
 
c
o
m
p
l
e
t
i
n
g
 
s
u
c
c
e
s
s
f
u
l
l
y
.




#
#
#
 
P
h
a
s
e
 
0
:
 
I
n
f
r
a
s
t
r
u
c
t
u
r
e
 
(
R
T
O
:
 
1
5
 
m
i
n
u
t
e
s
)




1
.
 
*
*
V
e
r
i
f
y
 
n
o
d
e
 
h
e
a
l
t
h
*
*
:
 
`
k
u
b
e
c
t
l
 
g
e
t
 
n
o
d
e
s
`
 
—
 
a
l
l
 
n
o
d
e
s
 
m
u
s
t
 
b
e
 
`
R
e
a
d
y
`


2
.
 
*
*
R
e
s
t
o
r
e
 
C
e
p
h
*
*
:
 
V
e
r
i
f
y
 
C
e
p
h
 
c
l
u
s
t
e
r
 
h
e
a
l
t
h
 
(
`
c
e
p
h
 
-
s
`
)
,
 
e
n
s
u
r
e
 
R
B
D
 
a
n
d
 
C
e
p
h
F
S
 
p
o
o
l
s
 
h
e
a
l
t
h
y


3
.
 
*
*
R
e
s
t
o
r
e
 
n
e
t
w
o
r
k
i
n
g
*
*
:
 
V
e
r
i
f
y
 
H
A
P
r
o
x
y
 
I
n
g
r
e
s
s
,
 
C
o
r
e
D
N
S
,
 
C
a
l
i
c
o
/
C
i
l
i
u
m
 
C
N
I


4
.
 
*
*
R
e
s
t
o
r
e
 
C
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
*
*
:
 
V
e
r
i
f
y
 
c
l
u
s
t
e
r
 
i
s
s
u
e
r
,
 
r
e
i
s
s
u
e
 
c
e
r
t
i
f
i
c
a
t
e
s
 
i
f
 
n
e
e
d
e
d


5
.
 
*
*
V
e
r
i
f
y
 
s
t
o
r
a
g
e
 
c
l
a
s
s
e
s
*
*
:
 
`
k
u
b
e
c
t
l
 
g
e
t
 
s
c
`
 
—
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
a
n
d
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
m
u
s
t
 
e
x
i
s
t




#
#
#
 
P
h
a
s
e
 
1
:
 
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
 
(
R
T
O
:
 
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




1
.
 
*
*
R
e
s
t
o
r
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
*
*
 
(
i
f
 
d
a
t
a
 
l
o
s
t
)
:
 
`
k
u
b
e
c
t
l
 
a
p
p
l
y
`
 
t
h
e
 
S
t
a
t
e
f
u
l
S
e
t
,
 
v
e
r
i
f
y
 
p
o
d
s
 
r
u
n
n
i
n
g


 
 
 
-
 
D
B
:
 
`
n
u
b
u
s
`
,
 
`
e
l
e
m
e
n
t
`
,
 
`
b
i
g
b
l
u
e
b
u
t
t
o
n
`
,
 
`
i
l
i
a
s
`
,
 
`
m
o
o
d
l
e
`
,
 
`
e
t
h
e
r
p
a
d
`
,
 
`
p
l
a
n
k
a
`
,
 
`
z
a
m
m
a
d
`
,
 
`
x
w
i
k
i
`
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
`
,
 
`
n
e
x
t
c
l
o
u
d
`


 
 
 
-
 
N
O
T
E
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
 
P
V
C
s
 
a
r
e
 
R
W
O
 
a
n
d
 
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
 
—
 
n
e
e
d
 
C
S
I
 
s
n
a
p
s
h
o
t
s
 
o
r
 
m
a
n
u
a
l
 
p
g
_
d
u
m
p
/
p
g
_
r
e
s
t
o
r
e


2
.
 
*
*
R
e
s
t
o
r
e
 
M
a
r
i
a
D
B
*
*
 
(
i
f
 
d
a
t
a
 
l
o
s
t
)
:
 
S
a
m
e
 
p
r
o
c
e
d
u
r
e


 
 
 
-
 
D
B
:
 
`
n
e
x
t
c
l
o
u
d
`
 
(
i
f
 
M
a
r
i
a
D
B
)
,
 
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
,
 
`
s
o
g
o
`
,
 
`
b
o
o
k
s
t
a
c
k
`
,
 
`
l
i
m
e
s
u
r
v
e
y
`
,
 
`
t
y
p
o
3
`


3
.
 
*
*
R
e
s
t
o
r
e
 
R
e
d
i
s
*
*
:
 
`
k
u
b
e
c
t
l
 
a
p
p
l
y
`
 
t
h
e
 
S
t
a
t
e
f
u
l
S
e
t
,
 
v
e
r
i
f
y
 
p
o
d
s
 
r
u
n
n
i
n
g


4
.
 
*
*
R
e
s
t
o
r
e
 
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
:
 
A
p
p
l
y
 
S
t
a
t
e
f
u
l
S
e
t
,
 
v
e
r
i
f
y
 
`
u
m
s
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
0
`
 
i
s
 
r
u
n
n
i
n
g
,
 
t
e
s
t
 
l
o
g
i
n
 
a
t
 
`
/
r
e
a
l
m
s
/
o
p
e
n
d
e
s
k
`


5
.
 
*
*
R
e
s
t
o
r
e
 
O
p
e
n
L
D
A
P
*
*
:
 
A
p
p
l
y
 
S
t
a
t
e
f
u
l
S
e
t
,
 
v
e
r
i
f
y
 
`
l
d
a
p
`
 
s
e
r
v
i
c
e
 
i
s
 
r
e
a
c
h
a
b
l
e
,
 
t
e
s
t
 
b
i
n
d


6
.
 
*
*
R
e
s
t
o
r
e
 
N
u
b
u
s
 
P
o
r
t
a
l
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
p
o
r
t
a
l
 
t
i
l
e
s
 
l
o
a
d




#
#
#
 
P
h
a
s
e
 
2
:
 
C
o
r
e
 
S
e
r
v
i
c
e
s
 
(
R
T
O
:
 
2
 
h
o
u
r
s
)




1
.
 
*
*
R
e
s
t
o
r
e
 
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
:
 
A
p
p
l
y
 
S
t
a
t
e
f
u
l
S
e
t
,
 
v
e
r
i
f
y
 
b
u
c
k
e
t
s
 
e
x
i
s
t
 
a
n
d
 
a
c
c
e
s
s
i
b
l
e


2
.
 
*
*
R
e
s
t
o
r
e
 
N
e
x
t
c
l
o
u
d
 
O
R
 
O
p
e
n
C
l
o
u
d
*
*
 
(
m
u
t
u
a
l
l
y
 
e
x
c
l
u
s
i
v
e
)
:


 
 
 
-
 
A
p
p
l
y
 
A
I
O
 
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
 
+
 
N
o
t
i
f
y
 
P
u
s
h
 
+
 
E
x
p
o
r
t
e
r


 
 
 
-
 
V
e
r
i
f
y
 
S
3
 
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
 
a
n
d
 
O
I
D
C
 
a
u
t
h


 
 
 
-
 
R
u
n
 
`
o
c
c
 
s
t
a
t
u
s
`
 
t
o
 
c
o
n
f
i
r
m
 
h
e
a
l
t
h
y


3
.
 
*
*
R
e
s
t
o
r
e
 
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
 
O
R
 
S
O
G
o
*
*
 
(
m
u
t
u
a
l
l
y
 
e
x
c
l
u
s
i
v
e
)
:


 
 
 
-
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
I
M
A
P
/
S
M
T
P
/
L
D
A
P
 
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


 
 
 
-
 
T
e
s
t
 
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


4
.
 
*
*
R
e
s
t
o
r
e
 
E
l
e
m
e
n
t
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
S
y
n
a
p
s
e
 
h
o
m
e
s
e
r
v
e
r
 
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


5
.
 
*
*
R
e
s
t
o
r
e
 
X
W
i
k
i
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
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
 
a
n
d
 
L
D
A
P
 
s
y
n
c




#
#
#
 
P
h
a
s
e
 
3
:
 
E
d
u
c
a
t
i
o
n
 
S
e
r
v
i
c
e
s
 
(
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




1
.
 
*
*
R
e
s
t
o
r
e
 
I
L
I
A
S
*
*
:
 
A
p
p
l
y
 
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
 
+
 
i
n
i
t
 
c
o
n
t
a
i
n
e
r
 
+
 
S
S
O
 
c
h
e
c
k
 
c
r
o
n
j
o
b


 
 
 
-
 
V
e
r
i
f
y
 
S
h
i
b
b
o
l
e
t
h
 
S
P
 
c
o
n
f
i
g
,
 
L
u
c
e
n
e
 
R
P
C
 
s
e
r
v
e
r
,
 
d
a
t
a
b
a
s
e


2
.
 
*
*
R
e
s
t
o
r
e
 
M
o
o
d
l
e
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
S
h
i
b
b
o
l
e
t
h
 
S
P
,
 
e
x
t
e
r
n
a
l
 
M
a
r
i
a
D
B


3
.
 
*
*
R
e
s
t
o
r
e
 
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
*
*
:
 
A
p
p
l
y
 
G
r
e
e
n
l
i
g
h
t
 
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
,
 
v
e
r
i
f
y
 
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
 
+
 
B
B
B
 
b
a
c
k
e
n
d


4
.
 
*
*
R
e
s
t
o
r
e
 
E
t
h
e
r
p
a
d
*
*
:
 
A
p
p
l
y
 
S
t
a
t
e
f
u
l
S
e
t
 
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
 
+
 
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




#
#
#
 
P
h
a
s
e
 
4
:
 
S
u
p
p
o
r
t
 
S
e
r
v
i
c
e
s
 
(
R
T
O
:
 
8
 
h
o
u
r
s
)




1
.
 
*
*
R
e
s
t
o
r
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
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
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


2
.
 
*
*
R
e
s
t
o
r
e
 
Z
a
m
m
a
d
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
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


3
.
 
*
*
R
e
s
t
o
r
e
 
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
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
M
a
r
i
a
D
B


4
.
 
*
*
R
e
s
t
o
r
e
 
T
Y
P
O
3
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
M
a
r
i
a
D
B


5
.
 
*
*
R
e
s
t
o
r
e
 
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
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
L
D
A
P
 
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
 
P
h
a
s
e
 
5
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
 
S
e
r
v
i
c
e
s
 
(
R
T
O
:
 
8
 
h
o
u
r
s
)




1
.
 
*
*
R
e
s
t
o
r
e
 
C
r
y
p
t
P
a
d
*
*
:
 
A
p
p
l
y
 
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
 
(
n
o
 
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
 
b
e
y
o
n
d
 
S
3
)


2
.
 
*
*
R
e
s
t
o
r
e
 
C
o
l
l
a
b
o
r
a
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
W
O
P
I
 
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
o
 
N
e
x
t
c
l
o
u
d
/
O
p
e
n
C
l
o
u
d


3
.
 
*
*
R
e
s
t
o
r
e
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
*
*
:
 
A
p
p
l
y
 
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
s
 
(
f
u
l
l
y
 
s
t
a
t
e
l
e
s
s
)


4
.
 
*
*
R
e
s
t
o
r
e
 
N
o
t
e
s
*
*
:
 
A
p
p
l
y
 
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


5
.
 
*
*
R
e
s
t
o
r
e
 
P
l
a
n
k
a
*
*
:
 
A
p
p
l
y
 
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
,
 
v
e
r
i
f
y
 
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
-
-




#
#
 
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
h
e
c
k
l
i
s
t




A
f
t
e
r
 
e
a
c
h
 
p
h
a
s
e
,
 
r
u
n
 
t
h
e
 
c
o
r
r
e
s
p
o
n
d
i
n
g
 
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
:




#
#
#
 
P
h
a
s
e
 
0
 
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




`
`
`
b
a
s
h


#
 
A
l
l
 
n
o
d
e
s
 
R
e
a
d
y


k
u
b
e
c
t
l
 
g
e
t
 
n
o
d
e
s
 
-
o
 
w
i
d
e


#
 
C
e
p
h
 
h
e
a
l
t
h
y


c
e
p
h
 
-
s


#
 
I
n
g
r
e
s
s
 
a
c
c
e
s
s
i
b
l
e


c
u
r
l
 
-
s
k
 
h
t
t
p
s
:
/
/
l
o
c
a
l
h
o
s
t
/
h
e
a
l
t
h
z


#
 
S
t
o
r
a
g
e
 
c
l
a
s
s
e
s
 
e
x
i
s
t


k
u
b
e
c
t
l
 
g
e
t
 
s
c
 
c
e
p
h
-
r
b
d
-
s
s
d
 
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c


`
`
`




#
#
#
 
P
h
a
s
e
 
1
 
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




`
`
`
b
a
s
h


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
 
d
a
t
a
b
a
s
e
s
 
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
o
r
 
d
b
 
i
n
 
n
u
b
u
s
 
e
l
e
m
e
n
t
 
b
i
g
b
l
u
e
b
u
t
t
o
n
 
i
l
i
a
s
 
m
o
o
d
l
e
 
x
w
i
k
i
 
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
;
 
d
o


 
 
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
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
-
0
 
-
-
 
p
g
_
i
s
r
e
a
d
y
 
-
d
 
$
d
b


d
o
n
e


#
 
K
e
y
c
l
o
a
k
 
h
e
a
l
t
h


c
u
r
l
 
-
s
k
 
h
t
t
p
s
:
/
/
i
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
/
r
e
a
l
m
s
/
o
p
e
n
d
e
s
k


#
 
O
p
e
n
L
D
A
P
 
b
i
n
d


l
d
a
p
s
e
a
r
c
h
 
-
x
 
-
H
 
l
d
a
p
:
/
/
o
p
e
n
l
d
a
p
 
-
D
 
"
u
i
d
=
a
d
m
i
n
,
c
n
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
e
d
u
"
 
-
w
 
<
p
w
>
 
-
b
 
"
o
u
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
e
d
u
"
 
"
(
u
i
d
=
a
d
m
i
n
)
"


#
 
N
u
b
u
s
 
p
o
r
t
a
l


c
u
r
l
 
-
s
k
 
h
t
t
p
s
:
/
/
p
o
r
t
a
l
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
/
u
n
i
v
e
n
t
i
o
n
/
p
o
r
t
a
l
/


`
`
`




#
#
#
 
P
h
a
s
e
 
2
 
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




`
`
`
b
a
s
h


#
 
S
3
 
b
u
c
k
e
t
s
 
a
c
c
e
s
s
i
b
l
e


m
c
 
l
s
 
m
i
n
i
o
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
-
d
a
t
a


m
c
 
l
s
 
m
i
n
i
o
/
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


#
 
N
e
x
t
c
l
o
u
d
 
O
I
D
C
 
l
o
g
i
n


c
u
r
l
 
-
s
k
 
-
o
 
/
d
e
v
/
n
u
l
l
 
-
w
 
"
%
{
h
t
t
p
_
c
o
d
e
}
"
 
"
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
/
s
t
a
t
u
s
.
p
h
p
"


#
 
O
X
/
S
O
G
o
 
l
o
g
i
n
 
t
e
s
t


c
u
r
l
 
-
s
k
 
"
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
/
a
p
p
s
u
i
t
e
/
a
p
i
"
 
-
o
 
/
d
e
v
/
n
u
l
l
 
-
w
 
"
%
{
h
t
t
p
_
c
o
d
e
}
"


`
`
`




#
#
#
 
P
h
a
s
e
 
3
-
5
 
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




`
`
`
b
a
s
h


#
 
F
o
r
 
e
a
c
h
 
s
e
r
v
i
c
e
,
 
v
e
r
i
f
y
:


#
 
1
.
 
P
o
d
 
i
s
 
R
u
n
n
i
n
g
:
 
k
u
b
e
c
t
l
 
g
e
t
 
p
o
d
s
 
-
l
 
a
p
p
=
<
s
e
r
v
i
c
e
>


#
 
2
.
 
H
e
a
l
t
h
 
p
r
o
b
e
 
p
a
s
s
e
s
:
 
k
u
b
e
c
t
l
 
d
e
s
c
r
i
b
e
 
p
o
d
 
<
p
o
d
>
 
|
 
g
r
e
p
 
-
A
5
 
L
i
v
e
n
e
s
s


#
 
3
.
 
I
n
g
r
e
s
s
 
r
e
s
p
o
n
d
s
:
 
c
u
r
l
 
-
s
k
 
-
o
 
/
d
e
v
/
n
u
l
l
 
-
w
 
"
%
{
h
t
t
p
_
c
o
d
e
}
"
 
h
t
t
p
s
:
/
/
<
s
e
r
v
i
c
e
>
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
/


`
`
`




-
-
-




#
#
 
D
a
t
a
 
R
e
c
o
v
e
r
y
 
P
r
o
c
e
d
u
r
e
s




#
#
#
 
R
W
X
 
P
V
C
 
R
e
c
o
v
e
r
y
 
(
k
8
u
p
 
b
a
c
k
u
p
)




R
W
X
 
P
V
C
s
 
a
r
e
 
b
a
c
k
e
d
 
u
p
 
d
a
i
l
y
 
v
i
a
 
k
8
u
p
 
t
o
 
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
.




1
.
 
L
i
s
t
 
a
v
a
i
l
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
:
 
`
r
e
s
t
i
c
 
-
r
 
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
 
s
n
a
p
s
h
o
t
s
 
-
-
t
a
g
 
k
8
u
p
`


2
.
 
F
i
n
d
 
s
n
a
p
s
h
o
t
 
f
o
r
 
t
a
r
g
e
t
 
P
V
C
 
b
y
 
d
a
t
e
/
t
a
g


3
.
 
R
e
s
t
o
r
e
 
t
o
 
t
e
m
p
 
d
i
r
e
c
t
o
r
y
:
 
`
r
e
s
t
i
c
 
-
r
 
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
 
r
e
s
t
o
r
e
 
<
s
n
a
p
s
h
o
t
>
 
-
-
t
a
r
g
e
t
 
/
t
m
p
/
r
e
s
t
o
r
e
`


4
.
 
C
o
p
y
 
r
e
s
t
o
r
e
d
 
d
a
t
a
 
t
o
 
t
h
e
 
P
V
C
:
 
`
k
u
b
e
c
t
l
 
c
p
 
/
t
m
p
/
r
e
s
t
o
r
e
/
<
p
v
c
-
n
a
m
e
>
/
 
<
n
a
m
e
s
p
a
c
e
>
/
<
p
o
d
>
:
/
d
a
t
a
/
`




#
#
#
 
R
W
O
 
P
V
C
 
R
e
c
o
v
e
r
y
 
(
N
O
T
 
b
a
c
k
e
d
 
u
p
 
b
y
 
k
8
u
p
)




R
W
O
 
P
V
C
s
 
(
d
a
t
a
b
a
s
e
s
,
 
s
t
a
t
e
f
u
l
 
a
p
p
s
)
 
a
r
e
 
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
.
 
R
e
c
o
v
e
r
y
 
o
p
t
i
o
n
s
:




1
.
 
*
*
C
S
I
 
S
n
a
p
s
h
o
t
s
*
*
:
 
I
f
 
C
e
p
h
 
R
B
D
 
s
n
a
p
s
h
o
t
s
 
a
r
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
,
 
r
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
 
C
S
I
 
s
n
a
p
s
h
o
t


2
.
 
*
*
p
g
_
d
u
m
p
 
/
 
m
y
s
q
l
d
u
m
p
*
*
:
 
I
f
 
p
e
r
i
o
d
i
c
 
l
o
g
i
c
a
l
 
d
u
m
p
s
 
e
x
i
s
t
,
 
r
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
 
d
u
m
p
 
f
i
l
e


3
.
 
*
*
C
o
l
d
 
b
a
c
k
u
p
*
*
:
 
I
f
 
P
V
C
 
d
a
t
a
 
w
a
s
 
m
a
n
u
a
l
l
y
 
b
a
c
k
e
d
 
u
p
,
 
r
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
 
b
a
c
k
u
p




*
*
T
O
D
O
*
*
:
 
I
m
p
l
e
m
e
n
t
 
p
e
r
-
n
o
d
e
 
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
s
 
o
r
 
C
S
I
 
s
n
a
p
s
h
o
t
 
s
c
h
e
d
u
l
e
s
 
f
o
r
 
R
W
O
 
P
V
C
s
.




#
#
#
 
S
3
 
B
u
c
k
e
t
 
R
e
c
o
v
e
r
y




M
i
n
I
O
 
d
a
t
a
 
i
s
 
s
t
o
r
e
d
 
o
n
 
C
e
p
h
 
R
B
D
 
P
V
C
s
.
 
I
f
 
M
i
n
I
O
 
P
V
C
 
i
s
 
l
o
s
t
:




1
.
 
R
e
s
t
o
r
e
 
M
i
n
I
O
 
P
V
C
 
f
r
o
m
 
C
e
p
h
 
R
B
D
 
s
n
a
p
s
h
o
t


2
.
 
V
e
r
i
f
y
 
b
u
c
k
e
t
 
i
n
t
e
g
r
i
t
y
:
 
`
m
c
 
a
d
m
i
n
 
i
n
f
o
 
m
i
n
i
o
`


3
.
 
I
f
 
b
u
c
k
e
t
 
d
a
t
a
 
i
s
 
c
o
r
r
u
p
t
e
d
,
 
r
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
 
k
8
u
p
 
b
a
c
k
u
p
 
o
f
 
t
h
e
 
R
W
X
 
s
e
r
v
i
c
e
 
t
h
a
t
 
u
s
e
s
 
i
t




-
-
-




#
#
 
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
i
n
g
l
e
 
n
o
d
e
 
f
a
i
l
u
r
e




1
.
 
K
3
s
 
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
 
r
e
s
c
h
e
d
u
l
e
s
 
p
o
d
s
 
t
o
 
h
e
a
l
t
h
y
 
n
o
d
e
s


2
.
 
S
t
a
t
e
f
u
l
S
e
t
 
p
o
d
s
 
(
K
e
y
c
l
o
a
k
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
,
 
M
a
r
i
a
D
B
)
 
m
a
y
 
n
e
e
d
 
m
a
n
u
a
l
 
P
V
C
 
r
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


3
.
 
V
e
r
i
f
y
:
 
`
k
u
b
e
c
t
l
 
g
e
t
 
p
o
d
s
 
-
-
a
l
l
-
n
a
m
e
s
p
a
c
e
s
 
-
o
 
w
i
d
e
 
|
 
g
r
e
p
 
-
v
 
R
u
n
n
i
n
g
`




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
e
p
h
 
c
l
u
s
t
e
r
 
f
a
i
l
u
r
e




1
.
 
A
L
L
 
P
V
C
s
 
(
R
B
D
 
a
n
d
 
C
e
p
h
F
S
)
 
b
e
c
o
m
e
 
r
e
a
d
-
o
n
l
y
 
o
r
 
u
n
a
v
a
i
l
a
b
l
e


2
.
 
P
o
d
s
 
u
s
i
n
g
 
P
V
C
s
 
e
n
t
e
r
 
`
C
o
n
t
a
i
n
e
r
C
r
e
a
t
i
n
g
`
 
o
r
 
`
C
r
a
s
h
L
o
o
p
B
a
c
k
O
f
f
`


3
.
 
R
e
c
o
v
e
r
y
:
 
C
o
n
t
a
c
t
 
H
R
Z
 
s
t
o
r
a
g
e
 
t
e
a
m
,
 
r
e
s
t
o
r
e
 
C
e
p
h
 
c
l
u
s
t
e
r


4
.
 
A
f
t
e
r
 
C
e
p
h
 
r
e
c
o
v
e
r
y
:
 
p
o
d
s
 
r
e
s
u
m
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
 
K
e
y
c
l
o
a
k
 
f
a
i
l
u
r
e




1
.
 
N
o
 
n
e
w
 
l
o
g
i
n
s
 
s
u
c
c
e
e
d


2
.
 
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
 
u
n
t
i
l
 
t
o
k
e
n
 
e
x
p
i
r
y
 
(
5
 
m
i
n
u
t
e
s
 
f
o
r
 
a
c
c
e
s
s
 
t
o
k
e
n
s
)


3
.
 
I
n
t
e
r
c
o
m
 
s
i
l
e
n
t
 
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
 
→
 
c
r
o
s
s
-
a
p
p
 
w
o
r
k
f
l
o
w
s
 
b
r
e
a
k


4
.
 
R
e
c
o
v
e
r
y
:
 
R
e
s
t
a
r
t
 
K
e
y
c
l
o
a
k
 
p
o
d
,
 
v
e
r
i
f
y
 
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
v
i
t
y


5
.
 
I
f
 
d
a
t
a
 
l
o
s
t
:
 
R
e
s
t
o
r
e
 
`
k
e
y
c
l
o
a
k
`
 
d
a
t
a
b
a
s
e
 
f
r
o
m
 
b
a
c
k
u
p




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
A
P
r
o
x
y
 
I
n
g
r
e
s
s
 
f
a
i
l
u
r
e




1
.
 
A
L
L
 
e
x
t
e
r
n
a
l
 
a
c
c
e
s
s
 
t
o
 
s
e
r
v
i
c
e
s
 
i
s
 
u
n
a
v
a
i
l
a
b
l
e


2
.
 
I
n
t
e
r
n
a
l
 
c
l
u
s
t
e
r
 
c
o
m
m
u
n
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
t
i
n
u
e
s
 
(
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
 
t
a
l
k
 
t
o
 
e
a
c
h
 
o
t
h
e
r
)


3
.
 
R
e
c
o
v
e
r
y
:
 
R
e
s
t
a
r
t
 
i
n
g
r
e
s
s
 
c
o
n
t
r
o
l
l
e
r
 
p
o
d
s
,
 
v
e
r
i
f
y
 
L
o
a
d
B
a
l
a
n
c
e
r
 
s
e
r
v
i
c
e
 
I
P
 
(
1
9
2
.
1
6
8
.
3
.
2
0
1
)




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
 
D
N
S
 
f
a
i
l
u
r
e
 
(
C
o
r
e
D
N
S
)




1
.
 
I
n
t
e
r
n
a
l
 
s
e
r
v
i
c
e
 
d
i
s
c
o
v
e
r
y
 
f
a
i
l
s


2
.
 
E
x
t
e
r
n
a
l
 
r
e
s
o
l
u
t
i
o
n
 
f
a
i
l
s
 
(
S
E
R
V
F
A
I
L
 
o
n
 
C
N
A
M
E
 
c
h
a
i
n
s
 
i
s
 
k
n
o
w
n
 
H
R
Z
 
i
s
s
u
e
)


3
.
 
R
e
c
o
v
e
r
y
:
 
R
e
s
t
a
r
t
 
C
o
r
e
D
N
S
 
p
o
d
s
,
 
v
e
r
i
f
y
 
`
/
e
t
c
/
r
e
s
o
l
v
.
c
o
n
f
`
 
o
n
 
n
o
d
e
s




-
-
-




#
#
 
K
n
o
w
n
 
L
i
m
i
t
a
t
i
o
n
s




|
 
L
i
m
i
t
a
t
i
o
n
 
|
 
I
m
p
a
c
t
 
|
 
M
i
t
i
g
a
t
i
o
n
 
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
|


|
 
R
W
O
 
P
V
C
s
 
n
o
t
 
b
a
c
k
e
d
 
u
p
 
b
y
 
k
8
u
p
 
|
 
D
a
t
a
b
a
s
e
 
l
o
s
s
 
r
e
q
u
i
r
e
s
 
C
S
I
 
s
n
a
p
s
h
o
t
s
 
o
r
 
m
a
n
u
a
l
 
d
u
m
p
s
 
|
 
I
m
p
l
e
m
e
n
t
 
p
e
r
-
n
o
d
e
 
s
c
h
e
d
u
l
e
s
 
|


|
 
N
o
 
a
u
t
o
m
a
t
e
d
 
D
R
 
t
e
s
t
i
n
g
 
|
 
R
e
c
o
v
e
r
y
 
p
r
o
c
e
d
u
r
e
s
 
m
a
y
 
h
a
v
e
 
u
n
d
i
s
c
o
v
e
r
e
d
 
g
a
p
s
 
|
 
Q
u
a
r
t
e
r
l
y
 
D
R
 
d
r
i
l
l
s
 
|


|
 
S
i
n
g
l
e
 
C
e
p
h
 
c
l
u
s
t
e
r
 
|
 
S
t
o
r
a
g
e
 
f
a
i
l
u
r
e
 
a
f
f
e
c
t
s
 
A
L
L
 
s
e
r
v
i
c
e
s
 
|
 
H
R
Z
 
m
a
n
a
g
e
s
 
C
e
p
h
 
H
A
 
|


|
 
N
o
 
c
r
o
s
s
-
s
i
t
e
 
r
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
 
|
 
N
o
 
g
e
o
g
r
a
p
h
i
c
 
r
e
d
u
n
d
a
n
c
y
 
|
 
F
u
t
u
r
e
:
 
D
R
 
s
i
t
e
 
|


|
 
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
 
s
t
a
l
e
n
e
s
s
 
|
 
R
e
s
t
o
r
e
d
 
M
a
r
i
a
D
B
 
m
a
y
 
h
a
v
e
 
o
u
t
d
a
t
e
d
 
H
e
l
m
-
d
e
p
l
o
y
e
d
 
p
a
s
s
w
o
r
d
 
|
 
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
 
s
y
n
c
 
a
f
t
e
r
 
r
e
s
t
o
r
e
 
|

