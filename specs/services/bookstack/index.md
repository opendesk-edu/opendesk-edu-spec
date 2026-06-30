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
 
B
o
o
k
S
t
a
c
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




S
t
r
u
c
t
u
r
e
d
 
k
n
o
w
l
e
d
g
e
 
b
a
s
e
 
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
 
b
o
o
k
/
c
h
a
p
t
e
r
/
p
a
g
e
 
h
i
e
r
a
r
c
h
y
 
f
o
r
 
c
o
u
r
s
e


m
a
t
e
r
i
a
l
s
,
 
S
O
P
s
,
 
a
n
d
 
d
o
c
u
m
e
n
t
a
t
i
o
n
.
 
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
e
d
 
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
 
(
K
e
y
c
l
o
a
k
 
a
s


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
)
 
w
i
t
h
 
M
a
r
i
a
D
B
 
b
a
c
k
e
n
d
.
 
S
u
p
p
o
r
t
s
 
r
i
c
h
 
t
e
x
t
 
e
d
i
t
i
n
g
,
 
i
m
a
g
e
 
u
p
l
o
a
d
s
,


W
Y
S
I
W
Y
G
 
e
d
i
t
i
n
g
,
 
a
n
d
 
r
o
l
e
-
b
a
s
e
d
 
a
c
c
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
 
(
A
d
m
i
n
,
 
E
d
i
t
o
r
,
 
V
i
e
w
e
r
)
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
 
B
o
o
k
S
t
a
c
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
 
M
a
r
i
a
D
B
 
b
a
c
k
e
n
d
,
 
r
i
c
h
 
t
e
x
t
 
e
d
i
t
i
n
g
,
 
r
o
l
e
-
b
a
s
e
d
 
a
c
c
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
 
(
A
d
m
i
n
/
E
d
i
t
o
r
/
V
i
e
w
e
r
)
,
 
B
o
o
k
→
C
h
a
p
t
e
r
→
P
a
g
e
 
h
i
e
r
a
r
c
h
y


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
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
p
l
a
t
f
o
r
m
s
 
(
t
o
B
i
t
,
 
D
o
c
u
s
a
u
r
u
s
,
 
e
t
c
.
)
,
 
m
u
l
t
i
-
s
i
t
e
 
k
n
o
w
l
e
d
g
e
 
b
a
s
e
s
 
(
s
i
n
g
l
e
-
t
e
n
a
n
t
 
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
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
p
l
a
t
f
o
r
m
s
 
(
u
s
e
 
t
o
B
i
t
,
 
D
o
c
u
s
a
u
r
u
s
,
 
e
t
c
.
)


-
 
M
u
l
t
i
-
s
i
t
e
 
k
n
o
w
l
e
d
g
e
 
b
a
s
e
s
 
(
s
i
n
g
l
e
-
t
e
n
a
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
 
B
o
o
k
 
→
 
C
h
a
p
t
e
r
 
→
 
P
a
g
e
 
h
i
e
r
a
r
c
h
y




B
o
o
k
S
t
a
c
k
 
c
o
n
t
e
n
t
 
S
H
A
L
L
 
b
e
 
o
r
g
a
n
i
z
e
d
 
i
n
 
a
 
t
h
r
e
e
-
l
e
v
e
l
 
h
i
e
r
a
r
c
h
y
:


-
 
*
*
B
o
o
k
s
*
*
 
(
t
o
p
 
l
e
v
e
l
,
 
o
r
g
a
n
i
z
e
d
 
b
y
 
t
o
p
i
c
)


-
 
*
*
C
h
a
p
t
e
r
s
*
*
 
(
w
i
t
h
i
n
 
a
 
b
o
o
k
,
 
o
r
g
a
n
i
z
e
d
 
b
y
 
m
o
d
u
l
e
)


-
 
*
*
P
a
g
e
s
*
*
 
(
w
i
t
h
i
n
 
a
 
c
h
a
p
t
e
r
,
 
i
n
d
i
v
i
d
u
a
l
 
c
o
n
t
e
n
t
 
i
t
e
m
s
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
 
U
s
e
r
 
b
r
o
w
s
e
s
 
k
n
o
w
l
e
d
g
e
 
b
a
s
e


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
 
B
o
o
k
S
t
a
c
k
 
a
c
c
e
s
s
 
(
r
o
l
e
 
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
-
v
i
e
w
e
r
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
 
n
a
v
i
g
a
t
e
s
 
t
o
 
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
 
v
i
a
 
S
A
M
L
 
S
S
O
 
(
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
t
s
 
a
s
 
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
)


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
 
b
r
o
w
s
e
 
b
o
o
k
s
,
 
e
x
p
a
n
d
 
c
h
a
p
t
e
r
s
,
 
a
n
d
 
v
i
e
w
 
p
a
g
e
s


-
 
A
N
D
 
t
h
e
 
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
 
s
i
d
e
b
a
r
 
s
h
o
w
s
 
t
h
e
 
f
u
l
l
 
c
o
n
t
e
n
t
 
t
r
e
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
 
E
d
i
t
o
r
 
c
r
e
a
t
e
s
 
c
o
n
t
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
-
e
d
i
t
o
r
`
 
r
o
l
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
 
b
o
o
k


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
 
c
a
n
 
a
d
d
 
c
h
a
p
t
e
r
s
 
t
o
 
t
h
e
 
b
o
o
k


-
 
A
N
D
 
p
a
g
e
s
 
c
a
n
 
b
e
 
a
d
d
e
d
 
t
o
 
c
h
a
p
t
e
r
s


-
 
A
N
D
 
t
h
e
 
h
i
e
r
a
r
c
h
y
 
i
s
 
p
r
e
s
e
r
v
e
d
 
i
n
 
M
a
r
i
a
D
B




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
 
v
i
a
 
K
e
y
c
l
o
a
k




B
o
o
k
S
t
a
c
k
 
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
,
 
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
 
a
c
t
i
n
g
 
a
s
 
t
h
e
 
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
 
(
S
P
)
.




T
h
e
 
S
A
M
L
 
e
n
t
i
t
y
 
I
D
 
f
o
r
 
B
o
o
k
S
t
a
c
k
 
i
s


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
 
S
P
 
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
 
I
d
P


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
 
n
a
v
i
g
a
t
i
n
g
 
t
o
 
B
o
o
k
S
t
a
c
k


-
 
W
H
E
N
 
B
o
o
k
S
t
a
c
k
'
s
 
S
A
M
L
 
S
P
 
i
n
i
t
i
a
t
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
 
(
`
/
s
a
m
l
2
/
l
o
g
i
n
`
)


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
 
S
S
O


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
 
r
e
t
u
r
n
s
 
a
 
S
A
M
L
 
a
s
s
e
r
t
i
o
n
 
w
i
t
h
 
B
o
o
k
S
t
a
c
k
 
c
l
a
i
m
s


-
 
A
N
D
 
B
o
o
k
S
t
a
c
k
 
m
a
p
s
 
t
h
e
 
S
A
M
L
 
a
s
s
e
r
t
i
o
n
 
t
o
 
a
 
l
o
c
a
l
 
u
s
e
r
 
(
a
u
t
o
-
p
r
o
v
i
s
i
o
n
e
d
)


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
 
m
a
n
u
a
l
 
a
c
c
o
u
n
t
 
c
r
e
a
t
i
o
n




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
 
G
I
V
E
N
 
a
 
S
A
M
L
 
a
s
s
e
r
t
i
o
n
 
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


-
 
T
H
E
N
 
B
o
o
k
S
t
a
c
k
 
S
H
A
L
L
 
e
x
t
r
a
c
t
 
`
m
a
i
l
`
 
(
e
m
a
i
l
)


-
 
A
N
D
 
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
 
(
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
)


-
 
A
N
D
 
m
a
p
 
t
h
e
s
e
 
t
o
 
B
o
o
k
S
t
a
c
k
 
u
s
e
r
 
p
r
o
p
e
r
t
i
e
s


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
 
a
s
s
i
g
n
e
d
 
t
h
e
 
d
e
f
a
u
l
t
 
r
o
l
e
 
(
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
-
v
i
e
w
e
r
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
 
P
e
r
s
i
s
t
e
n
t
 
M
a
r
i
a
D
B
 
s
t
o
r
a
g
e




B
o
o
k
S
t
a
c
k
 
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
 
c
o
n
t
e
n
t
 
(
b
o
o
k
s
,
 
c
h
a
p
t
e
r
s
,
 
p
a
g
e
s
,
 
r
o
l
e
s
,
 
a
u
d
i
t
 
l
o
g
s
)
 
i
n


M
a
r
i
a
D
B
 
(
N
O
T
 
t
h
e
 
s
h
a
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
 
c
l
u
s
t
e
r
 
—
 
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
)
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
o
n
t
e
n
t
 
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
 
B
o
o
k
S
t
a
c
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
 
w
i
t
h
 
M
a
r
i
a
D
B


-
 
W
H
E
N
 
a
n
 
e
d
i
t
o
r
 
c
r
e
a
t
e
s
 
o
r
 
e
d
i
t
s
 
a
 
p
a
g
e


-
 
T
H
E
N
 
c
o
n
t
e
n
t
 
(
H
T
M
L
,
 
i
m
a
g
e
s
 
v
i
a
 
B
L
O
B
)
 
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
 
M
a
r
i
a
D
B
 
D
B


-
 
A
N
D
 
p
e
r
s
i
s
t
s
 
a
c
r
o
s
s
 
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
,
 
u
p
g
r
a
d
e
s
,
 
a
n
d
 
d
a
t
a
b
a
s
e
 
m
i
g
r
a
t
i
o
n
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
i
c
h
 
t
e
x
t
 
/
 
W
Y
S
I
W
Y
G
 
e
d
i
t
i
n
g




B
o
o
k
S
t
a
c
k
 
e
d
i
t
o
r
s
 
S
H
A
L
L
 
u
s
e
 
a
 
W
Y
S
I
W
Y
G
 
H
T
M
L
 
e
d
i
t
o
r
 
(
s
u
m
m
e
r
n
o
t
e
 
o
r
 
s
i
m
i
l
a
r
)


f
o
r
 
p
a
g
e
 
e
d
i
t
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
 
R
i
c
h
 
t
e
x
t
 
e
d
i
t
i
n
g


-
 
G
I
V
E
N
 
a
n
 
e
d
i
t
o
r
 
c
r
e
a
t
i
n
g
 
a
 
n
e
w
 
p
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
 
e
d
i
t
o
r
 
o
p
e
n
s
 
t
h
e
 
p
a
g
e
 
e
d
i
t
o
r


-
 
T
H
E
N
 
a
 
W
Y
S
I
W
Y
G
 
e
d
i
t
o
r
 
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


-
 
A
N
D
 
s
u
p
p
o
r
t
s
 
f
o
r
m
a
t
t
i
n
g
:


 
 
-
 
H
e
a
d
i
n
g
s
 
(
H
1
,
 
H
2
,
 
H
3
)


 
 
-
 
B
o
l
d
,
 
i
t
a
l
i
c
,
 
u
n
d
e
r
l
i
n
e


 
 
-
 
L
i
s
t
s
 
(
o
r
d
e
r
e
d
,
 
u
n
o
r
d
e
r
e
d
)


 
 
-
 
L
i
n
k
s
,
 
c
o
d
e
 
b
l
o
c
k
s


 
 
-
 
I
m
a
g
e
 
u
p
l
o
a
d
s
 
(
s
t
o
r
e
d
 
a
s
 
B
L
O
B
 
i
n
 
M
a
r
i
a
D
B
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
 
R
o
l
e
-
b
a
s
e
d
 
a
c
c
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




B
o
o
k
S
t
a
c
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
 
t
h
r
e
e
 
b
u
i
l
t
-
i
n
 
r
o
l
e
s
:


-
 
*
*
A
d
m
i
n
*
*
:
 
F
u
l
l
 
c
o
n
t
r
o
l
,
 
u
s
e
r
 
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
 
s
y
s
t
e
m
 
s
e
t
t
i
n
g
s


-
 
*
*
E
d
i
t
o
r
*
*
:
 
C
r
e
a
t
e
 
a
n
d
 
e
d
i
t
 
b
o
o
k
s
/
c
h
a
p
t
e
r
s
/
p
a
g
e
s


-
 
*
*
V
i
e
w
e
r
*
*
:
 
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




S
A
M
L
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
e
d
 
u
s
e
r
s
 
a
r
e
 
a
s
s
i
g
n
e
d
 
a
 
d
e
f
a
u
l
t
 
r
o
l
e
 
o
n
 
f
i
r
s
t
 
l
o
g
i
n
 
(
t
y
p
i
c
a
l
l
y


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
-
v
i
e
w
e
r
`
)
,
 
a
d
j
u
s
t
a
b
l
e
 
v
i
a
 
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
 
S
A
M
L
 
r
o
l
e
 
c
l
a
i
m
 
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
:
r
o
l
e
=
a
d
m
i
n
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
 
l
o
g
s
 
i
n


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
 
h
a
s
 
f
u
l
l
 
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
i
v
e
 
a
c
c
e
s
s


-
 
A
N
D
 
c
a
n
 
m
a
n
a
g
e
 
u
s
e
r
s
 
a
n
d
 
r
o
l
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
o
-
p
r
o
v
i
s
i
o
n
e
d
 
v
i
e
w
e
r


-
 
G
I
V
E
N
 
a
 
n
e
w
 
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
 
S
A
M
L
 
f
o
r
 
t
h
e
 
f
i
r
s
t
 
t
i
m
e


-
 
W
H
E
N
 
n
o
 
e
x
p
l
i
c
i
t
 
r
o
l
e
 
c
l
a
i
m
 
i
s
 
p
r
e
s
e
n
t


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
u
t
o
-
p
r
o
v
i
s
i
o
n
e
d
 
a
s
 
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
-
v
i
e
w
e
r
`


-
 
A
N
D
 
c
a
n
 
r
e
a
d
 
b
u
t
 
n
o
t
 
e
d
i
t
 
c
o
n
t
e
n
t




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
e
b
 
|
 
P
H
P
-
F
P
M
 
b
a
c
k
e
n
d
 
(
n
g
i
n
x
/
A
p
a
c
h
e
)
 
|
 
1
 
|
 
R
W
O
 
P
V
C
 
(
M
a
r
i
a
D
B
 
d
a
t
a
)
 
|


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
o
n
t
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
 
(
2
G
i
)
 
|


|
 
C
h
a
r
t
 
|
 
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
c
h
a
r
t
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
`
 
(
l
o
c
a
l
 
c
h
a
r
t
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
e
b
 
|
 
3
3
 
(
w
w
w
-
d
a
t
a
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


|
 
M
a
r
i
a
D
B
 
|
 
9
9
9
 
(
m
y
s
q
l
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
 
S
A
M
L
 
e
n
t
i
t
y
 
I
D
 
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


|
 
S
A
M
L
 
S
P
 
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
s
a
m
l
2
/
l
o
g
i
n
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
 
S
A
M
L
 
I
d
P
 
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
s
a
m
l
`
 
|


|
 
M
a
r
i
a
D
B
 
d
a
t
a
b
a
s
e
 
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


|
 
M
a
r
i
a
D
B
 
u
s
e
r
 
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


|
 
P
V
C
 
s
i
z
e
 
|
 
2
G
i
 
(
m
a
r
i
a
d
b
 
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




-
 
*
*
I
m
a
g
e
s
 
i
n
 
M
a
r
i
a
D
B
*
*
:
 
B
o
o
k
S
t
a
c
k
 
s
t
o
r
e
s
 
u
p
l
o
a
d
e
d
 
i
m
a
g
e
s
 
a
s
 
B
L
O
B
 
o
b
j
e
c
t
s
 
i
n


 
 
M
a
r
i
a
D
B
 
(
n
o
t
 
i
n
 
S
3
)
.
 
T
h
i
s
 
i
s
 
a
c
c
e
p
t
a
b
l
e
 
f
o
r
 
s
m
a
l
l
 
K
B
 
i
m
a
g
e
s
 
b
u
t
 
n
o
t
 
f
o
r


 
 
l
a
r
g
e
 
f
i
l
e
s
 
(
>
1
0
M
B
)
.


-
 
*
*
S
A
M
L
 
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
*
*
:
 
B
o
o
k
S
t
a
c
k
 
u
s
e
s
 
S
A
M
L
 
S
P
 
t
h
a
t
 
p
o
i
n
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
 
S
A
M
L
 
I
d
P
.


 
 
B
o
o
k
S
t
a
c
k
 
d
o
e
s
 
N
O
T
 
d
i
r
e
c
t
l
y
 
i
n
t
e
g
r
a
t
e
 
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
 
O
I
D
C
 
—
 
i
t
 
u
s
e
s
 
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
'
s
 
S
A
M
L
 
e
n
d
p
o
i
n
t
.




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




K
e
y
c
l
o
a
k
 
(
S
A
M
L
 
2
.
0
 
I
d
P
,
 
a
c
t
i
n
g
 
a
s
 
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
)
,
 
M
a
r
i
a
D
B
 
(
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
)
,


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
 
(
t
i
l
e
,
 
r
o
l
e
 
m
a
p
p
i
n
g
 
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
-
e
d
i
t
o
r
`
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
 
S
t
a
n
d
a
r
d
 
(
d
o
c
u
m
e
n
t
a
t
i
o
n
 
p
l
a
t
f
o
r
m
,
 
n
o
t
 
c
r
i
t
i
c
a
l
 
f
o
r
 
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
0
%
 
(
7
.
2
 
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
4
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
 
A
p
a
c
h
e
 
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
2
0
0
m
s
 
(
s
e
a
r
c
h
)
 
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
 
s
e
a
r
c
h
 
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
1
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
 
A
p
a
c
h
e
 
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
S
S
O
 
S
u
c
c
e
s
s
*
*
 
|
 
>
9
9
%
 
(
S
A
M
L
 
a
u
t
h
)
 
|
 
K
e
y
c
l
o
a
k
 
e
v
e
n
t
 
l
o
g
 
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
 
B
o
o
k
S
t
a
c
k
 
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
3
 
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
2
 
a
l
e
r
t


-
 
D
i
s
k
 
u
s
a
g
e
 
>
8
5
%
 
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
 
5
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
 
1
0
,
0
0
0
 
p
a
g
e
s
 
a
c
c
e
s
s
e
d
 
p
e
r
 
d
a
y


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
 
r
e
a
d
e
r
s


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
 
2
 
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
 
2
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
 
S
t
a
n
d
a
r
d
 
(
R
P
O
:
 
4
 
h
o
u
r
s
,
 
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
M
a
r
i
a
D
B
)
:
 
D
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


-
 
*
*
C
o
n
t
e
n
t
*
*
:
 
I
n
c
l
u
d
e
d
 
i
n
 
d
a
t
a
b
a
s
e
 
b
a
c
k
u
p




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
 
M
a
r
i
a
D
B
 
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
 
1
5
 
m
i
n


2
.
 
B
o
o
k
S
t
a
c
k
 
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
0
 
m
i
n


3
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


4
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
 
c
r
e
a
t
e
 
p
a
g
e
,
 
s
e
a
r
c
h
)
 
-
 
1
0
 
m
i
n


5
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
 
B
o
o
k
s
,
 
c
h
a
p
t
e
r
s
,
 
a
n
d
 
p
a
g
e
s


-
 
U
s
e
r
 
a
c
c
o
u
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
 
I
m
a
g
e
s
 
a
n
d
 
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
s
t
o
r
e
d
 
i
n
 
d
a
t
a
b
a
s
e
 
o
r
 
f
i
l
e
s
y
s
t
e
m
)


-
 
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
 
b
a
c
k
u
p
,
 
v
e
r
i
f
y
 
c
o
n
t
e
n
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
,
 
v
e
r
i
f
y
 
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

