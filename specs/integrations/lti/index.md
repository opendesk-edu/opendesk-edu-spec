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
 
L
T
I
 
I
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




#
#
 
P
u
r
p
o
s
e




L
e
a
r
n
i
n
g
 
T
o
o
l
s
 
I
n
t
e
r
o
p
e
r
a
b
i
l
i
t
y
 
(
L
T
I
)
 
e
n
a
b
l
e
s
 
e
m
b
e
d
d
i
n
g
 
o
p
e
n
D
e
s
k
 
s
e
r
v
i
c
e
s
 
a
s
 
t
o
o
l
s
 
i
n
 
L
M
S
 
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
)
 
f
o
r
 
s
e
a
m
l
e
s
s
 
e
d
u
c
a
t
i
o
n
a
l
 
w
o
r
k
f
l
o
w
s
.
 
S
t
u
d
e
n
t
s
 
c
a
n
 
a
c
c
e
s
s
 
e
m
b
e
d
d
e
d
 
t
o
o
l
s
 
w
i
t
h
o
u
t
 
s
e
p
a
r
a
t
e
 
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
 
m
a
i
n
t
a
i
n
i
n
g
 
a
c
t
i
v
e
 
s
e
s
s
i
o
n
 
s
t
a
t
e
 
a
c
r
o
s
s
 
p
l
a
t
f
o
r
m
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
 
L
T
I
 
1
.
x
/
2
.
x
 
s
p
e
c
i
f
i
c
a
t
i
o
n
 
m
e
c
h
a
n
i
c
s
 
(
h
a
n
d
l
e
d
 
b
y
 
L
T
I
 
l
i
b
r
a
r
i
e
s
)


-
 
L
e
a
r
n
i
n
g
 
A
n
a
l
y
t
i
c
s
 
(
C
a
l
i
p
e
r
)
 
t
o
o
l
 
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


-
 
D
e
e
p
 
L
i
n
k
i
n
g
 
c
o
n
t
e
n
t
 
s
e
l
e
c
t
i
o
n
 
(
L
T
I
 
1
.
3
+
)




-
-
-




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
l
a
n
k
a
 
L
T
I
 
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




P
l
a
n
k
a
 
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
 
L
T
I
 
1
.
1
 
c
o
n
s
u
m
e
r
 
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
 
f
o
r
 
e
m
b
e
d
d
i
n
g
 
K
a
n
b
a
n
 
b
o
a
r
d
s
 
a
s
 
t
o
o
l
s
 
i
n
 
I
L
I
A
S
 
a
n
d
 
M
o
o
d
l
e
 
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
T
I
 
t
o
o
l
 
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
 
i
n
 
I
L
I
A
S




-
 
I
L
I
A
S
 
S
H
A
L
L
 
c
o
n
f
i
g
u
r
e
 
P
l
a
n
k
a
 
a
s
 
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
 
t
o
o
l
 
w
i
t
h
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
/
s
e
c
r
e
t


-
 
T
o
o
l
 
U
R
L
:
 
`
h
t
t
p
s
:
/
/
p
l
a
n
k
a
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
 
L
T
I
 
p
a
r
a
m
e
t
e
r
s
:
 
`
c
o
n
t
e
x
t
_
i
d
`
,
 
`
c
o
n
t
e
x
t
_
l
a
b
e
l
`
,
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
i
d
`
,
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
t
i
t
l
e
`
,
 
`
u
s
e
r
_
i
d
`
,
 
`
u
s
e
r
_
n
a
m
e
`
,
 
`
u
s
e
r
_
e
m
a
i
l
.
r
o
l
e
s
`




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
T
I
 
l
a
u
n
c
h
 
f
r
o
m
 
I
L
I
A
S
 
c
o
u
r
s
e




-
 
G
I
V
E
N
 
a
 
s
t
u
d
e
n
t
 
i
n
 
a
n
 
I
L
I
A
S
 
c
o
u
r
s
e
 
w
i
t
h
 
a
n
 
e
m
b
e
d
d
e
d
 
P
l
a
n
k
a
 
b
o
a
r
d


-
 
W
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
c
l
i
c
k
s
 
t
h
e
 
P
l
a
n
k
a
 
L
T
I
 
t
o
o
l
 
l
i
n
k


-
 
T
H
E
N
 
I
L
I
A
S
 
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
n
 
L
T
I
 
l
a
u
n
c
h
 
r
e
q
u
e
s
t
 
t
o
 
P
l
a
n
k
a
 
v
i
a
 
O
A
u
t
h
 
s
i
g
n
a
t
u
r
e


-
 
A
N
D
 
P
l
a
n
k
a
 
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
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
 
a
n
d
 
O
A
u
t
h
 
s
i
g
n
a
t
u
r
e


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
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
 
a
s
 
a
n
 
L
T
I
 
u
s
e
r
 
(
s
h
a
r
e
d
 
u
s
e
r
 
m
o
d
e
:
 
a
l
l
 
s
t
u
d
e
n
t
s
 
s
h
a
r
e
 
o
n
e
 
a
c
c
o
u
n
t
)


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
s
e
e
s
 
t
h
e
 
e
m
b
e
d
d
e
d
 
K
a
n
b
a
n
 
b
o
a
r
d
 
i
n
 
I
L
I
A
S
 
i
f
r
a
m
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
 
L
T
I
 
l
a
u
n
c
h
 
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
 
c
o
u
r
s
e




-
 
G
I
V
E
N
 
a
 
l
e
a
r
n
e
r
 
i
n
 
a
 
M
o
o
d
l
e
 
a
c
t
i
v
i
t
y
 
u
s
i
n
g
 
E
x
t
e
r
n
a
l
 
T
o
o
l


-
 
W
H
E
N
 
t
h
e
 
l
e
a
r
n
e
r
 
o
p
e
n
s
 
t
h
e
 
P
l
a
n
k
a
 
L
T
I
 
a
c
t
i
v
i
t
y


-
 
T
H
E
N
 
M
o
o
d
l
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
 
L
T
I
 
l
a
u
n
c
h
 
r
e
q
u
e
s
t
 
t
o
 
P
l
a
n
k
a
 
w
i
t
h
 
O
A
u
t
h
 
s
i
g
n
a
t
u
r
e


-
 
A
N
D
 
P
l
a
n
k
a
 
v
a
l
i
d
a
t
e
s
 
L
T
I
 
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
 
r
e
t
r
i
e
v
e
s
 
c
o
n
t
e
x
t
 
i
n
f
o
r
m
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
 
l
e
a
r
n
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
t
o
 
P
l
a
n
k
a
 
a
s
 
L
T
I
 
u
s
e
r


-
 
A
N
D
 
t
h
e
 
l
e
a
r
n
e
r
 
c
a
n
 
v
i
e
w
 
a
n
d
 
i
n
t
e
r
a
c
t
 
w
i
t
h
 
t
h
e
 
K
a
n
b
a
n
 
b
o
a
r
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
 
L
T
I
 
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




P
l
a
n
k
a
 
S
H
A
L
L
 
u
s
e
 
s
h
a
r
e
d
 
L
T
I
 
u
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
c
r
o
s
s
 
a
l
l
 
L
T
I
 
l
a
u
n
c
h
e
s
 
f
r
o
m
 
t
h
e
 
s
a
m
e
 
L
M
S
 
i
n
s
t
a
n
c
e
 
t
o
 
a
v
o
i
d
 
e
x
c
e
s
s
i
v
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
 
F
i
r
s
t
-
t
i
m
e
 
L
T
I
 
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
o
n




-
 
G
I
V
E
N
 
t
h
e
 
f
i
r
s
t
 
L
T
I
 
l
a
u
n
c
h
 
f
r
o
m
 
I
L
I
A
S
 
i
n
t
o
 
P
l
a
n
k
a


-
 
W
H
E
N
 
n
o
 
e
x
i
s
t
i
n
g
 
L
T
I
 
u
s
e
r
 
e
x
i
s
t
s
 
f
o
r
 
t
h
e
 
I
L
I
A
S
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y


-
 
T
H
E
N
 
P
l
a
n
k
a
 
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
 
L
T
I
 
u
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


-
 
A
N
D
 
u
s
e
r
 
n
a
m
e
/
e
m
a
i
l
 
a
r
e
 
m
a
p
p
e
d
 
f
r
o
m
 
L
T
I
 
p
a
r
a
m
e
t
e
r
s
 
(
`
u
s
e
r
_
n
a
m
e
`
,
 
`
u
s
e
r
_
e
m
a
i
l
`
)


-
 
A
N
D
 
u
s
e
r
 
r
o
l
e
 
i
s
 
s
e
t
 
t
o
 
`
U
S
E
R
`
 
(
n
o
t
 
a
d
m
i
n
,
 
u
n
l
e
s
s
 
L
T
I
 
`
r
o
l
e
s
`
 
p
a
r
a
m
e
t
e
r
 
i
n
c
l
u
d
e
s
 
`
I
n
s
t
r
u
c
t
o
r
`
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
u
b
s
e
q
u
e
n
t
 
L
T
I
 
l
a
u
n
c
h
e
s
 
r
e
u
s
e
 
s
a
m
e
 
a
c
c
o
u
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
 
e
x
i
s
t
i
n
g
 
L
T
I
 
u
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
 
f
o
r
 
t
h
e
 
I
L
I
A
S
 
c
o
n
s
u
m
e
r
 
k
e
y


-
 
W
H
E
N
 
a
n
o
t
h
e
r
 
I
L
I
A
S
 
s
t
u
d
e
n
t
 
l
a
u
n
c
h
e
s
 
t
h
e
 
s
a
m
e
 
P
l
a
n
k
a
 
b
o
a
r
d
 
v
i
a
 
L
T
I


-
 
T
H
E
N
 
P
l
a
n
k
a
 
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
 
a
n
d
 
r
e
u
s
e
s
 
t
h
e
 
e
x
i
s
t
i
n
g
 
L
T
I
 
u
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


-
 
A
N
D
 
n
o
 
d
u
p
l
i
c
a
t
e
 
u
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
r
e
 
c
r
e
a
t
e
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
 
I
n
s
t
r
u
c
t
o
r
 
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
 
v
i
a
 
L
T
I




-
 
G
I
V
E
N
 
a
n
 
i
n
s
t
r
u
c
t
o
r
 
l
a
u
n
c
h
i
n
g
 
P
l
a
n
k
a
 
v
i
a
 
L
T
I
 
w
i
t
h
 
`
L
T
I
_
R
O
L
E
S
=
I
n
s
t
r
u
c
t
o
r
`
 
p
a
r
a
m
e
t
e
r


-
 
W
H
E
N
 
P
l
a
n
k
a
 
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
 
l
a
u
n
c
h
 
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
 
L
T
I
 
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
 
`
A
D
M
I
N
`
 
r
o
l
e
 
i
n
s
t
e
a
d
 
o
f
 
`
U
S
E
R
`


-
 
A
N
D
 
t
h
e
 
i
n
s
t
r
u
c
t
o
r
 
c
a
n
 
c
r
e
a
t
e
/
m
o
d
i
f
y
 
K
a
n
b
a
n
 
b
o
a
r
d
s
 
i
n
 
a
d
d
i
t
i
o
n
 
t
o
 
v
i
e
w
i
n
g
 
t
h
e
m




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
 
c
o
n
t
e
x
t
 
p
r
e
s
e
r
v
a
t
i
o
n




P
l
a
n
k
a
 
S
H
A
L
L
 
p
r
e
s
e
r
v
e
 
L
T
I
 
c
o
n
t
e
x
t
 
I
D
s
 
a
c
r
o
s
s
 
l
a
u
n
c
h
e
s
 
t
o
 
i
d
e
n
t
i
f
y
 
w
h
i
c
h
 
L
M
S
 
c
o
u
r
s
e
 
a
n
d
 
r
e
s
o
u
r
c
e
 
t
h
e
 
e
m
b
e
d
d
e
d
 
b
o
a
r
d
 
b
e
l
o
n
g
s
 
t
o
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
x
t
 
t
r
a
c
k
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
 
P
l
a
n
k
a
 
b
o
a
r
d
 
e
m
b
e
d
d
e
d
 
a
s
 
L
T
I
 
t
o
o
l
 
w
i
t
h
 
s
p
e
c
i
f
i
c
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
i
d
`


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
a
r
d
 
i
s
 
a
c
c
e
s
s
e
d
 
v
i
a
 
L
T
I
 
l
a
u
n
c
h


-
 
T
H
E
N
 
P
l
a
n
k
a
 
s
t
o
r
e
s
 
t
h
e
 
L
T
I
 
`
c
o
n
t
e
x
t
_
i
d
`
 
a
n
d
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
i
d
`
 
m
e
t
a
d
a
t
a


-
 
A
N
D
 
f
u
t
u
r
e
 
L
T
I
 
l
a
u
n
c
h
e
s
 
t
o
 
t
h
e
 
s
a
m
e
 
b
o
a
r
d
 
c
a
n
 
r
e
f
e
r
e
n
c
e
 
t
h
i
s
 
m
e
t
a
d
a
t
a
 
f
o
r
 
a
n
a
l
y
t
i
c
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




P
l
a
k
a
 
S
H
A
L
L
 
m
a
i
n
t
a
i
n
 
L
T
I
 
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
s
 
t
h
r
o
u
g
h
o
u
t
 
t
h
e
 
t
o
o
l
 
i
n
t
e
r
a
c
t
i
o
n
 
w
h
i
l
e
 
t
h
e
 
L
M
S
 
s
e
s
s
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
 
a
c
t
i
v
e
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
e
s
s
i
o
n
 
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
 
s
t
u
d
e
n
t
 
a
c
t
i
v
e
l
y
 
w
o
r
k
i
n
g
 
i
n
 
a
n
 
e
m
b
e
d
d
e
d
 
P
l
a
n
k
a
 
b
o
a
r
d


-
 
W
H
I
L
E
 
t
h
e
 
s
t
u
d
e
n
t
 
a
d
d
s
 
c
a
r
d
s
,
 
m
o
v
e
s
 
i
t
e
m
s
,
 
u
p
d
a
t
e
s
 
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


-
 
T
H
E
N
 
t
h
e
 
L
T
I
 
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
 
r
e
m
a
i
n
s
 
v
a
l
i
d
 
f
o
r
 
t
h
e
 
t
o
o
l
 
i
n
t
e
r
a
c
t
i
o
n
 
d
u
r
a
t
i
o
n


-
 
A
N
D
 
c
h
a
n
g
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
v
e
n
 
i
f
 
t
h
e
 
p
a
g
e
 
i
s
 
r
e
l
o
a
d
e
d
 
(
v
i
a
 
L
T
I
 
r
e
-
l
a
u
n
c
h
 
w
i
t
h
 
s
a
m
e
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
i
d
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
 
T
o
o
l
 
P
r
o
v
i
d
e
r
 
(
T
P
)
 
v
s
 
L
M
S
 
e
n
d
p
o
i
n
t
 
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




P
l
a
n
k
a
 
S
H
A
L
L
 
o
p
e
r
a
t
e
 
a
s
 
L
T
I
 
T
o
o
l
 
P
r
o
v
i
d
e
r
 
(
T
P
)
 
t
h
a
t
 
i
n
g
e
s
t
s
 
B
a
s
i
c
 
L
T
I
 
l
a
u
n
c
h
 
r
e
q
u
e
s
t
s
 
f
r
o
m
 
L
M
S
 
p
l
a
t
f
o
r
m
s
 
w
h
i
c
h
 
a
c
t
 
a
s
 
L
T
I
 
T
o
o
l
 
C
o
n
s
u
m
e
r
s
 
(
T
C
s
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
 
P
l
a
n
k
a
 
T
P
 
e
n
d
p
o
i
n
t
 
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
 
I
L
I
A
S
/
L
 
M
o
o
d
l
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
 
a
s
 
L
T
I
 
C
o
n
s
u
m
e
r
 
w
i
t
h
 
P
l
a
n
k
a
 
c
o
n
s
u
m
e
r
 
k
e
y
/
s
e
c
r
e
t


-
 
W
H
E
N
 
L
T
I
 
C
o
n
s
u
m
e
r
 
s
e
n
d
s
 
l
a
u
n
c
h
 
r
e
q
u
e
s
t
 
t
o
 
P
l
a
n
k
'
s
 
L
T
I
 
e
n
d
p
o
i
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
 
e
n
d
p
o
i
n
t
 
U
R
L
 
i
s
 
`
/
l
t
i
/
l
a
u
n
c
h
`
 
(
d
e
f
a
u
l
t
 
L
T
I
 
1
.
1
 
s
t
a
n
d
a
r
d
)


-
 
A
N
D
 
t
h
e
 
e
n
d
p
o
i
n
t
 
a
c
c
e
p
t
s
 
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
s
 
w
i
t
h
 
L
T
I
 
p
a
r
a
m
e
t
e
r
s
 
a
n
d
 
O
A
u
t
h
 
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
s
u
m
e
r
 
k
e
y
/
s
e
c
r
e
t
 
r
e
v
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
n
 
I
L
I
A
S
/
M
o
o
d
l
e
 
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
 
r
e
v
o
k
e
s
 
t
h
e
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
/
s
e
c
r
e
t


-
 
W
H
E
N
 
P
l
a
n
k
a
 
r
e
c
e
i
v
e
s
 
a
 
l
a
u
n
c
h
 
w
i
t
h
 
i
n
v
a
l
i
d
 
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


-
 
T
H
E
N
 
t
h
e
 
L
T
I
 
l
a
u
n
c
h
 
i
s
 
r
e
j
e
c
t
e
d
 
w
i
t
h
 
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
 
e
r
r
o
r


-
 
A
N
D
 
t
h
e
 
e
m
b
e
d
d
e
d
 
b
o
a
r
d
 
d
i
s
p
l
a
y
s
 
L
T
I
 
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
 
m
e
s
s
a
g
e




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
 
L
T
I
 
l
i
b
r
a
r
i
e
s
 
(
P
l
a
n
k
a
 
b
a
c
k
e
n
d
 
L
T
I
 
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
 
I
L
I
A
S
/
M
o
o
d
l
e
 
L
T
I
 
p
r
o
v
i
d
e
r
s
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
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
/
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
a
g
e
,
 
L
T
I
 
u
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
 
d
a
t
a
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
 
(
O
I
D
C
 
f
o
r
 
n
o
n
-
L
T
I
 
a
c
c
e
s
s
,
 
o
p
t
i
o
n
a
l
 
f
o
r
 
L
T
I
-
L
T
I
-
A
I
-
L
T
I
 
i
n
t
e
r
a
c
t
i
o
n
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
L
T
I
 
e
n
d
p
o
i
n
t
 
c
o
n
s
u
m
p
t
i
o
n
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
 
I
L
I
A
S
 
(
L
T
I
 
C
o
n
s
u
m
e
r
,
 
L
T
I
 
t
o
o
l
 
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
 
c
o
u
r
s
e
-
b
a
s
e
d
 
c
o
n
t
e
x
t
)


-
 
M
o
o
d
l
e
 
(
L
T
I
 
C
o
n
s
u
m
e
r
,
 
E
x
t
e
r
n
a
l
 
T
o
o
l
 
a
c
t
i
v
i
t
i
e
s
)


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
 
(
a
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
 
f
o
r
 
m
o
r
e
 
c
o
m
p
l
e
x
 
w
o
r
k
f
l
o
w
s
)




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
S
h
a
r
e
d
 
u
s
e
r
 
m
o
d
e
*
*
:
 
P
l
a
n
k
a
 
L
T
I
 
u
s
e
s
 
s
h
a
r
e
d
 
u
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
 
p
e
r
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
,
 
n
o
t
 
p
e
r
-
s
t
u
d
e
n
t
 
u
s
e
r
s
.
 
T
h
i
s
 
s
i
m
p
l
i
f
i
e
s
 
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
 
b
u
t
 
l
i
m
i
t
s
 
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
 
t
r
a
c
k
i
n
g
 
w
i
t
h
i
n
 
t
h
e
 
t
o
o
l
.


-
 
*
*
L
T
I
 
1
.
1
 
o
n
l
y
*
*
:
 
P
l
a
n
k
a
 
s
u
p
p
o
r
t
s
 
L
T
I
 
1
.
1
 
(
B
a
s
i
c
L
T
I
)
 
o
n
l
y
,
 
n
o
t
 
L
T
I
 
1
.
3
+
 
D
e
e
p
 
L
i
n
k
i
n
g
 
o
r
 
L
T
I
 
2
.
0
.


-
 
*
*
R
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
*
*
:
 
O
n
l
y
 
b
a
s
i
c
 
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
 
s
u
p
p
o
r
t
e
d
 
(
`
I
n
s
t
r
u
c
t
o
r
`
 
→
 
a
d
m
i
n
,
 
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
 
m
a
p
p
i
n
g
 
f
o
r
 
`
L
e
a
r
n
e
r
`
,
 
`
T
e
a
c
h
i
n
g
A
s
s
i
s
t
a
n
t
`
,
 
e
t
c
.
)
.


-
 
*
*
N
o
 
g
r
a
d
e
 
p
a
s
s
b
a
c
k
*
*
:
 
P
l
a
n
k
a
 
d
o
e
s
 
n
o
t
 
i
m
p
l
e
m
e
n
t
 
L
T
I
 
g
r
a
d
e
b
o
o
k
 
s
e
r
v
i
c
e
s
 
(
g
r
a
d
e
 
p
a
s
s
b
a
c
k
 
w
o
u
l
d
 
b
e
 
u
s
e
d
 
f
o
r
 
a
n
a
l
y
t
i
c
s
 
o
n
l
y
)
.




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
 
L
T
I
 
v
e
r
s
i
o
n
 
|
 
1
.
1
 
(
B
a
s
i
c
L
T
I
)
 
|


|
 
P
l
a
n
k
a
 
L
T
I
 
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
h
t
t
p
s
:
/
/
p
l
a
n
k
a
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
l
t
i
/
l
a
u
n
c
h
`
 
|


|
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
 
s
t
o
r
a
g
e
 
|
 
`
s
e
c
r
e
t
s
.
p
l
a
n
k
a
.
l
t
i
_
c
o
n
s
u
m
e
r
_
k
e
y
`
 
|


|
 
L
T
I
 
c
o
n
s
u
m
e
r
 
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
a
g
e
 
|
 
`
s
e
c
r
e
t
s
.
p
l
a
n
k
a
.
l
t
i
_
c
o
n
s
u
m
e
r
_
s
e
c
r
e
t
`
 
|


|
 
L
T
I
 
u
s
e
r
 
m
a
p
p
i
n
g
 
|
 
O
n
e
 
s
h
a
r
e
d
 
a
c
c
o
u
n
t
 
p
e
r
 
L
T
I
 
c
o
n
s
u
m
e
r
 
k
e
y
 
|


|
 
D
e
f
a
u
l
t
 
L
T
I
 
u
s
e
r
 
r
o
l
e
 
|
 
`
U
S
E
R
`
 
|


|
 
L
T
I
 
c
o
n
t
e
x
t
 
t
r
a
c
k
i
n
g
 
|
 
`
c
o
n
t
e
x
t
_
i
d
`
,
 
`
c
o
n
t
e
x
t
_
l
a
b
e
l
`
,
 
`
r
e
s
o
u
r
c
e
_
l
i
n
k
_
i
d
`
 
s
t
o
r
e
d
 
i
n
 
b
o
a
r
d
 
m
e
t
a
d
a
t
a
 
|


|
 
O
A
u
t
h
 
s
i
g
n
a
t
u
r
e
 
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
 
|
 
Y
e
s
,
 
p
r
o
v
i
d
e
r
_
k
e
y
,
 
s
i
g
n
a
t
u
r
e
,
 
s
i
g
n
a
t
u
r
e
_
v
e
r
s
i
o
n
,
 
o
a
u
t
h
_
n
o
n
c
e
,
 
t
i
m
e
s
t
a
m
p
 
|

