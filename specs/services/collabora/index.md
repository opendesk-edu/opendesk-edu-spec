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
n
l
i
n
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




L
i
b
r
e
O
f
f
i
c
e
-
b
a
s
e
d
 
o
n
l
i
n
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
 
s
e
r
v
i
c
e
,
 
p
r
o
v
i
d
i
n
g
 
W
O
P
I
 
(
W
e
b
 
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


O
p
e
n
 
P
l
a
t
f
o
r
m
 
I
n
t
e
r
f
a
c
e
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
 
w
i
t
h
 
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
n
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
 
f
o
r
 
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
 
o
f
 
O
D
F
,
 
O
O
X
M
L
,
 
P
D
F
,
 
a
n
d
 
t
e
x
t
 
d
o
c
u
m
e
n
t
s
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
 
d
o
e
s
 
N
O
T
 
r
e
q
u
i
r
e


s
e
p
a
r
a
t
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
i
o
n
 
—
 
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
 
i
s
 
d
e
l
e
g
a
t
e
d
 
f
r
o
m
 
t
h
e
 
f
i
l
e
-
s
h
a
r
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
 
v
i
a
 
W
O
P
I
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
 
s
u
p
p
o
r
t
s
 
r
e
a
l
-
t
i
m
e
 
m
u
l
t
i
-
u
s
e
r
 
e
d
i
t
i
n
g
,
 
m
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
(
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
e
c
u
r
i
t
y
 
l
e
v
e
l
s
)
,
 
f
o
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
 
f
r
o
m
 
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
 
a
n
d
 
a
d
m
i
n


m
e
t
r
i
c
s
/
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
 
e
n
d
p
o
i
n
t
s
.
 
S
e
c
u
r
i
t
y
 
f
e
a
t
u
r
e
s
 
i
n
c
l
u
d
e
 
d
o
c
u
m
e
n
t
 
w
o
r
k
s
p
a
c
e


i
s
o
l
a
t
i
o
n
 
v
i
a
 
L
i
n
u
x
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e
s
,
 
C
A
P
_
C
H
O
W
N
/
C
A
P
_
F
O
W
N
E
R
/
C
A
P
_
S
Y
S
_
C
H
R
O
O
T


f
o
r
 
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
 
s
a
n
d
b
o
x
i
n
g
,
 
a
n
d
 
a
d
m
i
n
 
U
R
L
 
b
l
o
c
k
i
n
g
 
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
 
l
e
v
e
l
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
 
W
O
P
I
 
p
r
o
t
o
c
o
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
 
w
i
t
h
 
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
n
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
,
 
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
 
o
f
 
O
D
F
/
O
O
X
M
L
/
P
D
F
/
t
e
x
t
 
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
 
d
o
c
u
m
e
n
t
 
s
a
n
d
b
o
x
i
n
g
 
v
i
a
 
L
i
n
u
x
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e
s
,
 
a
d
m
i
n
 
U
R
L
 
i
n
g
r
e
s
s
 
b
l
o
c
k
i
n
g
,
 
m
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
s
e
c
u
r
i
t
y


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
 
S
t
a
n
d
a
l
o
n
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
a
l
w
a
y
s
 
W
O
P
I
-
d
e
l
e
g
a
t
e
d
)
,
 
d
o
c
u
m
e
n
t
 
c
o
n
v
e
r
s
i
o
n
 
a
s
 
s
t
a
n
d
a
l
o
n
e
 
s
e
r
v
i
c
e
 
(
a
l
w
a
y
s
 
v
i
a
 
W
O
P
I
 
c
l
i
e
n
t
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
 
m
u
l
t
i
-
u
s
e
r
 
e
d
i
t
i
n
g
 
(
w
i
t
h
i
n
 
W
O
P
I
 
c
o
n
t
e
x
t
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
 
S
t
a
n
d
a
l
o
n
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
a
l
w
a
y
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
)


-
 
D
o
c
u
m
e
n
t
 
c
o
n
v
e
r
s
i
o
n
 
a
s
 
a
 
s
t
a
n
d
a
l
o
n
e
 
s
e
r
v
i
c
e
 
(
a
l
w
a
y
s
 
v
i
a
 
W
O
P
I
 
c
l
i
e
n
t
)


-
 
F
o
n
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
d
e
l
e
g
a
t
e
d
 
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
 
R
i
c
h
D
o
c
u
m
e
n
t
s
 
s
e
t
t
i
n
g
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
 
W
O
P
I
 
s
e
s
s
i
o
n
 
d
e
l
e
g
a
t
i
o
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
 
S
H
A
L
L
 
r
e
c
e
i
v
e
 
W
O
P
I
 
t
o
k
e
n
s
 
f
r
o
m
 
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
r
 
O
p
e
n
C
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
q
u
i
r
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
e
.
 
T
h
e
 
f
i
l
e
-
s
h
a
r
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
c
t
s
 
a
s
 
W
O
P
I


c
l
i
e
n
t
 
a
n
d
 
C
o
l
l
a
b
o
r
a
 
a
s
 
W
O
P
I
 
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
 
U
s
e
r
 
e
d
i
t
s
 
O
D
F
 
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
 
`
.
o
d
t
`
,
 
`
.
o
d
s
`
,
 
o
r
 
`
.
o
d
p
`
 
f
i
l
e
 
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
 
s
e
n
d
s
 
a
 
W
O
P
I
 
`
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
`
 
r
e
q
u
e
s
t
 
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
 
w
i
t
h
 
t
h
e
 
f
i
l
e
 
U
R
L


-
 
A
N
D
 
C
o
l
l
a
b
o
r
a
 
l
o
a
d
s
 
t
h
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
-
b
r
o
w
s
e
r
 
u
s
i
n
g
 
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
'
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
 
s
e
s
s
i
o
n
 
i
s
 
u
s
e
d
 
f
o
r
 
W
O
P
I
 
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
 
A
N
D
 
n
o
 
s
e
p
a
r
a
t
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
 
l
o
g
i
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
d
i
t
s
 
O
O
X
M
L
 
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
 
`
.
d
o
c
x
`
,
 
`
.
x
l
s
x
`
,
 
o
r
 
`
.
p
p
t
x
`
 
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
 
C
o
l
l
a
b
o
r
a
 
c
o
n
v
e
r
t
s
 
t
h
e
 
O
O
X
M
L
 
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
 
A
N
D
 
s
a
v
e
s
 
a
r
e
 
w
r
i
t
t
e
n
 
b
a
c
k
 
v
i
a
 
W
O
P
I
 
`
P
u
t
F
i
l
e
`
 
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
'
s
 
s
t
o
r
a
g
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


-
 
G
I
V
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
w
o
p
i
A
l
l
o
w
l
i
s
t
`


-
 
W
H
E
N
 
a
 
W
O
P
I
 
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
 
f
r
o
m
 
a
 
s
o
u
r
c
e
 
N
O
T
 
i
n
 
t
h
e
 
a
l
l
o
w
l
i
s
t


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
 
r
e
q
u
e
s
t
 
w
i
t
h
 
H
T
T
P
 
4
0
3




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
 
R
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




M
u
l
t
i
p
l
e
 
u
s
e
r
s
 
S
H
A
L
L
 
e
d
i
t
 
t
h
e
 
s
a
m
e
 
d
o
c
u
m
e
n
t
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
 
w
i
t
h
o
u
t
 
c
o
n
f
l
i
c
t
s


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
b
a
s
e
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
c
u
r
r
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
 
o
f
 
s
a
m
e
 
d
o
c
u
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
 
t
w
o
 
u
s
e
r
s
 
w
i
t
h
 
e
d
i
t
 
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
 
s
a
m
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
 
b
o
t
h
 
u
s
e
r
s
 
e
d
i
t
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y


-
 
T
H
E
N
 
c
h
a
n
g
e
s
 
a
r
e
 
m
e
r
g
e
d
 
i
n
 
r
e
a
l
-
t
i
m
e
 
b
y
 
C
o
l
l
a
b
o
r
a


-
 
A
N
D
 
n
o
 
c
o
n
f
l
i
c
t
 
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
 
e
r
r
o
r
s
 
o
c
c
u
r


-
 
A
N
D
 
c
u
r
s
o
r
 
p
o
s
i
t
i
o
n
s
 
o
f
 
o
t
h
e
r
 
u
s
e
r
s
 
a
r
e
 
v
i
s
i
b
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
 
A
f
f
i
n
i
t
y
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
 
m
u
l
t
i
p
l
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
 
r
e
p
l
i
c
a
s
 
(
d
e
f
a
u
l
t
:
 
2
+
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
 
o
p
e
n
s
 
a
 
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
 
T
H
E
N
 
t
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
 
r
o
u
t
e
s
 
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
 
r
e
q
u
e
s
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
 
r
e
p
l
i
c
a


-
 
A
N
D
 
r
o
u
t
i
n
g
 
i
s
 
b
a
s
e
d
 
o
n
 
`
$
a
r
g
_
W
O
P
I
S
r
c
`
 
(
o
r
 
`
$
a
r
g
_
R
o
u
t
e
T
o
k
e
n
`
 
w
i
t
h
 
C
o
n
t
r
o
l
l
e
r
)


-
 
A
N
D
 
c
o
n
s
i
s
t
e
n
t
 
h
a
s
h
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
 
d
o
c
u
m
e
n
t
 
s
e
s
s
i
o
n
 
s
p
l
i
t
 
a
c
r
o
s
s
 
r
e
p
l
i
c
a
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
 
D
o
c
u
m
e
n
t
 
w
o
r
k
s
p
a
c
e
 
i
s
o
l
a
t
i
o
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
 
S
H
A
L
L
 
i
s
o
l
a
t
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
 
w
o
r
k
s
p
a
c
e
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
 
o
n
e
 
d
o
c
u
m
e
n
t


f
r
o
m
 
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
o
t
h
e
r
'
s
 
f
i
l
e
s
 
o
r
 
r
u
n
t
i
m
e
 
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
i
n
u
x
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e
 
i
s
o
l
a
t
i
o
n
 
(
p
r
e
f
e
r
r
e
d
)


-
 
G
I
V
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
 
r
u
n
n
i
n
g
 
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
s
p
a
c
e
 
s
u
p
p
o
r
t
 
(
`
u
n
s
h
a
r
e
 
-
U
r
 
b
a
s
h
`
 
s
u
c
c
e
e
d
s
)


-
 
W
H
E
N
 
a
 
d
o
c
u
m
e
n
t
 
i
s
 
o
p
e
n
e
d
 
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
 
T
H
E
N
 
t
h
e
 
d
o
c
u
m
e
n
t
 
r
u
n
s
 
i
n
 
a
n
 
i
s
o
l
a
t
e
d
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e


-
 
A
N
D
 
n
o
 
a
d
d
i
t
i
o
n
a
l
 
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
 
b
e
y
o
n
d
 
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
 
a
r
e
 
n
e
e
d
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
 
s
a
n
d
b
o
x
i
n
g
 
f
a
l
l
b
a
c
k


-
 
G
I
V
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
 
w
h
e
r
e
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e
s
 
a
r
e
 
N
O
T
 
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
 
W
H
E
N
 
a
 
d
o
c
u
m
e
n
t
 
i
s
 
o
p
e
n
e
d
 
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
 
f
a
l
l
s
 
b
a
c
k
 
t
o
 
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
 
s
a
n
d
b
o
x
i
n
g
 
u
s
i
n
g
:


 
 
-
 
`
C
A
P
_
C
H
O
W
N
`
 
—
 
o
w
n
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
 
f
o
r
 
i
s
o
l
a
t
i
o
n


 
 
-
 
`
C
A
P
_
F
O
W
N
E
R
`
 
—
 
f
i
l
e
 
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
 
b
y
p
a
s
s
 
f
o
r
 
i
s
o
l
a
t
e
d
 
c
o
p
i
e
s


 
 
-
 
`
C
A
P
_
S
Y
S
_
C
H
R
O
O
T
`
 
—
 
`
c
h
r
o
o
t
`
 
i
n
t
o
 
i
s
o
l
a
t
e
d
 
d
o
c
u
m
e
n
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
 
a
d
d
s
 
t
h
e
s
e
 
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
 
U
R
L
 
b
l
o
c
k
i
n
g
 
a
t
 
i
n
g
r
e
s
s


-
 
G
I
V
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
 
W
H
E
N
 
e
x
t
e
r
n
a
l
 
r
e
q
u
e
s
t
s
 
t
a
r
g
e
t
 
a
d
m
i
n
 
e
n
d
p
o
i
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
 
f
o
l
l
o
w
i
n
g
 
p
a
t
h
s
 
r
e
t
u
r
n
 
H
T
T
P
 
4
0
3
:


 
 
-
 
`
/
c
o
o
l
/
g
e
t
M
e
t
r
i
c
s
`


 
 
-
 
`
/
c
o
o
l
/
a
d
m
i
n
w
s
/
`


 
 
-
 
`
/
b
r
o
w
s
e
r
/
d
i
s
t
/
a
d
m
i
n
/
a
d
m
i
n
.
h
t
m
l
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
 
M
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
s
e
c
u
r
i
t
y




C
o
l
l
a
b
o
r
a
 
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
 
m
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
w
i
t
h
 
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
e
c
u
r
i
t
y
 
l
e
v
e
l
s


t
o
 
b
a
l
a
n
c
e
 
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
 
a
n
d
 
s
e
c
u
r
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
 
M
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
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
 
s
e
c
u
r
i
t
y
 
l
e
v
e
l
 
1


-
 
G
I
V
E
N
 
`
m
a
c
r
o
s
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
m
a
c
r
o
s
.
s
e
c
u
r
i
t
y
L
e
v
e
l
:
 
"
1
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
 
o
p
e
n
s
 
a
 
d
o
c
u
m
e
n
t
 
c
o
n
t
a
i
n
i
n
g
 
m
a
c
r
o
s


-
 
T
H
E
N
 
m
a
c
r
o
s
 
e
x
e
c
u
t
e
 
w
i
t
h
 
c
o
n
f
i
r
m
a
t
i
o
n
 
p
r
o
m
p
t


-
 
A
N
D
 
s
i
g
n
e
d
 
m
a
c
r
o
s
 
r
u
n
 
w
i
t
h
o
u
t
 
p
r
o
m
p
t
,
 
u
n
s
i
g
n
e
d
 
m
a
c
r
o
s
 
p
r
o
m
p
t
 
u
s
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
 
M
a
c
r
o
 
e
x
e
c
u
t
i
o
n
 
d
i
s
a
b
l
e
d
 
(
s
e
c
u
r
i
t
y
 
l
e
v
e
l
 
0
)


-
 
G
I
V
E
N
 
`
m
a
c
r
o
s
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
m
a
c
r
o
s
.
s
e
c
u
r
i
t
y
L
e
v
e
l
:
 
"
0
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
 
o
p
e
n
s
 
a
 
d
o
c
u
m
e
n
t
 
c
o
n
t
a
i
n
i
n
g
 
m
a
c
r
o
s


-
 
T
H
E
N
 
a
l
l
 
m
a
c
r
o
s
 
a
r
e
 
e
x
e
c
u
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
 
c
o
n
f
i
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
 
s
e
c
u
r
i
t
y
 
l
e
v
e
l
 
v
a
l
u
e
s
 
o
u
t
s
i
d
e
 
`
{
0
,
 
1
}
`
 
S
H
A
L
L
 
c
a
u
s
e
 
h
e
l
m
f
i
l
e
 
r
e
n
d
e
r
 
f
a
i
l
u
r
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
i
n
g




C
o
l
l
a
b
o
r
a
 
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
 
m
e
t
r
i
c
s
 
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
e
 
w
i
t
h


t
h
e
 
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
 
O
p
e
r
a
t
o
r
 
f
o
r
 
s
e
r
v
i
c
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
 
a
n
d
 
a
l
e
r
t
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
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
 
s
c
r
a
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
 
C
o
l
l
a
b
o
r
a
 
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
 
`
s
e
r
v
i
c
e
M
o
n
i
t
o
r
s
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
 
t
a
r
g
e
t
s


-
 
T
H
E
N
 
a
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
 
r
e
s
o
u
r
c
e
 
s
e
l
e
c
t
s
 
C
o
l
l
a
b
o
r
a
 
p
o
d
s


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
 
a
r
e
 
c
o
l
l
e
c
t
e
d
 
i
n
c
l
u
d
i
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
,
 
C
P
U
/
m
e
m
o
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
R
u
l
e
 
a
l
e
r
t
s


-
 
G
I
V
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
 
`
p
r
o
m
e
t
h
e
u
s
R
u
l
e
s
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
 
a
l
e
r
t
i
n
g
 
r
u
l
e
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
 
f
o
r
 
C
o
l
l
a
b
o
r
a
 
h
e
a
l
t
h




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
o
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
 
f
r
o
m
 
N
e
x
t
c
l
o
u
d




C
o
l
l
a
b
o
r
a
 
S
H
A
L
L
 
l
o
a
d
 
f
o
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
 
f
r
o
m
 
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
 
R
i
c
h
D
o
c
u
m
e
n
t
s


a
p
p
 
s
e
t
t
i
n
g
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
 
R
e
m
o
t
e
 
f
o
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
 
`
r
e
m
o
t
e
_
f
o
n
t
_
c
o
n
f
i
g
.
u
r
l
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
e
x
t
c
l
o
u
d
 
R
i
c
h
D
o
c
u
m
e
n
t
s


-
 
W
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
 
f
e
t
c
h
e
s
 
t
h
e
 
f
o
n
t
 
l
i
s
t
 
J
S
O
N
 
f
r
o
m
 
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
e
x
t
c
l
o
u
d
>
/
a
p
p
s
/
r
i
c
h
d
o
c
u
m
e
n
t
s
/
s
e
t
t
i
n
g
s
/
f
o
n
t
s
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
 
a
v
a
i
l
a
b
l
e
 
f
o
n
t
s
 
m
a
t
c
h
 
t
h
o
s
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
 
a
t
 
i
n
g
r
e
s
s




C
o
l
l
a
b
o
r
a
 
S
H
A
L
L
 
t
e
r
m
i
n
a
t
e
 
T
L
S
 
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
u
n
n
i
n
g
 
p
l
a
i
n
 
H
T
T
P


i
n
t
e
r
n
a
l
l
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
 
S
S
L
 
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


-
 
G
I
V
E
N
 
`
s
s
l
.
e
n
a
b
l
e
=
f
a
l
s
e
`
 
a
n
d
 
`
s
s
l
.
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
=
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
 
a
c
c
e
s
s
e
s
 
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
 
H
T
T
P
S


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
 
t
e
r
m
i
n
a
t
e
s
 
T
L
S


-
 
A
N
D
 
i
n
t
e
r
n
a
l
 
t
r
a
f
f
i
c
 
b
e
t
w
e
e
n
 
i
n
g
r
e
s
s
 
a
n
d
 
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
s
 
p
l
a
i
n
 
H
T
T
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




C
o
l
l
a
b
o
r
a
 
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
 
i
s
 
s
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
h
e
m
e


-
 
G
I
V
E
N
 
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
:
 
"
t
r
u
e
"
`


-
 
W
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
 
r
e
n
d
e
r
s
 
i
t
s
 
U
I


-
 
T
H
E
N
 
`
u
s
e
_
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
_
t
h
e
m
e
=
f
a
l
s
e
`
 
i
s
 
a
p
p
l
i
e
d


-
 
A
N
D
 
C
o
l
l
a
b
o
r
a
 
u
s
e
s
 
i
t
s
 
o
w
n
 
t
h
e
m
e
 
(
N
O
T
 
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
 
t
h
e
m
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
n
t
r
o
l
l
e
r
 
(
l
o
a
d
 
b
a
l
a
n
c
i
n
g
)


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
n
t
r
o
l
l
e
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
 
W
H
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
s
 
a
 
d
o
c
u
m
e
n
t


-
 
T
H
E
N
 
r
o
u
t
i
n
g
 
u
s
e
s
 
`
R
o
u
t
e
T
o
k
e
n
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
W
O
P
I
S
r
c
`
 
f
o
r
 
a
f
f
i
n
i
t
y


-
 
A
N
D
 
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
 
m
o
n
i
t
o
r
 
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
 
`
c
o
l
l
a
b
o
r
a
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
r
-
c
o
o
l
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
r
:
9
0
0
0
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
d
i
r
e
c
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
e
d
 
a
t
 
`
/
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
/
r
o
u
t
e
T
o
k
e
n
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
 
C
o
o
l
w
s
d
 
(
C
o
l
l
a
b
o
r
a
)
 
|
 
1
0
0
1
 
(
c
o
l
l
a
b
o
r
a
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
W
O
P
I
 
t
o
k
e
n
 
d
e
l
e
g
a
t
i
o
n
*
*
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
 
d
o
e
s
 
n
o
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
 
u
s
e
r
s
 
d
i
r
e
c
t
l
y
.
 
I
t
 
r
e
l
i
e
s
 
o
n
 
W
O
P
I
 
t
o
k
e
n
s
 
f
r
o
m
 
t
h
e
 
h
o
s
t
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
/
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
.
 
I
f
 
t
h
e
 
W
O
P
I
 
t
o
k
e
n
 
i
s
 
i
n
v
a
l
i
d
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
 
r
e
t
u
r
n
s
 
a
 
g
e
n
e
r
i
c
 
e
r
r
o
r
.


*
*
F
o
n
t
 
r
e
n
d
e
r
i
n
g
*
*
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
 
m
a
y
 
r
e
n
d
e
r
 
f
o
n
t
s
 
d
i
f
f
e
r
e
n
t
l
y
 
d
e
p
e
n
d
i
n
g
 
o
n
 
c
o
n
t
a
i
n
e
r
 
l
o
c
a
l
e
.
 
C
J
K
 
c
h
a
r
a
c
t
e
r
s
 
r
e
q
u
i
r
e
 
a
d
d
i
t
i
o
n
a
l
 
f
o
n
t
 
p
a
c
k
a
g
e
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
,
 
a
f
f
i
n
i
t
y
 
r
o
u
t
i
n
g
,
 
a
d
m
i
n
 
U
R
L
 
b
l
o
c
k
i
n
g
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
e
x
t
c
l
o
u
d
 
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
 
R
i
c
h
D
o
c
u
m
e
n
t
s
 
a
p
p
,
 
f
o
n
t
 
c
o
n
f
i
g
)
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
)
,
 
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
 
(
m
e
t
r
i
c
s
,
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
,
 
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
R
u
l
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
 
N
o
n
e
 
(
W
O
P
I
 
t
o
k
e
n
 
d
e
l
e
g
a
t
i
o
n
 
f
r
o
m
 
f
i
l
e
-
s
h
a
r
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
 
N
o
n
e
 
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
 
N
o
n
e
 
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
 
s
t
r
e
a
m
e
d
 
v
i
a
 
W
O
P
I
 
f
r
o
m
 
f
i
l
e
 
s
e
r
v
i
c
e
)
 
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
 
M
P
L
-
2
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
m
a
c
r
o
s
.
*
`
,
 
`
t
e
c
h
n
i
c
a
l
.
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
c
o
l
l
a
b
o
r
a
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
 
U
p
s
t
r
e
a
m
 
`
c
o
l
l
a
b
o
r
a
-
o
n
l
i
n
e
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
 
|
 
`
c
o
l
l
a
b
o
r
a
-
i
n
t
e
r
n
a
l
-
a
d
m
i
n
`
 
/
 
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
o
l
l
a
b
o
r
a
.
a
d
m
i
n
P
a
s
s
w
o
r
d
`
 
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
 
(
d
e
f
a
u
l
t
:
 
2
)
 
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
 
c
o
n
t
e
x
t
 
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
 
+
 
a
d
d
 
C
H
O
W
N
/
F
O
W
N
E
R
/
S
Y
S
_
C
H
R
O
O
T
`
 
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
 
9
9
8
0
 
|


|
 
I
n
g
r
e
s
s
 
a
f
f
i
n
i
t
y
 
|
 
H
A
P
r
o
x
y
:
 
`
u
r
l
_
p
a
r
a
m
 
W
O
P
I
S
r
c
 
c
h
e
c
k
_
p
o
s
t
`
 
w
i
t
h
 
`
h
a
s
h
-
t
y
p
e
 
c
o
n
s
i
s
t
e
n
t
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
,
 
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
 
w
i
t
h
 
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
5
0
0
m
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
 
o
p
e
n
)
 
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
W
O
P
I
 
r
e
q
u
e
s
t
)
 
|
 
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
5
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
 
C
o
l
l
a
b
o
r
a
 
a
c
c
e
s
s
 
l
o
g
s
 
|


|
 
*
*
C
o
n
c
u
r
r
e
n
t
 
E
d
i
t
o
r
s
*
*
 
|
 
5
0
 
p
e
r
 
d
o
c
u
m
e
n
t
 
(
m
a
x
)
 
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
 
s
e
s
s
i
o
n
 
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
 
C
o
l
l
a
b
o
r
a
 
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
2
 
a
l
e
r
t


-
 
W
O
P
I
 
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
o
c
u
m
e
n
t
 
c
o
n
v
e
r
s
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
 
A
d
m
i
n
 
U
R
L
 
a
c
c
e
s
s
 
a
t
t
e
m
p
t
s
 
(
s
e
c
u
r
i
t
y
 
a
l
e
r
t
)
 
→
 
P
1
 
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
 
e
d
i
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
s


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
 
d
o
c
u
m
e
n
t
 
v
i
e
w
e
r
s


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
 
c
o
n
v
e
r
s
i
o
n
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
 
f
o
r
m
a
t
)


-
 
1
0
,
0
0
0
 
d
o
c
u
m
e
n
t
s
 
e
d
i
t
e
d
 
p
e
r
 
d
a
y




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
 
(
a
d
m
i
n
 
p
a
s
s
w
o
r
d
s
,
 
W
O
P
I
 
h
o
s
t
s
)


-
 
*
*
S
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
:
 
S
t
a
t
e
l
e
s
s
 
(
n
o
 
b
a
c
k
u
p
 
n
e
e
d
e
d
)


-
 
*
*
D
o
c
u
m
e
n
t
 
d
a
t
a
*
*
:
 
S
t
o
r
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
/
O
p
e
n
C
l
o
u
d
 
(
s
e
e
 
t
h
o
s
e
 
s
p
e
c
s
)




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
 
C
o
l
l
a
b
o
r
a
 
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
0
 
m
i
n


2
.
 
W
O
P
I
 
h
o
s
t
 
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
/
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
 
-
 
5
 
m
i
n


3
.
 
A
d
m
i
n
 
p
a
s
s
w
o
r
d
 
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


4
.
 
S
t
o
r
a
g
e
 
s
a
n
d
b
o
x
 
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
o
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
r
o
m
 
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
 
e
d
i
t
,
 
s
a
v
e
)
 
-
 
1
0
 
m
i
n


6
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
 
W
O
P
I
 
h
o
s
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
)


-
 
A
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


-
 
F
o
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
s


-
 
M
a
c
r
o
 
s
e
c
u
r
i
t
y
 
s
e
t
t
i
n
g
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
C
o
l
l
a
b
o
r
a
 
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
 
W
O
P
I
 
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


-
 
*
*
W
O
P
I
 
h
o
s
t
 
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
 
N
e
x
t
c
l
o
u
d
/
O
p
e
n
C
l
o
u
d
 
a
s
 
W
O
P
I
 
h
o
s
t


-
 
*
*
S
t
o
r
a
g
e
 
s
a
n
d
b
o
x
 
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
 
u
s
e
r
 
n
a
m
e
s
p
a
c
e
 
m
a
p
p
i
n
g
,
 
c
h
e
c
k
 
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
s
,
 
v
e
r
i
f
y
 
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

