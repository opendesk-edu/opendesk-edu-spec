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
I
D
C
 
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
I
D
 
C
o
n
n
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
i
o
n
 
f
l
o
w
 
b
e
t
w
e
e
n
 
K
e
y
c
l
o
a
k
 
a
n
d
 
O
I
D
C
-
c
a
p
a
b
l
e


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
s
 
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
 
A
p
p
 
S
u
i
t
e
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
P
r
o
j
e
c
t
,
 
X
W
i
k
i
,


E
l
e
m
e
n
t
,
 
J
i
t
s
i
,
 
P
l
a
n
k
a
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
)
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
 
S
A
M
L
-
b
a
s
e
d
 
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
s
e
e
 
`
.
.
/
s
a
m
l
`
)


-
 
L
D
A
P
 
b
i
n
d
 
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
s
e
e
 
`
.
.
/
l
d
a
p
`
)


-
 
F
e
d
e
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
 
e
x
t
e
r
n
a
l
 
I
d
P
s
 
(
s
e
e
 
`
.
.
/
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
`
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
 
s
o
l
e
 
O
I
D
C
 
p
r
o
v
i
d
e
r




A
l
l
 
O
I
D
C
-
c
a
p
a
b
l
e
 
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
s
 
S
H
A
L
L
 
d
e
l
e
g
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
.


A
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
s
 
S
H
A
L
L
 
N
O
T
 
i
m
p
l
e
m
e
n
t
 
t
h
e
i
r
 
o
w
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
s
m
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
o
u
t
 
a
n
 
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
n
 
O
I
D
C
 
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
 
W
H
E
N
 
t
h
e
 
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
h
e
 
u
s
e
r
 
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


-
 
G
I
V
E
N
 
a
n
 
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
 
r
e
c
e
i
v
i
n
g
 
a
n
 
O
I
D
C
 
c
a
l
l
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
 
W
H
E
N
 
t
h
e
 
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


-
 
T
H
E
N
 
t
h
e
 
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
 
I
D
 
t
o
k
e
n
 
s
i
g
n
a
t
u
r
e
 
a
g
a
i
n
s
t
 
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
 
J
W
K
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
 
r
e
j
e
c
t
s
 
t
h
e
 
t
o
k
e
n
 
i
f
 
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
 
a
c
r
o
s
s
 
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
s




A
 
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
e
d
 
i
n
 
o
n
e
 
O
I
D
C
 
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
 
S
H
A
L
L
 
b
e
 
a
b
l
e
 
t
o
 
a
c
c
e
s
s
 
a
n
y
 
o
t
h
e
r


O
I
D
C
 
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
e
s
s
i
o
n
 
l
i
f
e
t
i
m
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
 
r
e
u
s
e
 
a
c
r
o
s
s
 
a
p
p
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
 
i
n
 
N
e
x
t
c
l
o
u
d


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
c
o
g
n
i
z
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
 
s
e
s
s
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
 
w
i
t
h
o
u
t
 
e
n
t
e
r
i
n
g
 
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
 
G
r
o
u
p
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
 
e
n
f
o
r
c
e
m
e
n
t




A
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
s
 
S
H
A
L
L
 
e
n
f
o
r
c
e
 
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
 
b
a
s
e
d
 
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
s


d
e
r
i
v
e
d
 
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
 
i
n
 
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
 
g
r
o
u
p


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
h
o
 
i
s
 
a
 
d
i
r
e
c
t
 
m
e
m
b
e
r
 
o
f
 
t
h
e
 
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
'
s
 
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
 
K
e
y
c
l
o
a
k
 
g
r
o
u
p


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


-
 
T
H
E
N
 
t
h
e
 
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
 
g
r
a
n
t
s
 
a
c
c
e
s
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
 
U
s
e
r
 
n
o
t
 
i
n
 
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
 
g
r
o
u
p


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
h
o
 
i
s
 
N
O
T
 
a
 
m
e
m
b
e
r
 
o
f
 
t
h
e
 
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
'
s
 
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
 
K
e
y
c
l
o
a
k
 
g
r
o
u
p


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


-
 
T
H
E
N
 
t
h
e
 
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
n
i
e
s
 
a
c
c
e
s
s




#
#
 
S
e
r
v
i
c
e
 
R
e
g
i
s
t
r
y




A
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
s
 
u
s
i
n
g
 
O
I
D
C
 
a
u
t
h
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
 
A
p
p
 
S
u
i
t
e
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
P
r
o
j
e
c
t
,


X
W
i
k
i
,
 
E
l
e
m
e
n
t
,
 
J
i
t
s
i
,
 
P
l
a
n
k
a
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
 
(
d
e
l
e
g
a
t
e
d
 
v
i
a
 
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
d
e
l
e
g
a
t
e
d
 
v
i
a
 
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
.

