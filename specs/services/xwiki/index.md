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
 
X
W
i
k
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




K
n
o
w
l
e
d
g
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
 
a
n
d
 
w
i
k
i
 
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
,
 
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
,
 
a
n
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
 
o
r
 
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
 
m
u
l
t
i
-
w
i
k
i


s
e
t
u
p
s
,
 
L
D
A
P
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
 
s
y
n
c
,
 
g
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
 
c
o
n
t
r
o
l
,
 
a
n
d
 
o
p
t
i
o
n
a
l


C
o
l
l
a
b
o
r
a
 
O
D
T
/
D
O
C
X
 
e
x
p
o
r
t
 
(
e
n
t
e
r
p
r
i
s
e
)
.
 
T
h
e
 
p
a
g
e
 
t
i
t
l
e
 
f
o
l
l
o
w
s
 
t
h
e
 
p
a
t
t
e
r
n


"
W
i
s
s
e
n
 
-
 
$
d
o
c
T
i
t
l
e
 
-
 
<
p
r
o
d
u
c
t
N
a
m
e
>
"
.




X
W
i
k
i
 
u
s
e
s
 
a
 
d
u
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
 
s
t
r
a
t
e
g
y
:
 
O
I
D
C
 
f
o
r
 
u
s
e
r
 
l
o
g
i
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
,


a
n
d
 
L
D
A
P
 
f
o
r
 
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
 
a
n
d
 
u
s
e
r
 
i
m
p
o
r
t
.
 
O
I
D
C
 
a
n
d
 
L
D
A
P
 
u
s
e
r
s
 
a
r
e


l
i
n
k
e
d
 
v
i
a
 
t
h
e
 
`
L
D
A
P
U
s
e
r
I
m
p
o
r
t
`
 
L
D
A
P
U
s
e
r
I
m
p
o
r
t
C
o
n
f
i
g
C
l
a
s
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
 
X
W
i
k
i
 
k
n
o
w
l
e
d
g
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
 
p
l
a
t
f
o
r
m
 
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
,
 
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
 
a
n
d
 
u
s
e
r
 
i
m
p
o
r
t
,
 
m
u
l
t
i
-
w
i
k
i
 
s
e
t
u
p
s
,
 
L
D
A
P
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
 
s
y
n
c
,
 
g
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
 
c
o
n
t
r
o
l
,
 
o
p
t
i
o
n
a
l
 
C
o
l
l
a
b
o
r
a
 
O
D
T
/
D
O
C
X
 
e
x
p
o
r
t
 
(
e
n
t
e
r
p
r
i
s
e
)


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
 
M
e
e
t
i
n
g
 
s
c
h
e
d
u
l
i
n
g
 
(
s
e
e
 
N
o
r
d
e
c
k
 
w
i
d
g
e
t
 
i
n
 
E
l
e
m
e
n
t
)
,
 
c
h
a
t
/
m
e
s
s
a
g
i
n
g
 
(
s
e
e
 
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
)
,
 
r
e
a
l
-
t
i
m
e
 
c
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
v
e
 
e
d
i
t
i
n
g
,
 
c
u
s
t
o
m
 
X
W
i
k
i
 
e
x
t
e
n
s
i
o
n
 
d
e
v
e
l
o
p
m
e
n
t




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
 
M
e
e
t
i
n
g
 
s
c
h
e
d
u
l
i
n
g
 
(
s
e
e
 
N
o
r
d
e
c
k
 
w
i
d
g
e
t
 
i
n
 
E
l
e
m
e
n
t
)


-
 
C
h
a
t
/
m
e
s
s
a
g
i
n
g
 
(
s
e
e
 
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




X
W
i
k
i
 
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
 
u
s
e
r
s
 
v
i
a
 
O
I
D
C
 
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
x
w
i
k
i
`
.


T
h
e
 
a
u
t
h
 
s
e
r
v
i
c
e
 
i
s
 
s
e
t
 
t
o
 
`
k
e
y
c
l
o
a
k
-
b
r
i
d
g
e
-
a
u
t
h
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
 
U
s
e
r
 
l
o
g
s
 
i
n
 
v
i
a
 
O
I
D
C


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
 
X
W
i
k
i


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
 
X
W
i
k
i
 
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
 
v
i
a
 
O
I
D
C


-
 
A
N
D
 
O
I
D
C
 
s
c
o
p
e
s
 
i
n
c
l
u
d
e
 
`
o
p
e
n
i
d
`
 
a
n
d
 
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
-
s
c
o
p
e
`


-
 
A
N
D
 
t
h
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
 
m
e
t
h
o
d
 
i
s
 
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
_
b
a
s
i
c
`


-
 
A
N
D
 
t
h
e
 
O
I
D
C
 
u
s
e
r
 
i
n
f
o
 
i
s
 
f
e
t
c
h
e
d
 
v
i
a
 
G
E
T
 
r
e
q
u
e
s
t




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
t
r
i
x
 
I
D
 
m
a
p
p
i
n
g
 
f
r
o
m
 
O
I
D
C


-
 
G
I
V
E
N
 
O
I
D
C
 
l
o
g
i
n
 
w
i
t
h
 
u
s
e
r
n
a
m
e
 
c
l
a
i
m


-
 
T
H
E
N
 
t
h
e
 
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
 
l
o
c
a
l
p
a
r
t
 
i
s
 
`
o
p
e
n
d
e
s
k
_
u
s
e
r
n
a
m
e
`
 
(
l
o
w
e
r
c
a
s
e
)


-
 
A
N
D
 
t
h
e
 
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
u
b
j
e
c
t
 
i
s
 
`
o
p
e
n
d
e
s
k
_
u
s
e
r
n
a
m
e
`
 
(
c
l
e
a
n
e
d
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
 
O
I
D
C
-
O
I
D
C
 
u
s
e
r
 
l
i
n
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
 
t
h
e
 
`
L
D
A
P
U
s
e
r
I
m
p
o
r
t
.
a
d
d
O
I
D
C
O
b
j
e
c
t
:
 
1
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


-
 
W
H
E
N
 
a
n
 
O
I
D
C
 
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
 
A
N
D
 
a
n
 
L
D
A
P
 
u
s
e
r
 
w
i
t
h
 
m
a
t
c
h
i
n
g
 
U
I
D
 
e
x
i
s
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
 
X
W
i
k
i
 
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
 
l
i
n
k
e
d


-
 
A
N
D
 
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
 
f
r
o
m
 
L
D
A
P
 
i
s
 
a
p
p
l
i
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




X
W
i
k
i
 
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
 
a
n
d
 
u
s
e
r
s
 
d
a
i
l
y
,
 
m
a
p
p
i
n
g
 
s
p
e
c
i
f
i
c
 
g
r
o
u
p
s


t
o
 
X
W
i
k
i
 
a
d
m
i
n
 
r
o
l
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
 
G
r
o
u
p
 
i
m
p
o
r
t
 
f
r
o
m
 
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
 
`
t
r
i
g
g
e
r
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
:
 
1
`
 
a
n
d
 
`
t
r
i
g
g
e
r
G
r
o
u
p
s
U
p
d
a
t
e
:
 
1
`


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
 
g
r
o
u
p
 
s
y
n
c
 
r
u
n
s


-
 
T
H
E
N
 
g
r
o
u
p
s
 
m
a
t
c
h
i
n
g
 
`
(
o
b
j
e
c
t
C
l
a
s
s
=
o
p
e
n
d
e
s
k
K
n
o
w
l
e
d
g
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
G
r
o
u
p
)
(
o
p
e
n
d
e
s
k
K
n
o
w
l
e
d
g
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
E
n
a
b
l
e
d
=
T
R
U
E
)
`
 
a
r
e
 
i
m
p
o
r
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
 
a
d
m
i
n
 
g
r
o
u
p
 
i
s
 
m
a
p
p
e
d
:
 
`
X
W
i
k
i
A
d
m
i
n
G
r
o
u
p
 
=
 
c
n
=
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
K
n
o
w
l
e
d
g
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
A
d
m
i
n
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
 
G
r
o
u
p
 
c
a
c
h
e
 
e
x
p
i
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
 
`
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
_
e
x
p
i
r
a
t
i
o
n
:
 
3
0
0
`


-
 
T
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
 
i
s
 
r
e
f
r
e
s
h
e
d
 
e
v
e
r
y
 
3
0
0
 
s
e
c
o
n
d
s
 
(
5
 
m
i
n
u
t
e
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
 
i
m
p
o
r
t
 
r
e
s
t
r
i
c
t
i
o
n
s


-
 
G
I
V
E
N
 
`
u
s
e
r
s
A
l
l
o
w
e
d
T
o
I
m
p
o
r
t
:
 
g
l
o
b
a
l
A
d
m
i
n
`


-
 
T
H
E
N
 
o
n
l
y
 
g
l
o
b
a
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
o
r
s
 
c
a
n
 
t
r
i
g
g
e
r
 
m
a
n
u
a
l
 
L
D
A
P
 
u
s
e
r
 
i
m
p
o
r
t
s
 
f
r
o
m
 
t
h
e
 
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
 
L
D
A
P
 
p
r
o
f
i
l
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
a
t
i
o
n




X
W
i
k
i
 
S
H
A
L
L
 
s
y
n
c
 
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
s
 
(
n
a
m
e
,
 
e
m
a
i
l
,
 
p
h
o
t
o
)
 
f
r
o
m
 
L
D
A
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
 
P
r
o
f
i
l
e
 
f
i
e
l
d
s
 
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
 
`
f
i
e
l
d
s
_
m
a
p
p
i
n
g
:
 
"
l
a
s
t
_
n
a
m
e
=
s
n
,
f
i
r
s
t
_
n
a
m
e
=
g
i
v
e
n
N
a
m
e
,
e
m
a
i
l
=
m
a
i
l
P
r
i
m
a
r
y
A
d
d
r
e
s
s
"
`


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
 
X
W
i
k
i
 
m
a
p
s
 
L
D
A
P
 
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
 
p
r
o
f
i
l
e
 
f
i
e
l
d
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
o
f
i
l
e
 
p
h
o
t
o
 
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
 
`
u
p
d
a
t
e
_
p
h
o
t
o
:
 
1
`
 
a
n
d
 
`
p
h
o
t
o
_
a
t
t
r
i
b
u
t
e
:
 
j
p
e
g
P
h
o
t
o
`


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
'
s
 
L
D
A
P
 
p
h
o
t
o
 
c
h
a
n
g
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
 
u
s
e
r
'
s
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
 
f
r
o
m
 
L
D
A
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
 
C
e
n
t
r
a
l
 
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




X
W
i
k
i
 
S
H
A
L
L
 
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
 
t
h
e
 
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
 
b
a
r
 
v
i
a
 
t
h
e


w
o
r
k
p
l
a
c
e
S
e
r
v
i
c
e
s
 
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
a
v
i
g
a
t
i
o
n
 
b
a
r
 
r
e
n
d
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
 
`
w
o
r
k
p
l
a
c
e
S
e
r
v
i
c
e
s
.
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
E
n
d
p
o
i
n
t
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
 
N
u
b
u
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
 
f
e
t
c
h
e
s
 
`
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
.
j
s
o
n
`
 
a
n
d
 
r
e
n
d
e
r
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
 
b
a
r


-
 
A
N
D
 
t
h
e
 
t
h
e
m
e
 
n
a
v
b
a
r
 
i
s
 
s
t
y
l
e
d
 
w
i
t
h
 
`
n
a
v
b
a
r
 
h
e
i
g
h
t
:
 
6
4
p
x
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
 
P
o
r
t
a
l
 
b
r
a
n
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
 
t
h
e
 
F
l
a
m
i
n
g
o
 
T
h
e
m
e
s
 
I
c
e
b
e
r
g
 
s
k
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
e
d


-
 
T
H
E
N
 
`
b
r
a
n
d
-
p
r
i
m
a
r
y
`
 
i
s
 
s
e
t
 
t
o
 
t
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
 
p
r
i
m
a
r
y
 
c
o
l
o
r


-
 
A
N
D
 
t
h
e
 
l
o
g
o
 
i
s
 
l
o
a
d
e
d
 
a
s
 
S
V
G
 
b
a
s
e
6
4


-
 
A
N
D
 
t
h
e
 
p
a
g
e
 
t
i
t
l
e
 
p
r
e
f
i
x
 
i
s
 
"
W
i
s
s
e
n
"
 
(
G
e
r
m
a
n
 
f
o
r
 
"
K
n
o
w
l
e
d
g
e
"
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
 
S
M
T
P
 
m
a
i
l
 
d
e
l
i
v
e
r
y




X
W
i
k
i
 
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
 
n
o
t
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
 
v
i
a
 
P
o
s
t
f
i
x
 
(
p
o
r
t
 
5
8
7
,
 
S
T
A
R
T
T
L
S
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
 
E
m
a
i
l
 
n
o
t
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
u
b
s
c
r
i
b
e
d
 
t
o
 
p
a
g
e
 
n
o
t
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


-
 
W
H
E
N
 
a
 
p
a
g
e
 
i
s
 
m
o
d
i
f
i
e
d


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
 
s
e
n
d
s
 
a
 
n
o
t
i
f
i
c
a
t
i
o
n
 
e
m
a
i
l
 
v
i
a
 
P
o
s
t
f
i
x


-
 
A
N
D
 
t
h
e
 
s
e
n
d
e
r
 
a
d
d
r
e
s
s
 
i
s
 
`
n
o
-
r
e
p
l
y
@
<
m
a
i
l
D
o
m
a
i
n
>
`


-
 
A
N
D
 
e
m
a
i
l
 
g
r
a
c
e
 
t
i
m
e
 
i
s
 
5
 
s
e
c
o
n
d
s
 
(
`
n
o
t
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
.
e
m
a
i
l
s
.
l
i
v
e
.
g
r
a
c
e
T
i
m
e
:
 
5
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
 
D
a
t
a
b
a
s
e
 
f
l
e
x
i
b
i
l
i
t
y
 
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
 
o
r
 
M
a
r
i
a
D
B
)




X
W
i
k
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
 
b
o
t
h
 
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
 
a
n
d
 
M
a
r
i
a
D
B
 
a
s
 
i
t
s
 
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
e
n
d
,


s
e
l
e
c
t
e
d
 
v
i
a
 
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
t
y
p
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
 
b
a
c
k
e
n
d


-
 
G
I
V
E
N
 
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
t
y
p
e
:
 
"
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
"
`


-
 
T
H
E
N
 
t
h
e
 
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
s
p
e
c
i
f
i
c
 
i
m
a
g
e
 
v
a
r
i
a
n
t
 
i
s
 
u
s
e
d


-
 
A
N
D
 
t
h
e
 
d
a
t
a
b
a
s
e
 
p
a
s
s
w
o
r
d
 
u
s
e
s
 
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
o
s
t
g
r
e
s
q
l
.
x
w
i
k
i
U
s
e
r
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


-
 
G
I
V
E
N
 
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
t
y
p
e
:
 
"
m
a
r
i
a
d
b
"
`


-
 
T
H
E
N
 
t
h
e
 
M
a
r
i
a
D
B
-
s
p
e
c
i
f
i
c
 
i
m
a
g
e
 
v
a
r
i
a
n
t
 
i
s
 
u
s
e
d


-
 
A
N
D
 
t
h
e
 
d
a
t
a
b
a
s
e
 
p
a
s
s
w
o
r
d
 
u
s
e
s
 
`
s
e
c
r
e
t
s
.
m
a
r
i
a
d
b
.
r
o
o
t
P
a
s
s
w
o
r
d
`




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
n
t
e
r
p
r
i
s
e
 
f
e
a
t
u
r
e
s
 
(
c
o
n
d
i
t
i
o
n
a
l
)




X
W
i
k
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
 
e
n
t
e
r
p
r
i
s
e
-
s
p
e
c
i
f
i
c
 
f
e
a
t
u
r
e
s
 
w
h
e
n
 
`
O
P
E
N
D
E
S
K
_
E
N
T
E
R
P
R
I
S
E
=
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
 
E
n
t
e
r
p
r
i
s
e
 
l
i
c
e
n
s
e


-
 
G
I
V
E
N
 
e
n
t
e
r
p
r
i
s
e
 
k
e
y
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


-
 
T
H
E
N
 
J
a
v
a
 
o
p
t
s
 
i
n
c
l
u
d
e
 
`
-
D
l
i
c
e
n
s
e
s
=
<
o
p
e
n
D
e
s
k
>
,
<
p
r
o
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
>
`


-
 
A
N
D
 
t
h
e
 
e
n
t
e
r
p
r
i
s
e
 
U
I
 
f
l
a
v
o
r
 
i
s
 
u
s
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
 
C
o
l
l
a
b
o
r
a
 
O
D
T
/
D
O
C
X
 
e
x
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
 
e
n
t
e
r
p
r
i
s
e
 
m
o
d
e


-
 
T
H
E
N
 
C
o
l
l
a
b
o
r
a
 
C
o
d
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
 
i
s
 
e
n
a
b
l
e
d
 
(
`
i
s
E
n
a
b
l
e
d
:
 
1
`
)


-
 
A
N
D
 
O
D
T
/
D
O
C
X
 
e
x
p
o
r
t
 
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
 
v
i
a
 
`
h
t
t
p
:
/
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
:
9
9
8
0
`




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
 
T
o
m
c
a
t
 
(
X
W
i
k
i
)
 
|
 
1
0
0
1
 
(
x
w
i
k
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
D
u
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
*
*
:
 
X
W
i
k
i
 
u
s
e
s
 
O
I
D
C
 
f
o
r
 
l
o
g
i
n
 
a
n
d
 
L
D
A
P
 
f
o
r
 
g
r
o
u
p
 
s
y
n
c
.
 
U
s
e
r
s
 
m
u
s
t
 
e
x
i
s
t
 
i
n
 
b
o
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
n
d
 
O
p
e
n
L
D
A
P
.
 
L
D
A
P
-
o
n
l
y
 
u
s
e
r
s
 
c
a
n
n
o
t
 
l
o
g
 
i
n
.


*
*
L
D
A
P
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
 
s
y
n
c
*
*
:
 
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
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
s
 
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
 
`
j
p
e
g
P
h
o
t
o
`
 
a
t
t
r
i
b
u
t
e
.
 
I
f
 
t
h
e
 
a
t
t
r
i
b
u
t
e
 
i
s
 
m
i
s
s
i
n
g
,
 
X
W
i
k
i
 
s
h
o
w
s
 
a
 
d
e
f
a
u
l
t
 
a
v
a
t
a
r
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
:
 
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
)
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
 
o
r
 
M
a
r
i
a
D
B
,
 
O
p
e
n
L
D
A
P
,
 
P
o
s
t
f
i
x
,
 
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
e
n
t
e
r
p
r
i
s
e
 
O
D
T
 
e
x
p
o
r
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
c
e
n
t
r
a
l
 
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
,
 
t
i
l
e
)
,
 
I
n
t
e
r
c
o
m
 
S
e
r
v
i
c
e
 
(
n
e
w
s
f
e
e
d
)
,
 
O
p
e
n
L
D
A
P
 
(
g
r
o
u
p
 
s
y
n
c
,
 
p
r
o
f
i
l
e
 
p
h
o
t
o
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
e
m
a
i
l
 
n
o
t
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
)
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
e
n
t
e
r
p
r
i
s
e
 
O
D
T
/
D
O
C
X
 
e
x
p
o
r
t
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
 
O
I
D
C
 
(
c
l
i
e
n
t
:
 
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
)
 
+
 
L
D
A
P
 
(
g
r
o
u
p
 
s
y
n
c
,
 
p
r
o
f
i
l
e
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
x
w
i
k
i
`
 
D
B
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
b
l
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
 
|
 
R
W
O
 
P
V
C
 
|


|
 
C
a
c
h
e
 
|
 
N
o
n
e
 
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
 
L
G
P
L
-
2
.
1
 
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
x
w
i
k
i
.
*
`
,
 
`
l
d
a
p
.
*
`
,
 
`
s
e
c
r
e
t
s
.
k
e
y
c
l
o
a
k
.
c
l
i
e
n
t
S
e
c
r
e
t
.
x
w
i
k
i
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
x
w
i
k
i
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
k
n
o
w
l
e
d
g
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
5
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
 
T
o
m
c
a
t
 
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
3
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
 
X
W
i
k
i
 
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
 
T
o
m
c
a
t
 
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
O
I
D
C
 
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
 
X
W
i
k
i
 
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
 
L
D
A
P
 
s
y
n
c
 
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
 
c
o
n
s
e
c
u
t
i
v
e
 
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
 
5
 
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
 
5
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
R
W
O
 
P
V
C
*
*
 
(
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
,
 
s
k
i
n
s
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
 
2
0
 
m
i
n


2
.
 
R
W
O
 
P
V
C
 
r
e
s
t
o
r
e
 
-
 
1
0
 
m
i
n


3
.
 
X
W
i
k
i
 
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
5
 
m
i
n


4
.
 
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


5
.
 
L
D
A
P
 
s
y
n
c
 
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


6
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
 
v
i
e
w
 
p
a
g
e
,
 
e
d
i
t
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


7
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
 
W
i
k
i
 
p
a
g
e
s
 
a
n
d
 
c
o
n
t
e
n
t


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
 
s
t
a
t
e


-
 
A
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
 
a
n
d
 
s
k
i
n
s
 
(
R
W
O
 
P
V
C
)


-
 
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
 
p
a
g
e
 
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
R
W
O
 
P
V
C
 
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
O
I
D
C
 
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
 
c
l
i
e
n
t
 
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
L
D
A
P
 
s
y
n
c
 
b
r
o
k
e
n
*
*
:
 
V
e
r
i
f
y
 
L
D
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
v
i
t
y
,
 
r
e
-
r
u
n
 
u
s
e
r
 
i
m
p
o
r
t


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
 
P
V
C
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
 
`
x
w
i
k
i
`
 
(
O
C
I
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


|
 
I
m
a
g
e
 
|
 
T
w
o
 
v
a
r
i
a
n
t
s
:
 
`
x
w
i
k
i
-
m
a
r
i
a
d
b
`
 
a
n
d
 
`
x
w
i
k
i
-
p
o
s
t
g
r
e
s
`
 
|


|
 
S
e
c
u
r
i
t
y
 
|
 
`
r
u
n
A
s
U
s
e
r
:
 
1
0
0
`
,
 
`
r
u
n
A
s
G
r
o
u
p
:
 
1
0
1
`
,
 
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
i
e
s
:
 
d
r
o
p
 
A
L
L
`
 
|


|
 
J
a
v
a
 
O
p
t
s
 
|
 
C
u
s
t
o
m
 
(
l
i
c
e
n
s
e
 
k
e
y
s
,
 
s
e
l
f
-
s
i
g
n
e
d
 
C
A
 
t
r
u
s
t
s
t
o
r
e
)
 
|


|
 
T
h
e
m
e
 
|
 
F
l
a
m
i
n
g
o
 
T
h
e
m
e
s
 
I
c
e
b
e
r
g
,
 
b
r
a
n
d
-
p
r
i
m
a
r
y
 
c
o
l
o
r
 
|


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
 
`
r
e
p
l
i
c
a
s
.
x
w
i
k
i
`
 
(
d
e
f
a
u
l
t
 
1
)
 
|


|
 
L
D
A
P
 
b
i
n
d
 
|
 
`
u
i
d
=
l
d
a
p
s
e
a
r
c
h
_
x
w
i
k
i
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
<
b
a
s
e
D
n
>
`
,
 
`
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
_
e
x
p
i
r
a
t
i
o
n
:
 
3
0
0
`
 
|

