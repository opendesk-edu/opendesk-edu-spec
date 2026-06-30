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
e
c
u
r
i
t
y
 
T
h
r
e
a
t
 
M
o
d
e
l




#
#
 
P
u
r
p
o
s
e




M
a
p
s
 
s
e
c
u
r
i
t
y
 
f
i
n
d
i
n
g
s
 
f
r
o
m
 
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
 
S
e
c
 
p
e
n
t
e
s
t
 
a
s
s
e
s
s
m
e
n
t


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
_
s
e
c
/
s
e
c
u
r
i
t
y
-
a
s
s
e
s
s
m
e
n
t
-
2
0
2
5
-
0
3
-
2
6
/
`
)
 
t
o
 
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
 
s
e
r
v
i
c
e
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
 
m
i
t
i
g
a
t
i
o
n
s
,
 
a
n
d
 
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
 
r
e
m
a
i
n
i
n
g
 
r
i
s
k
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
 
D
e
t
a
i
l
e
d
 
p
e
n
t
e
s
t
 
m
e
t
h
o
d
o
l
o
g
y
 
(
s
e
e
 
p
e
n
t
e
s
t
 
r
e
p
o
r
t
)


-
 
V
u
l
n
e
r
a
b
i
l
i
t
y
 
s
c
o
r
i
n
g
 
(
s
e
e
 
p
e
n
t
e
s
t
 
r
e
p
o
r
t
 
f
o
r
 
C
V
S
S
 
s
c
o
r
e
s
)




-
-
-




#
#
 
T
h
r
e
a
t
 
C
a
t
e
g
o
r
i
e
s




#
#
#
 
T
C
-
1
:
 
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
 
a
n
d
 
S
e
s
s
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




#
#
#
#
 
F
i
n
d
i
n
g
:
 
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
 
m
a
n
i
p
u
l
a
t
i
o
n


-
 
*
*
S
o
u
r
c
e
*
*
:
 
P
e
n
t
e
s
t
 
f
i
n
d
i
n
g
 
(
s
e
e
 
`
0
2
-
f
i
n
d
i
n
g
s
-
c
r
i
t
i
c
a
l
.
m
d
`
)


-
 
*
*
I
m
p
a
c
t
*
*
:
 
B
y
p
a
s
s
 
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
 
i
m
p
e
r
s
o
n
a
t
e
 
u
s
e
r
s


-
 
*
*
A
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
s
*
*
:
 
A
l
l
 
S
A
M
L
 
2
.
0
 
s
e
r
v
i
c
e
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
,
 
B
B
B
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
X
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
)


-
 
*
*
M
i
t
i
g
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
*
*
:


 
 
-
 
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
s
 
s
i
g
n
e
d
 
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
 
(
`
s
i
g
A
l
g
:
 
R
S
A
-
S
H
A
2
5
6
`
)


 
 
-
 
`
W
a
n
t
A
s
s
e
r
t
i
o
n
s
S
i
g
n
e
d
:
 
t
r
u
e
`
 
o
n
 
a
l
l
 
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
s


 
 
-
 
E
n
t
i
t
y
 
I
D
 
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
 
o
n
 
b
o
t
h
 
I
d
P
 
a
n
d
 
S
P


 
 
-
 
S
h
o
r
t
-
l
i
v
e
d
 
a
s
s
e
r
t
i
o
n
s
 
(
5
-
m
i
n
u
t
e
 
v
a
l
i
d
i
t
y
 
w
i
n
d
o
w
)


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
—
 
m
i
t
i
g
a
t
e
d
 
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
 
s
i
g
n
i
n
g




#
#
#
#
 
F
i
n
d
i
n
g
:
 
O
I
D
C
 
t
o
k
e
n
 
e
x
p
o
s
u
r
e
 
i
n
 
l
o
g
s


-
 
*
*
S
o
u
r
c
e
*
*
:
 
P
e
n
t
e
s
t
 
f
i
n
d
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
T
o
k
e
n
 
t
h
e
f
t
 
f
r
o
m
 
l
o
g
 
f
i
l
e
s


-
 
*
*
A
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
s
*
*
:
 
A
l
l
 
O
I
D
C
 
s
e
r
v
i
c
e
s
 
(
S
O
G
o
,
 
E
l
e
m
e
n
t
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
 
X
W
i
k
i
,
 
N
o
t
e
s
,
 
P
l
a
n
k
a
)


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:
 
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
 
o
n
 
m
o
s
t
 
O
I
D
C
 
s
e
r
v
i
c
e
s
 
p
r
e
v
e
n
t
s


 
 
l
o
g
 
f
i
l
e
 
w
r
i
t
e
s
 
t
o
 
c
o
n
t
a
i
n
e
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
.
 
C
e
n
t
r
a
l
i
z
e
d
 
l
o
g
g
i
n
g
 
(
L
o
k
i
/
P
r
o
m
t
a
i
l
)


 
 
s
h
o
u
l
d
 
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
s
.


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
M
E
D
I
U
M
 
—
 
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
g
s
 
m
a
y
 
s
t
i
l
l
 
e
x
p
o
s
e
 
t
o
k
e
n
s
 
i
n


 
 
`
s
t
d
o
u
t
`
 
w
h
i
c
h
 
i
s
 
c
a
p
t
u
r
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
 
F
i
n
d
i
n
g
:
 
R
e
f
r
e
s
h
 
t
o
k
e
n
 
r
o
t
a
t
i
o
n


-
 
*
*
S
o
u
r
c
e
*
*
:
 
D
e
s
i
g
n
 
r
e
v
i
e
w


-
 
*
*
I
m
p
a
c
t
*
*
:
 
R
e
f
r
e
s
h
 
t
o
k
e
n
 
t
h
e
f
t
 
l
e
a
d
s
 
t
o
 
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
 
a
c
c
e
s
s


-
 
*
*
A
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
s
*
*
:
 
S
O
G
o
 
(
r
e
f
r
e
s
h
 
t
o
k
e
n
 
r
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
i
g
u
r
e
d
 
a
t
 
3
6
0
0
s
 
i
n
t
e
r
v
a
l
)


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:
 
S
O
G
o
 
r
e
f
r
e
s
h
e
s
 
t
o
k
e
n
s
 
o
n
 
a
 
r
e
g
u
l
a
r
 
i
n
t
e
r
v
a
l
.
 
O
t
h
e
r
 
O
I
D
C


 
 
s
e
r
v
i
c
e
s
 
s
h
o
u
l
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
f
r
e
s
h
 
t
o
k
e
n
 
r
o
t
a
t
i
o
n
.


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
f
o
r
 
S
O
G
o
,
 
M
E
D
I
U
M
 
f
o
r
 
o
t
h
e
r
s
 
(
d
e
p
e
n
d
s
 
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
 
c
o
n
f
i
g
)




#
#
#
 
T
C
-
2
:
 
N
e
t
w
o
r
k
 
S
e
c
u
r
i
t
y




#
#
#
#
 
F
i
n
d
i
n
g
:
 
U
n
e
n
c
r
y
p
t
e
d
 
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


-
 
*
*
S
o
u
r
c
e
*
*
:
 
P
e
n
t
e
s
t
 
f
i
n
d
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
P
a
c
k
e
t
 
s
n
i
f
f
i
n
g
 
b
e
t
w
e
e
n
 
s
e
r
v
i
c
e
s


-
 
*
*
A
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
s
*
*
:
 
A
l
l
 
i
n
t
e
r
-
s
e
r
v
i
c
e
 
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


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:


 
 
-
 
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
 
(
e
x
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
 
e
n
c
r
y
p
t
e
d
)


 
 
-
 
m
T
L
S
 
v
i
a
 
s
e
r
v
i
c
e
 
m
e
s
h
 
(
n
o
t
 
d
e
p
l
o
y
e
d
 
—
 
f
u
t
u
r
e
 
c
o
n
s
i
d
e
r
a
t
i
o
n
)


 
 
-
 
N
e
t
w
o
r
k
 
p
o
l
i
c
i
e
s
 
r
e
s
t
r
i
c
t
 
p
o
d
-
t
o
-
p
o
d
 
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
 
(
O
t
t
e
r
i
z
e
 
i
n
t
e
n
t
s


 
 
 
 
p
a
r
t
i
a
l
l
y
 
d
e
p
l
o
y
e
d
 
—
 
s
e
e
 
`
i
n
t
e
n
t
s
.
o
t
t
e
r
i
z
e
.
c
o
m
/
s
e
r
v
i
c
e
-
n
a
m
e
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
s
)


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
M
E
D
I
U
M
 
—
 
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
 
i
s
 
p
l
a
i
n
t
e
x
t
 
w
i
t
h
i
n
 
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




#
#
#
#
 
F
i
n
d
i
n
g
:
 
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
 
f
a
i
l
u
r
e


-
 
*
*
S
o
u
r
c
e
*
*
:
 
K
n
o
w
n
 
H
R
Z
 
i
s
s
u
e


-
 
*
*
I
m
p
a
c
t
*
*
:
 
E
x
t
e
r
n
a
l
 
D
N
S
 
l
o
o
k
u
p
s
 
f
a
i
l
,
 
b
r
e
a
k
i
n
g
 
s
o
m
e
 
s
e
r
v
i
c
e
s


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:
 
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
 
i
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
 
d
o
m
a
i
n
s
.


 
 
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
;
 
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


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
—
 
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
 
i
n
 
p
l
a
c
e




#
#
#
 
T
C
-
3
:
 
C
o
n
t
a
i
n
e
r
 
S
e
c
u
r
i
t
y




#
#
#
#
 
F
i
n
d
i
n
g
:
 
P
r
i
v
i
l
e
g
e
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
s
 
o
r
 
e
l
e
v
a
t
e
d
 
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


-
 
*
*
S
o
u
r
c
e
*
*
:
 
P
e
n
t
e
s
t
 
f
i
n
d
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
C
o
n
t
a
i
n
e
r
 
e
s
c
a
p
e
,
 
p
r
i
v
i
l
e
g
e
 
e
s
c
a
l
a
t
i
o
n


-
 
*
*
A
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
s
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
 
(
r
e
q
u
i
r
e
s
 
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
 
i
s
o
l
a
t
i
o
n
)


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:


 
 
-
 
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
:
 
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
 
+
 
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
:
 
e
x
p
l
i
c
i
t
l
y
 
a
d
d
s
 
o
n
l
y
 
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
 
(
m
i
n
i
m
u
m
 
n
e
e
d
e
d
)


 
 
-
 
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
:
 
`
r
u
n
A
s
N
o
n
R
o
o
t
:
 
t
r
u
e
`
 
w
i
t
h
 
n
o
n
-
r
o
o
t
 
u
s
e
r


 
 
-
 
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
:
 
`
a
l
l
o
w
P
r
i
v
i
l
e
g
e
E
s
c
a
l
a
t
i
o
n
:
 
f
a
l
s
e
`


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
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
 
a
r
e
 
n
e
c
e
s
s
a
r
y
 
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


 
 
i
s
o
l
a
t
i
o
n
 
a
n
d
 
c
a
n
n
o
t
 
b
e
 
f
u
r
t
h
e
r
 
r
e
d
u
c
e
d
 
w
i
t
h
o
u
t
 
b
r
e
a
k
i
n
g
 
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




#
#
#
#
 
F
i
n
d
i
n
g
:
 
R
e
a
d
-
o
n
l
y
 
r
o
o
t
 
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


-
 
*
*
S
o
u
r
c
e
*
*
:
 
S
e
c
u
r
i
t
y
 
h
a
r
d
e
n
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
W
r
i
t
e
 
p
r
o
t
e
c
t
i
o
n
 
f
o
r
 
s
y
s
t
e
m
 
f
i
l
e
s


-
 
*
*
A
p
p
l
i
e
d
 
t
o
*
*
:
 
E
l
e
m
e
n
t
,
 
S
y
n
a
p
s
e
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
 
A
I
O
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
 
E
x
p
o
r
t
e
r
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
,
 
N
o
t
e
s
 
(
b
a
c
k
e
n
d
,
 
f
r
o
n
t
e
n
d
,
 
y
-
p
r
o
v
i
d
e
r
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
,
 
C
r
y
p
t
P
a
d
,
 
S
O
G
o


-
 
*
*
N
o
t
 
a
p
p
l
i
e
d
 
t
o
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
 
(
n
e
e
d
s
 
w
r
i
t
a
b
l
e
 
t
m
p
 
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
)
,


 
 
I
L
I
A
S
 
(
n
e
e
d
s
 
w
r
i
t
a
b
l
e
 
/
v
a
r
/
w
w
w
/
h
t
m
l
 
f
o
r
 
M
o
o
d
l
e
/
I
L
I
A
S
 
c
o
m
p
a
t
i
b
i
l
i
t
y
)
,
 
X
W
i
k
i


 
 
(
n
e
e
d
s
 
w
r
i
t
a
b
l
e
 
d
a
t
a
 
d
i
r
e
c
t
o
r
y
)


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
—
 
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
 
e
x
c
e
p
t
i
o
n
s
 
w
i
t
h
 
j
u
s
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
 
T
C
-
4
:
 
D
a
t
a
 
P
r
o
t
e
c
t
i
o
n




#
#
#
#
 
F
i
n
d
i
n
g
:
 
R
W
O
 
P
V
C
 
b
a
c
k
u
p
 
e
x
c
l
u
s
i
o
n


-
 
*
*
S
o
u
r
c
e
*
*
:
 
O
p
e
r
a
t
i
o
n
a
l
 
f
i
n
d
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
D
a
t
a
b
a
s
e
 
d
a
t
a
 
n
o
t
 
b
a
c
k
e
d
 
u
p
 
b
y
 
k
8
u
p


-
 
*
*
A
f
f
e
c
t
e
d
*
*
:
 
2
9
 
R
W
O
 
P
V
C
s
 
(
a
l
l
 
d
a
t
a
b
a
s
e
s
)


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:


 
 
-
 
A
l
l
 
2
9
 
P
V
C
s
 
a
n
n
o
t
a
t
e
d
 
w
i
t
h
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`


 
 
-
 
T
O
D
O
:
 
I
m
p
l
e
m
e
n
t
 
C
S
I
 
s
n
a
p
s
h
o
t
 
s
c
h
e
d
u
l
e
s
 
o
r
 
p
e
r
-
n
o
d
e
 
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
s


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
H
I
G
H
 
—
 
n
o
 
a
u
t
o
m
a
t
e
d
 
b
a
c
k
u
p
 
f
o
r
 
d
a
t
a
b
a
s
e
 
d
a
t
a
.
 
M
a
n
u
a
l


 
 
p
g
_
d
u
m
p
/
m
y
s
q
l
d
u
m
p
 
r
e
q
u
i
r
e
d
 
a
s
 
i
n
t
e
r
i
m
 
m
e
a
s
u
r
e
.




#
#
#
#
 
F
i
n
d
i
n
g
:
 
E
n
c
r
y
p
t
i
o
n
 
a
t
 
r
e
s
t


-
 
*
*
S
o
u
r
c
e
*
*
:
 
S
e
c
u
r
i
t
y
 
h
a
r
d
e
n
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
D
a
t
a
 
e
x
p
o
s
u
r
e
 
i
f
 
s
t
o
r
a
g
e
 
c
o
m
p
r
o
m
i
s
e
d


-
 
*
*
M
i
t
i
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
e
p
h
 
R
B
D
 
a
n
d
 
C
e
p
h
F
S
 
p
r
o
v
i
d
e
 
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
 
a
t
 
t
h
e
 
s
t
o
r
a
g
e
 
l
a
y
e
r


 
 
(
C
e
p
h
 
c
l
u
s
t
e
r
-
l
e
v
e
l
 
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
)
.
 
S
3
/
M
i
n
I
O
 
d
a
t
a
 
a
t
 
r
e
s
t
 
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
 
d
e
p
e
n
d
s


 
 
o
n
 
M
i
n
I
O
 
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
.


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
f
o
r
 
C
e
p
h
 
P
V
C
s
,
 
M
E
D
I
U
M
 
f
o
r
 
S
3
 
d
a
t
a
 
(
v
e
r
i
f
y
 
M
i
n
I
O
 
c
o
n
f
i
g
)




#
#
#
 
T
C
-
5
:
 
I
n
p
u
t
 
V
a
l
i
d
a
t
i
o
n




#
#
#
#
 
F
i
n
d
i
n
g
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
i
z
e
 
l
i
m
i
t
s


-
 
*
*
S
o
u
r
c
e
*
*
:
 
S
e
c
u
r
i
t
y
 
h
a
r
d
e
n
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
D
o
S
 
v
i
a
 
o
v
e
r
s
i
z
e
d
 
u
p
l
o
a
d
s


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:
 
A
l
l
 
f
i
l
e
-
u
p
l
o
a
d
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
 
h
a
v
e
 
b
o
d
y
 
s
i
z
e
 
l
i
m
i
t
s
 
a
t
 
i
n
g
r
e
s
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
:
 
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
i
n
g
r
e
s
s
.
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
.
b
o
d
y
S
i
z
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
`


 
 
-
 
M
o
o
d
l
e
:
 
2
0
0
M
 
(
c
o
u
r
s
e
 
f
i
l
e
s
,
 
S
C
O
R
M
 
p
a
c
k
a
g
e
s
)


 
 
-
 
B
B
B
:
 
1
2
0
s
 
t
i
m
e
o
u
t
 
(
s
t
r
e
a
m
i
n
g
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
:
 
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
i
n
g
r
e
s
s
.
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
.
b
o
d
y
S
i
z
e
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


 
 
-
 
N
o
t
e
s
:
 
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
i
n
g
r
e
s
s
.
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
.
b
o
d
y
S
i
z
e
.
n
o
t
e
s
`


 
 
-
 
D
r
a
w
.
i
o
:
 
2
G
i
 
m
e
m
o
r
y
 
l
i
m
i
t
 
(
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
 
r
e
n
d
e
r
i
n
g
)


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
—
 
s
i
z
e
 
l
i
m
i
t
s
 
e
n
f
o
r
c
e
d
 
a
t
 
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




#
#
#
#
 
F
i
n
d
i
n
g
:
 
S
Q
L
 
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
 
*
*
S
o
u
r
c
e
*
*
:
 
P
e
n
t
e
s
t
 
f
i
n
d
i
n
g


-
 
*
*
I
m
p
a
c
t
*
*
:
 
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
m
p
r
o
m
i
s
e
 
v
i
a
 
m
a
l
i
c
i
o
u
s
 
i
n
p
u
t


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:
 
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
 
u
s
e
 
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
z
e
d
 
q
u
e
r
i
e
s
 
v
i
a
 
t
h
e
i
r
 
r
e
s
p
e
c
t
i
v
e


 
 
O
R
M
s
 
(
A
c
t
i
v
e
R
e
c
o
r
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
,
 
S
Q
L
A
l
c
h
e
m
y
 
f
o
r
 
N
o
t
e
s
,
 
E
l
o
q
u
e
n
t
 
f
o
r


 
 
L
a
r
a
v
e
l
-
b
a
s
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
,
 
J
D
B
C
 
f
o
r
 
X
W
i
k
i
)
.
 
N
o
 
r
a
w
 
S
Q
L
 
c
o
n
s
t
r
u
c
t
i
o
n


 
 
f
r
o
m
 
u
s
e
r
 
i
n
p
u
t
 
d
e
t
e
c
t
e
d
.


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W




#
#
#
 
T
C
-
6
:
 
D
e
p
e
n
d
e
n
c
y
 
S
e
c
u
r
i
t
y




#
#
#
#
 
F
i
n
d
i
n
g
:
 
U
p
s
t
r
e
a
m
 
c
h
a
r
t
 
v
u
l
n
e
r
a
b
i
l
i
t
i
e
s


-
 
*
*
S
o
u
r
c
e
*
*
:
 
O
p
e
r
a
t
i
o
n
a
l
 
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
 
*
*
I
m
p
a
c
t
*
*
:
 
K
n
o
w
n
 
C
V
E
s
 
i
n
 
u
p
s
t
r
e
a
m
 
i
m
a
g
e
s


-
 
*
*
M
i
t
i
g
a
t
i
o
n
*
*
:


 
 
-
 
T
r
i
v
y
 
s
c
a
n
s
 
o
n
 
a
l
l
 
H
e
l
m
 
c
h
a
r
t
s
 
(
C
I
 
p
i
p
e
l
i
n
e
)


 
 
-
 
S
e
m
g
r
e
p
 
S
A
S
T
 
o
n
 
P
y
t
h
o
n
 
c
o
d
e


 
 
-
 
C
h
e
c
k
o
v
 
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
-
a
s
-
c
o
d
e
 
s
c
a
n
n
i
n
g


 
 
-
 
G
i
t
l
e
a
k
s
 
s
e
c
r
e
t
 
s
c
a
n
n
i
n
g


-
 
*
*
R
e
m
a
i
n
i
n
g
 
r
i
s
k
*
*
:
 
L
O
W
 
—
 
a
u
t
o
m
a
t
e
d
 
s
c
a
n
n
i
n
g
 
i
n
 
C
I
 
p
i
p
e
l
i
n
e




-
-
-




#
#
 
S
e
r
v
i
c
e
-
S
p
e
c
i
f
i
c
 
R
i
s
k
 
S
u
m
m
a
r
y




|
 
S
e
r
v
i
c
e
 
|
 
C
r
i
t
i
c
a
l
 
|
 
H
i
g
h
 
|
 
M
e
d
i
u
m
 
|
 
L
o
w
 
|
 
N
o
t
e
s
 
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
 
|
 
1
 
(
t
o
k
e
n
 
e
x
p
o
s
u
r
e
)
 
|
 
0
 
|
 
0
 
|
 
2
 
|
 
C
e
n
t
r
a
l
 
a
u
t
h
 
—
 
h
i
g
h
e
s
t
 
i
m
p
a
c
t
 
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
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
1
 
(
p
l
a
i
n
t
e
x
t
 
l
o
g
s
)
 
|
 
1
 
|
 
S
3
 
+
 
M
a
r
i
a
D
B
/
P
G
 
|


|
 
O
p
e
n
C
l
o
u
d
 
|
 
0
 
|
 
0
 
|
 
2
 
|
 
1
 
|
 
N
e
w
e
r
,
 
f
e
w
e
r
 
f
i
n
d
i
n
g
s
 
|


|
 
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
 
|
 
0
 
|
 
0
 
|
 
2
 
|
 
1
 
|
 
C
o
m
p
l
e
x
 
J
a
v
a
 
a
p
p
 
|


|
 
S
O
G
o
 
|
 
0
 
|
 
0
 
|
 
1
 
|
 
2
 
|
 
R
e
f
r
e
s
h
 
t
o
k
e
n
s
 
w
e
l
l
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
 
|


|
 
E
l
e
m
e
n
t
 
|
 
0
 
|
 
0
 
|
 
1
 
|
 
2
 
|
 
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
 
r
i
s
k
 
i
f
 
e
n
a
b
l
e
d
 
|


|
 
I
L
I
A
S
 
|
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
1
 
(
P
H
P
 
C
V
E
s
)
 
|
 
0
 
|
 
P
H
P
 
e
x
p
o
s
u
r
e
 
|


|
 
M
o
o
d
l
e
 
|
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
1
 
(
P
H
P
 
C
V
E
s
)
 
|
 
0
 
|
 
P
H
P
 
e
x
p
o
s
u
r
e
 
|


|
 
B
B
B
 
|
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
0
 
|
 
1
 
|
 
G
r
e
e
n
l
i
g
h
t
 
R
a
i
l
s
 
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
 
0
 
|
 
0
 
|
 
1
 
(
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
)
 
|
 
2
 
|
 
D
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
l
a
t
i
o
n
 
|


|
 
X
W
i
k
i
 
|
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
1
 
(
J
a
v
a
 
C
V
E
s
)
 
|
 
0
 
|
 
D
u
a
l
 
a
u
t
h
 
(
O
I
D
C
+
L
D
A
P
)
 
|


|
 
Z
a
m
m
a
d
 
|
 
0
 
|
 
1
 
(
n
o
 
D
B
 
b
a
c
k
u
p
)
 
|
 
0
 
|
 
2
 
|
 
R
u
b
y
 
o
n
 
R
a
i
l
s
 
|


|
 
O
t
h
e
r
s
 
|
 
0
 
|
 
0
-
1
 
|
 
0
-
1
 
|
 
1
-
2
 
|
 
L
o
w
e
r
 
r
i
s
k
 
|




-
-
-




#
#
 
R
e
c
o
m
m
e
n
d
e
d
 
S
e
c
u
r
i
t
y
 
I
m
p
r
o
v
e
m
e
n
t
s




|
 
P
r
i
o
r
i
t
y
 
|
 
I
m
p
r
o
v
e
m
e
n
t
 
|
 
E
f
f
o
r
t
 
|
 
I
m
p
a
c
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
1
 
|
 
I
m
p
l
e
m
e
n
t
 
C
S
I
 
s
n
a
p
s
h
o
t
s
 
f
o
r
 
R
W
O
 
P
V
C
s
 
|
 
H
i
g
h
 
|
 
C
l
o
s
e
s
 
H
I
G
H
 
r
i
s
k
 
g
a
p
 
|


|
 
P
1
 
|
 
D
e
p
l
o
y
 
n
e
t
w
o
r
k
 
p
o
l
i
c
i
e
s
 
(
C
a
l
i
c
o
 
C
i
l
i
u
m
)
 
|
 
M
e
d
i
u
m
 
|
 
R
e
d
u
c
e
s
 
M
E
D
I
U
M
 
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
 
r
i
s
k
 
|


|
 
P
2
 
|
 
C
o
n
f
i
g
u
r
e
 
m
T
L
S
 
b
e
t
w
e
e
n
 
s
e
r
v
i
c
e
s
 
|
 
H
i
g
h
 
|
 
F
u
l
l
 
i
n
t
e
r
n
a
l
 
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
 
|


|
 
P
2
 
|
 
R
o
t
a
t
e
 
a
l
l
 
s
e
c
r
e
t
s
 
r
e
g
u
l
a
r
l
y
 
|
 
L
o
w
 
|
 
R
e
d
u
c
e
s
 
s
e
c
r
e
t
 
e
x
p
o
s
u
r
e
 
r
i
s
k
 
|


|
 
P
3
 
|
 
D
e
p
l
o
y
 
F
a
l
c
o
 
f
o
r
 
r
u
n
t
i
m
e
 
s
e
c
u
r
i
t
y
 
|
 
M
e
d
i
u
m
 
|
 
D
e
t
e
c
t
 
a
n
o
m
a
l
o
u
s
 
c
o
n
t
a
i
n
e
r
 
b
e
h
a
v
i
o
r
 
|


|
 
P
3
 
|
 
I
m
p
l
e
m
e
n
t
 
R
B
A
C
 
a
u
d
i
t
 
l
o
g
g
i
n
g
 
|
 
L
o
w
 
|
 
T
r
a
c
k
 
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
v
e
 
a
c
t
i
o
n
s
 
|

