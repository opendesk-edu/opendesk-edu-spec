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
 
N
e
t
w
o
r
k
i
n
g




#
#
 
P
u
r
p
o
s
e




I
n
g
r
e
s
s
 
r
o
u
t
i
n
g
,
 
D
N
S
 
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
,
 
o
u
t
b
o
u
n
d
 
p
r
o
x
y
,
 
a
n
d
 
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
-
t
o
-
s
e
r
v
i
c
e
 
D
N
S
 
(
C
o
r
e
D
N
S
 
d
e
f
a
u
l
t
)


-
 
V
P
N
 
o
r
 
t
u
n
n
e
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
 
r
o
u
t
i
n
g




T
h
e
 
p
l
a
t
f
o
r
m
 
S
H
A
L
L
 
u
s
e
 
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
 
a
s
 
t
h
e
 
p
r
i
m
a
r
y
 
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
,


r
o
u
t
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
 
H
T
T
P
S
 
t
r
a
f
f
i
c
 
t
o
 
b
a
c
k
e
n
d
 
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
 
H
o
s
t
-
b
a
s
e
d
 
r
o
u
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
o
u
r
c
e
 
w
i
t
h
 
a
 
h
o
s
t
 
r
u
l
e
 
f
o
r
 
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
 
W
H
E
N
 
a
 
r
e
q
u
e
s
t
 
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
 
h
o
s
t
 
h
e
a
d
e
r


-
 
T
H
E
N
 
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
 
t
o
 
t
h
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
 
s
e
r
v
i
c
e


-
 
A
N
D
 
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
 
i
s
 
p
e
r
f
o
r
m
e
d
 
a
t
 
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
n
i
p
p
e
t
 
a
n
n
o
t
a
t
i
o
n
s
 
e
n
a
b
l
e
d


-
 
G
I
V
E
N
 
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
 
u
s
i
n
g
 
H
A
P
r
o
x
y
 
s
n
i
p
p
e
t
 
a
n
n
o
t
a
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
 
`
a
l
l
o
w
S
n
i
p
p
e
t
A
n
n
o
t
a
t
i
o
n
s
=
t
r
u
e
`
 
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
 
o
n
 
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


-
 
A
N
D
 
`
a
d
m
i
s
s
i
o
n
W
e
b
h
o
o
k
s
.
a
l
l
o
w
S
n
i
p
p
e
t
A
n
n
o
t
a
t
i
o
n
s
=
t
r
u
e
`
 
S
H
A
L
L
 
a
l
s
o
 
b
e
 
e
n
a
b
l
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
 
L
a
r
g
e
 
h
e
a
d
e
r
 
s
u
p
p
o
r
t


-
 
G
I
V
E
N
 
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
 
w
i
t
h
 
l
a
r
g
e
 
H
T
T
P
 
h
e
a
d
e
r
s
 
(
e
.
g
.
,
 
U
D
M
 
R
E
S
T
 
A
P
I
)


-
 
T
H
E
N
 
H
A
P
r
o
x
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
 
`
t
u
n
e
.
b
u
f
s
i
z
e
 
6
5
5
3
6
`
 
a
n
d
 
`
t
u
n
e
.
h
t
t
p
.
m
a
x
h
d
r
 
2
5
6
`


-
 
A
N
D
 
r
e
q
u
e
s
t
s
 
a
r
e
 
n
o
t
 
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
 
4
3
1
 
R
e
q
u
e
s
t
 
H
e
a
d
e
r
 
F
i
e
l
d
s
 
T
o
o
 
L
a
r
g
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
 
T
L
S
 
v
i
a
 
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




T
h
e
 
p
l
a
t
f
o
r
m
 
S
H
A
L
L
 
m
a
n
a
g
e
 
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
s
 
v
i
a
 
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
,
 
w
i
t
h
 
s
u
p
p
o
r
t
 
f
o
r


p
r
o
v
i
d
i
n
g
 
a
 
p
r
e
-
e
x
i
s
t
i
n
g
 
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
e
c
r
e
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
 
A
u
t
o
m
a
t
i
c
 
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
 
i
n
s
t
a
l
l
e
d
 
a
n
d
 
a
 
`
C
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
`
 
r
e
s
o
u
r
c
e
 
w
i
t
h
 
t
h
e
 
d
o
m
a
i
n


-
 
W
H
E
N
 
t
h
e
 
I
n
g
r
e
s
s
 
i
s
 
c
r
e
a
t
e
d


-
 
T
H
E
N
 
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
 
i
s
s
u
e
s
 
a
 
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


-
 
A
N
D
 
t
h
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
 
a
 
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
 
r
e
f
e
r
e
n
c
e
d
 
b
y
 
t
h
e
 
I
n
g
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
 
P
r
e
-
e
x
i
s
t
i
n
g
 
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
 
G
I
V
E
N
 
a
 
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
 
s
t
o
r
e
d
 
i
n
 
a
 
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


-
 
W
H
E
N
 
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
 
i
s
 
d
i
s
a
b
l
e
d
 
i
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


-
 
T
H
E
N
 
t
h
e
 
I
n
g
r
e
s
s
 
r
e
f
e
r
e
n
c
e
s
 
t
h
e
 
p
r
o
v
i
d
e
d
 
s
e
c
r
e
t


-
 
A
N
D
 
n
o
 
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
 
C
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
 
r
e
s
o
u
r
c
e
 
i
s
 
d
e
p
l
o
y
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
 
O
u
t
b
o
u
n
d
 
p
r
o
x
y
 
f
o
r
 
i
n
t
e
r
n
e
t
 
a
c
c
e
s
s




P
o
d
s
 
r
e
q
u
i
r
i
n
g
 
i
n
t
e
r
n
e
t
 
a
c
c
e
s
s
 
S
H
A
L
L
 
r
o
u
t
e
 
t
h
r
o
u
g
h
 
t
h
e
 
H
T
T
P
 
p
r
o
x
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
o
d
 
a
c
c
e
s
s
e
s
 
e
x
t
e
r
n
a
l
 
U
R
L


-
 
G
I
V
E
N
 
a
 
p
o
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
 
t
h
e
 
H
T
T
P
 
p
r
o
x
y


-
 
W
H
E
N
 
t
h
e
 
p
o
d
 
m
a
k
e
s
 
a
n
 
o
u
t
b
o
u
n
d
 
H
T
T
P
S
 
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
 
r
e
q
u
e
s
t
 
r
o
u
t
e
s
 
t
h
r
o
u
g
h
 
`
h
t
t
p
:
/
/
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`


-
 
A
N
D
 
t
h
e
 
p
r
o
x
y
 
h
o
s
t
n
a
m
e
 
`
w
w
w
-
p
r
o
x
y
2
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
 
r
e
s
o
l
v
e
s
 
v
i
a
 
D
N
S




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
N
S
 
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
 
w
o
r
k
a
r
o
u
n
d




D
u
e
 
t
o
 
a
 
C
o
r
e
D
N
S
 
l
i
m
i
t
a
t
i
o
n
 
i
n
 
t
h
e
 
H
R
Z
 
c
l
u
s
t
e
r
,
 
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
q
u
i
r
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


C
N
A
M
E
 
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
 
S
H
A
L
L
 
u
s
e
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
w
i
t
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
 
I
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
 
E
x
t
e
r
n
a
l
 
C
N
A
M
E
 
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


-
 
G
I
V
E
N
 
C
o
r
e
D
N
S
 
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
 
r
e
s
o
l
v
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


-
 
W
H
E
N
 
t
h
e
 
c
h
a
i
n
 
e
x
c
e
e
d
s
 
C
o
r
e
D
N
S
'
s
 
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
 
d
e
p
t
h


-
 
T
H
E
N
 
C
o
r
e
D
N
S
 
r
e
t
u
r
n
s
 
S
E
R
V
F
A
I
L


-
 
A
N
D
 
t
h
e
 
a
f
f
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
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
p
o
i
n
t
i
n
g
 
t
o
 
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
 
I
P




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
r
o
x
y
 
h
o
s
t
n
a
m
e
 
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




T
h
e
 
p
r
o
x
y
 
h
o
s
t
n
a
m
e
 
`
w
w
w
-
p
r
o
x
y
2
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
 
r
e
s
o
l
v
e
s
 
v
i
a
 
D
N
S
,
 
b
u
t
 
t
h
e


a
l
i
a
s
 
`
p
r
o
x
y
0
2
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
 
d
o
e
s
 
N
O
T
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
 
I
n
v
a
l
i
d
 
p
r
o
x
y
 
a
l
i
a
s


-
 
G
I
V
E
N
 
a
 
p
o
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
p
r
o
x
y
0
2
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
 
a
s
 
p
r
o
x
y


-
 
W
H
E
N
 
t
h
e
 
p
o
d
 
a
t
t
e
m
p
t
s
 
D
N
S
 
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


-
 
T
H
E
N
 
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


-
 
A
N
D
 
t
h
e
 
p
o
d
 
S
H
A
L
L
 
u
s
e
 
`
w
w
w
-
p
r
o
x
y
2
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
 
i
n
s
t
e
a
d




#
#
 
D
N
S
 
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




-
 
D
o
m
a
i
n
:
 
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
 
→
 
`
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
`
 
(
i
n
g
r
e
s
s
 
I
P
)


-
 
N
a
m
e
s
e
r
v
e
r
s
:
 
`
1
3
7
.
2
4
8
.
2
1
.
2
2
`
,
 
`
1
3
7
.
2
4
8
.
1
.
5
`
,
 
`
1
3
7
.
2
4
8
.
1
.
8
`


-
 
P
r
o
x
y
:
 
`
h
t
t
p
:
/
/
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`




#
#
 
P
e
r
-
S
e
r
v
i
c
e
 
I
n
g
r
e
s
s
 
T
i
m
e
o
u
t
s




|
 
S
e
r
v
i
c
e
 
|
 
T
i
m
e
o
u
t
 
(
s
)
 
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
-
-
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
 
6
0
0
 
|
 
L
o
n
g
 
d
o
c
u
m
e
n
t
 
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
 
|


|
 
J
i
t
s
i
 
|
 
3
6
0
0
 
|
 
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
 
W
e
b
S
o
c
k
e
t
 
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
s
 
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
 
6
0
0
 
|
 
L
a
r
g
e
 
f
i
l
e
 
u
p
l
o
a
d
s
 
|


|
 
N
o
t
e
s
 
Y
-
P
r
o
v
i
d
e
r
 
|
 
8
6
4
0
0
 
|
 
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
 
Y
.
j
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
s
 
|


|
 
A
l
l
 
o
t
h
e
r
s
 
|
 
1
0
0
 
|
 
D
e
f
a
u
l
t
 
b
o
d
y
 
t
i
m
e
o
u
t
 
|




#
#
 
K
n
o
w
n
 
N
e
t
w
o
r
k
i
n
g
 
I
s
s
u
e
s




#
#
#
 
i
n
g
r
e
s
s
-
n
g
i
n
x
 
a
n
d
 
H
A
P
r
o
x
y
 
s
h
a
r
e
 
e
x
t
e
r
n
a
l
 
I
P




B
o
t
h
 
`
i
n
g
r
e
s
s
-
n
g
i
n
x
`
 
a
n
d
 
`
h
a
p
r
o
x
y
`
 
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
s
 
a
r
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
 
t
h
e


e
x
t
e
r
n
a
l
 
I
P
 
`
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
`
.
 
T
h
e
 
n
g
i
n
x
-
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
 
d
o
e
s
 
N
O
T
 
p
r
o
c
e
s
s


a
l
l
 
i
n
g
r
e
s
s
e
s
 
—
 
o
n
l
y
 
t
h
o
s
e
 
w
i
t
h
 
`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
n
g
i
n
x
`
.
 
M
o
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
 
u
s
e


`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
h
a
p
r
o
x
y
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
 
I
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
 
m
i
s
m
a
t
c
h


-
 
G
I
V
E
N
 
a
 
s
e
r
v
i
c
e
 
I
n
g
r
e
s
s
 
w
i
t
h
 
`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
n
g
i
n
x
`


-
 
W
H
E
N
 
t
h
e
 
n
g
i
n
x
 
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
 
d
o
e
s
 
n
o
t
 
h
a
v
e
 
t
h
e
 
m
a
t
c
h
i
n
g
 
h
o
s
t
 
r
u
l
e


-
 
T
H
E
N
 
t
r
a
f
f
i
c
 
t
o
 
t
h
a
t
 
h
o
s
t
 
i
s
 
N
O
T
 
r
o
u
t
e
d


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
 
S
H
A
L
L
 
u
s
e
 
`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
h
a
p
r
o
x
y
`
 
i
n
s
t
e
a
d




#
#
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
 
A
I
O
 
p
r
o
b
e
 
t
i
m
i
n
g




N
e
x
t
c
l
o
u
d
 
A
I
O
 
u
s
e
s
 
`
i
n
i
t
i
a
l
D
e
l
a
y
S
e
c
o
n
d
s
`
 
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
p
e
r
i
o
d
S
e
c
o
n
d
s
`
 
f
o
r


r
e
a
d
i
n
e
s
s
/
s
t
a
r
t
u
p
 
p
r
o
b
e
s
,
 
c
a
u
s
i
n
g
 
1
0
x
 
P
H
P
-
F
P
M
 
l
o
a
d
 
a
n
d
 
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
t
a
r
t


l
o
o
p
s
.
 
T
h
e
 
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
 
a
n
d
 
c
h
a
r
t
 
t
e
m
p
l
a
t
e
 
S
H
A
L
L
 
b
e
 
p
a
t
c
h
e
d
 
t
o
 
u
s
e


`
p
e
r
i
o
d
S
e
c
o
n
d
s
`
 
w
i
t
h
 
a
p
p
r
o
p
r
i
a
t
e
 
v
a
l
u
e
s
.




#
#
#
 
P
l
a
n
k
a
 
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
 
a
n
n
o
t
a
t
i
o
n
 
c
o
n
f
l
i
c
t




T
h
e
 
u
p
s
t
r
e
a
m
 
P
l
a
n
k
a
 
c
h
a
r
t
 
s
e
t
s
 
`
k
u
b
e
r
n
e
t
e
s
.
i
o
/
i
n
g
r
e
s
s
.
c
l
a
s
s
:
 
n
g
i
n
x
`
 
a
n
n
o
t
a
t
i
o
n


i
n
 
`
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
`
.
 
W
h
e
n
 
u
s
i
n
g
 
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
,
 
t
h
i
s
 
a
n
n
o
t
a
t
i
o
n
 
M
U
S
T
 
b
e
 
r
e
m
o
v
e
d
,


k
e
e
p
i
n
g
 
o
n
l
y
 
`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
h
a
p
r
o
x
y
`
.

