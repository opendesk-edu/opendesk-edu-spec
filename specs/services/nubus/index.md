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
u
b
u
s
 
(
I
A
M
 
+
 
P
o
r
t
a
l
)




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
d
e
n
t
i
t
y
 
a
n
d
 
a
c
c
e
s
s
 
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
 
p
r
o
v
i
d
i
n
g
:


-
 
*
*
O
p
e
n
L
D
A
P
*
*
 
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
 
O
U
 
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
 
*
*
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
 
O
I
D
C
/
S
A
M
L
 
i
d
e
n
t
i
t
y
 
p
r
o
v
i
d
e
r
,
 
O
A
u
t
h
2
 
t
o
k
e
n
 
i
s
s
u
a
n
c
e


-
 
*
*
P
o
r
t
a
l
*
*
 
w
e
b
 
f
r
o
n
t
e
n
d
 
w
i
t
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
 
t
i
l
e
s
,
 
s
i
n
g
l
e
-
s
i
g
n
-
o
n
 
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


-
 
*
*
U
M
C
*
*
 
(
U
n
i
v
e
n
t
i
o
n
 
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
 
C
o
n
s
o
l
e
)
 
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
o
n
 
i
n
t
e
r
f
a
c
e
 
(
s
t
r
i
p
p
e
d
-
d
o
w
n
)


-
 
*
*
U
M
S
 
R
E
S
T
 
A
P
I
*
*
 
m
a
c
h
i
n
e
-
r
e
a
d
a
b
l
e
 
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
i
n
g
 
A
P
I


-
 
*
*
P
r
o
v
i
s
i
o
n
i
n
g
 
s
e
r
v
i
c
e
*
*
 
O
X
 
C
o
n
n
e
c
t
o
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
 
a
c
c
o
u
n
t
s




T
h
e
 
N
u
b
u
s
 
s
t
a
c
k
 
i
s
 
t
h
e
 
f
o
u
n
d
a
t
i
o
n
 
f
o
r
 
a
l
l
 
s
e
r
v
i
c
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
 
i
n
 
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
u
b
u
s
 
I
A
M
 
+
 
P
o
r
t
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
 
O
p
e
n
L
D
A
P
 
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
 
O
I
D
C
/
S
A
M
L
 
I
d
P
,
 
P
o
r
t
a
l
 
w
e
b
 
f
r
o
n
t
e
n
d
 
w
i
t
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
 
t
i
l
e
s
,
 
U
M
C
 
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
o
n
 
i
n
t
e
r
f
a
c
e
,
 
U
M
S
 
R
E
S
T
 
A
P
I
 
f
o
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
i
n
g
,
 
O
X
 
C
o
n
n
e
c
t
o
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
,
 
S
S
O
 
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
 
h
u
b


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
 
K
e
y
c
l
o
a
k
 
i
n
t
e
r
n
a
l
 
r
e
a
l
m
 
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
,
 
O
p
e
n
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
,
 
S
C
I
M
 
p
r
o
v
i
s
i
o
n
i
n
g
 
(
f
u
t
u
r
e
,
 
c
u
r
r
e
n
t
l
y
 
U
M
S
 
R
E
S
T
)
,
 
f
u
l
l
 
U
M
C
 
(
o
n
l
y
 
s
t
r
i
p
p
e
d
-
d
o
w
n
 
a
d
m
i
n
 
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
 
K
e
y
c
l
o
a
k
 
i
n
t
e
r
n
a
l
 
r
e
a
l
m
 
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
 
(
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


-
 
O
p
e
n
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


-
 
S
C
I
M
 
p
r
o
v
i
s
i
o
n
i
n
g
 
(
p
l
a
n
n
e
d
 
f
u
t
u
r
e
,
 
c
u
r
r
e
n
t
l
y
 
v
i
a
 
U
M
S
 
R
E
S
T
 
A
P
I
)


-
 
F
u
l
l
 
U
M
C
 
(
o
n
l
y
 
s
t
r
i
p
p
e
d
-
d
o
w
n
 
a
d
m
i
n
 
i
n
t
e
r
f
a
c
e
 
f
o
r
 
I
A
M
 
a
d
m
i
n
s
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
i
n
g
l
e
 
p
o
r
t
a
l
 
s
i
g
n
-
o
n




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
 
p
r
o
v
i
d
e
 
a
 
s
i
n
g
l
e
 
w
e
b
 
p
o
r
t
a
l
 
(
`
p
o
r
t
a
l
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
)


d
i
s
p
l
a
y
i
n
g
 
a
l
l
 
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
 
a
s
 
c
l
i
c
k
a
b
l
e
 
t
i
l
e
s
 
a
f
t
e
r
 
o
n
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
 
A
u
t
h
o
r
i
z
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
 
K
e
y
c
l
o
a
k
 
r
o
l
e
s
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
p
r
o
j
e
c
t
`
,
 
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
o
r
t
a
l
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
 
O
I
D
C
 
l
o
g
i
n


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
 
t
h
e
 
p
o
r
t
a
l
 
d
i
s
p
l
a
y
s
 
t
i
l
e
s
 
f
o
r
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
 
(
t
i
l
e
 
1
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
t
i
l
e
 
2
)


 
 
-
 
X
W
i
k
i
 
(
t
i
l
e
 
3
)


-
 
A
N
D
 
t
i
l
e
s
 
f
o
r
 
u
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
 
a
r
e
 
N
O
T
 
d
i
s
p
l
a
y
e
d
 
(
>
=
r
o
l
e
 
c
h
e
c
k
 
p
e
r
 
t
i
l
e
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
 
T
i
l
e
 
c
l
i
c
k
 
n
a
v
i
g
a
t
e
s
 
w
i
t
h
 
s
i
l
e
n
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
 
p
o
r
t
a
l
 
w
i
t
h
 
a
l
l
 
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
 
t
i
l
e
s


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
 
t
i
l
e


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
r
t
a
l
 
p
e
r
f
o
r
m
s
 
a
 
r
e
d
i
r
e
c
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
 
p
e
r
f
o
r
m
s
 
O
I
D
C
 
S
A
M
L
 
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
 
S
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
 
t
h
e
 
u
s
e
r
 
l
a
n
d
s
 
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
 
(
s
i
l
e
n
t
 
l
o
g
i
n
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
 
O
p
e
n
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
 
s
t
r
u
c
t
u
r
e




T
h
e
 
O
p
e
n
L
D
A
P
 
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
 
w
i
t
h
 
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
 
O
U


s
t
r
u
c
t
u
r
e
:




`
`
`


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
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e


├
─
 
o
u
=
u
s
e
r
s
 
 
 
 
 
 
 
 
 
 
(
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
)


├
─
 
o
u
=
g
r
o
u
p
s
 
 
 
 
 
 
 
 
 
(
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
 
g
r
o
u
p
s
)


├
─
 
o
u
=
c
o
m
p
u
t
e
r
s
 
 
 
 
 
 
(
u
n
i
v
e
r
s
i
t
y
 
d
e
v
i
c
e
s
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
 
f
o
r
 
N
u
b
u
s
)


└
─
 
c
n
=
d
n
s
 
 
 
 
 
 
 
 
 
 
 
 
(
D
N
S
 
z
o
n
e
s
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
 
f
o
r
 
N
u
b
u
s
)


`
`
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
 
U
s
e
r
 
e
n
t
r
y
 
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
 
a
 
n
e
w
 
u
s
e
r
 
`
a
l
i
c
e
`
 
c
r
e
a
t
e
d
 
v
i
a
 
U
M
C
 
o
r
 
C
M
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
r
y
 
i
s
 
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
 
T
H
E
N
 
t
h
e
 
D
N
 
i
s
 
`
u
i
d
=
a
l
i
c
e
,
o
u
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
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e
`


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
 
h
a
s
 
o
b
j
e
c
t
 
c
l
a
s
s
e
s
:
 
`
i
n
e
t
O
r
g
P
e
r
s
o
n
`
,
 
`
p
o
s
i
x
A
c
c
o
u
n
t
`
,
 
`
s
h
a
d
o
w
A
c
c
o
u
n
t
`


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
 
h
a
s
 
P
O
S
I
X
 
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
:
 
`
u
i
d
N
u
m
b
e
r
`
,
 
`
g
i
d
N
u
m
b
e
r
`
,
 
`
h
o
m
e
D
i
r
e
c
t
o
r
y
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
 
e
n
t
r
y
 
f
o
r
 
a
p
p
 
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
 
r
e
q
u
i
r
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
o
r
i
z
a
t
i
o
n
 
(
e
.
g
.
,
 
S
O
G
o
)


-
 
W
H
E
N
 
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


-
 
T
H
E
N
 
a
 
g
r
o
u
p
 
`
c
n
=
s
o
g
o
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
,
c
n
=
g
r
o
u
p
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
.
.
.
`
 
e
x
i
s
t
s


-
 
A
N
D
 
u
s
e
r
s
 
w
i
t
h
 
S
O
G
o
 
a
c
c
e
s
s
 
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
f
 
t
h
i
s
 
g
r
o
u
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
a
l
m
 
a
n
d
 
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
 
r
u
n
 
w
i
t
h
 
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
 
a
n
d
 
b
e
 
p
r
e
-
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
 
a
l
l


s
e
r
v
i
c
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
s
 
a
n
d
 
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
 
S
P
 
e
n
t
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


-
 
G
I
V
E
N
 
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


-
 
T
H
E
N
 
a
l
l
 
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
s
 
a
r
e
 
p
r
e
-
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
 
(
1
9
 
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
s
 
t
o
t
a
l
)
:


 
 
-
 
`
s
o
g
o
`
 
(
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
n
 
`
s
o
g
o
-
s
o
g
o
-
s
e
c
r
e
t
s
:
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
)


 
 
-
 
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
m
a
t
r
i
x
`
,
 
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
,
 
e
t
c
.


 
 
-
 
E
a
c
h
 
c
l
i
e
n
t
 
h
a
s
 
r
e
d
i
r
e
c
t
 
U
R
I
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
 
s
e
r
v
i
c
e
'
s
 
c
a
l
l
b
a
c
k
 
U
R
L




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


-
 
T
H
E
N
 
S
A
M
L
 
S
P
 
e
n
t
i
t
i
e
s
 
a
r
e
 
p
r
e
-
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
 
f
o
r
 
a
l
l
 
S
A
M
L
-
u
s
i
n
g
 
s
e
r
v
i
c
e
s
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
 
(
e
n
t
i
t
y
 
I
D
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
`
)


 
 
-
 
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


 
 
-
 
A
l
l
 
S
P
s
 
t
r
u
s
t
 
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
 
S
A
M
L
 
I
d
P
 
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
 
p
r
o
t
o
c
o
l
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
 
U
M
S
 
R
E
S
T
 
A
P
I
 
f
o
r
 
m
a
c
h
i
n
e
 
p
r
o
v
i
s
i
o
n
i
n
g




T
h
e
 
N
u
b
u
s
 
I
A
M
 
s
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
p
o
s
e
 
t
h
e
 
U
M
S
 
R
E
S
T
 
A
P
I
 
f
o
r
 
m
a
c
h
i
n
e
-
r
e
a
d
a
b
l
e
 
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
i
n
g
 
(
u
s
e
d
 
b
y
 
O
X
 
C
o
n
n
e
c
t
o
r
,
.
c
m
s
 
s
y
s
t
e
m
s
,
 
e
t
c
.
)
.




T
h
e
 
U
M
S
 
R
E
S
T
 
A
P
I
 
p
a
t
h
 
i
s
 
`
/
u
n
i
v
e
n
t
i
o
n
/
u
d
m
`
 
a
n
d
 
r
e
q
u
i
r
e
s
 
H
T
T
P
 
B
A
S
I
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
 
f
o
r
 
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
 
U
M
S
 
R
E
S
T
 
A
P
I
 
a
t
 
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
o
r
t
a
l
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
u
n
i
v
e
n
t
i
o
n
/
u
d
m
`


-
 
W
H
E
N
 
a
 
p
r
o
v
i
s
i
o
n
i
n
g
 
s
e
r
v
i
c
e
 
c
r
e
a
t
e
s
 
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
 
i
t
 
c
a
l
l
s
 
`
P
O
S
T
 
/
u
n
i
v
e
n
t
i
o
n
/
u
d
m
/
u
s
e
r
s
/
u
s
e
r
/
`
 
w
i
t
h
 
B
A
S
I
C
 
a
u
t
h
 
(
U
M
S
 
a
d
m
i
n
 
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
)


-
 
A
N
D
 
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
 
c
o
n
t
a
i
n
s
 
u
s
e
r
 
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
 
(
u
i
d
,
 
m
a
i
l
,
 
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
,
 
p
a
s
s
w
o
r
d
)


-
 
A
N
D
 
O
p
e
n
L
D
A
P
 
c
r
e
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
 
e
n
t
r
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
 
U
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
 
f
o
r
 
g
r
o
u
p
 
m
o
d
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
 
p
r
o
v
i
s
i
o
n
i
n
g
 
s
e
r
v
i
c
e
 
a
d
d
i
n
g
 
a
 
u
s
e
r
 
t
o
 
a
 
g
r
o
u
p


-
 
T
H
E
N
 
i
t
 
c
a
l
l
s
 
`
P
U
T
 
/
u
n
i
v
e
n
t
i
o
n
/
u
d
m
/
g
r
o
u
p
s
/
g
r
o
u
p
/
$
d
n
/
m
e
m
b
e
r
s
`
 
w
i
t
h
 
u
s
e
r
 
D
N


-
 
A
N
D
 
t
h
e
 
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
 
i
s
 
a
d
d
e
d
/
r
e
m
o
v
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
 
K
e
y
c
l
o
a
k
 
|
 
O
I
D
C
/
S
A
M
L
 
I
d
P
,
 
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
 
|


|
 
O
p
e
n
L
D
A
P
 
|
 
U
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
 
L
D
A
P
 
b
i
n
d
 
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
1
0
G
i
)
 
|


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
 
|
 
K
e
y
c
l
o
a
k
 
d
a
t
a
,
 
U
M
S
 
R
E
S
T
 
D
B
 
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
1
0
G
i
)
 
|


|
 
P
o
r
t
a
l
 
F
r
o
n
t
e
n
d
 
|
 
W
e
b
 
U
I
,
 
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
 
t
i
l
e
s
 
|
 
2
 
|
 
N
o
n
e
 
(
c
l
i
e
n
t
-
s
i
d
e
 
s
t
a
t
e
)
 
|


|
 
U
M
C
 
B
a
c
k
e
n
d
 
|
 
A
d
m
i
n
 
i
n
t
e
r
f
a
c
e
 
(
s
t
r
i
p
p
e
d
-
d
o
w
n
)
 
|
 
1
 
|
 
N
o
n
e
 
|


|
 
U
M
S
 
R
E
S
T
 
A
P
I
 
|
 
M
a
c
h
i
n
e
 
p
r
o
v
i
s
i
o
n
i
n
g
 
e
n
d
p
o
i
n
t
 
|
 
1
 
|
 
N
o
n
e
 
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
 
K
e
y
c
l
o
a
k
 
|
 
1
0
0
1
 
(
k
e
y
c
l
o
a
k
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
 
O
p
e
n
L
D
A
P
 
|
 
1
0
0
 
(
l
d
a
p
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
 
|
 
9
9
9
 
(
p
o
s
t
g
r
e
s
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
 
P
o
r
t
a
l
 
F
r
o
n
t
e
n
d
 
|
 
1
0
0
1
 
(
n
g
i
n
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


|
 
U
M
C
 
B
a
c
k
e
n
d
 
|
 
1
0
0
1
 
(
u
n
i
v
e
n
t
i
o
n
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
 
U
M
S
 
R
E
S
T
 
A
P
I
 
|
 
1
0
0
1
 
(
p
y
t
h
o
n
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
a
l
m
 
|
 
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
 
b
a
s
e
 
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
`
 
|


|
 
B
a
s
e
 
d
o
m
a
i
n
 
|
 
`
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
 
O
p
e
n
L
D
A
P
 
b
a
s
e
 
D
N
 
|
 
`
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
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e
`
 
|


|
 
L
o
g
i
n
 
U
R
L
 
|
 
`
/
p
o
r
t
a
l
`
 
|


|
 
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
s
 
|
 
1
9
 
p
r
e
-
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
 
(
s
o
g
o
,
 
o
p
e
n
c
l
o
u
d
,
 
m
a
t
r
i
x
,
 
j
i
t
s
i
,
 
x
w
i
k
i
,
 
.
.
.
)
 
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
t
i
t
i
e
s
 
|
 
8
 
p
r
e
-
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
 
B
B
B
,
 
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
 
.
.
.
)
 
|


|
 
U
M
S
 
R
E
S
T
 
p
a
t
h
 
|
 
`
/
u
n
i
v
e
n
t
i
o
n
/
u
d
m
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
o
p
e
n
d
e
s
k
/
n
u
b
u
s
`
 
(
u
p
s
t
r
e
a
m
:
 
U
n
i
v
e
n
t
i
o
n
 
G
m
b
H
)
 
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
U
M
C
 
s
t
r
i
p
p
e
d
-
d
o
w
n
*
*
:
 
O
n
l
y
 
a
d
m
i
n
 
p
a
n
e
l
 
f
o
r
 
I
A
M
 
a
d
m
i
n
s
.
 
M
o
s
t
 
U
M
C
 
m
o
d
u
l
e
s


 
 
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
 
(
u
n
i
v
e
r
s
i
t
y
-
o
n
l
y
 
m
o
d
u
l
e
s
 
l
i
k
e
 
D
H
C
P
,
 
D
N
S
 
a
r
e
 
r
e
a
d
-
o
n
l
y
)
.


-
 
*
*
O
p
e
n
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
*
*
:
 
I
f
 
y
o
u
 
n
e
e
d
 
c
u
s
t
o
m
 
s
c
h
e
m
a
 
e
x
t
e
n
s
i
o
n
s
,
 
m
o
d
i
f
y
 
v
i
a
 
U
M
C
 
o
n
l
y
.


 
 
D
i
r
e
c
t
 
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
 
m
o
d
s
 
a
r
e
 
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
.


-
 
*
*
U
M
S
 
R
E
S
T
 
A
P
I
*
*
:
 
E
x
i
s
t
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
 
(
U
M
S
 
a
d
m
i
n
 
u
s
e
r
:
 
`
u
m
s
-
a
d
m
i
n
`
 
/
 
`
u
m
s
-
a
d
m
i
n
`
)
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


-
 
[
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
 
t
i
l
e
s


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
 
D
e
p
e
n
d
s
 
O
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
 
(
K
e
y
c
l
o
a
k
 
+
 
U
M
S
)
,
 
R
e
d
i
s
 
(
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
 
U
M
S
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




A
l
l
 
s
e
r
v
i
c
e
s
 
v
i
a
 
O
I
D
C
/
S
A
M
L
 
(
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
s
/
S
P
 
e
n
t
i
t
i
e
s
)
,
 
O
X
 
C
o
n
n
e
c
t
o
r
 
(
U
M
S
 
R
E
S
T
 
A
P
I
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
s
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
 
C
r
i
t
i
c
a
l
 
(
f
o
u
n
d
a
t
i
o
n
 
s
e
r
v
i
c
e
 
f
o
r
 
a
l
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
O
I
D
C
 
t
o
k
e
n
 
i
s
s
u
a
n
c
e
)
 
|
 
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
 
h
i
s
t
o
g
r
a
m
 
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
5
0
m
s
 
(
L
D
A
P
 
b
i
n
d
)
 
|
 
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
)
 
|
 
F
a
i
l
e
d
 
l
o
g
i
n
 
r
a
t
i
o
 
v
s
 
t
o
t
a
l
 
a
t
t
e
m
p
t
s
 
|


|
 
*
*
P
o
r
t
a
l
 
R
e
s
p
o
n
s
e
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
P
9
5
)
 
|
 
P
o
r
t
a
l
 
f
r
o
n
t
e
n
d
 
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
 
e
n
d
p
o
i
n
t
 
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
1
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
 
O
p
e
n
L
D
A
P
 
r
e
s
p
o
n
s
e
 
t
i
m
e
 
>
2
0
0
m
s
 
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
 
P
o
r
t
a
l
 
t
i
l
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
 
i
n
 
1
 
m
i
n
u
t
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
 
U
M
S
 
R
E
S
T
 
A
P
I
 
5
x
x
 
e
r
r
o
r
s
 
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
 
(
t
y
p
i
c
a
l
 
s
e
m
e
s
t
e
r
 
l
o
a
d
)


-
 
5
0
,
0
0
0
 
O
I
D
C
 
t
o
k
e
n
 
i
s
s
u
a
n
c
e
s
 
p
e
r
 
h
o
u
r
 
(
p
e
a
k
:
 
e
x
a
m
 
p
e
r
i
o
d
s
)


-
 
1
0
,
0
0
0
 
L
D
A
P
 
b
i
n
d
s
 
p
e
r
 
h
o
u
r
 
(
p
e
a
k
:
 
m
o
r
n
i
n
g
 
l
o
g
i
n
 
r
u
s
h
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
 
5
 
m
i
n
,
 
R
T
O
:
 
3
0
 
m
i
n
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
*
*
 
(
K
e
y
c
l
o
a
k
 
+
 
U
M
S
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
O
p
e
n
L
D
A
P
*
*
:
 
D
a
i
l
y
 
L
D
I
F
 
e
x
p
o
r
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
 
r
e
p
l
i
c
a
t
i
o
n
 
t
o
 
s
t
a
n
d
b
y
 
n
o
d
e


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
,
 
a
l
l
 
c
h
a
n
g
e
s
 
v
e
r
s
i
o
n
-
c
o
n
t
r
o
l
l
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
l
u
s
t
e
r
 
(
K
e
y
c
l
o
a
k
 
d
a
t
a
b
a
s
e
)
 
-
 
5
 
m
i
n


2
.
 
O
p
e
n
L
D
A
P
 
r
e
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
 
3
 
m
i
n


3
.
 
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
a
l
m
 
i
m
p
o
r
t
 
-
 
2
 
m
i
n


4
.
 
U
M
S
 
R
E
S
T
 
A
P
I
 
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
 
P
o
r
t
a
l
 
f
r
o
n
t
e
n
d
 
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
 
2
 
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
t
o
k
e
n
 
i
s
s
u
a
n
c
e
,
 
L
D
A
P
 
b
i
n
d
)
 
-
 
5
 
m
i
n


7
.
 
D
N
S
/
i
n
g
r
e
s
s
 
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
 
3
 
m
i
n


8
.
 
U
s
e
r
-
f
a
c
i
n
g
 
s
e
r
v
i
c
e
 
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
a
l
m
 
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
 
(
u
s
e
r
s
,
 
r
o
l
e
s
,
 
c
l
i
e
n
t
s
,
 
i
d
e
n
t
i
t
y
 
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
 
O
p
e
n
L
D
A
P
 
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
 
(
u
i
d
,
 
m
a
i
l
,
 
g
r
o
u
p
s
,
 
o
r
g
a
n
i
z
a
t
i
o
n
a
l
 
u
n
i
t
s
)


-
 
U
M
S
 
p
r
o
v
i
s
i
o
n
i
n
g
 
s
t
a
t
e
 
(
l
a
s
t
 
s
y
n
c
 
t
i
m
e
s
t
a
m
p
s
,
 
q
u
e
u
e
d
 
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


-
 
P
o
r
t
a
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
 
(
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
 
t
i
l
e
s
,
 
u
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
)




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
K
e
y
c
l
o
a
k
 
D
B
 
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
 
r
e
-
a
p
p
l
y
 
r
e
c
e
n
t
 
r
e
a
l
m
 
c
h
a
n
g
e
s


-
 
*
*
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
 
P
r
o
m
o
t
e
 
s
t
a
n
d
b
y
,
 
r
e
d
i
r
e
c
t
 
c
l
i
e
n
t
s
,
 
r
e
b
u
i
l
d
 
p
r
i
m
a
r
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
 
c
l
u
s
t
e
r
 
l
o
s
s
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
s
,
 
r
e
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
 
f
r
o
m
 
U
C
S
 
s
o
u
r
c
e

