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
o
v
e
c
o
t
 
P
o
s
t
f
i
x
 
M
a
i
l
 
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
o
v
e
c
o
t
 
a
n
d
 
P
o
s
t
f
i
x
 
p
r
o
v
i
d
e
 
e
m
a
i
l
 
s
e
r
v
i
c
e
s
 
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
,


e
n
a
b
l
i
n
g
 
u
s
e
r
s
 
t
o
 
s
e
n
d
 
a
n
d
 
r
e
c
e
i
v
e
 
e
m
a
i
l
s
 
t
h
r
o
u
g
h
 
S
O
G
o
 
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
 
t
h
e
i
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
,
 
s
t
o
r
a
g
e
,
 
d
e
l
i
v
e
r
y
,
 
a
n
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
 
D
o
v
e
c
o
t
 
I
M
A
P
 
s
e
r
v
e
r
,
 
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
 
s
e
r
v
e
r
,
 
e
m
a
i
l
 
s
t
o
r
a
g
e
 
a
n
d
 
d
e
l
i
v
e
r
y
 
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
,
 
S
O
G
o
 
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
 
L
D
A
P
 
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
 
S
p
a
m
A
s
s
a
s
s
i
n
/
A
m
a
v
i
s
 
s
p
a
m
 
f
i
l
t
e
r
i
n
g
,
 
T
L
S
 
e
n
c
r
y
p
t
i
o
n
,
 
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
 
E
m
a
i
l
 
l
i
s
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
u
s
e
 
m
a
i
l
i
n
g
 
l
i
s
t
 
s
e
r
v
i
c
e
s
)
,
 
a
d
v
a
n
c
e
d
 
s
p
a
m
 
f
i
l
t
e
r
i
n
g
 
b
e
y
o
n
d
 
S
p
a
m
A
s
s
a
s
s
i
n
/
A
m
a
v
i
s
,
 
w
e
b
m
a
i
l
 
c
l
i
e
n
t
s
 
(
S
O
G
o
 
p
r
o
v
i
d
e
s
 
w
e
b
m
a
i
l
)
,
 
e
m
a
i
l
 
a
r
c
h
i
v
i
n
g
 
b
e
y
o
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
 
E
m
a
i
l
 
l
i
s
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
u
s
e
 
m
a
i
l
i
n
g
 
l
i
s
t
 
s
e
r
v
i
c
e
s
)


-
 
A
d
v
a
n
c
e
d
 
s
p
a
m
 
f
i
l
t
e
r
i
n
g
 
b
e
y
o
n
d
 
S
p
a
m
A
s
s
a
s
s
i
n
/
A
m
a
v
i
s


-
 
W
e
b
m
a
i
l
 
c
l
i
e
n
t
s
 
(
S
O
G
o
 
p
r
o
v
i
d
e
s
 
w
e
b
m
a
i
l
 
i
n
t
e
r
f
a
c
e
)


-
 
E
m
a
i
l
 
a
r
c
h
i
v
i
n
g
 
b
e
y
o
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
 
I
M
A
P
 
E
m
a
i
l
 
A
c
c
e
s
s
 
(
D
o
v
e
c
o
t
)




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
 
a
c
c
e
s
s
 
t
h
e
i
r
 
e
m
a
i
l
 
a
c
c
o
u
n
t
s
 
v
i
a
 
I
M
A
P
/
I
M
A
P
S
 
t
h
r
o
u
g
h
 
D
o
v
e
c
o
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
 
I
M
A
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
 
w
i
t
h
 
a
n
 
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
 
`
j
d
o
e
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
 
v
i
a
 
I
M
A
P
S
 
t
o
 
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`


-
 
T
H
E
N
 
D
o
v
e
c
o
t
 
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
L
D
A
P


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
 
t
h
e
i
r
 
`
I
N
B
O
X
`
,
 
`
S
e
n
t
`
,
 
`
D
r
a
f
t
s
`
,
 
`
J
u
n
k
`
,
 
`
T
r
a
s
h
`
,
 
`
A
r
c
h
i
v
e
`
 
f
o
l
d
e
r
s


-
 
A
N
D
 
m
e
s
s
a
g
e
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
/
M
a
r
i
a
D
B
 
a
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
M
A
P
 
S
S
L
/
T
L
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


-
 
G
I
V
E
N
 
D
o
v
e
c
o
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
 
S
S
L
/
T
L
S


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
 
c
o
n
n
e
c
t
s
 
v
i
a
 
I
M
A
P
S
 
(
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
)


-
 
T
H
E
N
 
D
o
v
e
c
o
t
 
p
r
e
s
e
n
t
s
 
t
h
e
 
`
*
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
 
w
i
l
d
c
a
r
d
 
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


-
 
A
N
D
 
t
h
e
 
c
i
p
h
e
r
 
s
u
i
t
e
 
i
s
 
T
L
S
v
1
.
2
+
 
w
i
t
h
 
E
C
D
H
E
-
R
S
A
-
A
E
S
2
5
6
-
G
C
M
-
S
H
A
3
8
4


-
 
A
N
D
 
S
S
L
v
2
/
S
S
L
v
3
/
T
L
S
v
1
.
0
/
T
L
S
v
1
.
1
 
a
r
e
 
d
i
s
a
b
l
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
 
S
M
T
P
 
S
u
b
m
i
s
s
i
o
n
 
a
n
d
 
R
e
l
a
y
i
n
g
 
(
P
o
s
t
f
i
x
)




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
 
s
e
n
d
 
e
m
a
i
l
s
 
v
i
a
 
S
M
T
P
 
s
u
b
m
i
s
s
i
o
n
 
t
h
r
o
u
g
h
 
P
o
s
t
f
i
x
,
 
w
i
t
h
 
r
e
l
a
y
 
t
o


e
x
t
e
r
n
a
l
 
m
a
i
l
 
s
y
s
t
e
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
 
S
M
T
P
 
s
u
b
m
i
s
s
i
o
n
 
w
i
t
h
 
S
T
A
R
T
T
L
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
 
u
s
e
r
 
w
i
t
h
 
a
 
v
a
l
i
d
 
l
o
g
i
n
 
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
 
s
e
n
d
s
 
a
n
 
e
m
a
i
l
 
v
i
a
 
`
s
m
t
p
:
/
/
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
 
w
i
t
h
 
S
T
A
R
T
T
L
S


-
 
T
H
E
N
 
P
o
s
t
f
i
x
 
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
 
S
A
S
L
 
P
L
A
I
N
 
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
L
D
A
P


-
 
A
N
D
 
t
h
e
 
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
 
t
o
 
r
e
c
i
p
i
e
n
t
 
M
X
 
s
e
r
v
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
 
`
F
r
o
m
:
`
 
h
e
a
d
e
r
 
m
a
t
c
h
e
s
 
t
h
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
e
d
 
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
 
d
e
l
i
v
e
r
y
 
t
o
 
l
o
c
a
l
 
u
s
e
r
s


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
c
o
m
i
n
g
 
e
m
a
i
l
 
f
o
r
 
`
j
d
o
e
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
 
W
H
E
N
 
P
o
s
t
f
i
x
 
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
 
e
m
a
i
l
 
v
i
a
 
S
M
T
P
 
p
o
r
t
 
2
5


-
 
T
H
E
N
 
P
o
s
t
f
i
x
 
d
e
l
i
v
e
r
s
 
t
h
e
 
e
m
a
i
l
 
t
o
 
D
o
v
e
c
o
t
 
v
i
a
 
L
M
T
P


-
 
A
N
D
 
D
o
v
e
c
o
t
 
s
t
o
r
e
s
 
t
h
e
 
e
m
a
i
l
 
i
n
 
t
h
e
 
u
s
e
r
'
s
 
`
I
N
B
O
X
`


-
 
A
N
D
 
I
M
A
P
 
c
l
i
e
n
t
s
 
c
a
n
 
r
e
t
r
i
e
v
e
 
t
h
e
 
e
m
a
i
l




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
r
u
s
 
a
n
d
 
S
p
a
m
 
F
i
l
t
e
r
i
n
g




A
l
l
 
i
n
c
o
m
i
n
g
 
a
n
d
 
o
u
t
g
o
i
n
g
 
e
m
a
i
l
s
 
S
H
A
L
L
 
b
e
 
s
c
a
n
n
e
d
 
f
o
r
 
v
i
r
u
s
e
s
 
a
n
d
 
s
p
a
m
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
m
a
v
i
s
 
c
o
n
t
e
n
t
 
f
i
l
t
e
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
 
a
n
 
i
n
c
o
m
i
n
g
 
e
m
a
i
l
 
f
o
r
 
`
j
d
o
e
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
 
W
H
E
N
 
P
o
s
t
f
i
x
 
f
o
r
w
a
r
d
s
 
t
h
e
 
e
m
a
i
l
 
t
o
 
A
m
a
v
i
s
 
f
o
r
 
f
i
l
t
e
r
i
n
g


-
 
T
H
E
N
 
A
m
a
v
i
s
 
s
c
a
n
s
 
t
h
e
 
e
m
a
i
l
 
v
i
a
 
C
l
a
m
A
V
 
I
C
A
P
 
a
n
d
 
S
p
a
m
A
s
s
a
s
s
i
n


-
 
A
N
D
 
c
l
e
a
n
 
e
m
a
i
l
s
 
a
r
e
 
r
e
t
u
r
n
e
d
 
t
o
 
P
o
s
t
f
i
x
 
f
o
r
 
d
e
l
i
v
e
r
y


-
 
A
N
D
 
i
n
f
e
c
t
e
d
 
e
m
a
i
l
s
 
a
r
e
 
q
u
a
r
a
n
t
i
n
e
d
 
w
i
t
h
 
`
X
-
I
n
f
e
c
t
i
o
n
-
F
o
u
n
d
`
 
h
e
a
d
e
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
 
S
p
a
m
A
s
s
a
s
s
i
n
 
s
c
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
 
a
n
 
i
n
c
o
m
i
n
g
 
e
m
a
i
l


-
 
W
H
E
N
 
S
p
a
m
A
s
s
a
s
s
i
n
 
s
c
o
r
e
s
 
t
h
e
 
e
m
a
i
l


-
 
T
H
E
N
 
e
m
a
i
l
s
 
w
i
t
h
 
s
c
o
r
e
 
>
 
5
.
0
 
a
r
e
 
t
a
g
g
e
d
 
a
s
 
s
p
a
m


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
 
a
r
e
 
m
o
v
e
d
 
t
o
 
t
h
e
 
`
J
u
n
k
`
 
f
o
l
d
e
r


-
 
A
N
D
 
`
X
-
S
p
a
m
-
S
t
a
t
u
s
`
 
h
e
a
d
e
r
 
i
n
d
i
c
a
t
e
s
 
s
p
a
m
 
s
t
a
t
u
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
e
v
e
 
S
e
r
v
e
r
-
S
i
d
e
 
F
i
l
t
e
r
i
n
g




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
 
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
 
r
u
l
e
s
 
v
i
a
 
S
i
e
v
e
 
s
c
r
i
p
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
 
S
i
e
v
e
 
r
u
l
e
s
 
e
x
e
c
u
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
 
c
r
e
a
t
e
s
 
a
 
S
i
e
v
e
 
s
c
r
i
p
t
 
w
i
t
h
 
f
i
l
t
e
r
i
n
g
 
r
u
l
e
s
 
(
e
.
g
.
,
 
"
m
o
v
e
 
I
L
I
A
S
 
e
m
a
i
l
s
 
t
o
 
C
o
u
r
s
e
s
 
f
o
l
d
e
r
"
)


-
 
W
H
E
N
 
a
n
 
e
m
a
i
l
 
a
r
r
i
v
e
s
 
m
a
t
c
h
i
n
g
 
t
h
e
 
r
u
l
e
 
c
o
n
d
i
t
i
o
n
s


-
 
T
H
E
N
 
D
o
v
e
c
o
t
 
e
x
e
c
u
t
e
s
 
t
h
e
 
S
i
e
v
e
 
s
c
r
i
p
t


-
 
A
N
D
 
t
h
e
 
e
m
a
i
l
 
i
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
 
m
o
v
e
d
 
t
o
 
t
h
e
 
s
p
e
c
i
f
i
e
d
 
f
o
l
d
e
r


-
 
A
N
D
 
S
O
G
o
 
d
i
s
p
l
a
y
s
 
t
h
e
 
f
i
l
t
e
r
 
r
u
l
e
s
 
i
n
 
s
e
t
t
i
n
g
s
 
U
I




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
 
E
m
a
i
l
 
Q
u
o
t
a
 
M
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
 
m
a
i
l
b
o
x
e
s
 
S
H
A
L
L
 
h
a
v
e
 
q
u
o
t
a
 
l
i
m
i
t
s
 
t
o
 
p
r
e
v
e
n
t
 
a
b
u
s
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
 
Q
u
o
t
a
 
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
 
d
i
s
k
 
q
u
o
t
a
 
5
G
B


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
'
s
 
m
a
i
l
b
o
x
 
s
i
z
e
 
e
x
c
e
e
d
s
 
4
.
7
5
G
B
 
(
9
5
%
 
l
i
m
i
t
)


-
 
T
H
E
N
 
D
o
v
e
c
o
t
 
s
e
n
d
s
 
q
u
o
t
a
 
w
a
r
n
i
n
g
 
e
m
a
i
l
 
t
o
 
t
h
e
 
u
s
e
r


-
 
A
N
D
 
i
n
c
o
m
i
n
g
 
e
m
a
i
l
s
 
a
r
e
 
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
 
"
O
v
e
r
 
q
u
o
t
a
"
 
e
r
r
o
r


-
 
A
N
D
 
S
O
G
o
 
d
i
s
p
l
a
y
s
 
q
u
o
t
a
 
s
t
a
t
u
s
 
i
n
 
U
I




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
i
l
 
S
t
o
r
e
 
P
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




E
m
a
i
l
 
d
a
t
a
 
S
H
A
L
L
 
b
e
 
s
t
o
r
e
d
 
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
l
y
 
w
i
t
h
 
b
a
c
k
u
p
 
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
o
s
t
g
r
e
S
Q
L
 
m
a
i
l
 
s
t
o
r
e


-
 
G
I
V
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
 
m
a
i
l
 
s
t
o
r
e


-
 
W
H
E
N
 
e
m
a
i
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
 
T
H
E
N
 
e
m
a
i
l
 
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
p
o
s
t
f
i
x
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


-
 
A
N
D
 
`
p
g
_
d
u
m
p
`
 
b
a
c
k
u
p
 
r
u
n
s
 
n
i
g
h
t
l
y
 
v
i
a
 
c
r
o
n
j
o
b




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
a
r
i
a
D
B
 
m
a
i
l
 
s
t
o
r
e
 
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


-
 
G
I
V
E
N
 
M
a
r
i
a
D
B
 
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
 
m
a
i
l
 
s
t
o
r
e
 
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
 
c
o
n
f
i
g
)


-
 
W
H
E
N
 
e
m
a
i
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
 
M
a
r
i
a
D
B


-
 
T
H
E
N
 
e
m
a
i
l
 
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
m
a
r
i
a
d
b
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


-
 
A
N
D
 
`
m
y
s
q
l
d
u
m
p
`
 
b
a
c
k
u
p
 
r
u
n
s
 
n
i
g
h
t
l
y
 
v
i
a
 
c
r
o
n
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
 
H
e
a
l
t
h
 
a
n
d
 
M
o
n
i
t
o
r
i
n
g




D
o
v
e
c
o
t
 
a
n
d
 
P
o
s
t
f
i
x
 
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
 
D
o
v
e
c
o
t
 
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
s


-
 
G
I
V
E
N
 
D
o
v
e
c
o
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
 
I
M
A
P
 
p
o
r
t
 
1
4
3
 
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
 
9
9
3
 
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
 
u
n
h
e
a
l
t
h
y
 
p
o
d
s
 
a
r
e
 
r
e
s
t
a
r
t
e
d
 
b
y
 
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
f
i
x
 
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
s


-
 
G
I
V
E
N
 
P
o
s
t
f
i
x
 
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
 
S
M
T
P
 
p
o
r
t
 
2
5
 
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
 
5
8
7
 
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
 
u
n
h
e
a
l
t
h
y
 
p
o
d
s
 
a
r
e
 
r
e
s
t
a
r
t
e
d
 
b
y
 
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
a
i
l
 
q
u
e
u
e
 
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
o
s
t
f
i
x
 
m
a
i
l
 
q
u
e
u
e
s


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
 
P
o
s
t
f
i
x
 
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
 
q
u
e
u
e
 
s
i
z
e
s
 
f
o
r
 
i
n
c
o
m
i
n
g
,
 
a
c
t
i
v
e
,
 
d
e
f
e
r
r
e
d
,
 
c
o
r
r
u
p
t
,
 
d
e
f
e
r
r
e
d
 
q
u
e
u
e
s


-
 
A
N
D
 
G
r
a
f
a
n
a
 
d
a
s
h
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
 
q
u
e
u
e
 
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


-
 
A
N
D
 
a
l
e
r
t
s
 
f
i
r
e
 
w
h
e
n
 
q
u
e
u
e
s
 
e
x
c
e
e
d
 
t
h
r
e
s
h
o
l
d




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
 
D
o
v
e
c
o
t
 
I
M
A
P
 
+
 
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
 
|
 
1
0
0
1
 
(
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
P
a
s
s
w
o
r
d
 
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
*
*
:
 
P
o
s
t
f
i
x
 
a
n
d
 
D
o
v
e
c
o
t
 
s
h
a
r
e
 
t
h
e
 
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
 
f
o
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
.
 
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
s
 
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
 
a
r
e
 
r
e
f
l
e
c
t
e
d
 
i
m
m
e
d
i
a
t
e
l
y
 
(
L
D
A
P
 
b
i
n
d
,
 
n
o
 
c
a
c
h
e
 
d
e
l
a
y
)
.


*
*
S
p
a
m
A
s
s
a
s
s
i
n
 
d
e
l
a
y
*
*
:
 
S
p
a
m
 
f
i
l
t
e
r
i
n
g
 
v
i
a
 
S
p
a
m
A
s
s
a
s
s
i
n
 
a
d
d
s
 
~
2
s
 
l
a
t
e
n
c
y
 
p
e
r
 
e
m
a
i
l
.
 
H
i
g
h
-
v
o
l
u
m
e
 
m
a
i
l
 
(
e
.
g
.
,
 
m
a
i
l
i
n
g
 
l
i
s
t
s
)
 
m
a
y
 
e
x
p
e
r
i
e
n
c
e
 
d
e
l
i
v
e
r
y
 
d
e
l
a
y
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




*
*
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
L
D
A
P
 
(
`
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
:
3
8
9
`
,
 
b
i
n
d
:
 
`
u
i
d
=
p
o
s
t
f
i
x
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
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
p
o
s
t
f
i
x
.
l
d
a
p
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
)




*
*
D
a
t
a
 
S
t
o
r
e
*
*
:


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
`
p
o
s
t
f
i
x
`
 
D
B
,
 
h
o
s
t
:
 
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
,
 
u
s
e
r
:
 
`
p
o
s
t
f
i
x
_
u
s
e
r
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
p
o
s
t
f
i
x
.
p
s
q
l
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
)
 
O
R
 
M
a
r
i
a
D
B
 
(
`
p
o
s
t
f
i
x
`
 
D
B
,
 
h
o
s
t
:
 
`
m
a
r
i
a
d
b
:
3
3
0
6
`
,
 
u
s
e
r
:
 
`
p
o
s
t
f
i
x
_
u
s
e
r
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
p
o
s
t
f
i
x
.
m
y
s
q
l
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
)


-
 
R
W
O
 
P
V
C
:
 
`
p
o
s
t
f
i
x
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
 
(
5
G
i
,
 
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
:
 
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
,
 
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
)
 
-
 
d
e
f
e
r
 
t
o
 
v
e
n
d
o
r
.




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
:


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
H
A
P
r
o
x
y
 
r
o
u
t
e
,
 
i
n
g
r
e
s
s
 
c
l
a
s
s
:
 
`
h
a
p
r
o
x
y
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




*
*
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
*
*
:


-
 
[
D
o
v
e
c
o
t
 
I
M
A
P
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
d
o
v
e
c
o
t
-
i
m
a
p
)
 
—
 
e
m
a
i
l
 
a
c
c
e
s
s


-
 
[
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
p
o
s
t
f
i
x
-
s
m
t
p
-
s
u
b
m
i
s
s
i
o
n
)
 
—
 
e
m
a
i
l
 
s
e
n
d
i
n
g


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




*
*
S
e
r
v
i
c
e
s
*
*
:


-
 
S
O
G
o
 
(
I
M
A
P
 
c
l
i
e
n
t
 
f
o
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
 
e
m
a
i
l
,
 
F
o
r
w
a
r
d
s
 
D
O
V
E
C
O
T
 
f
o
r
 
S
i
e
v
e
 
p
h
o
n
e
 
a
n
d
 
e
t
c
)


-
 
C
l
a
m
A
V
 
(
I
C
A
P
 
R
E
Q
M
O
D
/
R
E
S
M
O
D
 
f
o
r
 
v
i
r
u
s
 
s
c
a
n
n
i
n
g
)


-
 
A
m
a
v
i
s
 
(
c
o
n
t
e
n
t
 
f
i
l
t
e
r
i
n
g
,
 
a
t
t
a
c
h
e
s
 
`
X
-
S
p
a
m
-
S
t
a
t
u
s
`
 
a
n
d
 
`
X
-
V
i
r
u
s
-
I
D
`
 
h
e
a
d
e
r
s
)


-
 
S
p
a
m
A
s
s
a
s
s
i
n
 
(
s
p
a
m
 
s
c
o
r
i
n
g
,
 
m
o
v
e
s
 
t
o
 
`
J
u
n
k
`
 
f
o
l
d
e
r
)


-
 
P
o
s
t
f
i
x
 
(
d
e
l
i
v
e
r
y
 
t
o
 
D
o
v
e
c
o
t
 
v
i
a
 
L
M
T
P
,
 
r
e
l
a
y
 
t
o
 
e
x
t
e
r
n
a
l
 
M
X
 
s
e
r
v
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
/
M
a
r
i
a
D
B
 
(
m
a
i
l
 
s
t
o
r
e
 
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
e
x
p
o
s
e
 
S
M
T
P
/
I
M
A
P
 
e
n
d
p
o
i
n
t
s
 
t
o
 
c
l
u
s
t
e
r
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
 
A
u
t
h
 
|
 
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
 
|


|
 
I
M
A
P
 
|
 
D
o
v
e
c
o
t
 
(
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
,
 
S
T
A
R
T
T
L
S
 
o
n
 
1
4
3
)
 
|


|
 
S
M
T
P
 
|
 
P
o
s
t
f
i
x
 
(
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
2
5
`
 
f
o
r
 
i
n
c
o
m
i
n
g
,
 
`
s
m
t
p
:
/
/
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
 
f
o
r
 
s
u
b
m
i
s
s
i
o
n
)
 
|


|
 
L
M
T
P
 
|
 
P
o
s
t
f
i
x
 
→
 
D
o
v
e
c
o
t
 
(
`
l
m
t
p
:
/
/
d
o
v
e
c
o
t
:
2
4
`
)
 
|


|
 
A
n
t
i
v
i
r
u
s
 
|
 
C
l
a
m
A
V
 
I
C
A
P
 
(
`
i
c
a
p
:
/
/
c
l
a
m
a
v
-
i
c
a
p
:
1
3
4
4
/
a
v
s
c
a
n
`
)
 
|


|
 
S
p
a
m
 
F
i
l
t
e
r
 
|
 
A
m
a
v
i
s
 
+
 
S
p
a
m
A
s
s
a
s
s
i
n
 
|


|
 
S
i
e
v
e
 
|
 
D
o
v
e
c
o
t
 
M
a
n
a
g
e
S
i
e
v
e
 
(
`
s
i
e
v
e
:
/
/
d
o
v
e
c
o
t
:
4
1
9
0
`
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
p
o
s
t
f
i
x
`
 
D
B
)
 
o
r
 
M
a
r
i
a
D
B
 
(
`
p
o
s
t
f
i
x
`
 
D
B
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
 
D
o
v
e
c
o
t
 
(
L
G
P
L
-
2
.
1
)
,
 
P
o
s
t
f
i
x
 
(
I
B
M
 
P
u
b
l
i
c
 
L
i
c
e
n
s
e
 
v
1
.
0
)
 
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
o
s
t
f
i
x
.
*
`
,
 
`
i
m
u
 
a
u
t
h
.
c
r
e
d
.
*
`
,
 
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
d
o
v
e
c
o
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
,
 
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
p
o
s
t
f
i
x
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
d
o
v
e
c
o
t
/
`
 
a
n
d
 
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
p
o
s
t
f
i
x
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
s
)
 
|


|
 
H
e
a
l
t
h
 
|
 
I
M
A
P
 
1
4
3
/
9
9
3
,
 
S
M
T
P
 
2
5
/
5
8
7
 
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
 
C
r
i
t
i
c
a
l
 
(
e
m
a
i
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
 
i
s
 
e
s
s
e
n
t
i
a
l
 
f
o
r
 
a
l
l
 
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
I
M
A
P
 
o
p
e
r
a
t
i
o
n
)
 
|
 
D
o
v
e
c
o
t
 
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
S
M
T
P
 
d
e
l
i
v
e
r
y
)
 
|
 
P
o
s
t
f
i
x
 
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
d
e
l
i
v
e
r
y
 
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
 
P
o
s
t
f
i
x
 
m
a
i
l
 
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
p
a
m
 
D
e
t
e
c
t
i
o
n
*
*
 
|
 
>
9
9
%
 
(
S
p
a
m
A
s
s
a
s
s
i
n
)
 
|
 
A
m
a
v
i
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
 
I
M
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
1
 
a
l
e
r
t


-
 
S
M
T
P
 
d
e
l
i
v
e
r
y
 
f
a
i
l
u
r
e
s
 
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
1
 
a
l
e
r
t


-
 
C
l
a
m
A
V
 
s
c
a
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
p
a
m
A
s
s
a
s
s
i
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
 
1
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
3
 
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
 
(
m
a
i
l
 
s
t
o
r
a
g
e
)
 
→
 
P
1
 
a
l
e
r
t


-
 
Q
u
e
u
e
 
d
e
p
t
h
 
>
1
,
0
0
0
 
m
e
s
s
a
g
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
,
0
0
0
 
I
M
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
o
n
s
 
(
t
o
t
a
l
)


-
 
1
0
0
,
0
0
0
 
e
m
a
i
l
s
 
d
e
l
i
v
e
r
e
d
 
p
e
r
 
d
a
y


-
 
1
0
 
T
B
 
m
a
i
l
 
s
t
o
r
a
g
e
 
(
t
y
p
i
c
a
l
 
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
 
S
M
T
P
 
s
u
b
m
i
s
s
i
o
n
s




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
 
1
5
 
m
i
n
,
 
R
T
O
:
 
1
 
h
o
u
r
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
/
M
a
r
i
a
D
B
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
M
a
i
l
 
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
D
o
v
e
c
o
t
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
 
v
i
a
 
k
8
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
S
p
a
m
/
A
V
 
r
u
l
e
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
 
o
f
 
C
l
a
m
A
V
 
a
n
d
 
S
p
a
m
A
s
s
a
s
s
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
s




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
 
D
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
/
M
a
r
i
a
D
B
)
 
-
 
1
5
 
m
i
n


2
.
 
M
a
i
l
 
s
t
o
r
a
g
e
 
r
e
s
t
o
r
e
 
(
D
o
v
e
c
o
t
)
 
-
 
2
0
 
m
i
n


3
.
 
P
o
s
t
f
i
x
 
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


4
.
 
D
o
v
e
c
o
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
 
1
0
 
m
i
n


5
.
 
C
l
a
m
A
V
 
+
 
A
m
a
v
i
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
 
5
 
m
i
n


6
.
 
S
p
a
m
A
s
s
a
s
s
i
n
 
r
u
l
e
 
u
p
d
a
t
e
 
-
 
5
 
m
i
n


7
.
 
S
O
G
o
/
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
s
e
n
d
 
e
m
a
i
l
,
 
r
e
c
e
i
v
e
,
 
I
M
A
P
 
a
c
c
e
s
s
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
0
 
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
 
M
a
i
l
b
o
x
e
s
 
a
n
d
 
e
m
a
i
l
 
m
e
s
s
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
 
q
u
o
t
a
s


-
 
E
m
a
i
l
 
a
l
i
a
s
e
s
 
a
n
d
 
f
o
r
w
a
r
d
i
n
g
 
r
u
l
e
s


-
 
S
p
a
m
/
A
V
 
q
u
a
r
a
n
t
i
n
e


-
 
P
o
s
t
f
i
x
 
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
 
a
n
d
 
r
o
u
t
i
n
g
 
r
u
l
e
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
M
a
i
l
 
s
t
o
r
a
g
e
 
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
 
m
e
s
s
a
g
e
 
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
P
o
s
t
f
i
x
 
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
 
S
M
T
P
 
r
o
u
t
i
n
g
,
 
c
h
e
c
k
 
q
u
e
u
e


-
 
*
*
D
o
v
e
c
o
t
 
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
 
I
M
A
P
/
S
I
E
V
E
 
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


-
 
*
*
C
l
a
m
A
V
 
s
i
g
n
a
t
u
r
e
 
o
u
t
d
a
t
e
d
*
*
:
 
U
p
d
a
t
e
 
s
i
g
n
a
t
u
r
e
s
,
 
v
e
r
i
f
y
 
s
c
a
n
 
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
 
m
a
i
l
 
s
t
o
r
a
g
e
,
 
v
e
r
i
f
y
 
S
O
G
o
/
O
X
 
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

