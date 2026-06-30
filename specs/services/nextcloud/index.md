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
x
t
c
l
o
u
d




#
#
 
P
u
r
p
o
s
e




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
i
l
e
 
s
t
o
r
a
g
e
,
 
s
y
n
c
,
 
a
n
d
 
s
h
a
r
i
n
g
 
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
e
d
 
a
s
 
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


(
A
l
l
-
i
n
-
O
n
e
)
 
w
i
t
h
 
i
n
t
e
g
r
a
t
e
d
 
P
H
P
-
F
P
M
,
 
N
g
i
n
x
,
 
a
n
d
 
R
e
d
i
s
 
c
a
c
h
e
.
 
P
r
o
v
i
d
e
s
 
S
3


p
r
i
m
a
r
y
 
s
t
o
r
a
g
e
 
(
C
e
p
h
F
S
 
R
W
X
 
f
a
l
l
b
a
c
k
)
,
 
M
a
r
i
a
D
B
/
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
e
t
a
d
a
t
a
 
b
a
c
k
e
n
d
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
,
 
C
l
a
m
A
V
 
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
,
 
W
O
P
I
 
o
f
f
i
c
e
 
e
d
i
t
i
n
g
 
v
i
a
 
C
o
l
l
a
b
o
r
a
,
 
a
n
d
 
N
o
t
i
f
y
 
P
u
s
h
 
f
o
r
 
r
e
a
l
-
t
i
m
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
.




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
 
b
u
n
d
l
e
s
 
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
e
r
,
 
d
a
t
a
b
a
s
e
 
c
l
i
e
n
t
,
 
R
e
d
i
s
 
c
l
i
e
n
t
,


a
n
d
 
c
r
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
r
 
i
n
t
o
 
a
 
s
i
n
g
l
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
,
 
w
i
t
h
 
a
 
s
e
p
a
r
a
t
e
 
N
o
t
i
f
y
 
P
u
s
h


s
i
d
e
c
a
r
 
f
o
r
 
W
e
b
S
o
c
k
e
t
 
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
 
a
n
d
 
a
 
s
e
p
a
r
a
t
e
 
m
e
t
r
i
c
s
 
e
x
p
o
r
t
e
r
 
f
o
r


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
 
f
i
l
e
 
s
t
o
r
a
g
e
/
s
h
a
r
i
n
g
 
(
C
e
p
h
F
S
/
S
3
)
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
,
 
C
l
a
m
A
V
 
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
,
 
W
O
P
I
 
o
f
f
i
c
e
 
e
d
i
t
i
n
g
 
v
i
a
 
C
o
l
l
a
b
o
r
a
,
 
N
o
t
i
f
y
 
P
u
s
h
 
r
e
a
l
-
t
i
m
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
,
 
S
3
 
p
r
i
m
a
r
y
 
s
t
o
r
a
g
e


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
 
f
i
l
e
 
s
h
a
r
i
n
g
 
(
s
e
e
 
O
p
e
n
C
l
o
u
d
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
 
d
e
t
a
i
l
s
 
(
s
e
e
 
C
o
l
l
a
b
o
r
a
 
s
p
e
c
)
,
 
T
a
l
k
/
D
r
a
w
.
i
o
/
C
o
l
l
e
c
t
i
v
e
s
 
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
 
(
u
s
e
 
s
t
a
n
d
a
r
d
 
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
p
p
s
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
 
f
i
l
e
 
s
h
a
r
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
)


-
 
C
o
l
l
a
b
o
r
a
 
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
 
d
e
t
a
i
l
s
 
(
s
e
e
 
`
.
.
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
`
)


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
 
T
a
l
k
,
 
D
r
a
w
.
i
o
,
 
C
o
l
l
e
c
t
i
v
e
s
 
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
 
i
n
 
e
d
u
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
3
 
p
r
i
m
a
r
y
 
s
t
o
r
a
g
e
 
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




N
e
x
t
c
l
o
u
d
 
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
 
f
i
l
e
s
 
o
n
 
S
3
-
c
o
m
p
a
t
i
b
l
e
 
o
b
j
e
c
t
 
s
t
o
r
a
g
e
 
(
M
i
n
I
O
)
 
a
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
n
e
x
t
c
l
o
u
d
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
 
F
i
l
e
 
u
p
l
o
a
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
c
e


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
 
O
I
D
C
 
u
p
l
o
a
d
i
n
g
 
a
 
f
i
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
p
l
o
a
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


-
 
T
H
E
N
 
t
h
e
 
f
i
l
e
 
i
s
 
s
t
o
r
e
d
 
o
n
 
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
3
 
e
n
d
p
o
i
n
t
 
(
M
i
n
I
O
)


-
 
A
N
D
 
f
i
l
e
 
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
 
d
a
t
a
b
a
s
e
 
(
M
a
r
i
a
D
B
 
o
r
 
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
)


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
s
u
r
v
i
v
e
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
 
p
o
d
 
r
e
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
 
O
I
D
C
 
w
i
t
h
 
`
p
r
e
f
e
r
r
e
d
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
 
c
l
a
i
m


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
 
f
i
r
s
t
 
a
c
c
e
s
s
e
s
 
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
 
c
r
e
a
t
e
s
 
a
 
l
o
c
a
l
 
a
c
c
o
u
n
t
 
u
s
i
n
g
 
`
p
r
e
f
e
r
r
e
d
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
 
c
l
i
e
n
t
 
I
D
 
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
e
x
t
c
l
o
u
d
`
 
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
n
c
o
i
d
c
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
 
T
r
u
s
t
e
d
 
p
r
o
x
y
 
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
 
N
e
x
t
c
l
o
u
d
 
b
e
h
i
n
d
 
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


-
 
T
H
E
N
 
`
t
r
u
s
t
e
d
P
r
o
x
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
 
c
l
u
s
t
e
r
 
C
I
D
R
 
r
a
n
g
e
(
s
)


-
 
A
N
D
 
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
r
r
e
c
t
l
y
 
i
d
e
n
t
i
f
i
e
s
 
t
h
e
 
c
l
i
e
n
t
 
I
P
 
f
r
o
m
 
`
X
-
F
o
r
w
a
r
d
e
d
-
F
o
r
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




N
e
x
t
c
l
o
u
d
 
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
 
o
n
 
a


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
 
i
n
t
e
r
v
a
l
,
 
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
 
L
D
A
P
 
b
i
n
d
 
D
N
 
f
o
r
 
s
e
a
r
c
h
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
 
D
i
r
e
c
t
 
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


-
 
G
I
V
E
N
 
u
s
e
r
s
 
w
h
o
 
a
r
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
 
t
h
o
s
e
 
u
s
e
r
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


-
 
A
N
D
 
t
h
e
 
s
y
n
c
 
u
s
e
s
 
b
i
n
d
 
D
N
 
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
n
e
x
t
c
l
o
u
d
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
s
 
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
 
u
s
e
r
s
 
w
h
o
 
a
r
e
 
m
e
m
b
e
r
s
 
o
n
l
y
 
o
f
 
n
e
s
t
e
d
 
s
u
b
g
r
o
u
p
s
 
(
n
o
t
 
d
i
r
e
c
t
)


-
 
W
H
E
N
 
L
D
A
P
 
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
 
t
h
o
s
e
 
u
s
e
r
s
 
a
r
e
 
N
O
T
 
g
r
a
n
t
e
d
 
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


-
 
A
N
D
 
`
a
d
m
i
n
G
r
o
u
p
N
a
m
e
:
 
"
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
F
i
l
e
s
h
a
r
e
A
d
m
i
n
"
`
 
m
a
p
s
 
L
D
A
P
 
a
d
m
i
n
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
 
L
D
A
P
 
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
 
G
I
V
E
N
 
t
h
e
 
L
D
A
P
 
s
y
n
c
 
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
 
N
e
x
t
c
l
o
u
d
 
o
n
l
y
 
r
e
a
d
s
 
f
r
o
m
 
L
D
A
P
 
(
n
o
 
w
r
i
t
e
s
)


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
 
c
h
a
n
g
e
s
 
m
u
s
t
 
b
e
 
m
a
d
e
 
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
/
L
D
A
P
,
 
n
o
t
 
N
e
x
t
c
l
o
u
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
t
i
f
y
 
P
u
s
h
 
f
o
r
 
r
e
a
l
-
t
i
m
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




N
e
x
t
c
l
o
u
d
 
S
H
A
L
L
 
d
e
p
l
o
y
 
a
 
s
e
p
a
r
a
t
e
 
N
o
t
i
f
y
 
P
u
s
h
 
s
i
d
e
c
a
r
 
f
o
r
 
W
e
b
S
o
c
k
e
t
-
b
a
s
e
d


r
e
a
l
-
t
i
m
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
 
(
f
i
l
e
 
c
h
a
n
g
e
s
,
 
s
h
a
r
e
 
e
v
e
n
t
s
,
 
c
h
a
t
 
m
e
s
s
a
g
e
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
 
R
e
a
l
-
t
i
m
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
 
d
e
l
i
v
e
r
y


-
 
G
I
V
E
N
 
N
o
t
i
f
y
 
P
u
s
h
 
d
e
p
l
o
y
e
d
 
(
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
n
e
x
t
c
l
o
u
d
N
o
t
i
f
y
P
u
s
h
 
>
 
0
`
)


-
 
W
H
E
N
 
a
 
f
i
l
e
 
i
s
 
s
h
a
r
e
d
 
w
i
t
h
 
a
 
u
s
e
r


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
 
r
e
c
e
i
v
e
s
 
a
 
p
u
s
h
 
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
 
v
i
a
 
W
e
b
S
o
c
k
e
t


-
 
A
N
D
 
t
h
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
 
a
p
p
e
a
r
s
 
w
i
t
h
o
u
t
 
p
a
g
e
 
r
e
f
r
e
s
h




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
t
i
f
y
 
P
u
s
h
 
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
i
o
n


-
 
G
I
V
E
N
 
N
o
t
i
f
y
 
P
u
s
h
 
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
 
i
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
 
s
a
m
e
 
d
a
t
a
b
a
s
e
 
a
s
 
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


-
 
A
N
D
 
u
s
e
s
 
t
h
e
 
s
a
m
e
 
R
e
d
i
s
 
c
a
c
h
e
 
f
o
r
 
s
e
s
s
i
o
n
 
d
a
t
a




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
l
a
m
A
V
 
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




N
e
x
t
c
l
o
u
d
 
S
H
A
L
L
 
s
c
a
n
 
u
p
l
o
a
d
e
d
 
f
i
l
e
s
 
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
 
s
e
r
v
e
r
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
l
e
 
u
p
l
o
a
d
 
s
c
a
n
n
e
d


-
 
G
I
V
E
N
 
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
 
s
e
r
v
e
r
 
r
u
n
n
i
n
g
 
(
`
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
`
)


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
 
u
p
l
o
a
d
s
 
a
 
f
i
l
e


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
 
s
e
n
d
s
 
t
h
e
 
f
i
l
e
 
t
o
 
C
l
a
m
A
V
 
f
o
r
 
s
c
a
n
n
i
n
g


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
 
f
i
l
e
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
 
o
r
 
r
e
j
e
c
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
c
a
n
 
r
e
s
u
l
t
 
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
 
f
i
l
e
 
m
e
t
a
d
a
t
a




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
i
s
t
r
i
b
u
t
e
d
 
v
s
 
S
i
m
p
l
e
 
C
l
a
m
A
V


-
 
G
I
V
E
N
 
`
a
p
p
s
.
c
l
a
m
a
v
D
i
s
t
r
i
b
u
t
e
d
.
e
n
a
b
l
e
d
:
 
t
r
u
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
 
I
C
A
P
 
h
o
s
t
 
i
s
 
`
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
`


-
 
A
N
D
 
g
i
v
e
n
 
`
a
p
p
s
.
c
l
a
m
a
v
S
i
m
p
l
e
.
e
n
a
b
l
e
d
:
 
t
r
u
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
 
I
C
A
P
 
h
o
s
t
 
i
s
 
`
c
l
a
m
a
v
-
s
i
m
p
l
e
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
 
W
O
P
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
 
w
i
t
h
 
C
o
l
l
a
b
o
r
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
 
o
f
f
i
c
e
 
d
o
c
u
m
e
n
t
 
e
d
i
t
i
n
g
 
t
o
 
C
o
l
l
a
b
o
r
a
 
v
i
a
 
W
O
P
I
,


w
i
t
h
 
p
e
r
-
d
o
c
u
m
e
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
k
e
n
 
g
e
n
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
 
O
p
e
n
 
d
o
c
u
m
e
n
t
 
f
o
r
 
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
 
u
s
e
r
 
o
p
e
n
i
n
g
 
a
n
 
o
f
f
i
c
e
 
d
o
c
u
m
e
n
t
 
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
 
c
l
i
c
k
s
 
"
E
d
i
t
 
i
n
 
C
o
l
l
a
b
o
r
a
"


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
 
W
O
P
I
 
a
c
c
e
s
s
 
t
o
k
e
n
 
f
o
r
 
t
h
e
 
f
i
l
e


-
 
A
N
D
 
t
h
e
 
W
O
P
I
 
a
l
l
o
w
l
i
s
t
 
r
e
s
t
r
i
c
t
s
 
a
c
c
e
s
s
 
t
o
 
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
 
C
I
D
R
 
r
a
n
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
 
d
e
f
a
u
l
t
 
f
i
l
e
 
f
o
r
m
a
t
 
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
b
l
e
 
(
`
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
.
w
e
b
o
f
f
i
c
e
.
d
e
f
a
u
l
t
F
o
r
m
a
t
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
 
F
i
l
e
 
s
h
a
r
i
n
g
 
p
o
l
i
c
i
e
s




N
e
x
t
c
l
o
u
d
 
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
 
s
h
a
r
i
n
g
 
p
o
l
i
c
i
e
s
 
f
o
r
 
i
n
t
e
r
n
a
l
 
a
n
d


e
x
t
e
r
n
a
l
 
s
h
a
r
e
s
,
 
i
n
c
l
u
d
i
n
g
 
e
x
p
i
r
y
,
 
p
a
s
s
w
o
r
d
 
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
,
 
a
n
d
 
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
t
e
r
n
a
l
 
s
h
a
r
e
 
w
i
t
h
 
e
x
p
i
r
y


-
 
G
I
V
E
N
 
`
s
h
a
r
i
n
g
.
i
n
t
e
r
n
a
l
.
e
x
p
i
r
y
.
a
c
t
i
v
e
B
y
D
e
f
a
u
l
t
:
 
t
r
u
e
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
 
s
h
a
r
e
s
 
a
 
f
i
l
e
 
w
i
t
h
 
a
n
o
t
h
e
r
 
i
n
t
e
r
n
a
l
 
u
s
e
r


-
 
T
H
E
N
 
t
h
e
 
s
h
a
r
e
 
h
a
s
 
a
 
d
e
f
a
u
l
t
 
e
x
p
i
r
y
 
o
f
 
`
s
h
a
r
i
n
g
.
i
n
t
e
r
n
a
l
.
e
x
p
i
r
y
.
d
e
f
a
u
l
t
D
a
y
s
`
 
d
a
y
s


-
 
A
N
D
 
i
f
 
`
e
n
f
o
r
c
e
d
:
 
t
r
u
e
`
,
 
t
h
e
 
e
x
p
i
r
y
 
c
a
n
n
o
t
 
b
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
 
s
h
a
r
e
 
w
i
t
h
 
p
a
s
s
w
o
r
d


-
 
G
I
V
E
N
 
`
s
h
a
r
i
n
g
.
e
x
t
e
r
n
a
l
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`
 
a
n
d
 
`
e
n
f
o
r
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
s
:
 
t
r
u
e
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
x
t
e
r
n
a
l
 
s
h
a
r
e
 
l
i
n
k


-
 
T
H
E
N
 
a
 
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
 
`
s
e
n
d
P
a
s
s
w
o
r
d
M
a
i
l
`
 
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
 
e
m
a
i
l




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
u
b
l
i
c
 
u
p
l
o
a
d
 
a
l
l
o
w
e
d


-
 
G
I
V
E
N
 
`
s
h
a
r
i
n
g
.
e
x
t
e
r
n
a
l
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`
 
a
n
d
 
`
a
l
l
o
w
P
u
b
l
i
c
U
p
l
o
a
d
:
 
t
r
u
e
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
x
t
e
r
n
a
l
 
s
h
a
r
e


-
 
T
H
E
N
 
r
e
c
i
p
i
e
n
t
s
 
c
a
n
 
u
p
l
o
a
d
 
f
i
l
e
s
 
t
o
 
t
h
e
 
s
h
a
r
e
d
 
f
o
l
d
e
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
 
Q
u
o
t
a
 
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




N
e
x
t
c
l
o
u
d
 
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
 
p
e
r
-
u
s
e
r
 
s
t
o
r
a
g
e
 
q
u
o
t
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
 
v
i
a
 
A
I
O
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
 
q
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
 
`
q
u
o
t
a
.
d
e
f
a
u
l
t
`
 
s
e
t
 
t
o
 
`
<
N
>
 
G
B
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
 
s
t
o
r
a
g
e
 
e
x
c
e
e
d
s
 
t
h
e
 
q
u
o
t
a


-
 
T
H
E
N
 
u
p
l
o
a
d
 
a
t
t
e
m
p
t
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
 
r
e
c
e
i
v
e
s
 
a
 
"
s
t
o
r
a
g
e
 
f
u
l
l
"
 
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
o
r
r
e
c
t
 
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
 
r
e
a
d
i
n
e
s
s
 
a
n
d
 
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
 
w
i
t
h
 
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
 
t
o
 
p
r
e
v
e
n
t
 
P
H
P
-
F
P
M
 
o
v
e
r
l
o
a
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
 
P
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
 
p
r
e
v
e
n
t
s
 
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
 
A
I
O
 
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
 
p
r
o
b
e
 
o
v
e
r
r
i
d
e
s


-
 
W
H
E
N
 
r
e
a
d
i
n
e
s
s
 
a
n
d
 
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
 
f
i
r
e


-
 
T
H
E
N
 
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
 
i
s
 
u
s
e
d
 
(
N
O
T
 
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
)


-
 
A
N
D
 
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
 
r
e
m
a
i
n
s
 
a
t
 
1
x
 
(
n
o
t
 
1
0
x
)


-
 
A
N
D
 
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
 
d
o
e
s
 
n
o
t
 
e
n
t
e
r
 
a
 
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
m
e
t
h
e
u
s
 
m
e
t
r
i
c
s
 
e
x
p
o
r
t
e
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
 
S
H
A
L
L
 
d
e
p
l
o
y
 
a
 
s
e
p
a
r
a
t
e
 
m
e
t
r
i
c
s
 
e
x
p
o
r
t
e
r
 
f
o
r
 
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
t
r
i
c
s
 
c
o
l
l
e
c
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
 
e
x
p
o
r
t
e
r
 
d
e
p
l
o
y
e
d
 
(
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
E
x
p
o
r
t
e
r
`
 
s
i
d
e
c
a
r
)


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
 
`
h
t
t
p
:
/
/
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
e
x
t
c
l
o
u
d
-
a
i
o
/
m
e
t
r
i
c
s
`


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
 
m
e
t
r
i
c
s
 
a
r
e
 
e
x
p
o
s
e
d
 
u
s
i
n
g
 
t
h
e
 
`
s
e
r
v
e
r
i
n
f
o
.
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
 
u
s
e
r
 
c
o
u
n
t
,
 
f
i
l
e
 
c
o
u
n
t
,
 
s
h
a
r
e
 
c
o
u
n
t
,
 
a
c
t
i
v
e
 
u
s
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
 
e
x
p
o
r
t
e
r
 
r
u
n
s
 
a
s
 
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
 
6
5
5
3
2
`
,
 
`
r
e
a
d
O
n
l
y
R
o
o
t
F
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
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
 
A
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
 
b
o
o
t
s
t
r
a
p




N
e
x
t
c
l
o
u
d
 
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
s
i
o
n
 
a
n
 
a
d
m
i
n
 
u
s
e
r
 
d
u
r
i
n
g
 
i
n
i
t
i
a
l
 
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
q
u
i
r
e
d


f
o
r
 
t
h
e
 
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
 
b
o
o
t
s
t
r
a
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
 
A
d
m
i
n
 
u
s
e
r
 
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


-
 
G
I
V
E
N
 
`
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
.
e
n
a
b
l
e
d
:
 
t
r
u
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
 
a
d
m
i
n
 
u
s
e
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
`
 
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
 
t
h
i
s
 
u
s
e
r
 
i
s
 
u
s
e
d
 
b
y
 
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
 
t
o
 
b
o
o
t
s
t
r
a
p
 
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
 
F
e
a
t
u
r
e
 
f
l
a
g
s




N
e
x
t
c
l
o
u
d
 
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
a
t
u
r
e
 
t
o
g
g
l
e
s
 
f
o
r
 
o
p
t
i
o
n
a
l
 
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
i
s
a
b
l
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


-
 
G
I
V
E
N
 
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
 
e
d
u
 
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
:


 
 
-
 
`
c
o
n
t
a
c
t
s
`
 
(
a
d
d
r
e
s
s
 
b
o
o
k
 
—
 
L
D
A
P
 
h
a
n
d
l
e
s
 
t
h
i
s
)


 
 
-
 
`
s
p
r
e
e
d
`
 
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
 
T
a
l
k
 
—
 
n
o
t
 
n
e
e
d
e
d
 
i
n
 
e
d
u
)


 
 
-
 
`
c
i
r
c
l
e
s
`
 
(
s
o
c
i
a
l
 
s
h
a
r
i
n
g
)


 
 
-
 
`
c
o
m
m
e
n
t
s
`
 
(
f
i
l
e
 
c
o
m
m
e
n
t
s
)


 
 
-
 
`
a
p
p
s
t
o
r
e
`
 
(
n
o
 
e
x
t
e
r
n
a
l
 
a
p
p
 
i
n
s
t
a
l
l
a
t
i
o
n
)


 
 
-
 
`
s
h
a
r
e
R
e
v
i
e
w
`
 
(
s
h
a
r
e
 
a
p
p
r
o
v
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
)


-
 
A
N
D
 
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
r
e
 
e
n
a
b
l
e
d
:


 
 
-
 
`
g
r
o
u
p
f
o
l
d
e
r
s
`
 
(
m
a
n
a
g
e
d
 
s
h
a
r
e
d
 
f
o
l
d
e
r
s
)


 
 
-
 
`
f
i
l
e
s
Z
i
p
`
 
(
z
i
p
 
d
o
w
n
l
o
a
d
 
o
f
 
f
o
l
d
e
r
s
)


 
 
-
 
`
s
y
s
t
e
m
t
a
g
s
`
 
(
f
i
l
e
 
t
a
g
g
i
n
g
)


 
 
-
 
`
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
O
p
e
n
p
r
o
j
e
c
t
`
 
(
i
f
 
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
 
e
n
a
b
l
e
d
)


 
 
-
 
`
n
o
t
i
f
y
P
u
s
h
`
 
(
i
f
 
r
e
p
l
i
c
a
s
 
>
 
0
)


 
 
-
 
`
c
r
y
p
t
p
a
d
`
 
(
i
f
 
C
r
y
p
t
P
a
d
 
e
n
a
b
l
e
d
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




N
e
x
t
c
l
o
u
d
 
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
 
i
n
j
e
c
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
 
O
p
e
n
D
e
s
k
 
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
 
a
p
p
 
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
 
N
e
x
t
c
l
o
u
d
 
f
e
t
c
h
e
s
 
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
 
f
r
o
m
 
`
h
t
t
p
:
/
/
u
m
s
-
p
o
r
t
a
l
-
s
e
r
v
e
r
/
p
o
r
t
a
l
/
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


-
 
A
N
D
 
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
 
i
s
 
r
e
n
d
e
r
e
d
 
i
n
 
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
 
l
i
n
k
s
 
p
o
i
n
t
 
t
o
 
`
h
t
t
p
s
:
/
/
<
n
u
b
u
s
-
h
o
s
t
>
.
<
d
o
m
a
i
n
>
`




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
 
P
H
P
-
F
P
M
 
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
 
A
I
O
)
 
|
 
3
3
 
(
n
e
x
t
c
l
o
u
d
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
*
*
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
.
 
M
u
s
t
 
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
.


*
*
O
C
I
D
 
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
*
*
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
 
O
p
e
n
C
l
o
u
d
 
I
d
e
n
t
i
t
y
 
(
O
C
I
D
)
 
i
s
 
N
O
T
 
s
u
p
p
o
r
t
e
d
 
i
n
 
t
h
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
.
 
O
I
D
C
 
i
s
 
h
a
n
d
l
e
d
 
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
A
M
L
 
2
.
0
,
 
n
o
t
 
n
a
t
i
v
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
 
O
I
D
C
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
 
O
I
D
C
 
(
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
a
u
t
h
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
k
/
.
w
e
l
l
-
k
n
o
w
n
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
`
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
n
e
x
t
c
l
o
u
d
`
,
 
s
e
c
r
e
t
:
 
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
-
o
i
d
c
-
c
l
i
e
n
t
-
s
e
c
r
e
t
`
 
f
r
o
m
 
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
-
n
e
x
t
c
l
o
u
d
`
 
s
e
c
r
e
t
)


-
 
I
n
t
e
r
c
o
m
 
(
`
h
t
t
p
s
:
/
/
i
n
t
e
r
c
o
m
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
a
p
i
/
s
i
l
e
n
t
-
l
o
g
i
n
`
,
 
s
e
c
r
e
t
:
 
`
s
e
c
r
e
t
.
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
.
a
p
i
K
e
y
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
 
M
a
r
i
a
D
B
 
(
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
n
e
x
t
c
l
o
u
d
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
s
.
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
d
b
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
n
e
x
t
c
l
o
u
d
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
n
e
x
t
c
l
o
u
d
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


-
 
R
e
d
i
s
 
(
`
r
e
d
i
s
:
6
3
7
9
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
s
.
c
a
c
h
e
.
r
e
d
i
s
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
 
M
i
n
I
O
 
S
3
 
(
b
u
c
k
e
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
n
e
x
t
c
l
o
u
d
`
,
 
e
n
d
p
o
i
n
t
:
 
`
h
t
t
p
:
/
/
m
i
n
i
o
:
9
0
0
0
`
,
 
a
c
c
e
s
s
 
k
e
y
:
 
`
s
e
c
r
e
t
.
s
3
.
a
c
c
e
s
s
K
e
y
`
,
 
s
e
c
r
e
t
:
 
`
s
e
c
r
e
t
.
s
3
.
s
e
c
r
e
t
K
e
y
`
)


-
 
C
e
p
h
F
S
 
R
W
X
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
n
e
x
t
c
l
o
u
d
-
d
a
t
a
`
 
(
1
0
0
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
c
e
p
h
f
s
-
h
d
d
-
e
c
`
,
 
i
n
c
l
u
d
e
d
 
i
n
 
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
,
 
h
o
s
t
:
 
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
,
 
t
i
m
e
o
u
t
:
 
8
6
4
0
0
s
 
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
)


-
 
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
`
h
t
t
p
s
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
e
d
u
`
,
 
W
O
P
I
 
e
n
d
p
o
i
n
t
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
c
o
l
l
a
b
o
r
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
e
d
u
/
h
o
s
t
i
n
g
/
d
i
s
c
o
v
e
r
y
`
)


-
 
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
,
 
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
:
 
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
,
 
f
r
o
m
 
a
d
d
r
e
s
s
:
 
`
n
o
r
e
p
l
y
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
d
e
`
)


-
 
N
o
t
i
f
y
 
P
u
s
h
 
(
`
w
s
s
:
/
/
n
o
t
i
f
y
-
p
u
s
h
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
p
u
s
h
`
,
 
W
e
b
S
o
c
k
e
t
 
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
 
e
n
d
p
o
i
n
t
,
 
t
i
l
e
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
I
n
t
e
r
c
o
m
 
S
i
l
e
n
t
 
L
o
g
i
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
i
n
t
e
r
c
o
m
-
s
i
l
e
n
t
-
l
o
g
i
n
)
 
—
 
F
i
l
e
p
i
c
k
e
r
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


-
 
[
W
O
P
I
 
D
i
s
c
o
v
e
r
y
 
+
 
C
h
e
c
k
F
i
l
e
I
n
f
o
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
w
o
p
i
-
d
i
s
c
o
v
e
r
y
-
a
n
d
-
c
h
e
c
k
f
i
l
e
i
n
f
o
)
 
—
 
C
o
l
l
a
b
o
r
a
 
o
f
f
i
c
e
 
e
d
i
t
i
n
g


-
 
[
W
O
P
I
 
S
a
v
e
C
h
i
l
d
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
w
o
p
i
-
s
a
v
e
c
h
i
l
d
)
 
—
 
C
o
l
l
a
b
o
r
a
 
n
e
w
 
d
o
c
u
m
e
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


-
 
[
S
3
 
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
3
-
o
b
j
e
c
t
-
s
t
o
r
a
g
e
)
 
—
 
f
i
l
e
 
s
t
o
r
a
g
e


-
 
[
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
 
S
c
a
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
-
s
c
a
n
)
 
—
 
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


-
 
[
N
o
t
i
f
y
 
P
u
s
h
 
W
e
b
S
o
c
k
e
t
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
n
o
t
i
f
y
-
p
u
s
h
-
w
e
b
s
o
c
k
e
t
)
 
—
 
r
e
a
l
-
t
i
m
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
 
[
N
u
b
u
s
 
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
n
u
b
u
s
-
p
o
r
t
a
l
-
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
 
—
 
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
 
(
F
i
l
e
p
i
c
k
e
r
 
v
i
a
 
I
n
t
e
r
c
o
m
,
 
c
o
n
s
u
m
e
r
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
 
t
a
r
g
e
t
 
s
e
r
v
i
c
e
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
n
e
x
t
c
l
o
u
d
`
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
f
i
l
e
 
s
t
o
r
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
 
A
P
I
 
v
3
,
 
a
d
m
i
n
 
b
o
o
t
s
t
r
a
p
:
 
`
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
f
i
g
`
)


-
 
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
W
O
P
I
 
d
e
l
e
g
a
t
e
,
 
r
e
a
d
s
 
O
d
T
/
O
d
X
/
L
y
X
 
p
r
e
s
e
n
t
a
t
i
o
n
 
f
o
r
m
a
t
s
,
 
w
r
i
t
e
s
 
b
a
c
k
 
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
 
S
3
)


-
 
E
l
e
m
e
n
t
 
(
f
i
l
e
 
s
h
a
r
i
n
g
 
v
i
a
 
I
n
t
e
r
c
o
m
,
 
S
i
g
n
a
l
 
b
r
i
d
g
e
 
f
o
r
 
f
i
l
e
 
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
)


-
 
X
W
i
k
i
 
(
n
e
w
s
f
e
e
d
 
v
i
a
 
I
n
t
e
r
c
o
m
,
 
s
y
n
d
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
 
d
i
s
p
l
a
y
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
,
 
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
s
 
i
n
f
e
c
t
e
d
 
f
i
l
e
s
 
i
n
 
`
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
`
 
f
o
l
d
e
r
)


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
:
 
d
i
s
p
l
a
y
,
 
u
r
l
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
/
`
,
 
i
c
o
n
,
 
d
e
s
c
r
i
p
t
i
o
n
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
n
e
x
t
c
l
o
u
d
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
 
M
a
r
i
a
D
B
 
o
r
 
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
n
e
x
t
c
l
o
u
d
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
t
y
p
e
`
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
 
S
3
/
M
i
n
I
O
 
(
p
r
i
m
a
r
y
)
 
+
 
C
e
p
h
F
S
 
R
W
X
 
(
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
e
x
t
c
l
o
u
d
-
d
a
t
a
`
,
 
1
0
0
G
i
)
 
|


|
 
C
a
c
h
e
 
|
 
R
e
d
i
s
 
(
`
c
a
c
h
e
.
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
h
o
s
t
:
p
o
r
t
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
`
 
o
r
 
`
c
l
a
m
a
v
-
s
i
m
p
l
e
:
1
3
4
4
`
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
p
o
s
t
f
i
x
.
<
n
a
m
e
s
p
a
c
e
>
.
s
v
c
:
5
8
7
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
 
A
G
P
L
-
3
.
0
 
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
*
`
,
 
`
c
a
c
h
e
.
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
*
`
,
 
`
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
.
f
i
l
e
s
t
o
r
e
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
n
e
x
t
c
l
o
u
d
/
v
a
l
u
e
s
-
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
 
U
p
s
t
r
e
a
m
 
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
-
a
i
o
`
 
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


|
 
A
I
O
 
i
m
a
g
e
 
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
1
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
f
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
s
e
c
c
o
m
p
P
r
o
f
i
l
e
:
 
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
 
|


|
 
E
x
p
o
r
t
e
r
 
i
m
a
g
e
 
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
 
6
5
5
3
2
`
,
 
`
r
e
a
d
O
n
l
y
R
o
o
t
F
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
`
 
|


|
 
N
o
t
i
f
y
 
P
u
s
h
 
|
 
S
e
p
a
r
a
t
e
 
s
i
d
e
c
a
r
,
 
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
 
s
a
m
e
 
D
B
 
a
n
d
 
R
e
d
i
s
 
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
n
e
x
t
c
l
o
u
d
`
 
(
A
I
O
)
,
 
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
n
e
x
t
c
l
o
u
d
N
o
t
i
f
y
P
u
s
h
`
 
(
N
o
t
i
f
y
 
P
u
s
h
)
,
 
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
n
e
x
t
c
l
o
u
d
E
x
p
o
r
t
e
r
`
 
(
e
x
p
o
r
t
e
r
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
 
P
o
r
t
 
8
0
8
0
 
(
`
/
s
t
a
t
u
s
.
p
h
p
`
)
,
 
e
x
p
o
r
t
e
r
 
p
o
r
t
 
9
2
0
5
 
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
p
r
i
m
a
r
y
 
f
i
l
e
 
s
t
o
r
a
g
e
 
f
o
r
 
2
0
+
 
i
n
t
e
g
r
a
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
2
0
0
m
s
 
(
f
i
l
e
 
l
i
s
t
/
U
I
)
 
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
 
A
I
O
 
m
e
t
r
i
c
s
 
e
x
p
o
r
t
e
r
 
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
 
1
0
M
B
)
 
|
 
U
p
l
o
a
d
 
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
 
t
i
m
e
 
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
f
i
l
e
 
d
o
w
n
l
o
a
d
)
 
|
 
D
o
w
n
l
o
a
d
 
t
h
r
o
u
g
h
p
u
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
H
T
T
P
 
5
x
x
)
 
|
 
N
g
i
n
x
 
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
t
o
r
a
g
e
 
L
a
t
e
n
c
y
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
S
3
 
o
b
j
e
c
t
 
g
e
t
)
 
|
 
M
i
n
I
O
/
C
e
p
h
 
p
e
r
f
o
r
m
a
n
c
e
 
m
e
t
r
i
c
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
 
N
e
x
t
c
l
o
u
d
 
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
0
.
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
1
 
a
l
e
r
t


-
 
F
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
u
c
c
e
s
s
 
r
a
t
e
 
<
9
9
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
2
 
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


-
 
N
o
t
i
f
y
 
P
u
s
h
 
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
i
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
 
r
a
t
e
 
>
1
0
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
c
t
i
v
e
 
u
s
e
r
s


-
 
5
0
,
0
0
0
 
f
i
l
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
 
p
e
r
 
d
a
y
 
(
p
e
a
k
:
 
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
 
d
e
a
d
l
i
n
e
s
)


-
 
1
0
 
T
B
 
t
o
t
a
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
 
M
B
/
s
 
a
g
g
r
e
g
a
t
e
 
t
h
r
o
u
g
h
p
u
t
 
(
C
e
p
h
F
S
/
S
3
 
b
a
c
k
e
n
d
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
U
s
e
r
 
f
i
l
e
s
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
 
+
 
c
o
n
t
i
n
u
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
i
n
g


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


-
 
*
*
E
x
t
e
r
n
a
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
:
 
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
 
f
o
r
 
R
W
X
 
P
V
C
s
 
o
n
l
y




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
0
 
m
i
n


2
.
 
S
3
/
C
e
p
h
F
S
 
d
a
t
a
 
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
 
1
5
 
m
i
n


3
.
 
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
 
N
o
t
i
f
y
 
P
u
s
h
 
s
i
d
e
c
a
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
 
5
 
m
i
n


5
.
 
C
o
l
l
a
b
o
r
a
 
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
 
r
e
s
u
m
p
t
i
o
n
 
-
 
5
 
m
i
n


7
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
u
p
l
o
a
d
,
 
s
h
a
r
e
,
 
W
O
P
I
)
 
-
 
5
 
m
i
n


8
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
 
U
s
e
r
 
f
i
l
e
s
 
(
d
o
c
u
m
e
n
t
s
,
 
p
h
o
t
o
s
,
 
v
i
d
e
o
s
,
 
s
h
a
r
e
d
 
c
o
n
t
e
n
t
)


-
 
F
i
l
e
 
m
e
t
a
d
a
t
a
 
(
n
a
m
e
s
,
 
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
,
 
s
h
a
r
e
 
l
i
n
k
s
,
 
t
a
g
s
)


-
 
U
s
e
r
 
p
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
 
a
n
d
 
a
p
p
 
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
 
E
x
t
e
r
n
a
l
 
s
t
o
r
a
g
e
 
m
o
u
n
t
 
p
o
i
n
t
s
 
a
n
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
 
C
o
l
l
a
b
o
r
a
 
t
e
m
p
o
r
a
r
y
 
f
i
l
e
s
 
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
 
d
a
t
a




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
 
f
i
l
e
 
m
e
t
a
d
a
t
a
 
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
3
 
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
s
,
 
v
e
r
i
f
y
 
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
C
o
m
p
l
e
t
e
 
A
I
O
 
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
 
f
i
l
e
s
,
 
r
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


-
 
*
*
C
o
l
l
a
b
o
r
a
 
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
 
W
O
P
I
 
e
n
d
p
o
i
n
t
,
 
r
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
 
W
O
P
I
 
h
o
s
t

