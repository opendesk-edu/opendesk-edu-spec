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
 
K
e
y
c
l
o
a
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




O
I
D
C
/
S
A
M
L
 
2
.
0
 
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
 
(
I
d
P
)
 
f
o
r
 
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
.
 
P
r
o
v
i
d
e
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
i
o
n
,
 
s
i
n
g
l
e
 
s
i
g
n
-
o
n
 
(
S
S
O
)
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
 
a
n
d
 
u
s
e
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
.
 
R
u
n
s
 
a
s
 
p
a
r
t
 
o
f
 
t
h
e
 
N
u
b
u
s
 
I
A
M
 
s
t
a
c
k
 
w
i
t
h
 
a
 
d
e
d
i
c
a
t
e
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


d
a
t
a
b
a
s
e
.




K
e
y
c
l
o
a
k
 
i
s
 
t
h
e
 
c
e
n
t
r
a
l
 
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
u
t
h
o
r
i
t
y
 
—
 
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
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k
 
v
i
a
 
O
I
D
C
 
(
9
 
s
e
r
v
i
c
e
s
)
 
o
r
 
S
A
M
L
 
2
.
0
 
(
8
 
s
e
r
v
i
c
e
s
)
.




#
#
 
S
c
o
p
e




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
 
K
e
y
c
l
o
a
k
 
I
d
P
 
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
 
r
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
,
 
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
1
9
 
c
l
i
e
n
t
s
)
,
 
S
A
M
L
 
2
.
0
 
S
P
 
e
n
t
i
t
y
 
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
8
 
S
P
s
)
,
 
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
 
D
F
N
-
A
A
I
 
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
,
 
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
 
O
p
e
n
L
D
A
P
 
d
i
r
e
c
t
o
r
y
 
(
s
e
e
 
`
.
.
/
n
u
b
u
s
/
`
)
,
 
U
M
S
 
R
E
S
T
 
A
P
I
 
(
s
e
e
 
`
.
.
/
n
u
b
u
s
/
`
)
,
 
P
o
r
t
a
l
 
f
r
o
n
t
e
n
d
 
(
s
e
e
 
`
.
.
/
n
u
b
u
s
/
`
)
,
 
S
C
I
M
 
p
r
o
v
i
s
i
o
n
i
n
g
 
(
f
u
t
u
r
e
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
 
O
p
e
n
L
D
A
P
 
s
c
h
e
m
a
 
a
n
d
 
u
s
e
r
 
d
i
r
e
c
t
o
r
y
 
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
N
u
b
u
s
 
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
y
)


-
 
U
M
S
 
R
E
S
T
 
A
P
I
 
p
r
o
v
i
s
i
o
n
i
n
g
 
(
N
u
b
u
s
 
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
y
)


-
 
S
C
I
M
 
p
r
o
v
i
s
i
o
n
i
n
g
 
p
r
o
t
o
c
o
l
 
(
p
l
a
n
n
e
d
 
f
u
t
u
r
e
 
e
n
h
a
n
c
e
m
e
n
t
)


-
 
K
e
y
c
l
o
a
k
 
t
h
e
m
e
 
c
u
s
t
o
m
i
z
a
t
i
o
n
 
(
m
a
n
a
g
e
d
 
b
y
 
N
u
b
u
s
 
u
p
s
t
r
e
a
m
)




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
 
R
e
a
l
m
 
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




K
e
y
c
l
o
a
k
 
S
H
A
L
L
 
r
u
n
 
w
i
t
h
 
r
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
 
a
n
d
 
p
r
e
-
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
 
a
n
d


S
A
M
L
 
2
.
0
 
S
P
 
e
n
t
i
t
i
e
s
 
f
o
r
 
a
l
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
 
p
r
e
-
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
 
K
e
y
c
l
o
a
k
 
r
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


-
 
T
H
E
N
 
1
9
 
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
 
a
r
e
 
p
r
e
-
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
 
w
i
t
h
 
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
:


 
 
-
 
`
s
o
g
o
`
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
 
(
E
l
e
m
e
n
t
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
j
i
t
s
i
`
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
d
e
s
k
-
p
l
a
n
k
a
`
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
t
y
p
o
3
`


-
 
A
N
D
 
e
a
c
h
 
c
l
i
e
n
t
 
h
a
s
 
a
 
u
n
i
q
u
e
 
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
A
M
L
 
2
.
0
 
S
P
 
p
r
e
-
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
 
K
e
y
c
l
o
a
k
 
r
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


-
 
T
H
E
N
 
8
 
S
A
M
L
 
2
.
0
 
S
P
 
e
n
t
i
t
i
e
s
 
a
r
e
 
p
r
e
-
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
:


 
 
-
 
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


-
 
A
N
D
 
a
l
l
 
S
P
s
 
t
r
u
s
t
 
t
h
e
 
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
 
I
d
P
 
(
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
 
p
r
o
t
o
c
o
l
)


-
 
A
N
D
 
e
n
t
i
t
y
 
I
D
s
 
m
a
t
c
h
 
s
e
r
v
i
c
e
 
U
R
L
s
 
(
e
.
g
.
,
 
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
 
O
I
D
C
 
t
o
k
e
n
 
e
n
d
p
o
i
n
t




K
e
y
c
l
o
a
k
 
S
H
A
L
L
 
e
x
p
o
s
e
 
t
h
e
 
O
I
D
C
 
t
o
k
e
n
 
e
n
d
p
o
i
n
t
 
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
/
p
r
o
t
o
c
o
l
/
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
n
e
c
t
/
t
o
k
e
n
`
 
f
o
r
 
a
l
l
 
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
l
i
e
n
t
 
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


-
 
G
I
V
E
N
 
a
n
 
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
 
w
i
t
h
 
v
a
l
i
d
 
`
c
l
i
e
n
t
_
i
d
`
 
a
n
d
 
`
c
l
i
e
n
t
_
s
e
c
r
e
t
`


-
 
W
H
E
N
 
a
 
P
O
S
T
 
r
e
q
u
e
s
t
 
i
s
 
m
a
d
e
 
t
o
 
t
h
e
 
t
o
k
e
n
 
e
n
d
p
o
i
n
t
 
w
i
t
h
 
`
g
r
a
n
t
_
t
y
p
e
=
c
l
i
e
n
t
_
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
`


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
r
e
t
u
r
n
s
 
a
 
v
a
l
i
d
 
J
W
T
 
`
a
c
c
e
s
s
_
t
o
k
e
n
`


-
 
A
N
D
 
t
h
e
 
t
o
k
e
n
 
i
n
c
l
u
d
e
s
 
r
e
a
l
m
 
r
o
l
e
s
 
a
n
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
u
t
h
o
r
i
z
a
t
i
o
n
 
c
o
d
e
 
f
l
o
w


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
n
g
 
v
i
a
 
a
 
b
r
o
w
s
e
r
 
r
e
d
i
r
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
 
s
e
r
v
i
c
e
 
i
n
i
t
i
a
t
e
s
 
t
h
e
 
O
I
D
C
 
a
u
t
h
o
r
i
z
a
t
i
o
n
 
c
o
d
e
 
f
l
o
w


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
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
 
t
h
e
 
u
s
e
r
 
a
n
d
 
r
e
d
i
r
e
c
t
s
 
b
a
c
k
 
w
i
t
h
 
a
n
 
a
u
t
h
o
r
i
z
a
t
i
o
n
 
c
o
d
e


-
 
A
N
D
 
t
h
e
 
s
e
r
v
i
c
e
 
e
x
c
h
a
n
g
e
s
 
t
h
e
 
c
o
d
e
 
f
o
r
 
t
o
k
e
n
s
 
a
t
 
t
h
e
 
t
o
k
e
n
 
e
n
d
p
o
i
n
t




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
 
S
P
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
 
S
S
O




K
e
y
c
l
o
a
k
 
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
A
M
L
 
2
.
0
 
S
P
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
 
S
S
O
 
f
o
r
 
a
l
l
 
S
A
M
L
-
u
s
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
l
o
w


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
 
a
 
S
A
M
L
-
p
r
o
t
e
c
t
e
d
 
s
e
r
v
i
c
e
 
(
e
.
g
.
,
 
I
L
I
A
S
)


-
 
W
H
E
N
 
t
h
e
 
S
P
 
g
e
n
e
r
a
t
e
s
 
a
n
 
`
A
u
t
h
n
R
e
q
u
e
s
t
`
 
a
n
d
 
r
e
d
i
r
e
c
t
s
 
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


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
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
 
t
h
e
 
u
s
e
r
 
a
n
d
 
g
e
n
e
r
a
t
e
s
 
a
 
`
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
`


-
 
A
N
D
 
P
O
S
T
s
 
t
h
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
o
 
t
h
e
 
S
P
'
s
 
A
C
S
 
U
R
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
 
l
o
g
g
e
d
 
i
n
 
w
i
t
h
o
u
t
 
r
e
-
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
 
D
F
N
-
A
A
I
 
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




K
e
y
c
l
o
a
k
 
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
 
f
e
d
e
r
a
t
e
d
 
i
d
e
n
t
i
t
y
 
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
 
(
G
e
r
m
a
n
 
r
e
s
e
a
r
c
h
 
n
e
t
w
o
r
k


i
d
e
n
t
i
t
y
 
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
)
,
 
l
i
n
k
i
n
g
 
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
a
d
e
m
i
c
 
i
d
e
n
t
i
t
i
e
s
 
t
o
 
l
o
c
a
l
 
K
e
y
c
l
o
a
k


a
c
c
o
u
n
t
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
 
F
e
d
e
r
a
t
e
d
 
u
s
e
r
 
l
o
g
i
n


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
 
w
i
t
h
 
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
 
(
e
.
g
.
,
 
`
b
o
b
@
e
t
h
z
.
c
h
`
)


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
 
s
e
l
e
c
t
s
 
D
F
N
-
A
A
I
 
a
s
 
t
h
e
 
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
 
o
n
 
t
h
e
 
K
e
y
c
l
o
a
k
 
l
o
g
i
n
 
p
a
g
e


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
r
e
d
i
r
e
c
t
s
 
t
o
 
t
h
e
 
D
F
N
-
A
A
I
 
I
d
P


-
 
A
N
D
 
u
p
o
n
 
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
 
t
h
e
 
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
 
i
s
 
l
i
n
k
e
d
 
t
o
 
a
 
l
o
c
a
l
 
K
e
y
c
l
o
a
k
 
a
c
c
o
u
n
t


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
c
c
e
s
s
 
a
l
l
 
a
u
t
h
o
r
i
z
e
d
 
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
 
e
n
d
p
o
i
n
t
s




K
e
y
c
l
o
a
k
 
S
H
A
L
L
 
e
x
p
o
s
e
 
l
i
v
e
n
e
s
s
 
a
n
d
 
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
s
 
a
t
 
`
/
h
e
a
l
t
h
/
l
i
v
e
`
 
a
n
d


`
/
h
e
a
l
t
h
/
r
e
a
d
y
`
 
r
e
s
p
e
c
t
i
v
e
l
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
 
L
i
v
e
n
e
s
s
 
p
r
o
b
e


-
 
G
I
V
E
N
 
K
e
y
c
l
o
a
k
 
i
s
 
r
u
n
n
i
n
g


-
 
W
H
E
N
 
t
h
e
 
l
i
v
e
n
e
s
s
 
p
r
o
b
e
 
h
i
t
s
 
`
/
h
e
a
l
t
h
/
l
i
v
e
`


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
r
e
t
u
r
n
s
 
H
T
T
P
 
2
0
0




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
 
R
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


-
 
G
I
V
E
N
 
K
e
y
c
l
o
a
k
 
i
s
 
r
e
a
d
y
 
t
o
 
a
c
c
e
p
t
 
r
e
q
u
e
s
t
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
 
c
o
n
n
e
c
t
e
d
,
 
r
e
a
l
m
 
l
o
a
d
e
d
)


-
 
W
H
E
N
 
t
h
e
 
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
 
h
i
t
s
 
`
/
h
e
a
l
t
h
/
r
e
a
d
y
`


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
r
e
t
u
r
n
s
 
H
T
T
P
 
2
0
0




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
 
P
u
r
p
o
s
e
 
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
 
S
t
o
r
a
g
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
 
K
e
y
c
l
o
a
k
 
S
e
r
v
e
r
 
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
,
 
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
 
|
 
1
 
(
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
)
 
|
 
R
W
O
 
P
V
C
 
`
d
a
t
a
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
 
(
1
0
G
i
,
 
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
)
 
|


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
 
K
e
y
c
l
o
a
k
 
u
s
e
r
/
s
e
s
s
i
o
n
/
c
l
i
e
n
t
 
d
a
t
a
 
|
 
1
 
(
s
h
a
r
e
d
,
 
N
u
b
u
s
)
 
|
 
R
W
O
 
P
V
C
 
`
d
a
t
a
-
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
`
 
(
1
0
G
i
,
 
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
)
 
|




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
 
K
e
y
c
l
o
a
k
 
S
e
r
v
e
r
 
|
 
1
0
0
1
 
(
k
e
y
c
l
o
a
k
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
 
R
e
a
l
m
 
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
`
 
|


|
 
B
a
s
e
 
U
R
L
 
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
k
e
y
c
l
o
a
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


|
 
T
o
k
e
n
 
e
n
d
p
o
i
n
t
 
|
 
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
/
p
r
o
t
o
c
o
l
/
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
n
e
c
t
/
t
o
k
e
n
`
 
|


|
 
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
 
|
 
1
9
 
p
r
e
-
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
 
|


|
 
S
A
M
L
 
S
P
 
e
n
t
i
t
i
e
s
 
|
 
8
 
p
r
e
-
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
 
|


|
 
H
e
a
l
t
h
 
l
i
v
e
 
|
 
`
/
h
e
a
l
t
h
/
l
i
v
e
`
 
|


|
 
H
e
a
l
t
h
 
r
e
a
d
y
 
|
 
`
/
h
e
a
l
t
h
/
r
e
a
d
y
`
 
|


|
 
D
e
p
l
o
y
 
s
t
a
g
e
 
|
 
`
0
1
0
-
i
n
f
r
a
`
 
|


|
 
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
 
|
 
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
 
(
R
W
O
,
 
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
 
O
I
D
C
 
T
o
k
e
n
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
o
i
d
c
-
t
o
k
e
n
-
e
n
d
p
o
i
n
t
)
 
—
 
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
A
M
L
 
P
O
S
T
 
M
e
t
a
d
a
t
a
 
(
D
F
N
-
A
A
I
)
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
a
m
l
-
p
o
s
t
-
m
e
t
a
d
a
t
a
-
d
f
n
-
a
a
i
-
i
d
p
-
r
e
g
i
s
t
r
a
t
i
o
n
)
 
—
 
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


-
 
[
L
D
A
P
 
B
i
n
d
/
S
e
a
r
c
h
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
l
d
a
p
-
b
i
n
d
-
a
n
d
-
s
e
a
r
c
h
)
 
—
 
u
s
e
r
 
d
i
r
e
c
t
o
r
y
 
l
o
o
k
u
p




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
K
e
y
c
l
o
a
k
 
d
a
t
a
b
a
s
e
)


-
 
O
p
e
n
L
D
A
P
 
(
u
s
e
r
 
d
i
r
e
c
t
o
r
y
,
 
v
i
a
 
N
u
b
u
s
)


-
 
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
 
(
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
 
r
o
u
t
i
n
g
)


-
 
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
 
(
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
 
f
o
r
 
`
k
e
y
c
l
o
a
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
)




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
 
A
l
l
 
2
5
 
s
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
)


-
 
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
n
u
b
u
s
/
)
 
(
I
A
M
 
s
t
a
c
k
,
 
P
o
r
t
a
l
,
 
U
M
S
 
R
E
S
T
 
A
P
I
)


-
 
[
I
n
t
e
r
c
o
m
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
 
(
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
 
S
S
O
 
n
a
v
i
g
a
t
i
o
n
)


-
 
[
P
r
o
v
i
s
i
o
n
i
n
g
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
p
r
o
v
i
s
i
o
n
i
n
g
/
)
 
(
f
e
d
e
r
a
t
e
d
 
a
c
c
o
u
n
t
 
l
i
n
k
i
n
g
)




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
 
C
r
i
t
i
c
a
l
 
(
f
o
u
n
d
a
t
i
o
n
 
f
o
r
 
a
l
l
 
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
9
%
 
(
4
3
.
2
 
m
i
n
 
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
1
0
0
m
s
 
(
O
I
D
C
 
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
)
 
|
 
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
 
h
i
s
t
o
g
r
a
m
 
f
r
o
m
 
K
e
y
c
l
o
a
k
 
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
1
%
 
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
 
f
a
i
l
u
r
e
s
)
 
|
 
F
a
i
l
e
d
 
l
o
g
i
n
 
r
a
t
i
o
 
v
s
 
t
o
t
a
l
 
a
t
t
e
m
p
t
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
 
K
e
y
c
l
o
a
k
 
O
I
D
C
 
e
n
d
p
o
i
n
t
 
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
 
p
r
o
b
e
 
f
a
i
l
u
r
e
s
 
f
o
r
 
2
 
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
 
f
a
i
l
u
r
e
s
 
f
o
r
 
K
e
y
c
l
o
a
k
 
→
 
P
2
 
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
 
5
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
s
 
(
t
y
p
i
c
a
l
 
s
e
m
e
s
t
e
r
 
l
o
a
d
)


-
 
5
0
,
0
0
0
 
O
I
D
C
 
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
s
 
p
e
r
 
h
o
u
r
 
(
p
e
a
k
:
 
e
x
a
m
 
p
e
r
i
o
d
s
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
 
C
r
i
t
i
c
a
l
 
(
R
P
O
:
 
5
 
m
i
n
,
 
R
T
O
:
 
3
0
 
m
i
n
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
K
e
y
c
l
o
a
k
 
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
 
v
i
a
 
A
r
g
o
C
D




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
 
c
l
u
s
t
e
r
 
(
K
e
y
c
l
o
a
k
 
d
a
t
a
b
a
s
e
)
 
-
 
5
 
m
i
n


2
.
 
K
e
y
c
l
o
a
k
 
r
e
a
l
m
 
i
m
p
o
r
t
 
-
 
2
 
m
i
n


3
.
 
V
e
r
i
f
y
 
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
 
a
n
d
 
S
A
M
L
 
S
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
 
3
 
m
i
n




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
 
r
e
-
a
p
p
l
y
 
r
e
c
e
n
t
 
r
e
a
l
m
 
c
h
a
n
g
e
s


-
 
*
*
J
W
T
 
k
e
y
 
m
i
s
m
a
t
c
h
*
*
:
 
R
o
l
l
b
a
c
k
 
K
e
y
c
l
o
a
k
 
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
 
t
o
 
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




-
 
*
*
N
u
b
u
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
:
 
K
e
y
c
l
o
a
k
 
r
e
a
l
m
 
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
 
i
s
 
m
a
n
a
g
e
d
 
b
y
 
N
u
b
u
s
 
u
p
s
t
r
e
a
m
.
 
D
i
r
e
c
t
 
r
e
a
l
m
 
m
o
d
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
 
s
h
o
u
l
d
 
u
s
e
 
U
M
C
,
 
n
o
t
 
K
e
y
c
l
o
a
k
 
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
.


-
 
*
*
T
o
k
e
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
a
t
a
b
a
s
e
 
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
 
J
W
T
 
s
i
g
n
a
t
u
r
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
 
f
a
i
l
s
.
 
A
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
 
r
e
t
u
r
n
 
4
0
1
.
 
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
 
b
a
c
k
u
p
 
(
s
e
e
 
[
O
p
e
r
a
t
i
o
n
s
 
r
u
n
b
o
o
k
]
(
.
.
/
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
o
p
e
r
a
t
i
o
n
s
/
)
)
.


-
 
*
*
S
e
s
s
i
o
n
 
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
 
o
n
 
F
L
U
S
H
A
L
L
*
*
:
 
I
f
 
R
e
d
i
s
 
i
s
 
f
l
u
s
h
e
d
 
(
`
F
L
U
S
H
A
L
L
`
)
,
 
a
l
l
 
K
e
y
c
l
o
a
k
 
s
e
s
s
i
o
n
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
,
 
l
o
g
g
i
n
g
 
o
u
t
 
a
l
l
 
u
s
e
r
s
.

