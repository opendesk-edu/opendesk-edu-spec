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
 
P
l
a
t
f
o
r
m
 
T
e
r
m
i
n
o
l
o
g
y
 
&
 
G
l
o
s
s
a
r
y




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
e
f
i
n
e
s
 
s
t
a
n
d
a
r
d
i
z
e
d
 
t
e
r
m
i
n
o
l
o
g
y
 
u
s
e
d
 
a
c
r
o
s
s
 
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
 
O
p
e
n
S
p
e
c
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


c
o
m
p
o
n
e
n
t
 
n
a
m
e
s
,
 
p
r
o
t
o
c
o
l
s
,
 
t
i
e
r
s
,
 
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
 
w
a
v
e
s
,
 
a
n
d
 
H
R
Z
-
s
p
e
c
i
f
i
c
 
c
o
n
c
e
p
t
s
.




#
#
 
G
l
o
s
s
a
r
y




#
#
#
 
C
o
r
e
 
P
l
a
t
f
o
r
m
 
C
o
m
p
o
n
e
n
t
s




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
N
u
b
u
s
*
*
 
|
 
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
 
G
m
b
H
)
 
c
o
m
p
r
i
s
i
n
g
 
O
p
e
n
L
D
A
P
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
 
P
o
r
t
a
l
,
 
U
M
C
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
.
 
S
e
e
 
s
p
e
c
:
 
[
s
e
r
v
i
c
e
s
/
n
u
b
u
s
]
(
.
.
/
s
e
r
v
i
c
e
s
/
n
u
b
u
s
/
)
 
|


|
 
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
 
i
s
s
u
e
s
 
J
W
T
 
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
s
 
t
o
 
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
.
 
R
e
a
l
m
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
`
.
 
|


|
 
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
 
s
e
r
v
i
c
e
 
(
L
D
A
P
_
b
i
n
d
)
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
 
(
O
U
)
 
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
o
u
=
u
s
e
r
s
`
,
 
`
o
u
=
g
r
o
u
p
s
`
.
 
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
*
*
 
|
 
S
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
 
w
e
b
 
p
a
g
e
 
s
h
o
w
i
n
g
 
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
 
I
n
t
e
r
c
o
m
 
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
.
 
|


|
 
*
*
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
*
*
 
|
 
C
r
o
s
s
-
a
p
p
 
t
o
k
e
n
 
r
e
l
a
y
 
b
a
c
k
e
n
d
 
e
n
a
b
l
i
n
g
 
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
 
(
O
A
u
t
h
2
 
→
 
S
A
M
L
 
S
P
)
 
b
e
t
w
e
e
n
 
O
I
D
C
 
a
n
d
 
S
A
M
L
-
o
n
l
y
 
s
e
r
v
i
c
e
s
.
 
|


|
 
*
*
U
M
C
 
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
*
*
 
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
 
f
o
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
 
t
o
 
I
A
M
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
 
(
n
o
 
D
H
C
P
/
D
N
S
)
.
 
|


|
 
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
 
A
P
I
 
a
t
 
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
 
f
o
r
 
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
 
a
n
d
 
C
M
S
 
s
y
s
t
e
m
s
.
 
|




#
#
#
 
S
e
r
v
i
c
e
s
 
&
 
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




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
o
p
e
n
D
e
s
k
 
C
E
*
*
 
|
 
B
a
s
e
 
p
l
a
t
f
o
r
m
:
 
N
u
b
u
s
 
I
A
M
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
 
C
r
y
p
t
P
a
d
,
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
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
 
E
t
h
e
r
p
a
d
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
 
|


|
 
*
*
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
 
|
 
o
p
e
n
D
e
s
k
 
C
E
 
e
x
t
e
n
d
e
d
 
w
i
t
h
 
e
d
u
c
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
s
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
 
J
i
t
s
i
/
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
 
X
W
i
k
i
,
 
T
Y
P
O
3
,
 
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
S
P
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
 
E
l
e
m
e
n
t
,
 
e
t
c
.
 
|


|
 
*
*
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
*
*
 
|
 
T
h
e
 
O
A
u
t
h
2
 
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
 
s
t
o
r
e
d
 
i
n
 
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
s
 
(
e
.
g
.
,
 
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
.
 
|


|
 
*
*
O
D
_
P
R
I
V
A
T
E
_
R
E
G
I
S
T
R
Y
_
U
S
E
R
N
A
M
E
/
P
A
S
S
W
O
R
D
*
*
 
|
 
E
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
s
 
f
o
r
 
p
u
l
l
i
n
g
 
t
h
e
 
p
r
i
v
a
t
e
 
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
 
c
h
a
r
t
s
 
(
e
.
g
.
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
 
c
h
a
r
t
 
h
o
s
t
e
d
 
o
n
 
`
r
e
g
i
s
t
r
y
.
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
.
 
|


|
 
*
*
K
e
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
*
*
 
|
 
T
h
e
 
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
 
r
e
a
l
m
 
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
n
d
 
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
 
|


|
 
*
*
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
 
I
d
P
*
*
 
|
 
E
x
t
e
r
n
a
l
 
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
 
g
a
t
e
w
a
y
 
(
D
F
N
-
A
A
I
/
e
d
u
G
A
I
N
)
 
—
 
N
O
T
 
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
e
e
 
s
p
e
c
:
 
[
a
u
t
h
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
]
(
.
.
/
a
u
t
h
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
/
)
 
|




#
#
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
 
&
 
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




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
*
*
 
|
 
P
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
 
o
n
 
i
n
g
r
e
s
s
 
I
P
 
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
.
 
R
o
u
t
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
 
H
T
T
P
S
 
→
 
i
n
t
e
r
n
a
l
 
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
 
S
e
r
v
i
c
e
s
.
 
|


|
 
*
*
I
n
g
r
e
s
s
 
I
P
*
*
 
|
 
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
 
—
 
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
 
f
o
r
 
H
A
P
r
o
x
y
 
+
 
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
 
(
b
o
t
h
 
s
h
a
r
e
 
t
h
e
 
I
P
)
.
 
|


|
 
*
*
B
o
d
y
 
T
i
m
e
o
u
t
*
*
 
|
 
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
 
t
i
m
e
o
u
t
 
f
o
r
 
l
a
r
g
e
 
H
T
T
P
 
b
o
d
i
e
s
 
(
p
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
 
6
0
0
s
,
 
J
i
t
s
i
 
3
6
0
0
s
,
 
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
 
8
6
4
0
0
s
)
.
 
|


|
 
*
*
P
r
o
x
y
*
*
 
|
 
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
 
—
 
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
 
f
o
r
 
p
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
.
 
|


|
 
*
*
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
 
i
s
s
u
e
*
*
 
|
 
H
R
Z
-
s
p
e
c
i
f
i
c
 
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
 
—
 
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
 
f
a
i
l
s
.
 
W
o
r
k
a
r
o
u
n
d
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
 
w
i
t
h
 
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
 
|


|
 
*
*
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
H
o
s
t
*
*
 
|
 
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
e
t
 
b
y
 
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
 
f
o
r
 
D
r
a
w
.
i
o
 
t
o
 
g
e
n
e
r
a
t
e
 
c
o
r
r
e
c
t
 
i
n
t
e
r
n
a
l
 
U
R
L
s
.
 
|




#
#
#
 
S
t
o
r
a
g
e
 
S
y
s
t
e
m
s




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
o
n
 
|
 
T
y
p
e
 
|


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


|
 
*
*
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
*
*
 
|
 
C
e
p
h
 
R
B
D
 
S
S
D
-
b
a
c
k
e
d
 
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
,
 
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
s
 
(
R
W
O
 
P
V
C
s
)
.
 
|
 
R
W
O
 
|


|
 
*
*
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
*
*
 
|
 
C
e
p
h
F
S
 
e
r
a
s
u
r
e
-
c
o
d
e
d
 
(
3
+
2
)
 
H
D
D
-
b
a
c
k
e
d
 
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
,
 
f
o
r
 
s
h
a
r
e
d
 
f
i
l
e
s
 
(
R
W
X
 
P
V
C
s
)
.
 
|
 
R
W
X
 
|


|
 
*
*
k
8
u
p
*
*
 
|
 
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
 
b
a
c
k
u
p
 
o
p
e
r
a
t
o
r
 
(
G
o
)
,
 
b
a
c
k
s
 
u
p
 
R
W
X
 
P
V
C
s
 
t
o
 
S
3
 
(
C
e
p
h
F
S
)
.
 
|


|
 
*
*
R
W
O
 
P
V
C
 
e
x
c
l
u
s
i
o
n
*
*
 
|
 
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
 
o
n
 
a
l
l
 
2
9
 
R
W
O
 
P
V
C
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
 
b
a
c
k
u
p
 
j
o
b
 
h
a
n
g
 
(
c
a
n
n
o
t
 
m
o
u
n
t
 
m
u
l
t
i
p
l
e
 
R
W
O
 
P
V
C
s
 
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
)
.
 
|


|
 
*
*
b
a
c
k
u
p
-
l
i
v
e
*
*
 
|
 
k
8
u
p
 
S
c
h
e
d
u
l
e
 
n
a
m
e
 
f
o
r
 
m
a
i
n
 
b
a
c
k
u
p
 
(
0
0
:
4
2
 
U
T
C
 
d
a
i
l
y
,
 
b
a
c
k
s
 
u
p
 
R
W
X
 
P
V
C
s
)
.
 
|




#
#
#
 
D
e
p
l
o
y
m
e
n
t
 
C
o
n
c
e
p
t
s




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
H
e
l
m
f
i
l
e
*
*
 
|
 
M
u
l
t
i
-
r
e
l
e
a
s
e
 
H
e
l
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
 
o
r
c
h
e
s
t
r
a
t
i
o
n
 
t
o
o
l
,
 
p
r
o
c
e
s
s
e
s
 
r
e
l
e
a
s
e
s
 
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
 
w
a
v
e
 
o
r
d
e
r
.
 
|


|
 
*
*
D
e
p
l
o
y
m
e
n
t
 
W
a
v
e
*
*
 
|
 
P
h
a
s
e
d
 
r
e
l
e
a
s
e
 
o
r
d
e
r
i
n
g
 
(
6
 
w
a
v
e
s
)
:
 
0
0
0
-
m
i
g
r
a
t
i
o
n
s
,
 
0
1
0
-
i
n
f
r
a
,
 
0
2
0
-
c
o
m
p
o
n
e
n
t
s
,
 
0
5
0
-
s
t
a
t
e
l
e
s
s
,
 
0
4
0
-
c
o
l
l
a
b
,
 
0
6
0
-
e
d
u
.
 
|


|
 
*
*
d
e
p
l
o
y
S
t
a
g
e
*
*
 
|
 
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
 
p
o
d
/
S
e
r
v
i
c
e
 
l
a
b
e
l
 
c
o
n
t
r
o
l
l
i
n
g
 
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
 
w
a
v
e
 
(
e
.
g
.
,
 
`
d
e
p
l
o
y
S
t
a
g
e
:
 
0
2
0
-
c
o
m
p
o
n
e
n
t
s
`
)
.
 
|


|
 
*
*
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
 
r
e
g
i
s
t
r
y
*
*
 
|
 
P
r
i
v
a
t
e
 
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
 
f
o
r
 
o
p
e
n
D
e
s
k
-
h
o
s
t
e
d
 
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
e
.
g
.
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
 
J
i
t
s
i
)
.
 
|


|
 
*
*
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
*
*
 
|
 
H
e
l
m
f
i
l
e
 
v
a
l
u
e
s
 
f
i
l
e
 
w
i
t
h
 
G
o
 
t
e
m
p
l
a
t
i
n
g
 
(
`
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
 
e
x
t
e
n
s
i
o
n
)
.
 
S
u
p
p
o
r
t
s
 
`
{
{
 
e
n
v
 
"
V
A
R
"
 
}
}
`
 
i
n
t
e
r
p
o
l
a
t
i
o
n
.
 
|




#
#
#
 
S
e
r
v
i
c
e
 
T
i
e
r
s




|
 
T
i
e
r
 
|
 
D
e
f
i
n
i
t
i
o
n
 
|
 
S
e
r
v
i
c
e
s
 
(
e
x
a
m
p
l
e
s
)
 
|


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
C
r
i
t
i
c
a
l
*
*
 
|
 
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
-
c
r
i
t
i
c
a
l
,
 
S
L
O
:
 
9
9
.
9
%
 
|
 
K
e
y
c
l
o
a
k
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
,
 
M
a
r
i
a
D
B
,
 
R
e
d
i
s
,
 
M
i
n
I
O
 
|


|
 
*
*
H
i
g
h
*
*
 
|
 
H
i
g
h
-
i
m
p
a
c
t
 
s
e
r
v
i
c
e
s
,
 
S
L
O
:
 
9
9
.
5
%
 
|
 
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
,
 
I
n
t
e
r
c
o
m
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
C
l
o
u
d
,
 
O
X
,
 
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
 
|


|
 
*
*
S
t
a
n
d
a
r
d
*
*
 
|
 
S
t
a
n
d
a
r
d
 
L
M
S
/
c
o
l
l
a
b
 
s
e
r
v
i
c
e
s
,
 
S
L
O
:
 
9
9
.
0
%
 
|
 
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
 
J
i
t
s
i
,
 
B
B
B
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
 
X
W
i
k
i
 
|


|
 
*
*
L
o
w
*
*
 
|
 
S
u
p
p
o
r
t
i
n
g
 
t
o
o
l
s
 
|
 
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
 
E
t
h
e
r
p
a
d
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
 
D
r
a
w
.
i
o
,
 
E
x
c
a
l
i
d
r
a
w
 
|




#
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
 
T
e
r
m
i
n
o
l
o
g
y




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
O
t
t
e
r
i
z
e
*
*
 
|
 
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
 
i
n
t
e
n
t
-
b
a
s
e
d
 
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
y
 
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
 
t
r
a
n
s
l
a
t
e
s
 
`
C
l
i
e
n
t
I
n
t
e
n
t
`
 
→
 
`
N
e
t
w
o
r
k
P
o
l
i
c
y
`
.
 
|


|
 
*
*
C
l
i
e
n
t
I
n
t
e
n
t
 
/
 
S
e
r
v
e
r
I
n
t
e
n
t
*
*
 
|
 
O
t
t
e
r
i
z
e
 
c
u
s
t
o
m
 
r
e
s
o
u
r
c
e
s
 
d
e
f
i
n
i
n
g
 
a
l
l
o
w
e
d
 
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
 
s
e
r
v
i
c
e
s
.
 
|


|
 
*
*
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
*
*
 
|
 
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
c
o
m
p
 
p
r
o
f
i
l
e
 
(
n
o
d
e
'
s
 
d
e
f
a
u
l
t
 
p
r
o
f
i
l
e
)
 
a
p
p
l
i
e
d
 
t
o
 
m
o
s
t
 
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
.
 
|


|
 
*
*
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
*
*
 
|
 
L
i
n
u
x
 
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
 
g
r
a
n
t
e
d
 
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
s
.
 
D
e
f
a
u
l
t
:
 
`
d
r
o
p
:
 
[
"
A
L
L
"
]
`
.
 
|


|
 
*
*
P
S
A
*
*
 
|
 
P
o
d
 
S
e
c
u
r
i
t
y
 
A
d
m
i
s
s
i
o
n
,
 
e
n
f
o
r
c
e
s
 
`
b
a
s
e
l
i
n
e
`
 
o
r
 
`
r
e
s
t
r
i
c
t
e
d
`
 
p
r
o
f
i
l
e
.
 
|


|
 
*
*
G
P
G
/
C
o
s
i
g
n
*
*
 
|
 
C
h
a
r
t
 
p
r
o
v
e
n
a
n
c
e
 
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
.
 
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
f
i
l
e
s
/
g
p
g
-
p
u
b
k
e
y
s
/
`
 
(
G
P
G
)
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
f
i
l
e
s
/
c
o
s
i
g
n
-
p
u
b
k
e
y
s
/
`
 
(
C
o
s
i
g
n
)
.
 
|


|
 
*
*
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
*
*
 
|
 
E
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
 
f
o
r
 
d
e
r
i
v
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
 
U
s
e
d
 
i
n
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
`
 
c
a
l
l
s
 
f
o
r
 
s
e
c
r
e
t
s
.
 
|




#
#
#
 
M
e
t
r
i
c
s
 
&
 
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




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
*
*
 
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
 
O
p
e
r
a
t
o
r
 
C
R
,
 
s
c
r
a
p
e
s
 
`
/
m
e
t
r
i
c
s
`
 
e
n
d
p
o
i
n
t
 
f
r
o
m
 
p
o
d
s
.
 
|


|
 
*
*
G
r
a
f
a
n
a
 
D
a
s
h
b
o
a
r
d
*
*
 
|
 
C
u
s
t
o
m
 
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
s
 
i
n
 
`
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
/
`
 
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
 
|


|
 
*
*
S
L
O
*
*
 
|
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
O
b
j
e
c
t
i
v
e
 
(
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
 
t
a
r
g
e
t
,
 
e
.
g
.
,
 
9
9
.
9
%
 
a
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
)
.
 
|


|
 
*
*
S
L
I
*
*
 
|
 
S
e
r
v
i
c
e
 
L
e
v
e
l
 
I
n
d
i
c
a
t
o
r
 
(
m
e
t
r
i
c
 
m
e
a
s
u
r
i
n
g
 
S
L
O
 
c
o
m
p
l
i
a
n
c
e
)
.
 
|


|
 
*
*
A
l
e
r
t
m
a
n
a
g
e
r
*
*
 
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
 
a
l
e
r
t
 
r
o
u
t
i
n
g
 
c
o
m
p
o
n
e
n
t
,
 
r
o
u
t
e
s
 
a
l
e
r
t
s
 
t
o
 
e
m
a
i
l
/
P
a
g
e
r
D
u
t
y
/
T
e
a
m
s
.
 
|


|
 
*
*
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
*
*
 
|
 
H
e
a
l
t
h
/
L
i
v
e
n
e
s
s
/
S
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
 
t
i
m
i
n
g
 
(
p
e
r
i
o
d
 
=
 
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
,
 
d
e
l
a
y
 
=
 
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
.
 
|




#
#
#
 
O
p
s
 
&
 
B
a
c
k
u
p




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
k
8
u
p
 
S
c
h
e
d
u
l
e
*
*
 
|
 
k
8
u
p
 
C
R
D
 
d
e
f
i
n
i
n
g
 
b
a
c
k
u
p
/
c
h
e
c
k
/
p
r
u
n
e
/
r
e
s
t
o
r
e
 
s
c
h
e
d
u
l
e
s
.
 
|


|
 
*
*
R
e
s
t
o
r
e
 
C
R
*
*
 
|
 
k
8
u
p
 
C
R
 
t
r
i
g
g
e
r
i
n
g
 
b
a
c
k
u
p
 
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
 
f
r
o
m
 
S
3
.
 
|


|
 
*
*
J
a
r
v
i
s
*
*
 
|
 
N
o
t
 
a
p
p
l
i
c
a
b
l
e
 
(
n
o
 
J
a
r
v
i
s
 
i
n
 
t
h
i
s
 
p
l
a
t
f
o
r
m
 
—
 
c
o
n
f
u
s
e
d
 
w
i
t
h
 
D
r
a
w
.
i
o
/
j
g
r
a
p
h
)
.
 
|


|
 
*
*
B
a
c
k
u
p
 
l
i
v
e
*
*
 
|
 
M
a
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
 
`
b
a
c
k
u
p
-
l
i
v
e
`
 
b
a
c
k
s
 
u
p
 
R
W
X
 
P
V
C
s
 
(
C
e
p
h
F
S
)
.
 
|


|
 
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
 
|
 
R
e
a
d
W
r
i
t
e
O
n
c
e
 
v
o
l
u
m
e
,
 
b
o
u
n
d
 
t
o
 
s
i
n
g
l
e
 
n
o
d
e
.
 
E
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
 
m
a
i
n
 
b
a
c
k
u
p
.
 
|


|
 
*
*
R
W
X
 
P
V
C
*
*
 
|
 
R
e
a
d
W
r
i
t
e
M
a
n
y
 
v
o
l
u
m
e
,
 
a
c
c
e
s
s
i
b
l
e
 
f
r
o
m
 
m
u
l
t
i
p
l
e
 
n
o
d
e
s
.
 
I
n
c
l
u
d
e
d
 
i
n
 
m
a
i
n
 
b
a
c
k
u
p
.
 
|




#
#
 
S
p
e
c
 
F
o
r
m
a
t
 
T
e
r
m
i
n
o
l
o
g
y




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
S
H
A
L
L
 
/
 
M
U
S
T
*
*
 
|
 
R
F
C
 
2
1
1
9
 
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
 
(
m
a
n
d
a
t
o
r
y
)
.
 
|


|
 
*
*
S
H
O
U
L
D
*
*
 
|
 
R
F
C
 
2
1
1
9
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
 
(
b
e
s
t
 
p
r
a
c
t
i
c
e
)
.
 
|


|
 
*
*
M
A
Y
*
*
 
|
 
R
F
C
 
2
1
1
9
 
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
.
 
|


|
 
*
*
S
c
e
n
a
r
i
o
*
*
 
|
 
T
e
s
t
a
b
l
e
 
u
s
e
r
 
s
t
o
r
y
:
 
G
i
v
e
n
 
(
c
o
n
t
e
x
t
)
,
 
W
h
e
n
 
(
a
c
t
i
o
n
)
,
 
T
h
e
n
 
(
o
u
t
c
o
m
e
)
.
 
|


|
 
*
*
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
 
|
 
R
e
q
u
i
r
e
d
 
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
 
c
o
m
p
o
n
e
n
t
s
.
 
|


|
 
*
*
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
 
|
 
S
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
l
a
t
i
o
n
s
h
i
p
s
.
 
|


|
 
*
*
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
*
*
 
|
 
R
e
p
l
i
c
a
,
 
s
t
o
r
a
g
e
,
 
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
 
d
e
t
a
i
l
s
 
t
a
b
l
e
.
 
|


|
 
*
*
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
*
*
 
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
,
 
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
,
 
s
e
c
c
o
m
p
 
p
r
o
f
i
l
e
 
t
a
b
l
e
.
 
|




#
#
#
 
H
R
Z
-
S
p
e
c
i
f
i
c
 
T
e
r
m
i
n
o
l
o
g
y




|
 
T
e
r
m
 
|
 
D
e
f
i
n
i
t
i
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
*
*
 
|
 
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
 
K
3
s
 
c
l
u
s
t
e
r
 
a
t
 
U
n
i
 
M
a
r
b
u
r
g
 
(
9
 
n
o
d
e
s
:
 
3
 
c
o
n
t
r
o
l
-
p
l
a
n
e
 
v
h
r
z
2
3
3
1
-
2
3
3
3
,
 
6
 
w
o
r
k
e
r
s
 
v
h
r
z
2
3
3
4
-
2
3
3
9
)
.
 
|


|
 
*
*
C
e
p
h
 
C
S
I
*
*
 
|
 
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
t
o
r
a
g
e
 
d
r
i
v
e
r
s
:
 
`
r
b
d
.
c
s
i
.
c
e
p
h
.
c
o
m
`
 
(
R
B
D
 
S
S
D
)
,
 
`
c
e
p
h
f
s
.
c
s
i
.
c
e
p
h
.
c
o
m
`
 
(
C
e
p
h
F
S
)
.
 
|


|
 
*
*
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
*
*
 
|
 
C
R
I
 
r
u
n
t
i
m
e
 
v
e
r
s
i
o
n
 
2
.
0
.
4
-
k
3
s
2
.
 
|


|
 
*
*
K
3
s
*
*
 
|
 
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
 
d
i
s
t
r
i
b
u
t
i
o
n
 
v
e
r
s
i
o
n
 
1
.
3
2
.
3
.
 
|


|
 
*
*
A
r
g
o
C
D
*
*
 
|
 
G
i
t
O
p
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
 
s
y
n
c
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
`
 
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
n
i
f
e
s
t
s
 
f
r
o
m
 
G
i
t
L
a
b
.
 
|




#
#
 
A
c
r
o
n
y
m
 
G
l
o
s
s
a
r
y




|
 
A
c
r
o
n
y
m
 
|
 
F
u
l
l
 
F
o
r
m
 
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
|


|
 
*
*
A
A
A
*
*
 
|
 
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
,
 
A
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
,
 
A
c
c
o
u
n
t
i
n
g
 
|


|
 
*
*
A
G
P
L
*
*
 
|
 
A
f
f
e
r
o
 
G
e
n
e
r
a
l
 
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
 
|


|
 
*
*
B
L
O
B
*
*
 
|
 
B
i
n
a
r
y
 
L
a
r
g
e
 
O
b
j
e
c
t
 
|


|
 
*
*
C
e
p
h
F
S
*
*
 
|
 
C
e
p
h
 
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
 
|


|
 
*
*
C
I
/
C
D
*
*
 
|
 
C
o
n
t
i
n
u
o
u
s
 
I
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
 
/
 
C
o
n
t
i
n
u
o
u
s
 
D
e
p
l
o
y
m
e
n
t
 
|


|
 
*
*
C
I
D
R
*
*
 
|
 
C
l
a
s
s
l
e
s
s
 
I
n
t
e
r
-
D
o
m
a
i
n
 
R
o
u
t
i
n
g
 
|


|
 
*
*
C
R
D
*
*
 
|
 
C
u
s
t
o
m
 
R
e
s
o
u
r
c
e
 
D
e
f
i
n
i
t
i
o
n
 
(
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
)
 
|


|
 
*
*
D
B
*
*
 
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


|
 
*
*
D
F
N
-
A
A
I
*
*
 
|
 
D
e
u
t
s
c
h
e
s
 
F
o
r
s
c
h
u
n
g
s
n
e
t
z
 
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
 
A
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
 
(
G
e
r
m
a
n
 
r
e
s
e
a
r
c
h
 
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
)
 
|


|
 
*
*
e
d
u
G
A
I
N
*
*
 
|
 
i
n
t
e
r
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
 
f
o
r
 
r
e
s
e
a
r
c
h
/
e
d
u
c
a
t
i
o
n
 
(
E
u
Z
 
e
S
c
i
e
n
c
e
)
 
|


|
 
*
*
H
A
*
*
 
|
 
H
i
g
h
 
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
 
|


|
 
*
*
H
A
P
r
o
x
y
*
*
 
|
 
H
i
g
h
 
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
 
P
r
o
x
y
 
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
e
r
)
 
|


|
 
*
*
H
I
S
i
n
O
n
e
*
*
 
|
 
H
I
S
 
H
i
g
h
e
r
 
E
d
u
c
a
t
i
o
n
 
I
n
f
o
r
m
a
t
i
o
n
 
S
y
s
t
e
m
 
(
C
M
S
 
f
o
r
 
u
n
i
v
e
r
s
i
t
i
e
s
)
 
|


|
 
*
*
H
P
C
*
*
 
|
 
H
i
g
h
 
P
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
 
C
o
m
p
u
t
i
n
g
 
|


|
 
*
*
H
R
Z
*
*
 
|
 
H
o
c
h
s
c
h
u
l
r
e
c
h
e
n
z
e
n
t
r
u
m
 
U
n
i
 
M
a
r
b
u
r
g
 
(
U
n
i
v
e
r
s
i
t
y
 
M
a
r
b
u
r
g
 
c
o
m
p
u
t
i
n
g
 
c
e
n
t
e
r
)
 
|


|
 
*
*
I
A
M
*
*
 
|
 
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
 
A
c
c
e
s
s
 
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
 
(
N
u
b
u
s
)
 
|


|
 
*
*
I
C
A
P
*
*
 
|
 
I
n
t
e
r
n
e
t
 
C
o
n
t
e
n
t
 
A
d
a
p
t
a
t
i
o
n
 
P
r
o
t
o
c
o
l
 
(
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
 
|


|
 
*
*
I
M
A
P
*
*
 
|
 
I
n
t
e
r
n
e
t
 
M
e
s
s
a
g
e
 
A
c
c
e
s
s
 
P
r
o
t
o
c
o
l
 
(
e
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
)
 
|


|
 
*
*
I
P
*
*
 
|
 
I
n
t
e
r
n
e
t
 
P
r
o
t
o
c
o
l
 
(
I
P
v
4
/
I
P
v
6
)
 
|


|
 
*
*
J
W
T
*
*
 
|
 
J
S
O
N
 
W
e
b
 
T
o
k
e
n
 
(
O
A
u
t
h
2
 
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
m
a
t
)
 
|


|
 
*
*
L
D
A
P
*
*
 
|
 
L
i
g
h
t
w
e
i
g
h
t
 
D
i
r
e
c
t
o
r
y
 
A
c
c
e
s
s
 
P
r
o
t
o
c
o
l
 
(
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
e
r
v
i
c
e
)
 
|


|
 
*
*
L
f
D
*
*
 
|
 
L
e
a
r
n
i
n
g
 
f
o
r
 
D
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
 
(
G
e
r
m
a
n
 
a
c
r
o
n
y
m
 
f
o
r
 
L
M
S
)
 
|


|
 
*
*
L
M
S
*
*
 
|
 
L
e
a
r
n
i
n
g
 
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
 
S
y
s
t
e
m
 
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
 
e
t
c
.
)
 
|


|
 
*
*
L
T
B
*
*
 
|
 
L
D
A
P
 
T
o
o
l
 
B
o
x
 
(
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
 
u
s
e
s
 
L
T
B
)
 
|


|
 
*
*
M
A
*
*
 
|
 
M
i
c
h
a
e
l
 
A
l
b
e
r
t
y
 
(
o
p
e
n
D
e
s
k
 
c
o
-
f
o
u
n
d
e
r
,
 
s
e
e
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
c
r
e
d
i
t
s
)
 
|


|
 
*
*
M
I
T
*
*
 
|
 
M
a
s
s
a
c
h
u
s
e
t
t
s
 
I
n
s
t
i
t
u
t
e
 
o
f
 
T
e
c
h
n
o
l
o
g
y
 
(
l
i
c
e
n
s
e
)
 
|


|
 
*
*
M
P
L
*
*
 
|
 
M
o
z
i
l
l
a
 
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


|
 
*
*
O
I
D
C
*
*
 
|
 
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
 
(
O
A
u
t
h
2
 
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
 
p
r
o
t
o
c
o
l
)
 
|


|
 
*
*
O
X
*
*
 
|
 
O
p
e
n
-
X
c
h
a
n
g
e
 
(
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
s
 
O
X
)
 
|


|
 
*
*
P
B
X
*
*
 
|
 
P
r
i
v
a
t
e
 
B
r
a
n
c
h
 
E
x
c
h
a
n
g
e
 
(
p
h
o
n
e
 
s
y
s
t
e
m
 
-
 
S
S
H
 
V
O
I
P
 
u
t
i
l
i
z
a
 
J
i
g
a
s
i
 
p
a
r
a
 
l
i
g
a
ç
õ
e
s
 
S
I
P
)
.
 
|


|
 
*
*
S
S
L
/
T
L
S
*
*
 
|
 
S
e
c
u
r
e
 
S
o
c
k
e
t
s
 
L
a
y
e
r
 
/
 
T
r
a
n
s
p
o
r
t
 
L
a
y
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
 
(
e
n
c
r
y
p
t
e
d
 
H
T
T
P
)
 
|


|
 
*
*
S
M
T
P
*
*
 
|
 
S
i
m
p
l
e
 
M
a
i
l
 
T
r
a
n
s
f
e
r
 
P
r
o
t
o
c
o
l
 
(
e
m
a
i
l
 
s
e
r
v
e
r
)
 
|


|
 
*
*
S
P
*
*
 
|
 
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
 
(
S
A
M
L
 
S
P
 
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
s
)
 
|


|
 
*
*
S
S
H
*
*
 
|
 
S
e
c
u
r
e
 
S
h
e
l
l
 
(
e
n
c
r
y
p
t
e
d
 
r
e
m
o
t
e
 
s
h
e
l
l
)
 
|


|
 
*
*
S
3
*
*
 
|
 
S
i
m
p
l
e
 
S
t
o
r
a
g
e
 
S
e
r
v
i
c
e
 
(
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
 
p
r
o
t
o
c
o
l
)
 
|


|
 
*
*
T
O
S
C
A
*
*
 
|
 
T
o
p
o
l
o
g
y
 
a
n
d
 
O
r
c
h
e
s
t
r
a
t
i
o
n
 
S
p
e
c
i
f
i
c
a
t
i
o
n
 
o
f
 
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
 
(
n
o
t
 
u
s
e
d
 
i
n
 
t
h
i
s
 
p
l
a
t
f
o
r
m
)
 
|


|
 
*
*
T
O
U
*
*
 
|
 
T
e
r
m
s
 
o
f
 
U
s
e
 
(
n
o
t
 
u
s
e
d
 
i
n
 
t
h
i
s
 
p
l
a
t
f
o
r
m
)
 
|




#
#
 
S
e
e
 
A
l
s
o




-
 
[
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
]
(
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
)
 
—
 
H
T
T
P
 
e
n
d
p
o
i
n
t
 
c
o
n
t
r
a
c
t
s
,
 
t
o
k
e
n
 
f
o
r
m
a
t
s


-
 
[
D
e
p
l
o
y
m
e
n
t
]
(
.
/
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
/
)
 
—
 
H
e
l
m
f
i
l
e
,
 
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
 
w
a
v
e
s


-
 
[
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
]
(
.
/
n
e
t
w
o
r
k
i
n
g
/
)
 
—
 
I
n
g
r
e
s
s
,
 
D
N
S
,
 
p
r
o
x
y


-
 
[
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
]
(
.
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
/
)
 
—
 
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
,
 
G
r
a
f
a
n
a
,
 
a
l
e
r
t
i
n
g


-
 
[
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
]
(
.
/
d
i
s
a
s
t
e
r
-
r
e
c
o
v
e
r
y
/
)
 
—
 
B
a
c
k
u
p
 
r
e
s
t
o
r
e
,
 
f
a
i
l
o
v
e
r

