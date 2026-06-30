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
A
M
L
 
2
.
0
 
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
 
n
a
t
i
v
e
l
y
 
s
u
p
p
o
r
t
 
O
I
D
C
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
o
i
d
c
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
 
S
A
M
L
 
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
 
S
S
O




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
s
 
t
h
e
 
S
A
M
L
 
I
d
P
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
t
u
d
e
n
t
 
a
c
c
e
s
s
e
s
 
I
L
I
A
S
 
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
 
s
t
u
d
e
n
t
 
w
i
t
h
 
a
n
 
a
c
t
i
v
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
c
c
o
u
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
 
s
t
u
d
e
n
t
 
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
 
t
h
e
 
I
L
I
A
S
 
U
R
L


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
 
S
P
)
 
i
n
i
t
i
a
t
e
s
 
S
A
M
L
 
S
S
O


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
'
s
 
S
A
M
L
 
I
d
P
 
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


-
 
A
N
D
 
I
L
I
A
S
 
m
a
p
s
 
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
 
t
o
 
t
h
e
 
l
o
c
a
l
 
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
 
r
e
c
e
i
v
e
d
 
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
 
t
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
 
S
H
A
L
L
 
b
e
 
m
a
p
p
e
d
:


 
 
-
 
`
m
a
i
l
`
 
t
o
 
t
h
e
 
u
s
e
r
'
s
 
e
m
a
i
l
 
a
d
d
r
e
s
s


 
 
-
 
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
 
t
o
 
t
h
e
 
u
s
e
r
'
s
 
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


 
 
-
 
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
`
 
t
o
 
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
 
s
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
n
 
e
x
p
i
r
e
d
 
S
A
M
L
 
s
e
s
s
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
e
s
 
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
 
S
A
M
L
 
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
 
i
s
o
l
a
t
i
o
n




E
a
c
h
 
S
A
M
L
 
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
 
h
a
v
e
 
i
t
s
 
o
w
n
 
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
n
 
K
e
y
c
l
o
a
k
.


S
A
M
L
 
s
e
s
s
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
 
g
r
a
n
t
 
a
c
c
e
s
s
 
t
o
 
n
o
n
-
S
A
M
L
 
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
 
s
e
s
s
i
o
n
 
d
o
e
s
 
n
o
t
 
g
r
a
n
t
 
O
I
D
C
 
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
 
v
i
a
 
S
A
M
L
 
t
o
 
I
L
I
A
S


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
 
N
e
x
t
c
l
o
u
d
 
(
O
I
D
C
)


-
 
T
H
E
N
 
a
 
s
e
p
a
r
a
t
e
 
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


-
 
A
N
D
 
t
h
e
 
S
A
M
L
 
s
e
s
s
i
o
n
 
i
s
 
N
O
T
 
r
e
u
s
e
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
 
S
A
M
L
 
a
u
t
h
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
.

