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
D
A
P
 
U
s
e
r
 
S
t
o
r
e
 
a
n
d
 
G
r
o
u
p
 
S
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
L
D
A
P
 
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
 
K
e
y
c
l
o
a
k
 
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
,
 
a
n
d


L
D
A
P
 
g
r
o
u
p
 
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
 
t
o
 
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
.
 
A
l
s
o
 
c
o
v
e
r
s
 
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


f
o
r
 
l
e
g
a
c
y
 
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
 
O
I
D
C
 
t
o
k
e
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
 
(
s
e
e
 
`
.
.
/
o
i
d
c
`
)


-
 
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
 
s
c
h
e
m
a
 
d
e
s
i
g
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
 
O
p
e
n
L
D
A
P
 
a
s
 
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
 
s
o
u
r
c
e




O
p
e
n
L
D
A
P
 
S
H
A
L
L
 
b
e
 
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
.
 
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
 
f
e
d
e
r
a
t
e


w
i
t
h
 
O
p
e
n
L
D
A
P
 
f
o
r
 
u
s
e
r
 
l
o
o
k
u
p
 
d
u
r
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
 
c
r
e
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
L
D
A
P


-
 
G
I
V
E
N
 
a
n
 
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
 
c
r
e
a
t
i
n
g
 
a
 
u
s
e
r
 
i
n
 
O
p
e
n
L
D
A
P


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
s
s
i
g
n
e
d
 
a
 
D
N
 
a
n
d
 
a
d
d
e
d
 
t
o
 
g
r
o
u
p
s


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
 
d
i
s
c
o
v
e
r
a
b
l
e
 
b
y
 
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
 
a
n
y
 
S
S
O
 
m
e
t
h
o
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
 
N
o
 
n
e
s
t
e
d
 
g
r
o
u
p
 
s
u
p
p
o
r
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
 
p
e
r
f
o
r
m
i
n
g
 
L
D
A
P
 
g
r
o
u
p
 
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
 
S
H
A
L
L
 
N
O
T
 
r
e
s
o
l
v
e
 
n
e
s
t
e
d


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
.
 
U
s
e
r
s
 
M
U
S
T
 
b
e
 
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
s
 
o
f
 
t
h
e
 
t
a
r
g
e
t
 
g
r
o
u
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
 
N
e
s
t
e
d
 
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
 
e
x
c
l
u
d
e
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
 
w
h
o
 
i
s
 
a
 
m
e
m
b
e
r
 
o
f
 
`
s
u
b
g
r
o
u
p
-
a
`
 
w
h
i
c
h
 
i
s
 
a
 
m
e
m
b
e
r
 
o
f
 
`
a
p
p
-
a
c
c
e
s
s
-
g
r
o
u
p
`


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
s
 
t
h
e
 
`
a
p
p
-
a
c
c
e
s
s
-
g
r
o
u
p
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
 
N
O
T
 
i
n
c
l
u
d
e
d


-
 
A
N
D
 
o
n
l
y
 
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
s
 
o
f
 
`
a
p
p
-
a
c
c
e
s
s
-
g
r
o
u
p
`
 
a
r
e
 
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
 
g
r
o
u
p
 
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
 
s
c
h
e
d
u
l
e
s




E
a
c
h
 
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
 
L
D
A
P
 
g
r
o
u
p
s
 
o
n
 
i
t
s
 
o
w
n
 
s
c
h
e
d
u
l
e
,


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
 
v
i
a
 
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
 
g
r
o
u
p
 
s
y
n
c
 
i
n
t
e
r
v
a
l
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
e
x
t
c
l
o
u
d
 
s
y
n
c
 
i
n
t
e
r
v
a
l


-
 
G
I
V
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
 
`
b
a
c
k
g
r
o
u
n
d
_
s
y
n
c
_
i
n
t
e
r
v
a
l
`


-
 
W
H
E
N
 
t
h
e
 
i
n
t
e
r
v
a
l
 
e
l
a
p
s
e
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
 
r
e
a
d
s
 
a
l
l
 
g
r
o
u
p
s
 
e
n
a
b
l
e
d
 
f
o
r
 
N
e
x
t
c
l
o
u
d
 
a
c
c
e
s
s
 
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
 
A
N
D
 
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
 
l
o
c
a
l
 
g
r
o
u
p
 
c
a
c
h
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
 
X
W
i
k
i
 
d
a
i
l
y
 
s
y
n
c


-
 
G
I
V
E
N
 
X
W
i
k
i
 
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
 
t
h
e
 
L
D
A
P
 
G
r
o
u
p
 
I
m
p
o
r
t
 
J
o
b


-
 
W
H
E
N
 
t
h
e
 
n
i
g
h
t
l
y
 
j
o
b
 
e
x
e
c
u
t
e
s


-
 
T
H
E
N
 
X
W
i
k
i
 
i
m
p
o
r
t
s
 
a
l
l
 
g
r
o
u
p
s
 
e
n
a
b
l
e
d
 
f
o
r
 
X
W
i
k
i
 
u
s
e


-
 
A
N
D
 
t
h
e
 
M
a
p
p
e
d
 
G
r
o
u
p
s
 
D
a
i
l
y
 
U
p
d
a
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
 
m
a
p
p
e
d
 
g
r
o
u
p
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
 
h
o
u
r
l
y
 
s
y
n
c


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
 
w
i
t
h
 
h
o
u
r
l
y
 
L
D
A
P
 
g
r
o
u
p
 
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


-
 
W
H
E
N
 
t
h
e
 
h
o
u
r
 
e
l
a
p
s
e
s


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
a
d
s
 
a
l
l
 
g
r
o
u
p
s
 
e
n
a
b
l
e
d
 
f
o
r
 
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
c
c
e
s
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
 
t
h
a
t
 
d
o
 
n
o
t
 
s
u
p
p
o
r
t
 
S
A
M
L
 
o
r
 
O
I
D
C
 
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


d
i
r
e
c
t
 
L
D
A
P
 
b
i
n
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
'
s
 
D
N
 
a
n
d
 
p
a
s
s
w
o
r
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
 
i
n
 
O
p
e
n
L
D
A
P


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
 
e
n
t
e
r
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
 
i
n
 
a
n
 
L
D
A
P
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
 
p
e
r
f
o
r
m
s
 
a
n
 
L
D
A
P
 
b
i
n
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
'
s
 
D
N
 
a
n
d
 
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
 
s
u
c
c
e
e
d
s
 
i
f
 
b
i
n
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
 
w
i
t
h
o
u
t
 
`
i
n
v
a
l
i
d
C
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
 
A
N
D
 
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
s
 
i
f
 
b
i
n
d
 
r
e
t
u
r
n
s
 
a
n
y
 
e
r
r
o
r




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
 
p
r
o
p
a
g
a
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
 
u
s
e
r
 
w
h
o
 
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
i
r
 
p
a
s
s
w
o
r
d
 
v
i
a
 
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


-
 
W
H
E
N
 
t
h
e
 
L
D
A
P
 
p
a
s
s
w
o
r
d
 
i
s
 
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
L
D
A
P


-
 
T
H
E
N
 
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
 
L
D
A
P
 
b
i
n
d
 
a
t
t
e
m
p
t
s
 
s
u
c
c
e
e
d
 
w
i
t
h
 
t
h
e
 
n
e
w
 
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
 
f
a
i
l
 
w
i
t
h
 
t
h
e
 
o
l
d
 
p
a
s
s
w
o
r
d




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
 
L
D
A
P
:
 
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
 
O
p
e
n
L
D
A
P
 
c
o
n
s
u
m
e
r
s


(
N
u
b
u
s
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
 
D
o
v
e
c
o
t
,
 
I
L
I
A
S
)
.

