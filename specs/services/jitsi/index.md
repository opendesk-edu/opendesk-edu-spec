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
 
J
i
t
s
i




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
p
e
n
-
s
o
u
r
c
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
 
f
o
r
 
o
n
l
i
n
e
 
m
e
e
t
i
n
g
s
,
 
s
u
p
p
o
r
t
i
n
g
 
s
c
r
e
e
n
 
s
h
a
r
i
n
g
,


S
I
P
 
d
i
a
l
-
i
n
 
v
i
a
 
J
i
g
a
s
i
,
 
a
n
d
 
s
e
s
s
i
o
n
 
r
e
c
o
r
d
i
n
g
 
v
i
a
 
J
i
b
r
i
.
 
U
s
e
s
 
a
 
c
u
s
t
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
 
a
d
a
p
t
e
r
 
f
o
r
 
O
I
D
C
 
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
 
w
i
t
h
 
M
a
t
r
i
x
 
U
s
e
r
 
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
 
S
e
r
v
i
c
e


(
U
V
S
)
 
f
o
r
 
s
e
c
u
r
e
 
m
e
e
t
i
n
g
 
r
o
o
m
 
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
 
J
i
t
s
i
 
M
e
e
t
 
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
 
W
e
b
R
T
C
-
b
a
s
e
d
 
m
e
e
t
i
n
g
s
,
 
O
I
D
C
 
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
 
c
u
s
t
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
 
a
d
a
p
t
e
r
,
 
M
a
t
r
i
x
 
U
V
S
 
m
e
e
t
i
n
g
 
r
o
o
m
 
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
,
 
S
I
P
 
d
i
a
l
-
i
n
 
v
i
a
 
J
i
g
a
s
i
,
 
s
e
s
s
i
o
n
 
r
e
c
o
r
d
i
n
g
 
v
i
a
 
J
i
b
r
i


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
 
(
s
e
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
)
,
 
T
U
R
N
 
s
e
r
v
e
r
 
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
e
x
t
e
r
n
a
l
 
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
,
 
S
I
P
 
s
e
r
v
e
r
/
I
V
R
 
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
e
x
t
e
r
n
a
l
 
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
,
 
G
P
U
-
a
c
c
e
l
e
r
a
t
e
d
 
f
e
a
t
u
r
e
s




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
 
(
s
e
e
 
`
.
.
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
`
)


-
 
T
U
R
N
 
s
e
r
v
e
r
 
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
e
x
t
e
r
n
a
l
 
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
 
S
I
P
 
s
e
r
v
e
r
 
/
 
I
V
R
 
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
e
x
t
e
r
n
a
l
 
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
 
O
I
D
C
 
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
 
a
d
a
p
t
e
r




J
i
t
s
i
 
M
e
e
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
 
a
l
l
 
p
a
r
t
i
c
i
p
a
n
t
s
 
v
i
a
 
O
I
D
C
 
u
s
i
n
g
 
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
a
p
t
e
r
 
s
i
d
e
c
a
r
.




T
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
 
c
l
i
e
n
t
 
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
 
S
H
A
L
L
 
b
e
 
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
 
i
n
 
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


w
i
t
h
 
s
c
o
p
e
 
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
,
 
r
o
l
e
 
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
a
c
c
e
s
s
-
c
o
n
t
r
o
l
`
,
 
a
n
d


g
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
 
`
m
a
n
a
g
e
d
-
b
y
-
a
t
t
r
i
b
u
t
e
-
V
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
 
u
s
e
r
 
j
o
i
n
s
 
m
e
e
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
 
c
l
i
c
k
i
n
g
 
a
 
J
i
t
s
i
 
m
e
e
t
i
n
g
 
l
i
n
k


-
 
W
H
E
N
 
t
h
e
 
J
i
t
s
i
 
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
a
p
t
e
r
 
v
a
l
i
d
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
'
s
 
O
I
D
C
 
t
o
k
e
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
 
i
s
 
g
r
a
n
t
e
d
 
a
c
c
e
s
s
 
t
o
 
t
h
e
 
m
e
e
t
i
n
g


-
 
A
N
D
 
c
a
n
 
p
a
r
t
i
c
i
p
a
t
e
 
i
n
 
a
u
d
i
o
/
v
i
d
e
o




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
 
a
c
c
e
s
s
 
d
e
n
i
e
d


-
 
G
I
V
E
N
 
a
n
 
u
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
 
a
t
t
e
m
p
t
i
n
g
 
t
o
 
a
c
c
e
s
s
 
J
i
t
s
i
 
M
e
e
t


-
 
W
H
E
N
 
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
 
a
d
a
p
t
e
r
 
p
r
o
c
e
s
s
e
s
 
t
h
e
 
r
e
q
u
e
s
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
 
l
o
g
i
n


-
 
A
N
D
 
n
o
 
m
e
e
t
i
n
g
 
a
c
c
e
s
s
 
i
s
 
g
r
a
n
t
e
d
 
w
i
t
h
o
u
t
 
v
a
l
i
d
 
O
I
D
C
 
s
e
s
s
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
 
M
a
t
r
i
x
 
U
s
e
r
 
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
 
S
e
r
v
i
c
e
 
(
U
V
S
)
 
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




T
h
e
 
P
r
o
s
o
d
y
 
X
M
P
P
 
s
e
r
v
e
r
 
S
H
A
L
L
 
v
a
l
i
d
a
t
e
 
J
W
T
 
t
o
k
e
n
s
 
v
i
a
 
E
l
e
m
e
n
t
'
s
 
M
a
t
r
i
x
 
U
s
e
r


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
 
S
e
r
v
i
c
e
 
t
o
 
e
n
s
u
r
e
 
o
n
l
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
e
d
 
M
a
t
r
i
x
 
u
s
e
r
s
 
c
a
n
 
c
r
e
a
t
e
 
o
r


j
o
i
n
 
m
e
e
t
i
n
g
 
r
o
o
m
s
.




`
A
U
T
H
_
T
Y
P
E
`
 
S
H
A
L
L
 
b
e
 
s
e
t
 
t
o
 
`
h
y
b
r
i
d
_
m
a
t
r
i
x
_
t
o
k
e
n
`
 
t
o
 
e
n
a
b
l
e
 
b
o
t
h
 
J
W
T
 
a
p
p


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
 
M
a
t
r
i
x
 
U
V
S
 
p
o
w
e
r
-
l
e
v
e
l
 
s
y
n
c
.




`
M
A
T
R
I
X
_
U
V
S
_
S
Y
N
C
_
P
O
W
E
R
_
L
E
V
E
L
S
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
e
`
 
t
o
 
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
e
 
M
a
t
r
i
x
 
p
o
w
e
r


l
e
v
e
l
s
 
w
i
t
h
 
P
r
o
s
o
d
y
 
r
o
o
m
 
o
w
n
e
r
s
h
i
p
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
e
t
i
n
g
 
r
o
o
m
 
c
r
e
a
t
i
o
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
 
v
i
a
 
U
V
S


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
 
M
a
t
r
i
x
 
u
s
e
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
 
J
i
t
s
i
 
m
e
e
t
i
n
g
 
r
o
o
m


-
 
W
H
E
N
 
P
r
o
s
o
d
y
 
v
a
l
i
d
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
 
v
i
a
 
M
a
t
r
i
x
 
U
V
S


-
 
T
H
E
N
 
t
h
e
 
r
o
o
m
 
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
 
t
h
e
 
u
s
e
r
 
a
s
 
m
o
d
e
r
a
t
o
r


-
 
A
N
D
 
p
o
w
e
r
 
l
e
v
e
l
s
 
a
r
e
 
s
y
n
c
e
d
 
f
r
o
m
 
M
a
t
r
i
x




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
 
V
i
d
e
o
 
b
r
i
d
g
e
 
(
J
V
B
)
 
w
i
t
h
 
p
u
b
l
i
c
 
I
P
 
p
a
t
c
h
i
n
g




J
i
t
s
i
 
V
i
d
e
o
 
B
r
i
d
g
e
 
(
J
V
B
)
 
S
H
A
L
L
 
h
a
n
d
l
e
 
m
e
d
i
a
 
r
o
u
t
i
n
g
 
w
i
t
h
 
a
 
p
o
s
t
-
i
n
s
t
a
l
l
 
p
a
t
c
h


j
o
b
 
(
`
p
a
t
c
h
J
V
B
`
)
 
t
h
a
t
 
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
 
J
V
B
 
p
u
b
l
i
c
 
I
P
 
t
o
 
m
a
t
c
h
 
t
h
e
 
i
n
g
r
e
s
s
 
g
a
t
e
w
a
y


I
P
.




T
h
e
 
p
a
t
c
h
 
j
o
b
 
S
H
A
L
L
 
h
a
v
e
 
a
 
`
b
a
c
k
o
f
f
L
i
m
i
t
`
 
o
f
 
1
2
 
a
n
d
 
r
u
n
 
w
i
t
h
 
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


s
e
c
u
r
i
t
y
 
c
o
n
t
e
x
t
 
(
u
i
d
 
1
0
0
1
,
 
n
o
n
-
r
o
o
t
,
 
A
L
L
 
c
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
 
d
r
o
p
p
e
d
)
.




J
V
B
 
S
H
A
L
L
 
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
 
w
i
t
h
 
1
 
r
e
p
l
i
c
a
 
b
y
 
d
e
f
a
u
l
t
 
a
n
d
 
e
x
p
o
s
e
 
i
t
s
 
s
e
r
v
i
c
e
 
o
n
 
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
 
p
o
r
t
 
f
o
r
 
m
e
d
i
a
 
t
r
a
f
f
i
c
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
 
J
V
B
 
m
e
d
i
a
 
t
r
a
f
f
i
c
 
r
o
u
t
e
d
 
c
o
r
r
e
c
t
l
y


-
 
G
I
V
E
N
 
a
 
J
i
t
s
i
 
m
e
e
t
i
n
g
 
w
i
t
h
 
m
u
l
t
i
p
l
e
 
p
a
r
t
i
c
i
p
a
n
t
s


-
 
W
H
E
N
 
t
h
e
 
p
a
t
c
h
J
V
B
 
j
o
b
 
h
a
s
 
c
o
m
p
l
e
t
e
d
 
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


-
 
T
H
E
N
 
J
V
B
 
a
d
v
e
r
t
i
s
e
s
 
t
h
e
 
c
o
r
r
e
c
t
 
p
u
b
l
i
c
 
I
P
 
f
o
r
 
m
e
d
i
a
 
r
o
u
t
i
n
g


-
 
A
N
D
 
p
a
r
t
i
c
i
p
a
n
t
s
 
c
a
n
 
e
x
c
h
a
n
g
e
 
a
u
d
i
o
/
v
i
d
e
o
 
s
t
r
e
a
m
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
 
J
i
c
o
f
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
e
 
f
o
c
u
s




J
i
c
o
f
o
 
S
H
A
L
L
 
a
l
l
o
c
a
t
e
 
J
V
B
 
r
e
s
o
u
r
c
e
s
 
a
n
d
 
m
a
n
a
g
e
 
c
o
n
f
e
r
e
n
c
e
 
f
o
c
u
s
 
f
o
r
 
e
a
c
h


m
e
e
t
i
n
g
.
 
I
t
 
S
H
A
L
L
 
r
u
n
 
a
s
 
a
 
J
a
v
a
 
p
r
o
c
e
s
s
 
w
i
t
h
 
3
G
B
 
h
e
a
p
 
m
e
m
o
r
y
 
a
n
d
 
c
o
n
n
e
c
t
 
t
o


P
r
o
s
o
d
y
 
v
i
a
 
X
M
P
P
 
u
s
i
n
g
 
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
 
c
o
m
p
o
n
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
f
e
r
e
n
c
e
 
a
l
l
o
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
 
a
 
u
s
e
r
 
s
t
a
r
t
i
n
g
 
a
 
n
e
w
 
J
i
t
s
i
 
m
e
e
t
i
n
g


-
 
W
H
E
N
 
J
i
c
o
f
o
 
r
e
c
e
i
v
e
s
 
t
h
e
 
r
o
o
m
 
c
r
e
a
t
i
o
n
 
r
e
q
u
e
s
t
 
f
r
o
m
 
P
r
o
s
o
d
y


-
 
T
H
E
N
 
J
i
c
o
f
o
 
a
l
l
o
c
a
t
e
s
 
J
V
B
 
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
 
t
h
e
 
c
o
n
f
e
r
e
n
c
e


-
 
A
N
D
 
a
s
s
i
g
n
s
 
t
h
e
 
u
s
e
r
 
a
s
 
t
h
e
 
c
o
n
f
e
r
e
n
c
e
 
m
o
d
e
r
a
t
o
r




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
 
T
U
R
N
 
s
e
r
v
e
r
 
f
o
r
 
N
A
T
 
t
r
a
v
e
r
s
a
l




J
i
t
s
i
 
M
e
e
t
 
S
H
A
L
L
 
u
s
e
 
a
n
 
e
x
t
e
r
n
a
l
 
T
U
R
N
 
s
e
r
v
e
r
 
f
o
r
 
W
e
b
R
T
C
 
N
A
T
 
t
r
a
v
e
r
s
a
l
.


`
T
U
R
N
_
E
N
A
B
L
E
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
e
`
.




P
r
o
s
o
d
y
 
S
H
A
L
L
 
b
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
 
w
i
t
h
 
b
o
t
h
 
T
U
R
N
 
(
U
D
P
,
 
p
o
r
t
 
3
4
7
8
)
 
a
n
d
 
T
U
R
N
S
 
(
T
L
S
,


p
o
r
t
 
5
3
4
9
)
 
e
n
d
p
o
i
n
t
s
,
 
w
i
t
h
 
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
o
u
r
c
e
d
 
f
r
o
m
 
e
n
v
i
r
o
n
m
e
n
t
 
v
a
r
i
a
b
l
e


`
T
U
R
N
_
C
R
E
D
E
N
T
I
A
L
S
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
 
P
a
r
t
i
c
i
p
a
n
t
 
b
e
h
i
n
d
 
N
A
T
 
j
o
i
n
s
 
m
e
e
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
 
p
a
r
t
i
c
i
p
a
n
t
 
b
e
h
i
n
d
 
a
 
s
y
m
m
e
t
r
i
c
 
N
A
T


-
 
W
H
E
N
 
t
h
e
 
p
a
r
t
i
c
i
p
a
n
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
 
t
h
e
 
m
e
e
t
i
n
g


-
 
T
H
E
N
 
T
U
R
N
 
r
e
l
a
y
 
i
s
 
u
s
e
d
 
f
o
r
 
m
e
d
i
a
 
t
r
a
n
s
p
o
r
t


-
 
A
N
D
 
t
h
e
 
p
a
r
t
i
c
i
p
a
n
t
 
c
a
n
 
s
e
n
d
/
r
e
c
e
i
v
e
 
a
u
d
i
o
 
a
n
d
 
v
i
d
e
o




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
I
P
 
d
i
a
l
-
i
n
 
v
i
a
 
J
i
g
a
s
i
 
(
o
p
t
i
o
n
a
l
)




J
i
g
a
s
i
 
S
H
A
L
L
 
p
r
o
v
i
d
e
 
S
I
P
 
g
a
t
e
w
a
y
 
f
u
n
c
t
i
o
n
a
l
i
t
y
 
f
o
r
 
p
h
o
n
e
 
d
i
a
l
-
i
n
 
w
h
e
n


`
j
i
g
a
s
i
.
e
n
a
b
l
e
d
`
 
i
s
 
`
t
r
u
e
`
 
(
d
e
f
a
u
l
t
:
 
`
f
a
l
s
e
`
)
.




W
h
e
n
 
e
n
a
b
l
e
d
,
 
J
i
g
a
s
i
 
S
H
A
L
L
 
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
I
P
 
s
e
r
v
e
r
 
(
T
C
P
,
 
p
o
r
t


5
0
6
0
)
 
a
n
d
 
m
a
p
 
i
n
c
o
m
i
n
g
 
S
I
P
 
c
a
l
l
s
 
t
o
 
J
i
t
s
i
 
m
e
e
t
i
n
g
 
r
o
o
m
s
 
u
s
i
n
g
 
t
h
e


`
J
i
t
s
i
-
C
o
n
f
e
r
e
n
c
e
-
R
o
o
m
`
 
S
I
P
 
h
e
a
d
e
r
.




J
i
g
a
s
i
 
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
e
 
c
o
n
f
e
r
e
n
c
e
 
m
a
p
p
e
r
 
f
l
o
w
 
f
o
r
 
P
I
N
-
b
a
s
e
d
 
r
o
o
m
 
e
n
t
r
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
 
P
h
o
n
e
 
p
a
r
t
i
c
i
p
a
n
t
 
j
o
i
n
s
 
v
i
a
 
S
I
P


-
 
G
I
V
E
N
 
J
i
g
a
s
i
 
e
n
a
b
l
e
d
 
w
i
t
h
 
a
 
S
I
P
 
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
 
W
H
E
N
 
a
 
p
a
r
t
i
c
i
p
a
n
t
 
d
i
a
l
s
 
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
 
p
h
o
n
e
 
n
u
m
b
e
r
 
a
n
d
 
e
n
t
e
r
s
 
t
h
e
 
r
o
o
m
 
P
I
N


-
 
T
H
E
N
 
t
h
e
 
I
V
R
 
r
e
s
o
l
v
e
s
 
t
h
e
 
P
I
N
 
t
o
 
a
 
m
e
e
t
i
n
g
 
r
o
o
m
 
v
i
a
 
t
h
e
 
c
o
n
f
e
r
e
n
c
e
 
m
a
p
p
e
r


-
 
A
N
D
 
t
h
e
 
S
I
P
 
c
a
l
l
 
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
 
J
i
g
a
s
i
 
w
i
t
h
 
t
h
e
 
r
o
o
m
 
h
e
a
d
e
r


-
 
A
N
D
 
t
h
e
 
p
a
r
t
i
c
i
p
a
n
t
 
j
o
i
n
s
 
t
h
e
 
m
e
e
t
i
n
g
 
v
i
a
 
a
u
d
i
o
-
o
n
l
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
 
J
i
g
a
s
i
 
d
i
s
a
b
l
e
d
 
b
y
 
d
e
f
a
u
l
t


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
 
J
i
g
a
s
i
 
i
s
 
n
o
t
 
e
x
p
l
i
c
i
t
l
y
 
e
n
a
b
l
e
d


-
 
T
H
E
N
 
n
o
 
S
I
P
 
g
a
t
e
w
a
y
 
f
u
n
c
t
i
o
n
a
l
i
t
y
 
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
 
n
o
 
S
I
P
-
r
e
l
a
t
e
d
 
p
o
d
s
 
a
r
e
 
r
u
n
n
i
n
g




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
e
s
s
i
o
n
 
r
e
c
o
r
d
i
n
g
 
v
i
a
 
J
i
b
r
i
 
(
o
p
t
i
o
n
a
l
)




J
i
b
r
i
 
S
H
A
L
L
 
p
r
o
v
i
d
e
 
m
e
e
t
i
n
g
 
r
e
c
o
r
d
i
n
g
 
a
n
d
 
l
i
v
e
 
s
t
r
e
a
m
i
n
g
 
w
h
e
n
 
d
e
p
l
o
y
e
d
.
 
I
t


r
e
q
u
i
r
e
s
 
`
S
Y
S
_
A
D
M
I
N
`
 
c
a
p
a
b
i
l
i
t
y
 
f
o
r
 
C
h
r
o
m
e
 
h
e
a
d
l
e
s
s
 
s
c
r
e
e
n
 
r
e
c
o
r
d
i
n
g
 
w
i
t
h


s
h
a
r
e
d
 
m
e
m
o
r
y
 
(
`
/
d
e
v
/
s
h
m
`
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
 
M
e
e
t
i
n
g
 
r
e
c
o
r
d
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
 
m
o
d
e
r
a
t
o
r
 
s
t
a
r
t
i
n
g
 
a
 
r
e
c
o
r
d
i
n
g
 
i
n
 
J
i
t
s
i
 
M
e
e
t


-
 
W
H
E
N
 
J
i
b
r
i
 
c
a
p
t
u
r
e
s
 
t
h
e
 
m
e
e
t
i
n
g
 
o
u
t
p
u
t
 
v
i
a
 
C
h
r
o
m
e
 
h
e
a
d
l
e
s
s


-
 
T
H
E
N
 
t
h
e
 
r
e
c
o
r
d
i
n
g
 
i
s
 
s
t
o
r
e
d
 
t
o
 
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
 
o
u
t
p
u
t
 
d
i
r
e
c
t
o
r
y


-
 
A
N
D
 
t
h
e
 
r
e
c
o
r
d
i
n
g
 
f
i
l
e
 
i
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
 
v
i
a
 
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
 
s
t
o
r
a
g
e
 
b
a
c
k
e
n
d




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
a
t
a
 
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




J
i
t
s
i
 
M
e
e
t
 
S
H
A
L
L
 
N
O
T
 
s
t
o
r
e
 
m
e
e
t
i
n
g
 
r
o
o
m
 
h
i
s
t
o
r
y
.


`
d
o
N
o
t
S
t
o
r
e
R
o
o
m
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
e
`
.




J
i
t
s
i
 
M
e
e
t
 
S
H
A
L
L
 
d
i
s
a
b
l
e
 
t
h
i
r
d
-
p
a
r
t
y
 
r
e
q
u
e
s
t
s
.


`
d
i
s
a
b
l
e
T
h
i
r
d
P
a
r
t
y
R
e
q
u
e
s
t
s
`
 
S
H
A
L
L
 
b
e
 
`
t
r
u
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
 
N
o
 
r
o
o
m
 
h
i
s
t
o
r
y
 
p
e
r
s
i
s
t
e
d


-
 
G
I
V
E
N
 
a
 
J
i
t
s
i
 
m
e
e
t
i
n
g
 
t
h
a
t
 
h
a
s
 
e
n
d
e
d


-
 
W
H
E
N
 
a
 
u
s
e
r
 
r
e
t
u
r
n
s
 
t
o
 
t
h
e
 
J
i
t
s
i
 
M
e
e
t
 
U
R
L


-
 
T
H
E
N
 
n
o
 
p
r
e
v
i
o
u
s
 
r
o
o
m
 
h
i
s
t
o
r
y
 
i
s
 
d
i
s
p
l
a
y
e
d


-
 
A
N
D
 
n
o
 
r
o
o
m
 
m
e
t
a
d
a
t
a
 
i
s
 
p
e
r
s
i
s
t
e
d
 
s
e
r
v
e
r
-
s
i
d
e




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
 
L
o
n
g
-
l
i
v
e
d
 
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
n
e
c
t
i
o
n
s




T
h
e
 
H
A
P
r
o
x
y
 
i
n
g
r
e
s
s
 
f
o
r
 
J
i
t
s
i
 
M
e
e
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
 
l
o
n
g
-
l
i
v
e
d
 
W
e
b
S
o
c
k
e
t


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
 
w
i
t
h
 
a
 
t
i
m
e
o
u
t
 
o
f
 
3
6
0
0
 
s
e
c
o
n
d
s
 
f
o
r
 
b
o
t
h
 
s
e
r
v
e
r
 
a
n
d
 
c
l
i
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
 
W
e
b
S
o
c
k
e
t
 
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
t
a
y
s
 
a
l
i
v
e
 
d
u
r
i
n
g
 
m
e
e
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
 
p
a
r
t
i
c
i
p
a
n
t
 
i
n
 
a
 
6
0
-
m
i
n
u
t
e
 
J
i
t
s
i
 
m
e
e
t
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
 
p
a
r
t
i
c
i
p
a
n
t
'
s
 
W
e
b
S
o
c
k
e
t
 
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
 
r
e
m
a
i
n
s
 
o
p
e
n


-
 
T
H
E
N
 
t
h
e
 
i
n
g
r
e
s
s
 
d
o
e
s
 
n
o
t
 
t
e
r
m
i
n
a
t
e
 
t
h
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
 
b
e
f
o
r
e
 
t
h
e
 
m
e
e
t
i
n
g
 
e
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
 
S
e
c
u
r
i
t
y
 
h
a
r
d
e
n
i
n
g




T
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
 
a
d
a
p
t
e
r
 
c
o
n
t
a
i
n
e
r
 
S
H
A
L
L
 
r
u
n
 
a
s
 
u
i
d
 
1
9
9
3
 
w
i
t
h
 
n
o
n
-
r
o
o
t
,
 
r
e
a
d
-
o
n
l
y


r
o
o
t
 
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
,
 
A
L
L
 
c
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
 
d
r
o
p
p
e
d
,
 
a
n
d
 
`
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
`
 
s
e
c
c
o
m
p


p
r
o
f
i
l
e
.




T
h
e
 
J
V
B
,
 
J
i
c
o
f
o
,
 
J
i
g
a
s
i
,
 
a
n
d
 
W
e
b
 
c
o
n
t
a
i
n
e
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
 
`
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
`


s
e
c
c
o
m
p
 
p
r
o
f
i
l
e
s
.
 
R
u
n
n
i
n
g
 
a
s
 
r
o
o
t
 
(
u
i
d
 
0
)
 
i
s
 
p
e
r
m
i
t
t
e
d
 
f
o
r
 
m
e
d
i
a
 
p
r
o
c
e
s
s
i
n
g


c
o
m
p
o
n
e
n
t
s
 
t
h
a
t
 
r
e
q
u
i
r
e
 
r
a
w
 
s
o
c
k
e
t
 
o
r
 
d
e
v
i
c
e
 
a
c
c
e
s
s
.




J
i
b
r
i
 
S
H
A
L
L
 
b
e
 
g
r
a
n
t
e
d
 
o
n
l
y
 
`
S
Y
S
_
A
D
M
I
N
`
 
c
a
p
a
b
i
l
i
t
y
 
(
r
e
q
u
i
r
e
d
 
f
o
r
 
C
h
r
o
m
e


h
e
a
d
l
e
s
s
 
r
e
c
o
r
d
i
n
g
)
.
 
A
l
l
 
o
t
h
e
r
 
c
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
 
S
H
A
L
L
 
b
e
 
d
r
o
p
p
e
d
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
a
p
t
e
r
 
l
e
a
s
t
-
p
r
i
v
i
l
e
g
e


-
 
G
I
V
E
N
 
t
h
e
 
J
i
t
s
i
 
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
a
p
t
e
r
 
c
o
n
t
a
i
n
e
r


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
 
i
t
 
r
u
n
s
 
a
s
 
u
i
d
 
1
9
9
3
 
(
n
o
n
-
r
o
o
t
)


-
 
A
N
D
 
t
h
e
 
r
o
o
t
 
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
 
i
s
 
r
e
a
d
-
o
n
l
y


-
 
A
N
D
 
n
o
 
c
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
 
a
r
e
 
g
r
a
n
t
e
d




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
 
J
i
t
s
i
 
M
e
e
t
 
|
 
1
0
0
1
 
(
j
i
t
s
i
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
C
u
s
t
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
 
a
d
a
p
t
e
r
*
*
:
 
J
i
t
s
i
 
u
s
e
s
 
a
 
c
u
s
t
o
m
 
O
I
D
C
 
a
d
a
p
t
e
r
 
(
n
o
t
 
s
t
a
n
d
a
r
d
 
p
r
o
s
o
d
y
 
c
o
n
f
i
g
)
.
 
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
a
p
t
e
r
 
u
p
d
a
t
e
s
 
m
a
y
 
b
r
e
a
k
 
J
i
t
s
i
 
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
.


*
*
M
a
t
r
i
x
 
U
V
S
 
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
*
*
:
 
J
i
t
s
i
 
v
a
l
i
d
a
t
e
s
 
m
e
e
t
i
n
g
 
r
o
o
m
s
 
v
i
a
 
M
a
t
r
i
x
 
U
s
e
r
 
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
 
S
e
r
v
i
c
e
.
 
I
f
 
U
V
S
 
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
,
 
r
o
o
m
 
c
r
e
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
O
I
D
C
,
 
c
l
i
e
n
t
 
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
)


-
 
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
 
(
M
a
t
r
i
x
 
U
V
S
 
f
o
r
 
r
o
o
m
 
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
)


-
 
E
x
t
e
r
n
a
l
 
T
U
R
N
 
s
e
r
v
e
r
 
(
N
A
T
 
t
r
a
v
e
r
s
a
l
)


-
 
E
x
t
e
r
n
a
l
 
S
I
P
 
s
e
r
v
e
r
 
(
o
p
t
i
o
n
a
l
,
 
f
o
r
 
J
i
g
a
s
i
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
l
o
n
g
-
l
i
v
e
d
 
W
e
b
S
o
c
k
e
t
 
t
i
m
e
o
u
t
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
 
g
r
o
u
p
 
`
m
a
n
a
g
e
d
-
b
y
-
a
t
t
r
i
b
u
t
e
-
V
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
e
`
)


-
 
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
 
(
M
a
t
r
i
x
 
U
s
e
r
 
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
 
S
e
r
v
i
c
e
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
 
D
e
f
a
u
l
t
 
R
e
p
l
i
c
a
s
 
|
 
M
e
m
o
r
y
 
L
i
m
i
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
 
J
i
t
s
i
 
M
e
e
t
 
W
e
b
 
|
 
F
r
o
n
t
e
n
d
 
U
I
 
|
 
1
 
|
 
5
1
2
M
i
 
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
 
A
d
a
p
t
e
r
 
|
 
O
I
D
C
 
a
u
t
h
 
s
i
d
e
c
a
r
 
|
 
1
 
|
 
1
2
8
M
i
 
|


|
 
P
r
o
s
o
d
y
 
|
 
X
M
P
P
 
s
e
r
v
e
r
 
|
 
1
 
|
 
(
s
h
a
r
e
d
)
 
|


|
 
J
i
c
o
f
o
 
|
 
C
o
n
f
e
r
e
n
c
e
 
f
o
c
u
s
 
/
 
b
r
i
d
g
e
 
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
 
|
 
1
 
|
 
3
5
8
4
M
i
 
|


|
 
J
V
B
 
(
V
i
d
e
o
 
B
r
i
d
g
e
)
 
|
 
M
e
d
i
a
 
r
o
u
t
i
n
g
 
|
 
1
 
|
 
3
5
8
4
M
i
 
|


|
 
J
i
g
a
s
i
 
|
 
S
I
P
 
g
a
t
e
w
a
y
 
(
d
i
s
a
b
l
e
d
 
b
y
 
d
e
f
a
u
l
t
)
 
|
 
1
 
|
 
3
5
8
4
M
i
 
|


|
 
J
i
b
r
i
 
|
 
R
e
c
o
r
d
i
n
g
 
(
S
Y
S
_
A
D
M
I
N
 
r
e
q
u
i
r
e
d
)
 
|
 
1
 
|
 
3
G
i
 
+
 
2
G
i
 
/
d
e
v
/
s
h
m
 
|


|
 
p
a
t
c
h
J
V
B
 
|
 
P
o
s
t
-
i
n
s
t
a
l
l
 
I
P
 
p
a
t
c
h
 
j
o
b
 
|
 
—
 
|
 
—
 
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
 
J
i
t
s
i
 
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
 
d
i
s
t
a
n
c
e
 
l
e
a
r
n
i
n
g
,
 
b
u
t
 
c
a
n
 
f
a
l
l
 
b
a
c
k
 
t
o
 
B
B
B
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
3
0
0
m
s
 
(
m
e
e
t
i
n
g
 
j
o
i
n
)
 
|
 
J
i
t
s
i
 
V
i
d
e
o
b
r
i
d
g
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
8
%
 
(
W
e
b
R
T
C
 
h
a
n
d
s
h
a
k
e
)
 
|
 
P
r
o
s
o
d
y
 
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
 
l
o
g
s
 
|


|
 
*
*
M
e
d
i
a
 
Q
u
a
l
i
t
y
*
*
 
|
 
<
2
%
 
p
a
c
k
e
t
 
l
o
s
s
 
|
 
W
e
b
R
T
C
 
s
t
a
t
i
s
t
i
c
s
 
A
P
I
 
|


|
 
*
*
R
e
c
o
r
d
i
n
g
 
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
5
%
 
(
J
i
b
r
i
 
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
)
 
|
 
J
i
b
r
i
 
c
o
m
p
l
e
t
i
o
n
 
l
o
g
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
 
J
i
t
s
i
 
V
i
d
e
o
b
r
i
d
g
e
 
C
P
U
 
>
8
0
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
 
M
e
e
t
i
n
g
 
j
o
i
n
 
f
a
i
l
u
r
e
 
r
a
t
e
 
>
5
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
1
 
a
l
e
r
t


-
 
R
e
c
o
r
d
i
n
g
 
f
a
i
l
u
r
e
 
r
a
t
e
 
>
1
0
%
 
f
o
r
 
3
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
 
T
U
R
N
 
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
 
M
a
t
r
i
x
 
U
V
S
 
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
s
 
>
2
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
 
m
e
e
t
i
n
g
 
p
a
r
t
i
c
i
p
a
n
t
s
 
(
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
)


-
 
1
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
 
p
a
r
t
i
c
i
p
a
n
t
s
 
(
l
a
r
g
e
 
l
e
c
t
u
r
e
)


-
 
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
 
a
c
t
i
v
e
 
m
e
e
t
i
n
g
s


-
 
M
e
d
i
a
:
 
2
.
5
 
M
b
p
s
 
p
e
r
 
p
a
r
t
i
c
i
p
a
n
t
 
(
H
D
 
v
i
d
e
o
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
 
2
 
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
J
i
t
s
i
 
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
 
(
P
r
o
s
o
d
y
,
 
J
i
c
o
f
o
,
 
J
V
B
,
 
J
i
b
r
i
,
 
J
i
g
a
s
i
)


-
 
*
*
R
e
c
o
r
d
i
n
g
 
s
t
o
r
a
g
e
*
*
 
(
S
3
/
C
e
p
h
F
S
)
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
T
U
R
N
 
s
e
r
v
e
r
 
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
*
*
:
 
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
,
 
r
o
t
a
t
e
d
 
q
u
a
r
t
e
r
l
y


-
 
*
*
M
a
t
r
i
x
 
U
V
S
 
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
 
J
i
t
s
i
 
W
e
b
 
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


2
.
 
P
r
o
s
o
d
y
 
X
M
P
P
 
s
e
r
v
e
r
 
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
 
J
i
c
o
f
o
 
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


4
.
 
J
i
t
s
i
 
V
i
d
e
o
b
r
i
d
g
e
 
(
J
V
B
)
 
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


5
.
 
J
i
b
r
i
 
r
e
c
o
r
d
e
r
 
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


6
.
 
J
i
g
a
s
i
 
S
I
P
 
g
a
t
e
w
a
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
 
-
 
1
0
 
m
i
n


7
.
 
T
U
R
N
 
s
e
r
v
e
r
 
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


8
.
 
M
a
t
r
i
x
 
U
V
S
 
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


9
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
m
e
e
t
i
n
g
 
c
r
e
a
t
i
o
n
,
 
j
o
i
n
,
 
r
e
c
o
r
d
i
n
g
)
 
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
 
A
c
t
i
v
e
 
m
e
e
t
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
a
t
i
o
n
s


-
 
R
e
c
o
r
d
i
n
g
 
f
i
l
e
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
 
S
3
/
C
e
p
h
F
S
)


-
 
T
U
R
N
 
s
e
r
v
e
r
 
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
n
d
 
s
h
a
r
e
d
 
s
e
c
r
e
t
s


-
 
M
a
t
r
i
x
 
U
V
S
 
s
e
r
v
i
c
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
 
C
u
s
t
o
m
 
O
I
D
C
 
a
d
a
p
t
e
r
 
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
J
V
B
 
c
r
a
s
h
*
*
:
 
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
 
a
u
t
o
-
r
e
s
t
a
r
t
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
o
-
s
c
a
l
i
n
g
 
t
r
i
g
g
e
r
s


-
 
*
*
P
r
o
s
o
d
y
 
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
,
 
v
e
r
i
f
y
 
M
U
C
 
c
o
m
p
o
n
e
n
t
s
,
 
t
e
s
t
 
m
e
e
t
i
n
g
 
c
r
e
a
t
i
o
n


-
 
*
*
R
e
c
o
r
d
i
n
g
 
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
 
S
3
 
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
 
r
e
c
o
r
d
i
n
g
 
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
 
v
e
r
i
f
y
 
a
l
l
 
c
o
m
p
o
n
e
n
t
s
,
 
t
e
s
t
 
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
 
m
e
e
t
i
n
g
 
f
l
o
w



