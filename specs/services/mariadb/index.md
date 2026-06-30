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
 
M
a
r
i
a
D
B




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
h
a
r
e
d
 
r
e
l
a
t
i
o
n
a
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
e
r
v
i
c
e
 
w
i
t
h
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r
 
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
.
 
P
r
o
v
i
d
e
s
 
M
a
r
i
a
D
B
 
d
a
t
a
b
a
s
e
 
i
n
s
t
a
n
c
e
s
 
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
 
A
p
p
S
u
i
t
e
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
 
Z
a
m
m
a
d
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
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
,
 
a
n
d
 
o
t
h
e
r
 
S
A
M
L
/
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
 
s
e
r
v
i
c
e
s
.




M
a
r
i
a
D
B
 
r
u
n
s
 
a
s
 
a
 
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
 
(
o
p
t
i
o
n
a
l
l
y
 
w
i
t
h
 
G
a
l
e
r
a
 
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
)
 
o
n
 
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
 
s
t
o
r
a
g
e
,
 
b
a
c
k
e
d
 
u
p
 
v
i
a
 
n
a
t
i
v
e
 
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
 
(
n
o
t
 
k
8
u
p
 
—
 
R
W
O
 
P
V
C
s
 
e
x
c
l
u
d
e
d
)
.




#
#
 
S
c
o
p
e




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
 
M
a
r
i
a
D
B
 
s
e
r
v
e
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
,
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r
 
s
u
p
p
o
r
t
 
(
H
A
)
,
 
d
a
t
a
b
a
s
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
 
p
e
r
 
s
e
r
v
i
c
e
,
 
u
s
e
r
/
r
o
l
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
a
t
i
v
e
 
b
a
c
k
u
p
 
v
i
a
 
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
,
 
P
V
C
 
s
t
o
r
a
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
 
v
i
a
 
`
m
a
r
i
a
d
b
_
e
x
p
o
r
t
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
s
e
e
 
`
.
.
/
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
/
`
)
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
-
s
p
e
c
i
f
i
c
 
s
c
h
e
m
a
 
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
 
M
y
S
Q
L
 
R
o
u
t
e
r
 
/
 
P
r
o
x
y
S
Q
L




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
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
 
s
e
r
v
e
r
,
 
s
e
e
 
`
.
.
/
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
/
`
)


-
 
C
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
i
n
g
 
p
r
o
x
i
e
s
 
(
M
y
S
Q
L
 
R
o
u
t
e
r
,
 
P
r
o
x
y
S
Q
L
)


-
 
N
D
B
 
c
l
u
s
t
e
r
 
o
r
 
o
t
h
e
r
 
s
t
o
r
a
g
e
 
e
n
g
i
n
e
s
 
(
I
n
n
o
D
B
 
o
n
l
y
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
a
r
e
d
 
M
a
r
i
a
D
B
 
i
n
s
t
a
n
c
e
 
w
i
t
h
 
G
a
l
e
r
a
 
s
u
p
p
o
r
t




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
 
d
e
p
l
o
y
 
M
a
r
i
a
D
B
 
a
s
 
a
 
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
 
w
i
t
h
 
o
p
t
i
o
n
a
l
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r


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
 
f
o
r
 
h
i
g
h
 
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
u
l
t
i
-
d
a
t
a
b
a
s
e
 
h
o
s
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
 
M
a
r
i
a
D
B
 
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
 
w
i
t
h
 
`
r
e
p
l
i
c
a
C
o
u
n
t
:
 
1
`
 
(
o
r
 
`
2
`
 
f
o
r
 
G
a
l
e
r
a
)


-
 
T
H
E
N
 
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
s
 
a
r
e
 
c
r
e
a
t
e
d
 
f
o
r
 
e
a
c
h
 
s
e
r
v
i
c
e
:


 
 
-
 
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
,
 
u
s
e
r
 
c
o
n
f
i
g
)


 
 
-
 
`
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
 
(
O
p
e
n
C
l
o
u
d
 
C
S
3
 
m
e
t
a
d
a
t
a
)


 
 
-
 
`
o
x
`
 
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
 
g
r
o
u
p
w
a
r
e
)


 
 
-
 
`
i
l
i
a
s
`
 
(
I
L
I
A
S
 
L
M
S
 
d
a
t
a
,
 
c
o
u
r
s
e
 
c
o
n
t
e
n
t
)


 
 
-
 
`
m
o
o
d
l
e
`
 
(
M
o
o
d
l
e
 
L
M
S
 
d
a
t
a
)


 
 
-
 
`
b
i
g
b
l
u
e
b
u
t
t
o
n
`
 
(
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
 
r
e
c
o
r
d
i
n
g
s
 
m
e
t
a
d
a
t
a
)


 
 
-
 
`
b
o
o
k
s
t
a
c
k
`
 
(
B
o
o
k
S
t
a
c
k
 
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
)


 
 
-
 
`
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
 
(
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
 
p
r
o
j
e
c
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
)


 
 
-
 
`
z
a
m
m
a
d
`
 
(
Z
a
m
m
a
d
 
t
i
c
k
e
t
 
s
y
s
t
e
m
)


 
 
-
 
`
l
i
m
e
s
u
r
v
e
y
`
 
(
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
 
s
u
r
v
e
y
 
d
a
t
a
)


 
 
-
 
`
d
o
v
e
c
o
t
`
 
(
D
o
v
e
c
o
t
 
m
a
i
l
 
m
e
t
a
d
a
t
a
,
 
P
o
s
t
f
i
x
 
l
o
o
k
u
p
 
t
a
b
l
e
s
)


-
 
A
N
D
 
e
a
c
h
 
d
a
t
a
b
a
s
e
 
h
a
s
 
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
 
u
s
e
r
 
w
i
t
h
 
l
e
a
s
t
-
p
r
i
v
i
l
e
g
e
 
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
 
S
t
o
r
a
g
e
 
o
n
 
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




M
a
r
i
a
D
B
 
S
H
A
L
L
 
u
s
e
 
a
 
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
 
P
V
C
 
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
 
f
r
o
m
 
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
 
f
o
r
 
o
p
t
i
m
a
l
 
d
a
t
a
b
a
s
e
 
I
/
O
 
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
V
C
 
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
 
r
e
q
u
e
s
t
i
n
g
 
a
 
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
 
v
o
l
u
m
e


-
 
W
H
E
N
 
t
h
e
 
P
V
C
 
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
 
`
s
t
o
r
a
g
e
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


-
 
T
H
E
N
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
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
 
a
s
 
a
 
C
e
p
h
 
R
B
D
 
i
m
a
g
e
 
o
n
 
S
S
D
 
s
t
o
r
a
g
e


-
 
A
N
D
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
1
0
G
i
 
c
a
p
a
c
i
t
y
 
(
p
e
r
-
n
o
d
e
)


-
 
A
N
D
 
t
h
e
 
P
V
C
 
h
a
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
 
(
R
W
O
 
e
x
c
l
u
s
i
o
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
 
N
a
t
i
v
e
 
b
a
c
k
u
p
 
v
i
a
 
m
y
s
q
l
d
u
m
p




M
a
r
i
a
D
B
 
P
V
C
s
 
S
H
A
L
L
 
b
e
 
b
a
c
k
e
d
 
u
p
 
v
i
a
 
n
a
t
i
v
e
 
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
 
w
i
t
h
i
n
 
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
 
p
o
d
 
(
n
o
t
 
v
i
a
 
k
8
u
p
 
R
W
O
 
m
o
u
n
t
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
 
D
a
i
l
y
 
m
y
s
q
l
d
u
m
p
 
t
o
 
S
3


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
 
P
o
d
 
w
i
t
h
 
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
g
a
l
e
r
a
-
d
a
t
a
`


-
 
W
H
E
N
 
t
h
e
 
b
a
c
k
u
p
 
j
o
b
 
r
u
n
s
 
o
n
 
t
h
e
 
s
a
m
e
 
n
o
d
e
 
a
s
 
M
a
r
i
a
D
B
 
p
r
i
m
a
r
y


-
 
T
H
E
N
 
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
 
-
-
a
l
l
-
d
a
t
a
b
a
s
e
s
`
 
i
s
 
e
x
e
c
u
t
e
d
 
i
n
s
i
d
e
 
t
h
e
 
p
o
d


-
 
A
N
D
 
t
h
e
 
d
u
m
p
 
i
s
 
s
t
r
e
a
m
e
d
 
t
o
 
M
i
n
I
O
 
S
3
 
b
u
c
k
e
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
b
a
c
k
u
p
s
`
 
v
i
a
 
`
m
c
 
c
p
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
e
r
-
n
o
d
e
 
b
a
c
k
u
p
 
(
m
u
l
t
i
-
n
o
d
e
 
G
a
l
e
r
a
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
 
G
a
l
e
r
a
 
w
i
t
h
 
2
 
n
o
d
e
s
 
(
p
r
i
m
a
r
y
 
+
 
s
e
c
o
n
d
a
r
y
)


-
 
W
H
E
N
 
b
a
c
k
u
p
 
j
o
b
s
 
r
u
n
 
o
n
 
e
a
c
h
 
n
o
d
e
 
i
n
d
e
p
e
n
d
e
n
t
l
y


-
 
T
H
E
N
 
e
a
c
h
 
n
o
d
e
'
s
 
b
a
c
k
u
p
 
i
s
 
t
a
g
g
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
o
d
e
 
n
a
m
e


-
 
A
N
D
 
b
a
c
k
u
p
s
 
d
o
 
n
o
t
 
i
n
t
e
r
f
e
r
e
 
w
i
t
h
 
G
a
l
e
r
a
 
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
 
B
a
c
k
u
p
 
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


-
 
G
I
V
E
N
 
a
 
f
r
e
s
h
 
M
a
r
i
a
D
B
 
P
V
C


-
 
W
H
E
N
 
r
e
s
t
o
r
e
d
 
f
r
o
m
 
t
h
e
 
l
a
t
e
s
t
 
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


-
 
T
H
E
N
 
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
 
a
r
e
 
p
r
e
s
e
n
t
 
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
,
 
`
i
l
i
a
s
`
,
 
`
m
o
o
d
l
e
`
,
 
e
t
c
.
)


-
 
A
N
D
 
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
 
u
s
e
r
s
 
h
a
v
e
 
c
o
r
r
e
c
t
 
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
e
l
m
 
p
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




H
e
l
m
-
d
e
p
l
o
y
e
d
 
M
a
r
i
a
D
B
 
p
a
s
s
w
o
r
d
s
 
M
U
S
T
 
b
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
 
w
i
t
h
 
t
h
e
 
r
u
n
n
i
n
g
 
M
a
r
i
a
D
B


i
n
s
t
a
n
c
e
.
 
H
e
l
m
 
g
e
n
e
r
a
t
e
s
 
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
s
 
o
n
 
e
a
c
h
 
u
p
g
r
a
d
e
,
 
b
u
t
 
M
a
r
i
a
D
B
 
r
e
t
a
i
n
s


t
h
e
 
o
r
i
g
i
n
a
l
 
p
a
s
s
w
o
r
d
 
s
e
t
 
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
a
s
s
w
o
r
d
 
m
i
s
m
a
t
c
h
 
a
f
t
e
r
 
u
p
g
r
a
d
e


-
 
G
I
V
E
N
 
a
 
M
a
r
i
a
D
B
 
i
n
s
t
a
n
c
e
 
d
e
p
l
o
y
e
d
 
v
i
a
 
H
e
l
m
 
w
i
t
h
 
a
 
g
e
n
e
r
a
t
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
 
W
H
E
N
 
t
h
e
 
H
e
l
m
 
r
e
l
e
a
s
e
 
i
s
 
u
p
g
r
a
d
e
d
 
w
i
t
h
 
a
 
n
e
w
 
g
e
n
e
r
a
t
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
 
T
H
E
N
 
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
 
r
e
t
a
i
n
s
 
t
h
e
 
o
r
i
g
i
n
a
l
 
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
 
s
e
r
v
i
c
e
 
p
o
d
s
 
f
a
i
l
 
t
o
 
c
o
n
n
e
c
t
 
w
i
t
h
 
`
S
Q
L
S
T
A
T
E
[
H
Y
0
0
0
]
 
[
2
0
0
2
]
 
C
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
e
f
u
s
e
d
`


-
 
A
N
D
 
t
h
e
 
o
p
e
r
a
t
o
r
 
M
U
S
T
 
r
u
n
 
`
A
L
T
E
R
 
U
S
E
R
`
 
t
o
 
s
y
n
c
 
t
h
e
 
H
e
l
m
-
m
a
n
a
g
e
d
 
v
a
l
u
e




*
*
P
r
e
v
e
n
t
i
o
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
 
p
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
 
B
E
F
O
R
E
 
`
h
e
l
m
f
i
l
e
 
a
p
p
l
y
`
.
 
S
e
e


[
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
 
r
u
n
b
o
o
k
]
(
.
.
/
.
.
/
p
l
a
t
f
o
r
m
/
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
/
)
.




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
o
n
i
t
o
r
i
n
g
 
v
i
a
 
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r




M
a
r
i
a
D
B
 
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
 
m
e
t
r
i
c
s
 
a
t
 
p
o
r
t
 
9
1
0
4
 
v
i
a
 
`
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r
`


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
 
s
c
r
a
p
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
 
`
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r
`
 
r
u
n
n
i
n
g
 
a
l
o
n
g
s
i
d
e
 
M
a
r
i
a
D
B


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
<
p
o
d
>
:
9
1
0
4
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
r
y
 
c
o
u
n
t
s
,
 
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
t
a
t
s
,
 
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
 
s
t
a
t
u
s
,


 
 
a
n
d
 
G
a
l
e
r
a
 
c
l
u
s
t
e
r
 
h
e
a
l
t
h




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
 
M
a
r
i
a
D
B
 
S
e
r
v
e
r
 
|
 
R
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
 
(
I
n
n
o
D
B
)
 
|
 
1
-
2
 
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
,
 
G
a
l
e
r
a
)
 
|
 
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
g
a
l
e
r
a
-
d
a
t
a
`
 
(
1
0
G
i
/
n
o
d
e
,
 
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
)
 
|


|
 
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r
 
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
 
S
i
d
e
c
a
r
 
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
 
M
a
r
i
a
D
B
 
S
e
r
v
e
r
 
|
 
9
9
9
 
(
m
y
s
q
l
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
 
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r
 
|
 
1
0
0
1
 
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
 
I
m
a
g
e
 
|
 
M
a
r
i
a
D
B
 
(
v
e
r
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
d
 
b
y
 
u
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
)
 
|


|
 
P
V
C
 
n
a
m
e
 
|
 
`
m
a
r
i
a
d
b
-
g
a
l
e
r
a
-
d
a
t
a
`
 
|


|
 
S
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
 
|
 
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
 
|


|
 
P
V
C
 
s
i
z
e
 
|
 
1
0
G
i
 
p
e
r
 
n
o
d
e
 
|


|
 
M
e
t
r
i
c
s
 
p
o
r
t
 
|
 
9
1
0
4
 
(
m
a
r
i
a
d
b
_
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
 
D
e
p
l
o
y
 
s
t
a
g
e
 
|
 
`
0
1
0
-
i
n
f
r
a
`
 
|


|
 
R
W
O
 
e
x
c
l
u
s
i
o
n
 
|
 
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
 
|


|
 
G
a
l
e
r
a
 
s
u
p
p
o
r
t
 
|
 
Y
e
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
,
 
`
r
e
p
l
i
c
a
C
o
u
n
t
:
 
2
`
 
f
o
r
 
H
A
)
 
|




#
#
 
D
a
t
a
b
a
s
e
 
C
a
t
a
l
o
g




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
 
S
e
r
v
i
c
e
 
|
 
A
u
t
h
 
M
e
t
h
o
d
 
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
|


|
 
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
 
S
A
M
L
 
2
.
0
 
|
 
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
,
 
a
p
p
 
c
o
n
f
i
g
 
|


|
 
`
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
 
O
I
D
C
 
|
 
C
S
3
 
m
e
t
a
d
a
t
a
,
 
G
r
a
p
h
 
s
e
r
v
i
c
e
 
|


|
 
`
o
x
`
 
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
 
S
A
M
L
 
2
.
0
 
|
 
G
r
o
u
p
w
a
r
e
,
 
m
a
i
l
,
 
c
a
l
e
n
d
a
r
 
|


|
 
`
i
l
i
a
s
`
 
|
 
I
L
I
A
S
 
|
 
S
A
M
L
 
2
.
0
 
|
 
L
M
S
 
d
a
t
a
,
 
S
C
O
R
M
,
 
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
s
 
|


|
 
`
m
o
o
d
l
e
`
 
|
 
M
o
o
d
l
e
 
|
 
S
A
M
L
 
2
.
0
 
|
 
L
M
S
 
d
a
t
a
,
 
c
o
u
r
s
e
s
,
 
q
u
i
z
z
e
s
 
|


|
 
`
b
i
g
b
l
u
e
b
u
t
t
o
n
`
 
|
 
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
 
|
 
S
A
M
L
 
2
.
0
 
|
 
M
e
e
t
i
n
g
 
r
e
c
o
r
d
i
n
g
s
 
m
e
t
a
d
a
t
a
 
|


|
 
`
b
o
o
k
s
t
a
c
k
`
 
|
 
B
o
o
k
S
t
a
c
k
 
|
 
S
A
M
L
 
2
.
0
 
|
 
D
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
 
s
h
e
l
v
e
s
/
p
a
g
e
s
 
|


|
 
`
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
 
|
 
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
 
|
 
S
A
M
L
 
2
.
0
 
|
 
P
r
o
j
e
c
t
s
,
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
|


|
 
`
z
a
m
m
a
d
`
 
|
 
Z
a
m
m
a
d
 
|
 
S
A
M
L
 
2
.
0
 
|
 
T
i
c
k
e
t
s
,
 
c
u
s
t
o
m
e
r
 
d
a
t
a
 
|


|
 
`
l
i
m
e
s
u
r
v
e
y
`
 
|
 
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
 
|
 
L
D
A
P
 
|
 
S
u
r
v
e
y
 
r
e
s
p
o
n
s
e
s
 
|


|
 
`
d
o
v
e
c
o
t
`
 
|
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
 
|
 
L
D
A
P
 
|
 
M
a
i
l
 
m
e
t
a
d
a
t
a
,
 
a
l
i
a
s
 
m
a
p
s
 
|




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




M
a
r
i
a
D
B
 
d
o
e
s
 
n
o
t
 
e
x
p
o
s
e
 
e
x
t
e
r
n
a
l
 
A
P
I
 
c
o
n
t
r
a
c
t
s
.
 
I
t
 
i
s
 
a
 
c
o
n
s
u
m
e
r
 
o
f


p
l
a
t
f
o
r
m
 
c
o
n
t
r
a
c
t
s
 
a
n
d
 
a
n
 
i
n
t
e
r
n
a
l
 
d
a
t
a
 
s
t
o
r
e
.




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
 
c
o
n
s
u
m
e
d
 
i
n
d
i
r
e
c
t
l
y
 
(
s
e
r
v
i
c
e
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
e
 
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
 
b
e
f
o
r
e
 
a
c
c
e
s
s
i
n
g
 
M
a
r
i
a
D
B
)


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
 
c
o
n
s
u
m
e
d
 
b
y
 
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
 
(
L
D
A
P
 
a
u
t
h
 
b
e
f
o
r
e
 
M
a
r
i
a
D
B
 
q
u
e
r
y
)




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




-
 
C
e
p
h
 
C
S
I
 
d
r
i
v
e
r
 
(
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
)


-
 
M
i
n
I
O
 
(
S
3
 
b
a
c
k
u
p
 
t
a
r
g
e
t
 
f
o
r
 
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
 
o
u
t
p
u
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




-
 
[
N
e
x
t
c
l
o
u
d
]
(
.
.
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
)
 
(
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
 
[
O
p
e
n
C
l
o
u
d
]
(
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
/
)
 
(
C
S
3
 
m
e
t
a
d
a
t
a
 
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
 
[
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
]
(
.
.
/
o
x
-
a
p
p
s
u
i
t
e
/
)
 
(
g
r
o
u
p
w
a
r
e
 
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
 
[
I
L
I
A
S
]
(
.
.
/
i
l
i
a
s
/
)
 
(
L
M
S
 
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
 
[
M
o
o
d
l
e
]
(
.
.
/
m
o
o
d
l
e
/
)
 
(
L
M
S
 
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
 
[
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
]
(
.
.
/
b
i
g
b
l
u
e
b
u
t
t
o
n
/
)
 
(
r
e
c
o
r
d
i
n
g
s
 
m
e
t
a
d
a
t
a
)


-
 
[
B
o
o
k
S
t
a
c
k
]
(
.
.
/
b
o
o
k
s
t
a
c
k
/
)
 
(
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
 
[
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
]
(
.
.
/
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
/
)
 
(
p
r
o
j
e
c
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
 
[
Z
a
m
m
a
d
]
(
.
.
/
z
a
m
m
a
d
/
)
 
(
t
i
c
k
e
t
 
s
y
s
t
e
m
 
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
 
[
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
]
(
.
.
/
l
i
m
e
s
u
r
v
e
y
/
)
 
(
s
u
r
v
e
y
 
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
 
[
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
]
(
.
.
/
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
/
)
 
(
m
a
i
l
 
m
e
t
a
d
a
t
a
 
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
 
[
B
a
c
k
u
p
]
(
.
.
/
.
.
/
p
l
a
t
f
o
r
m
/
b
a
c
k
u
p
/
)
 
(
m
y
s
q
l
d
u
m
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
 
f
o
r
 
m
u
l
t
i
p
l
e
 
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
Q
u
e
r
y
 
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
 
|
 
m
a
r
i
a
d
b
_
e
x
p
o
r
t
e
r
 
q
u
e
r
y
 
d
u
r
a
t
i
o
n
 
|


|
 
*
*
G
a
l
e
r
a
 
S
y
n
c
*
*
 
|
 
<
1
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
 
l
a
g
 
|
 
G
a
l
e
r
a
 
w
s
r
e
p
 
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
 
M
a
r
i
a
D
B
 
d
o
w
n
 
(
`
m
y
s
q
l
_
u
p
 
=
=
 
0
`
)
 
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
 
C
r
i
t
i
c
a
l
 
a
l
e
r
t


-
 
G
a
l
e
r
a
 
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
 
d
e
s
y
n
c
 
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
 
C
o
n
n
e
c
t
i
o
n
 
c
o
u
n
t
 
>
8
0
%
 
m
a
x
 
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
 
m
a
x
 
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


-
 
1
0
G
i
 
s
t
o
r
a
g
e
 
p
e
r
 
n
o
d
e
 
(
e
x
p
a
n
d
a
b
l
e
 
v
i
a
 
P
V
C
 
r
e
s
i
z
e
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
 
2
4
h
 
v
i
a
 
d
a
i
l
y
 
m
y
s
q
l
d
u
m
p
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
 
D
a
i
l
y
 
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
 
-
-
a
l
l
-
d
a
t
a
b
a
s
e
s
`
 
t
o
 
S
3
 
b
u
c
k
e
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
b
a
c
k
u
p
s
`


-
 
B
a
c
k
u
p
 
j
o
b
 
r
u
n
s
 
o
n
 
s
a
m
e
 
n
o
d
e
 
a
s
 
M
a
r
i
a
D
B
 
p
r
i
m
a
r
y
 
(
R
W
O
 
c
o
n
s
t
r
a
i
n
t
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
 
R
e
s
t
o
r
e
 
P
V
C
 
f
r
o
m
 
l
a
t
e
s
t
 
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


2
.
 
R
e
s
t
a
r
t
 
M
a
r
i
a
D
B
 
p
o
d
(
s
)


3
.
 
I
f
 
G
a
l
e
r
a
:
 
v
e
r
i
f
y
 
c
l
u
s
t
e
r
 
s
y
n
c


4
.
 
V
e
r
i
f
y
 
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
 
p
r
e
s
e
n
t
 
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
s
 
m
a
t
c
h
 
H
e
l
m
 
v
a
l
u
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
P
V
C
 
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
 
D
e
l
e
t
e
 
P
V
C
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
,
 
r
e
c
r
e
a
t
e
 
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
 
p
o
d


-
 
*
*
G
a
l
e
r
a
 
s
p
l
i
t
-
b
r
a
i
n
*
*
:
 
F
o
r
c
e
 
q
u
o
r
u
m
 
o
n
 
s
u
r
v
i
v
i
n
g
 
n
o
d
e
,
 
r
e
-
b
o
o
t
s
t
r
a
p
 
c
l
u
s
t
e
r


-
 
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
 
d
e
s
y
n
c
*
*
:
 
R
u
n
 
`
A
L
T
E
R
 
U
S
E
R
`
 
t
o
 
s
y
n
c
 
w
i
t
h
 
H
e
l
m
 
v
a
l
u
e
s




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
P
a
s
s
w
o
r
d
 
d
e
s
y
n
c
*
*
:
 
H
e
l
m
 
g
e
n
e
r
a
t
e
s
 
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
s
 
o
n
 
u
p
g
r
a
d
e
.
 
M
a
r
i
a
D
B
 
r
e
t
a
i
n
s
 
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
.
 
S
e
e
 
[
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
 
r
u
n
b
o
o
k
]
(
.
.
/
.
.
/
p
l
a
t
f
o
r
m
/
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
/
)
.


-
 
*
*
T
r
a
n
s
i
e
n
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
 
f
a
i
l
u
r
e
s
*
*
:
 
N
e
w
l
y
 
c
r
e
a
t
e
d
 
p
o
d
s
 
M
A
Y
 
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
 
`
C
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
e
f
u
s
e
d
`
 
o
n
 
f
i
r
s
t
 
a
t
t
e
m
p
t
.
 
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
 
M
U
S
T
 
r
e
t
r
y
 
w
i
t
h
 
b
a
c
k
o
f
f
 
(
5
 
a
t
t
e
m
p
t
s
,
 
1
0
s
 
s
l
e
e
p
)
.


-
 
*
*
S
E
T
U
I
D
/
S
E
T
G
I
D
*
*
:
 
M
a
r
i
a
D
B
 
i
n
i
t
 
s
c
r
i
p
t
s
 
r
e
q
u
i
r
e
 
S
E
T
U
I
D
/
S
E
T
G
I
D
 
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
 
T
h
i
s
 
i
s
 
a
n
 
a
c
c
e
p
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
'
s
 
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
 
d
r
o
p
 
p
o
l
i
c
y
.


-
 
*
*
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
*
*
:
 
B
B
B
 
r
e
q
u
i
r
e
s
 
i
t
s
 
o
w
n
 
M
a
r
i
a
D
B
 
i
n
s
t
a
n
c
e
 
o
r
 
a
 
s
e
p
a
r
a
t
e
 
d
a
t
a
b
a
s
e
.
 
C
r
o
s
s
-
r
e
f
e
r
e
n
c
e
 
w
i
t
h
 
B
B
B
 
c
h
a
r
t
 
v
a
l
u
e
s
.

