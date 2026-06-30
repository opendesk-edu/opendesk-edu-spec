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
o
n
e
n
t
 
R
e
g
i
s
t
r
y




S
h
a
r
e
d
 
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
 
a
l
l
 
s
e
r
v
i
c
e
s
,
 
t
h
e
i
r
 
d
e
p
e
n
d
e
n
c
i
e
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
 
k
e
y
s
,


a
n
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
 
o
r
d
e
r
i
n
g
.
 
T
h
i
s
 
i
s
 
t
h
e
 
s
i
n
g
l
e
 
s
o
u
r
c
e
 
o
f
 
t
r
u
t
h
 
f
o
r
 
c
o
m
p
o
n
e
n
t
 
m
e
t
a
d
a
t
a
.




#
#
 
R
e
l
a
t
e
d
 
R
e
f
e
r
e
n
c
e
s




-
 
[
S
e
r
v
i
c
e
 
I
n
t
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
o
n
 
M
a
t
r
i
x
]
(
i
n
t
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
o
n
-
m
a
t
r
i
x
/
)
 
—
 
r
u
n
t
i
m
e
 
d
e
p
e
n
d
e
n
c
i
e
s
,
 
d
a
t
a
 
f
l
o
w
s
,
 
s
h
a
r
e
d
 
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


-
 
[
C
r
o
s
s
-
S
e
r
v
i
c
e
 
W
o
r
k
f
l
o
w
s
]
(
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
c
r
o
s
s
-
s
e
r
v
i
c
e
-
w
o
r
k
f
l
o
w
s
/
)
 
—
 
e
n
d
-
t
o
-
e
n
d
 
u
s
e
r
 
w
o
r
k
f
l
o
w
s
 
s
p
a
n
n
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


-
 
[
T
e
s
t
 
M
a
p
p
i
n
g
]
(
t
e
s
t
-
m
a
p
p
i
n
g
/
)
 
—
 
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
 
m
a
p
p
e
d
 
t
o
 
t
e
s
t
 
f
i
l
e
s


-
 
[
I
m
p
l
e
m
e
n
t
a
t
i
o
n
 
R
e
f
e
r
e
n
c
e
]
(
i
m
p
l
e
m
e
n
t
a
t
i
o
n
-
r
e
f
e
r
e
n
c
e
/
)
 
—
 
H
e
l
m
 
c
h
a
r
t
/
t
e
m
p
l
a
t
e
 
p
a
t
h
s




#
#
 
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
 
d
e
p
l
o
y
e
d
 
i
n
 
t
h
i
s
 
o
r
d
e
r
.
 
D
e
p
e
n
d
e
n
c
i
e
s
 
w
i
t
h
i
n
 
t
h
e
 
s
a
m
e
 
w
a
v
e


M
A
Y
 
b
e
 
d
e
p
l
o
y
e
d
 
i
n
 
p
a
r
a
l
l
e
l
.




`
`
`


W
a
v
e
 
0
 
—
 
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
n
o
 
a
p
p
 
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
s
e
)
:


 
 
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
,
 
I
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
s
,
 
C
e
r
t
-
m
a
n
a
g
e
r
,
 
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
,
 
R
e
d
i
s
,
 
M
i
n
I
O




W
a
v
e
 
1
 
—
 
C
o
r
e
 
p
l
a
t
f
o
r
m
 
(
d
e
p
e
n
d
s
 
o
n
 
W
a
v
e
 
0
 
d
a
t
a
b
a
s
e
s
/
c
a
c
h
e
/
s
t
o
r
a
g
e
)
:


 
 
N
u
b
u
s
 
(
p
r
o
v
i
d
e
s
 
I
A
M
 
+
 
P
o
r
t
a
l
)
,
 
O
p
e
n
C
l
o
u
d
 
(
p
r
o
v
i
d
e
s
 
W
e
b
D
A
V
/
S
3
)




W
a
v
e
 
2
 
—
 
P
r
i
m
a
r
y
 
s
e
r
v
i
c
e
s
 
(
d
e
p
e
n
d
 
o
n
 
W
a
v
e
 
1
 
f
o
r
 
a
u
t
h
/
p
o
r
t
a
l
)
:


 
 
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
,
 
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
,
 
X
W
i
k
i
,
 
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




W
a
v
e
 
3
 
—
 
C
o
l
l
a
b
o
r
a
t
i
o
n
 
a
d
d
-
o
n
s
 
(
d
e
p
e
n
d
 
o
n
 
W
a
v
e
 
2
 
s
e
r
v
i
c
e
s
)
:


 
 
C
o
l
l
a
b
o
r
a
 
(
N
e
x
t
c
l
o
u
d
 
d
e
l
e
g
a
t
e
)
,
 
C
r
y
p
t
P
a
d
 
(
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
,
 
J
i
t
s
i
,
 
N
o
t
e
s
,
 
P
l
a
n
k
a




W
a
v
e
 
4
 
—
 
E
d
u
c
a
t
i
o
n
 
s
e
r
v
i
c
e
s
 
(
d
e
p
e
n
d
 
o
n
 
W
a
v
e
 
0
-
1
 
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
:


 
 
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
,
 
E
t
h
e
r
p
a
d
,
 
B
o
o
k
S
t
a
c
k




W
a
v
e
 
5
 
—
 
S
u
p
p
o
r
t
 
s
e
r
v
i
c
e
s
 
(
d
e
p
e
n
d
 
o
n
 
W
a
v
e
 
0
-
1
)
:


 
 
Z
a
m
m
a
d
,
 
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
,
 
T
Y
P
O
3
 
C
M
S
,
 
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




W
a
v
e
 
6
 
—
 
S
t
a
t
e
l
e
s
s
 
t
o
o
l
s
 
(
n
o
 
d
e
p
e
n
d
e
n
c
i
e
s
)
:


 
 
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


`
`
`




#
#
 
S
e
r
v
i
c
e
 
I
n
d
e
x




|
 
S
e
r
v
i
c
e
 
|
 
A
u
t
h
 
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
 
S
t
o
r
a
g
e
 
|
 
C
a
c
h
e
 
|
 
L
i
c
e
n
s
e
 
|
 
A
l
t
e
r
n
a
t
i
v
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


|
 
[
N
u
b
u
s
]
(
.
.
/
s
e
r
v
i
c
e
s
/
n
u
b
u
s
/
)
 
|
 
O
I
D
C
 
(
I
d
P
)
 
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
 
|
 
R
W
X
 
P
V
C
 
|
 
R
e
d
i
s
 
|
 
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
 
|
 
—
 
|


|
 
[
N
e
x
t
c
l
o
u
d
]
(
.
.
/
s
e
r
v
i
c
e
s
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
/
)
 
|
 
S
A
M
L
 
2
.
0
 
|
 
M
a
r
i
a
D
B
 
|
 
S
3
 
|
 
R
e
d
i
s
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
O
p
e
n
C
l
o
u
d
]
(
.
.
/
s
e
r
v
i
c
e
s
/
o
p
e
n
c
l
o
u
d
/
)
 
|
 
O
I
D
C
 
|
 
M
a
r
i
a
D
B
 
|
 
C
e
p
h
F
S
 
+
 
S
3
 
|
 
R
e
d
i
s
 
|
 
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
 
|
 
—
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
o
x
-
a
p
p
s
u
i
t
e
/
)
 
|
 
S
A
M
L
 
2
.
0
 
|
 
M
y
S
Q
L
 
|
 
R
W
X
 
P
V
C
 
|
 
—
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
S
O
G
o
]
(
.
.
/
s
e
r
v
i
c
e
s
/
s
o
g
o
/
)
 
|
 
O
I
D
C
 
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
 
|
 
—
 
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
 
|
 
L
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
E
l
e
m
e
n
t
]
(
.
.
/
s
e
r
v
i
c
e
s
/
e
l
e
m
e
n
t
/
)
 
|
 
O
I
D
C
 
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
 
|
 
S
3
 
|
 
R
e
d
i
s
 
|
 
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
 
|
 
—
 
|


|
 
[
J
i
t
s
i
]
(
.
.
/
s
e
r
v
i
c
e
s
/
j
i
t
s
i
/
)
 
|
 
O
I
D
C
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
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


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
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
/
)
 
|
 
S
A
M
L
 
2
.
0
 
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
 
|
 
R
W
X
 
P
V
C
 
|
 
R
e
d
i
s
 
|
 
L
G
P
L
-
3
.
0
 
|
 
J
i
t
s
i
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
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
)
 
|
 
S
A
M
L
 
2
.
0
 
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
 
|
 
S
3
 
|
 
—
 
|
 
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
X
W
i
k
i
]
(
.
.
/
s
e
r
v
i
c
e
s
/
x
w
i
k
i
/
)
 
|
 
O
I
D
C
 
|
 
M
a
r
i
a
D
B
 
/
 
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
 
|
 
—
 
|
 
—
 
|
 
L
G
P
L
-
2
.
1
 
|
 
—
 
|


|
 
[
C
o
l
l
a
b
o
r
a
]
(
.
.
/
s
e
r
v
i
c
e
s
/
c
o
l
l
a
b
o
r
a
/
)
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
M
P
L
-
2
.
0
 
|
 
—
 
|


|
 
[
C
r
y
p
t
P
a
d
]
(
.
.
/
s
e
r
v
i
c
e
s
/
c
r
y
p
t
p
a
d
/
)
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
N
o
t
e
s
]
(
.
.
/
s
e
r
v
i
c
e
s
/
n
o
t
e
s
/
)
 
|
 
O
I
D
C
 
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
 
|
 
S
3
 
|
 
R
e
d
i
s
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
I
L
I
A
S
]
(
.
.
/
s
e
r
v
i
c
e
s
/
i
l
i
a
s
/
)
 
|
 
S
A
M
L
 
2
.
0
 
|
 
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
 
|
 
S
3
 
|
 
—
 
|
 
G
P
L
-
3
.
0
 
|
 
M
o
o
d
l
e
 
|


|
 
[
M
o
o
d
l
e
]
(
.
.
/
s
e
r
v
i
c
e
s
/
m
o
o
d
l
e
/
)
 
|
 
S
A
M
L
 
2
.
0
 
|
 
M
a
r
i
a
D
B
 
(
e
x
t
e
r
n
a
l
)
 
|
 
R
W
X
 
P
V
C
 
|
 
—
 
|
 
G
P
L
-
3
.
0
 
|
 
I
L
I
A
S
 
|


|
 
[
E
t
h
e
r
p
a
d
]
(
.
.
/
s
e
r
v
i
c
e
s
/
e
t
h
e
r
p
a
d
/
)
 
|
 
O
I
D
C
 
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
 
|
 
—
 
|
 
—
 
|
 
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
 
|
 
—
 
|


|
 
[
B
o
o
k
S
t
a
c
k
]
(
.
.
/
s
e
r
v
i
c
e
s
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
/
)
 
|
 
S
A
M
L
 
2
.
0
 
|
 
M
a
r
i
a
D
B
 
|
 
—
 
|
 
—
 
|
 
M
I
T
 
|
 
—
 
|


|
 
[
P
l
a
n
k
a
]
(
.
.
/
s
e
r
v
i
c
e
s
/
p
l
a
n
k
a
/
)
 
|
 
O
I
D
C
 
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
 
|
 
R
W
O
 
P
V
C
 
(
1
G
i
)
 
|
 
—
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
D
o
v
e
c
o
t
 
/
 
P
o
s
t
f
i
x
]
(
.
.
/
s
e
r
v
i
c
e
s
/
d
o
v
e
c
o
t
-
p
o
s
t
f
i
x
/
)
 
|
 
L
D
A
P
 
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
 
+
 
M
a
r
i
a
D
B
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
|


|
 
[
Z
a
m
m
a
d
]
(
.
.
/
s
e
r
v
i
c
e
s
/
z
a
m
m
a
d
/
)
 
|
 
S
A
M
L
 
2
.
0
 
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
 
|
 
—
 
|
 
R
e
d
i
s
 
|
 
A
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
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
/
)
 
|
 
L
D
A
P
 
|
 
M
a
r
i
a
D
B
 
|
 
—
 
|
 
—
 
|
 
G
P
L
-
2
.
0
 
|
 
—
 
|


|
 
[
D
r
a
w
.
i
o
]
(
.
.
/
s
e
r
v
i
c
e
s
/
d
r
a
w
i
o
/
)
 
|
 
N
o
n
e
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
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
 
|
 
—
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
e
x
c
a
l
i
d
r
a
w
/
)
 
|
 
N
o
n
e
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
s
e
l
f
-
s
e
r
v
i
c
e
-
p
a
s
s
w
o
r
d
/
)
 
|
 
L
D
A
P
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
G
P
L
-
3
.
0
 
|
 
—
 
|


|
 
[
T
Y
P
O
3
 
C
M
S
]
(
.
.
/
s
e
r
v
i
c
e
s
/
t
y
p
o
3
/
)
 
|
 
O
I
D
C
 
|
 
M
a
r
i
a
D
B
 
|
 
—
 
|
 
—
 
|
 
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
 
|
 
—
 
|




#
#
#
 
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
 
S
e
r
v
i
c
e
s
 
(
W
a
v
e
 
0
)




|
 
S
e
r
v
i
c
e
 
|
 
S
p
e
c
 
|
 
P
u
r
p
o
s
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
 
[
K
e
y
c
l
o
a
k
]
(
.
.
/
s
e
r
v
i
c
e
s
/
k
e
y
c
l
o
a
k
/
)
 
|
 
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
 
|
 
I
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
,
 
t
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
,
 
S
S
O
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
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
/
)
 
|
 
—
 
|
 
R
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
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
 
E
l
e
m
e
n
t
,
 
N
o
t
e
s
,
 
P
l
a
n
k
a
,
 
S
O
G
o
,
 
X
W
i
k
i
,
 
D
o
v
e
c
o
t
)
 
|


|
 
[
M
a
r
i
a
D
B
]
(
.
.
/
s
e
r
v
i
c
e
s
/
m
a
r
i
a
d
b
/
)
 
|
 
—
 
|
 
R
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
w
i
t
h
 
G
a
l
e
r
a
 
H
A
 
(
N
e
x
t
c
l
o
u
d
,
 
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
 
O
X
,
 
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
 
e
t
c
.
)
 
|


|
 
[
R
e
d
i
s
]
(
.
.
/
s
e
r
v
i
c
e
s
/
r
e
d
i
s
/
)
 
|
 
—
 
|
 
D
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
e
/
s
e
s
s
i
o
n
 
s
t
o
r
e
 
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
 
N
e
x
t
c
l
o
u
d
,
 
E
l
e
m
e
n
t
,
 
N
o
t
e
s
,
 
I
n
t
e
r
c
o
m
)
 
|


|
 
[
M
i
n
I
O
]
(
.
.
/
s
e
r
v
i
c
e
s
/
m
i
n
i
o
/
)
 
|
 
—
 
|
 
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
N
e
x
t
c
l
o
u
d
,
 
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
 
I
L
I
A
S
,
 
N
o
t
e
s
,
 
b
a
c
k
u
p
s
)
 
|


|
 
[
c
e
r
t
-
m
a
n
a
g
e
r
]
(
.
.
/
s
e
r
v
i
c
e
s
/
c
e
r
t
-
m
a
n
a
g
e
r
/
)
 
|
 
—
 
|
 
T
L
S
 
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
A
C
M
E
 
L
e
t
'
s
 
E
n
c
r
y
p
t
,
 
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
a
l
 
c
e
r
t
s
)
 
|


|
 
[
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
]
(
.
.
/
s
e
r
v
i
c
e
s
/
h
a
p
r
o
x
y
-
i
n
g
r
e
s
s
/
)
 
|
 
—
 
|
 
I
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
,
 
T
L
S
 
t
e
r
m
i
n
a
t
i
o
n
,
 
H
T
T
P
 
r
o
u
t
i
n
g
 
|




#
#
 
A
u
t
h
 
M
e
t
h
o
d
s




|
 
M
e
t
h
o
d
 
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
 
S
p
e
c
 
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
-
-
|
-
-
-
-
-
-
|


|
 
O
I
D
C
 
|
 
N
u
b
u
s
,
 
S
O
G
o
,
 
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
 
E
l
e
m
e
n
t
,
 
X
W
i
k
i
,
 
P
l
a
n
k
a
,
 
E
t
h
e
r
p
a
d
,
 
N
o
t
e
s
,
 
T
Y
P
O
3
 
|
 
[
O
I
D
C
]
(
.
.
/
a
u
t
h
/
o
i
d
c
/
)
 
|


|
 
S
A
M
L
 
2
.
0
 
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
,
 
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
,
 
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
,
 
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
o
o
k
S
t
a
c
k
,
 
Z
a
m
m
a
d
,
 
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
 
[
S
A
M
L
]
(
.
.
/
a
u
t
h
/
s
a
m
l
/
)
 
|


|
 
L
D
A
P
 
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
,
 
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
,
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
 
|
 
[
L
D
A
P
]
(
.
.
/
a
u
t
h
/
l
d
a
p
/
)
 
|


|
 
N
o
n
e
 
|
 
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
 
C
o
l
l
a
b
o
r
a
,
 
C
r
y
p
t
P
a
d
 
|
 
—
 
|




#
#
 
S
h
a
r
e
d
 
D
a
t
a
b
a
s
e
s




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
 
E
n
g
i
n
e
 
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
 
C
o
n
f
i
g
 
K
e
y
 
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
 
`
n
u
b
u
s
`
 
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
 
|
 
N
u
b
u
s
 
|
 
`
d
a
t
a
b
a
s
e
s
.
n
u
b
u
s
.
*
`
 
|


|
 
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
 
|
 
M
a
r
i
a
D
B
 
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
d
a
t
a
b
a
s
e
s
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
.
*
`
 
|


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
 
M
a
r
i
a
D
B
 
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
d
a
t
a
b
a
s
e
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
_
o
p
e
n
c
l
o
u
d
.
*
`
 
|


|
 
`
o
x
a
p
p
s
u
i
t
e
`
 
|
 
M
y
S
Q
L
 
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
d
a
t
a
b
a
s
e
s
.
o
x
_
a
p
p
s
u
i
t
e
.
*
`
 
|


|
 
`
s
o
g
o
`
 
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
 
|
 
S
O
G
o
 
|
 
`
d
a
t
a
b
a
s
e
s
.
s
o
g
o
.
*
`
 
|


|
 
`
e
l
e
m
e
n
t
`
 
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
d
a
t
a
b
a
s
e
s
.
e
l
e
m
e
n
t
.
*
`
 
|


|
 
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
d
a
t
a
b
a
s
e
s
.
b
b
b
.
*
`
 
|


|
 
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
d
a
t
a
b
a
s
e
s
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
*
`
 
|


|
 
`
x
w
i
k
i
`
 
|
 
M
a
r
i
a
D
B
 
/
 
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
 
|
 
X
W
i
k
i
 
|
 
`
d
a
t
a
b
a
s
e
s
.
x
w
i
k
i
.
*
`
 
|


|
 
`
i
l
i
a
s
`
 
|
 
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
 
|
 
I
L
I
A
S
 
|
 
`
d
a
t
a
b
a
s
e
s
.
i
l
i
a
s
.
*
`
 
|


|
 
`
m
o
o
d
l
e
`
 
|
 
M
a
r
i
a
D
B
 
(
e
x
t
e
r
n
a
l
)
 
|
 
M
o
o
d
l
e
 
|
 
`
d
a
t
a
b
a
s
e
s
.
m
o
o
d
l
e
.
*
`
 
|


|
 
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
d
a
t
a
b
a
s
e
s
.
e
t
h
e
r
p
a
d
.
*
`
 
|


|
 
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
 
|
 
M
a
r
i
a
D
B
 
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
d
a
t
a
b
a
s
e
s
.
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
*
`
 
|


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
 
|
 
P
l
a
n
k
a
 
|
 
`
d
a
t
a
b
a
s
e
s
.
p
l
a
n
k
a
.
*
`
 
|


|
 
`
z
a
m
m
a
d
`
 
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
 
|
 
Z
a
m
m
a
d
 
|
 
`
d
a
t
a
b
a
s
e
s
.
z
a
m
m
a
d
.
*
`
 
|


|
 
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
 
|
 
M
a
r
i
a
D
B
 
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
 
`
d
a
t
a
b
a
s
e
s
.
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
.
*
`
 
|


|
 
`
t
y
p
o
3
`
 
|
 
M
a
r
i
a
D
B
 
|
 
T
Y
P
O
3
 
|
 
`
d
a
t
a
b
a
s
e
s
.
t
y
p
o
3
.
*
`
 
|




#
#
 
S
h
a
r
e
d
 
S
t
o
r
a
g
e




|
 
B
u
c
k
e
t
/
C
l
a
i
m
 
|
 
T
y
p
e
 
|
 
A
c
c
e
s
s
 
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
 
B
a
c
k
u
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
-
-
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
-
-
-
|


|
 
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
-
d
a
t
a
`
 
|
 
S
3
 
|
 
R
W
X
 
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
,
 
E
l
e
m
e
n
t
 
|
 
k
8
u
p
 
(
R
W
X
)
 
|


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
-
d
a
t
a
`
 
|
 
C
e
p
h
F
S
 
|
 
R
W
X
 
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
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
`
i
l
i
a
s
-
d
a
t
a
`
 
|
 
S
3
 
|
 
R
W
X
 
|
 
I
L
I
A
S
 
|
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
`
b
b
b
-
r
e
c
o
r
d
i
n
g
s
`
 
|
 
C
e
p
h
F
S
 
|
 
R
W
X
 
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
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
`
m
o
o
d
l
e
-
d
a
t
a
`
 
|
 
C
e
p
h
F
S
 
|
 
R
W
X
 
|
 
M
o
o
d
l
e
 
|
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
`
n
o
t
e
s
-
d
a
t
a
`
 
|
 
S
3
 
|
 
R
W
X
 
|
 
N
o
t
e
s
 
|
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
`
p
l
a
n
k
a
-
d
a
t
a
`
 
|
 
R
W
O
 
P
V
C
 
|
 
R
W
O
 
|
 
P
l
a
n
k
a
 
|
 
E
x
c
l
u
d
e
d
 
(
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
)
 
|


|
 
`
s
e
a
w
e
e
d
f
s
-
a
l
l
-
i
n
-
o
n
e
-
d
a
t
a
`
 
|
 
C
e
p
h
F
S
 
|
 
R
W
X
 
|
 
S
e
a
w
e
e
d
F
S
 
|
 
k
8
u
p
 
(
R
W
X
)
 
|


|
 
D
a
t
a
b
a
s
e
 
P
V
C
s
 
(
2
9
)
 
|
 
C
e
p
h
 
R
B
D
 
|
 
R
W
O
 
|
 
P
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
 
D
B
s
 
|
 
E
x
c
l
u
d
e
d
 
(
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
)
 
|




#
#
 
M
u
t
u
a
l
 
E
x
c
l
u
s
i
v
i
t
y




|
 
S
e
r
v
i
c
e
 
A
 
|
 
S
e
r
v
i
c
e
 
B
 
|
 
R
e
a
s
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


|
 
J
i
t
s
i
 
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
 
B
o
t
h
 
p
r
o
v
i
d
e
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
c
i
n
g
 
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
 
B
o
t
h
 
p
r
o
v
i
d
e
 
f
i
l
e
 
s
h
a
r
i
n
g
 
|


|
 
S
O
G
o
 
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
o
t
h
 
p
r
o
v
i
d
e
 
g
r
o
u
p
w
a
r
e
 
(
e
m
a
i
l
/
c
a
l
e
n
d
a
r
)
 
|




#
#
 
H
e
a
l
t
h
 
C
h
e
c
k
 
C
a
t
a
l
o
g




|
 
S
e
r
v
i
c
e
 
|
 
R
e
a
d
i
n
e
s
s
 
P
a
t
h
 
|
 
L
i
v
e
n
e
s
s
 
P
a
t
h
 
|
 
S
t
a
r
t
u
p
 
P
a
t
h
 
|
 
P
o
r
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
|


|
 
N
u
b
u
s
 
|
 
`
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
 
|
 
`
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
 
|
 
—
 
|
 
8
0
8
0
 
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
`
 
|
 
`
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
`
 
|
 
`
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
`
 
|
 
8
0
8
0
 
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
`
 
|
 
`
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
`
 
|
 
—
 
|
 
8
0
8
0
 
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
`
 
|
 
`
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
`
 
|
 
—
 
|
 
8
0
8
0
 
|


|
 
S
O
G
o
 
|
 
`
/
S
O
G
o
/
i
n
d
e
x
.
h
t
m
l
`
 
|
 
—
 
|
 
—
 
|
 
2
0
0
8
0
 
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
 
—
 
|
 
—
 
|
 
—
 
|
 
8
0
 
|


|
 
J
i
t
s
i
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
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
 
—
 
|
 
—
 
|
 
—
 
|
 
—
 
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
/
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
 
|
 
`
/
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
 
|
 
—
 
|
 
8
0
8
0
 
|


|
 
X
W
i
k
i
 
|
 
`
/
x
w
i
k
i
/
b
i
n
/
v
i
e
w
/
M
a
i
n
/
W
e
b
H
o
m
e
`
 
|
 
`
/
x
w
i
k
i
/
b
i
n
/
v
i
e
w
/
M
a
i
n
/
W
e
b
H
o
m
e
`
 
|
 
—
 
|
 
8
0
8
0
 
|


|
 
C
o
l
l
a
b
o
r
a
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
9
9
8
0
 
|


|
 
C
r
y
p
t
P
a
d
 
|
 
`
/
c
r
y
p
t
p
a
d
/
`
 
|
 
`
/
c
r
y
p
t
p
a
d
/
`
 
|
 
—
 
|
 
3
0
0
0
 
|


|
 
N
o
t
e
s
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
3
0
0
0
 
|


|
 
I
L
I
A
S
 
|
 
`
/
i
l
i
a
s
/
`
 
|
 
—
 
|
 
—
 
|
 
8
0
 
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
/
m
o
o
d
l
e
/
`
 
|
 
—
 
|
 
—
 
|
 
8
0
8
0
 
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
/
`
 
|
 
—
 
|
 
—
 
|
 
9
0
0
1
 
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
/
`
 
|
 
—
 
|
 
—
 
|
 
8
0
8
0
 
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
/
a
p
i
/
h
e
a
l
t
h
`
 
|
 
`
/
a
p
i
/
h
e
a
l
t
h
`
 
|
 
—
 
|
 
3
0
0
0
 
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
/
a
p
i
/
v
1
/
h
e
a
l
t
h
_
c
h
e
c
k
`
 
|
 
—
 
|
 
—
 
|
 
3
0
0
0
 
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
 
—
 
|
 
—
 
|
 
—
 
|
 
8
0
 
|


|
 
D
r
a
w
.
i
o
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
8
0
8
0
 
|


|
 
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
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
8
0
 
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
 
`
/
`
 
|
 
—
 
|
 
—
 
|
 
8
0
 
|


|
 
T
Y
P
O
3
 
C
M
S
 
|
 
`
/
`
 
|
 
—
 
|
 
—
 
|
 
8
0
 
|




#
#
 
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
 
D
e
p
e
n
d
e
n
c
y
 
G
r
a
p
h




`
`
`
m
e
r
m
a
i
d


g
r
a
p
h
 
T
D


 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
0
 
[
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
]


 
 
 
 
 
 
 
 
S
C
[
S
t
o
r
a
g
e
 
C
l
a
s
s
e
s
]


 
 
 
 
 
 
 
 
I
C
[
I
n
g
r
e
s
s
 
C
o
n
t
r
o
l
l
e
r
]


 
 
 
 
 
 
 
 
C
M
[
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
]


 
 
 
 
 
 
 
 
K
C
[
K
e
y
c
l
o
a
k
]


 
 
 
 
 
 
 
 
P
G
[
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
]


 
 
 
 
 
 
 
 
M
Y
[
M
a
r
i
a
D
B
]


 
 
 
 
 
 
 
 
R
D
[
R
e
d
i
s
]


 
 
 
 
 
 
 
 
M
C
[
M
e
m
c
a
c
h
e
d
]


 
 
 
 
 
 
 
 
S
3
[
M
i
n
I
O
 
/
 
S
3
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
1
 
[
C
o
r
e
 
P
l
a
t
f
o
r
m
]


 
 
 
 
 
 
 
 
N
B
[
N
u
b
u
s
]


 
 
 
 
 
 
 
 
O
C
[
O
p
e
n
C
l
o
u
d
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
2
 
[
P
r
i
m
a
r
y
 
S
e
r
v
i
c
e
s
]


 
 
 
 
 
 
 
 
O
X
[
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
]


 
 
 
 
 
 
 
 
N
C
[
N
e
x
t
c
l
o
u
d
]


 
 
 
 
 
 
 
 
S
G
[
S
O
G
o
]


 
 
 
 
 
 
 
 
E
L
[
E
l
e
m
e
n
t
]


 
 
 
 
 
 
 
 
X
W
[
X
W
i
k
i
]


 
 
 
 
 
 
 
 
O
P
[
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
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
3
 
[
C
o
l
l
a
b
o
r
a
t
i
o
n
 
A
d
d
-
o
n
s
]


 
 
 
 
 
 
 
 
C
L
[
C
o
l
l
a
b
o
r
a
]


 
 
 
 
 
 
 
 
C
P
[
C
r
y
p
t
P
a
d
]


 
 
 
 
 
 
 
 
J
T
[
J
i
t
s
i
]


 
 
 
 
 
 
 
 
N
T
[
N
o
t
e
s
]


 
 
 
 
 
 
 
 
P
K
[
P
l
a
n
k
a
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
4
 
[
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
]


 
 
 
 
 
 
 
 
I
L
[
I
L
I
A
S
]


 
 
 
 
 
 
 
 
M
D
[
M
o
o
d
l
e
]


 
 
 
 
 
 
 
 
B
B
[
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
]


 
 
 
 
 
 
 
 
E
P
[
E
t
h
e
r
p
a
d
]


 
 
 
 
 
 
 
 
B
S
[
B
o
o
k
S
t
a
c
k
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
5
 
[
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
]


 
 
 
 
 
 
 
 
Z
M
[
Z
a
m
m
a
d
]


 
 
 
 
 
 
 
 
L
S
[
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
]


 
 
 
 
 
 
 
 
T
3
[
T
Y
P
O
3
 
C
M
S
]


 
 
 
 
 
 
 
 
S
P
[
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
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
W
a
v
e
 
6
 
[
S
t
a
t
e
l
e
s
s
 
T
o
o
l
s
]


 
 
 
 
 
 
 
 
D
I
[
D
r
a
w
.
i
o
]


 
 
 
 
 
 
 
 
E
X
[
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
]


 
 
 
 
e
n
d




 
 
 
 
K
C
 
-
-
>
 
N
B


 
 
 
 
P
G
 
-
-
>
 
N
B


 
 
 
 
R
D
 
-
-
>
 
N
B


 
 
 
 
M
Y
 
-
-
>
 
O
C


 
 
 
 
S
3
 
-
-
>
 
O
C


 
 
 
 
N
B
 
-
-
>
 
O
X


 
 
 
 
N
B
 
-
-
>
 
N
C


 
 
 
 
M
Y
 
-
-
>
 
N
C


 
 
 
 
R
D
 
-
-
>
 
N
C


 
 
 
 
S
3
 
-
-
>
 
N
C


 
 
 
 
P
G
 
-
-
>
 
E
L


 
 
 
 
S
3
 
-
-
>
 
E
L


 
 
 
 
N
B
 
-
-
>
 
S
G


 
 
 
 
P
G
 
-
-
>
 
S
G


 
 
 
 
M
C
 
-
-
>
 
S
G


 
 
 
 
P
G
 
-
-
>
 
X
W


 
 
 
 
N
B
 
-
-
>
 
O
P


 
 
 
 
P
G
 
-
-
>
 
O
P


 
 
 
 
S
3
 
-
-
>
 
O
P


 
 
 
 
N
C
 
-
-
>
 
C
L


 
 
 
 
N
B
 
-
-
>
 
C
P


 
 
 
 
K
C
 
-
-
>
 
J
T


 
 
 
 
K
C
 
-
-
>
 
N
T


 
 
 
 
K
C
 
-
-
>
 
P
K


 
 
 
 
P
G
 
-
-
>
 
P
K


 
 
 
 
N
B
 
-
-
>
 
I
L


 
 
 
 
P
G
 
-
-
>
 
I
L


 
 
 
 
S
3
 
-
-
>
 
I
L


 
 
 
 
N
B
 
-
-
>
 
M
D


 
 
 
 
P
G
 
-
-
>
 
M
D


 
 
 
 
K
C
 
-
-
>
 
B
B


 
 
 
 
P
G
 
-
-
>
 
B
B


 
 
 
 
R
D
 
-
-
>
 
B
B


 
 
 
 
K
C
 
-
-
>
 
E
P


 
 
 
 
P
G
 
-
-
>
 
E
P


 
 
 
 
K
C
 
-
-
>
 
B
S


 
 
 
 
M
Y
 
-
-
>
 
B
S


 
 
 
 
N
B
 
-
-
>
 
Z
M


 
 
 
 
P
G
 
-
-
>
 
Z
M


 
 
 
 
R
D
 
-
-
>
 
Z
M


 
 
 
 
M
Y
 
-
-
>
 
L
S


 
 
 
 
K
C
 
-
-
>
 
T
3


 
 
 
 
M
Y
 
-
-
>
 
T
3


 
 
 
 
M
Y
 
-
-
>
 
S
P



