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
 
f
o
r
 
R
W
O
 
a
n
d
 
R
W
X
 
P
V
C
s




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
 
a
 
c
o
m
p
r
e
h
e
n
s
i
v
e
 
b
a
c
k
u
p
 
s
t
r
a
t
e
g
y
 
f
o
r
 
a
l
l
 
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
s
 
i
n
 
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
 
h
a
n
d
l
i
n
g
 
b
o
t
h
 
R
W
X
 
(
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
)
 
P
V
C
s
 
v
i
a
 
k
8
u
p
 
a
n
d


R
W
O
 
(
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
)
 
P
V
C
s
 
v
i
a
 
p
e
r
-
n
o
d
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
 
a
n
d
 
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
 
B
a
c
k
u
p
 
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
 
p
o
l
i
c
y
 
(
r
e
s
t
i
c
 
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
 
O
f
f
s
i
t
e
 
b
a
c
k
u
p
 
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
 
(
s
i
n
g
l
e
 
S
3
 
t
a
r
g
e
t
 
o
n
l
y
)


-
 
B
a
c
k
u
p
 
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
 
p
r
o
c
e
d
u
r
e
s
 
(
s
e
e
 
d
i
s
a
s
t
e
r
 
r
e
c
o
v
e
r
y
 
s
p
e
c
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
 
R
W
X
 
P
V
C
 
b
a
c
k
u
p
 
v
i
a
 
k
8
u
p
 
m
a
i
n
 
s
c
h
e
d
u
l
e




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
 
b
a
c
k
 
u
p
 
a
l
l
 
R
W
X
 
(
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
)
 
P
V
C
s
 
d
a
i
l
y
 
v
i
a
 
k
8
u
p
'
s


S
c
h
e
d
u
l
e
 
C
R
D
 
a
n
d
 
r
e
s
t
i
c
 
t
o
 
t
h
e
 
t
a
r
g
e
t
 
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
c
h
e
d
u
l
e
d
 
b
a
c
k
u
p
 
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
 
t
h
e
 
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
s
c
h
e
d
u
l
e
:
 
"
4
2
 
0
 
*
 
*
 
*
"
`
 
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
c
h
e
d
u
l
e
 
t
r
i
g
g
e
r
s


-
 
T
H
E
N
 
k
8
u
p
 
c
r
e
a
t
e
s
 
a
 
r
e
s
t
i
c
 
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
 
a
l
l
 
R
W
X
 
P
V
C
s


-
 
A
N
D
 
t
h
e
 
b
a
c
k
u
p
 
i
s
 
s
t
o
r
e
d
 
a
t
 
`
s
3
:
h
t
t
p
s
:
/
/
s
3
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
b
a
c
k
u
p
s
`


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
 
i
s
 
l
o
g
g
e
d
 
t
o
 
`
/
v
a
r
/
l
o
g
/
k
8
u
p
-
b
a
c
k
u
p
.
l
o
g
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
 
B
a
c
k
u
p
 
p
o
d
 
R
W
X
 
m
o
u
n
t
 
h
a
n
d
l
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
 
b
a
c
k
u
p
 
p
o
d
 
c
r
e
a
t
i
n
g
 
P
V
C
 
v
o
l
u
m
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
 
p
o
d
 
m
o
u
n
t
s
 
P
V
C
s
 
f
o
r
 
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
 
o
n
l
y
 
R
W
X
 
P
V
C
s
 
a
r
e
 
m
o
u
n
t
e
d
 
(
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
)


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
s
 
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
 
a
r
e
 
s
k
i
p
p
e
d


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
 
p
o
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
 
w
i
t
h
i
n
 
4
 
h
o
u
r
 
t
i
m
e
o
u
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
 
R
W
X
 
P
V
C
 
l
i
f
e
c
y
c
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


-
 
G
I
V
E
N
 
a
n
 
R
W
X
 
P
V
C
 
(
e
.
g
.
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
)
 
u
s
e
d
 
b
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


-
 
W
h
e
n
 
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
 
s
c
h
e
d
u
l
e
 
r
u
n
s


-
 
T
h
e
n
 
r
e
s
t
i
c
 
b
a
c
k
s
 
u
p
 
c
o
n
t
e
n
t
s
 
t
o
 
`
s
3
:
h
t
t
p
s
:
/
/
s
3
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
b
a
c
k
u
p
s
/
r
w
x
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
d
a
t
a
/
`


-
 
A
n
d
 
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
 
b
a
c
k
u
p
s
 
p
r
e
s
e
r
v
e
 
h
a
r
d
 
l
i
n
k
s
 
f
o
r
 
d
e
d
u
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
 
A
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
y
 
k
e
e
p
s
 
9
0
 
d
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
s
,
 
4
 
w
e
e
k
l
y
,
 
1
2
 
m
o
n
t
h
l
y
 
(
3
6
 
t
o
t
a
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
 
v
i
a
 
n
a
t
i
v
e
 
d
u
m
p




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
p
g
_
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
,
 
a
v
o
i
d
i
n
g
 
c
r
o
s
s
-
n
o
d
e
 
m
o
u
n
t
 
i
s
s
u
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
p
o
s
t
g
r
e
s
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
0
`


-
 
A
N
D
 
P
V
C
 
m
o
u
n
t
e
d
 
a
t
 
`
/
v
a
r
/
l
i
b
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
 
d
a
i
l
y
 
`
s
c
h
e
d
u
l
e
:
 
"
4
5
 
0
 
*
 
*
 
*
"
`
 
(
0
0
:
4
5
 
U
T
C
,
 
a
f
t
e
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
)


-
 
T
H
E
N
 
`
p
g
_
d
u
m
p
 
-
F
c
 
-
f
 
/
b
a
c
k
u
p
/
p
o
s
t
g
r
e
s
-
b
a
c
k
u
p
.
d
u
m
p
.
g
z
 
p
o
s
t
g
r
e
s
`
 
r
u
n
s


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
 
f
i
l
e
 
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
 
i
n
c
l
u
d
e
s
 
s
c
h
e
m
a
,
 
d
a
t
a
,
 
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
 
(
`
p
g
_
d
u
m
p
a
l
l
 
-
F
c
`
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
 
P
e
r
-
n
o
d
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
)


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
 
o
n
l
y
 
o
n
 
n
o
d
e
 
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
)


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
 
n
o
d
e
 
1


-
 
T
H
E
N
 
t
h
e
 
j
o
b
 
h
a
s
 
`
n
o
d
e
S
e
l
e
c
t
o
r
:
 
n
o
d
e
=
r
e
p
l
i
c
a
-
1
`
 
t
o
 
t
a
r
g
e
t
 
s
p
e
c
i
f
i
c
 
n
o
d
e


-
 
A
N
D
 
t
h
e
 
j
o
b
 
c
a
n
 
m
o
u
n
t
 
t
h
e
 
R
W
O
 
P
V
C
 
(
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
 
b
a
c
k
u
p
 
c
o
m
p
l
e
t
e
s
 
w
i
t
h
o
u
t
 
c
r
o
s
s
-
n
o
d
e
 
m
o
u
n
t
i
n
g
 
i
s
s
u
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
 
P
V
C
 
(
`
p
o
s
t
g
r
e
s
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
0
`
)


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
i
n
g
 
f
r
o
m
 
S
3
 
b
a
c
k
u
p
 
`
p
o
s
t
g
r
e
s
-
b
a
c
k
u
p
.
d
u
m
p
.
g
z
`


-
 
T
H
E
N
 
`
p
g
_
r
e
s
t
o
r
e
 
-
F
c
 
-
d
 
p
o
s
t
g
r
e
s
 
p
o
s
t
g
r
e
s
-
b
a
c
k
u
p
.
d
u
m
p
.
g
z
`
 
r
e
s
t
o
r
e
s
 
d
a
t
a


-
 
A
N
D
 
r
e
s
t
o
r
e
d
 
d
a
t
a
b
a
s
e
 
m
a
t
c
h
e
s
 
s
c
h
e
m
a
 
(
 
v
e
r
i
f
i
e
d
 
v
i
a
 
`
p
g
_
d
u
m
p
 
-
s
 
p
o
s
t
g
r
e
s
 
|
 
m
d
5
s
u
m
`
)


-
 
A
N
D
 
a
l
l
 
t
a
b
l
e
s
 
c
o
n
t
a
i
n
 
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
i
e
d
 
v
i
a
 
`
S
E
L
E
C
T
 
c
o
u
n
t
(
*
)
 
F
R
O
M
 
p
g
_
t
a
b
l
e
s
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
 
M
a
r
i
a
D
B
 
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
 
v
i
a
 
n
a
t
i
v
e
 
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
,
 
a
v
o
i
d
i
n
g
 
c
r
o
s
s
-
n
o
d
e
 
m
o
u
n
t
 
i
s
s
u
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
 
M
a
r
i
a
D
B
 
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
 
A
N
D
 
P
V
C
 
m
o
u
n
t
e
d
 
a
t
 
`
/
v
a
r
/
l
i
b
/
m
y
s
q
l
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
 
d
a
i
l
y
 
`
s
c
h
e
d
u
l
e
:
 
"
4
5
 
0
2
 
*
 
*
 
*
"
`
 
(
0
2
:
4
5
 
U
T
C
)


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
s
i
n
g
l
e
-
t
r
a
n
s
a
c
t
i
o
n
 
-
-
r
o
u
t
i
n
e
s
 
-
-
t
r
i
g
g
e
r
s
 
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
 
|
 
g
z
i
p
 
>
 
/
b
a
c
k
u
p
/
m
a
r
i
a
d
b
-
b
a
c
k
u
p
.
s
q
l
.
g
z
`
 
r
u
n
s


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
 
f
i
l
e
 
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
 
i
n
c
l
u
d
e
s
 
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
,
 
u
s
e
r
s
,
 
g
r
a
n
t
s
,
 
s
t
o
r
e
d
 
p
r
o
c
e
d
u
r
e
s
 
(
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
 
P
e
r
-
n
o
d
e
 
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
 
o
n
 
n
o
d
e
 
1
 
(
p
r
i
m
a
r
y
)
 
a
n
d
 
n
o
d
e
 
2
 
(
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
 
2
`
)


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
 
n
o
d
e
 
1
 
(
p
r
i
m
a
r
y
)


-
 
T
H
E
N
 
t
h
e
 
j
o
b
 
h
a
s
 
`
n
o
d
e
S
e
l
e
c
t
o
r
:
 
n
o
d
e
=
r
e
p
l
i
c
a
-
1
`
 
t
o
 
t
a
r
g
e
t
 
p
r
i
m
a
r
y
 
n
o
d
e


-
 
A
N
D
 
t
h
e
 
j
o
b
 
c
a
n
 
m
o
u
n
t
 
t
h
e
 
R
W
O
 
P
V
C
 
(
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
)


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
 
c
o
m
p
l
e
t
e
s
 
w
i
t
h
o
u
t
 
c
r
o
s
s
-
n
o
d
e
 
m
o
u
n
t
i
n
g
 
i
s
s
u
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
r
i
a
D
B
 
b
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
 
(
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
)


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
i
n
g
 
f
r
o
m
 
S
3
 
b
a
c
k
u
p
 
`
m
a
r
i
a
d
b
-
b
a
c
k
u
p
.
s
q
l
.
g
z
`


-
 
T
H
E
N
 
`
g
u
n
z
i
p
 
<
 
m
a
r
i
a
d
b
-
b
a
c
k
u
p
.
s
q
l
.
g
z
 
|
 
m
y
s
q
l
 
-
u
 
r
o
o
t
 
<
m
a
r
i
a
d
b
-
b
a
c
k
u
p
.
s
q
l
`
 
r
e
s
t
o
r
e
s
 
d
a
t
a


-
 
A
N
D
 
r
e
s
t
o
r
e
d
 
d
a
t
a
b
a
s
e
 
m
a
t
c
h
e
s
 
s
c
h
e
m
a
 
(
v
e
r
i
f
i
e
d
 
v
i
a
 
`
m
y
s
q
l
 
-
u
 
r
o
o
t
 
-
e
 
"
S
H
O
W
 
D
A
T
A
B
A
S
E
S
;
"
`
)


-
 
A
N
D
 
a
l
l
 
t
a
b
l
e
s
 
c
o
n
t
a
i
n
 
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
i
e
d
 
v
i
a
 
`
m
y
s
q
l
 
-
u
 
r
o
o
t
 
-
e
 
"
S
E
L
E
C
T
 
c
o
u
n
t
(
*
)
 
F
R
O
M
 
i
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
_
s
c
h
e
m
a
.
t
a
b
l
e
s
;
"
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
N
S
 
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
 
v
i
a
 
`
n
s
u
p
d
a
t
e
`
 
d
u
m
p




D
N
S
 
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
 
R
W
O
 
P
V
C
 
(
`
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
`
)
 
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
 
`
/
e
t
c
/
e
t
c
d
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


v
i
a
 
r
e
s
t
i
c
 
`
备
份
`
 
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
 
e
t
c
d
 
s
n
a
p
s
h
o
t
s
 
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


w
i
t
h
 
p
r
o
p
e
r
 
r
e
t
e
n
t
i
o
n
 
a
n
d
 
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
 
p
r
o
c
e
d
u
r
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
N
S
 
e
t
c
d
 
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


-
 
G
i
v
e
n
 
a
n
 
e
t
c
d
-
b
a
c
k
e
d
 
D
N
S
 
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
e
.
g
.
,
 
P
o
w
e
r
D
N
S
,
 
C
o
r
e
D
N
S
)
 
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
 
(
`
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
`
)


-
 
A
N
D
 
P
V
C
 
m
o
u
n
t
e
d
 
a
t
 
`
/
e
t
c
/
e
t
c
d
`
 
(
 
n
o
t
 
a
t
 
`
/
v
a
r
/
l
i
b
/
e
t
c
d
`
)


-
 
W
h
e
n
 
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
 
d
a
i
l
y
 
`
s
c
h
e
d
u
l
e
:
 
"
4
5
 
0
3
 
*
 
*
 
*
"
`
 
(
0
3
:
4
5
 
U
T
C
)


-
 
T
h
e
n
 
t
h
e
 
n
a
t
i
v
e
 
e
t
c
d
 
s
n
a
p
s
h
o
t
 
o
r
 
`
备
份
`
 
t
o
o
l
 
r
u
n
s
:
 
`
e
t
c
d
c
t
l
 
s
n
a
p
s
h
o
t
 
s
a
v
e
 
/
b
a
c
k
u
p
/
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
`


-
 
A
N
n
d
 
`
备
份
`
 
p
r
o
c
e
s
s
e
s
 
e
t
c
d
 
s
n
a
p
s
h
o
t
 
w
i
t
h
 
c
o
m
p
r
e
s
s
i
o
n
:
 
`
g
z
i
p
 
/
b
a
c
k
u
p
/
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
.
g
z
`


-
 
A
N
D
 
s
n
a
p
s
h
o
t
 
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
:
 
`
m
c
 
c
p
 
/
b
a
c
k
u
p
/
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
.
g
z
 
m
i
n
i
o
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
b
a
c
k
u
p
s
/
`


-
 
A
N
D
 
s
n
a
p
s
h
o
t
 
i
n
c
l
u
d
e
s
 
D
N
S
 
r
e
c
o
r
d
s
,
 
z
o
n
e
s
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
t
i
o
n
 
(
v
e
r
i
f
i
e
d
 
v
i
a
 
`
e
t
c
d
c
t
l
 
s
n
a
p
s
h
o
t
 
s
t
a
t
u
s
 
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
.
g
z
`
)


-
 
A
N
D
 
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
y
 
k
e
e
p
s
 
1
8
0
 
d
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
s
 
(
6
 
m
o
n
t
h
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
 
D
N
S
 
e
t
c
d
 
r
e
s
t
o
r
e
 
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
i
v
e
n
 
a
 
f
r
e
s
h
 
D
N
S
 
e
t
c
d
 
P
V
C
 
(
`
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
`
)


-
 
W
h
e
n
 
r
e
s
t
o
r
i
n
g
 
f
r
o
m
 
S
3
 
s
n
a
p
s
h
o
t
 
`
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
.
g
z
`


-
 
T
h
e
n
 
`
e
t
c
d
c
t
l
 
s
n
a
p
s
h
o
t
 
r
e
s
t
o
r
e
 
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
.
d
b
.
g
z
`
 
r
e
s
t
o
r
e
s
 
d
a
t
a
 
t
o
 
n
e
w
 
P
V
C


-
 
A
N
D
 
r
e
s
t
o
r
e
d
 
P
V
C
 
m
a
t
c
h
e
s
 
o
r
i
g
i
n
a
l
 
r
e
c
o
r
d
s
 
(
v
e
r
i
f
i
e
d
 
v
i
a
 
`
e
t
c
d
c
t
l
 
g
e
t
 
"
"
 
-
-
p
r
e
f
i
x
`
 
o
r
 
`
d
i
g
`
)


-
 
A
N
D
 
a
l
l
 
D
N
S
 
z
o
n
e
s
 
a
r
e
 
a
v
a
i
l
a
b
l
e
 
(
v
e
r
i
f
i
e
d
 
v
i
a
 
`
d
i
g
 
$
Z
O
N
E
 
A
X
F
R
 
@
l
o
c
a
l
h
o
s
t
`
 
o
r
 
`
n
s
l
o
o
k
u
p
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
 
s
t
r
a
t
e
g
i
e
s
 
(
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




F
o
r
 
R
W
O
 
P
V
C
s
 
t
h
a
t
 
c
a
n
n
o
t
 
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
 
d
u
m
p
s
,
 
S
H
A
L
L
 
u
s
e
 
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
 
o
r
 
C
e
p
h
 
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
 
o
n
 
n
o
d
e
 
3
 
(
e
.
g
.
,
 
`
p
l
a
n
k
a
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
)


-
 
W
H
E
N
 
a
 
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
 
S
c
h
e
d
u
l
e
 
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
n
o
d
e
S
e
l
e
c
t
o
r
:
 
n
o
d
e
=
r
e
p
l
i
c
a
-
3
`


-
 
T
H
E
N
 
t
h
e
 
S
c
h
e
d
u
l
e
 
i
n
c
l
u
d
e
s
 
o
n
l
y
 
R
W
O
 
P
V
C
s
 
o
n
 
n
o
d
e
 
3
 
(
v
i
a
 
v
o
l
u
m
e
 
f
i
l
t
e
r
s
)


-
 
A
N
D
 
t
h
e
 
b
a
c
k
u
p
 
p
o
d
 
r
u
n
s
 
o
n
 
n
o
d
e
 
3
 
(
c
a
n
 
m
o
u
n
t
 
R
W
O
 
P
V
C
 
s
a
m
e
 
n
o
d
e
)


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
 
c
o
m
p
l
e
t
e
s
 
w
i
t
h
o
u
t
 
h
a
n
g
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


-
 
G
i
v
e
n
 
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
 
R
W
O
 
P
V
C
 
(
e
.
g
.
,
 
`
z
a
m
m
a
d
-
z
a
m
m
a
d
-
d
a
t
a
`
)


-
 
W
h
e
n
 
a
 
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
 
i
s
 
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
 
C
e
p
h
 
C
S
I


-
 
T
h
e
n
 
`
c
e
p
h
c
s
i
.
i
o
/
v
o
l
u
m
e
s
n
a
p
s
h
o
t
c
l
a
s
s
`
 
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
 
w
i
t
h
 
`
c
l
u
s
t
e
r
I
D
`


-
 
A
n
d
 
b
a
c
k
u
p
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
 
d
a
i
l
y
 
v
i
a
 
V
o
l
u
m
e
S
n
a
p
s
h
o
t
 
C
R
:
 
`
k
u
b
e
c
t
l
 
a
p
p
l
y
 
-
f
 
v
o
l
u
m
e
s
n
a
p
s
h
o
t
.
y
a
m
l
`


-
 
A
n
d
 
s
n
a
p
s
h
o
t
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
 
p
o
o
l
 
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
 
A
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
 
i
s
 
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
 
C
e
p
h
 
r
b
d
 
s
n
a
p
 
s
c
h
e
d
u
l
e
:
 
`
c
e
p
h
 
o
s
d
 
p
o
o
l
 
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
 
s
n
a
p
 
s
c
h
e
d
u
l
e
 
a
d
d
 
<
p
o
o
l
>
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
 
B
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




B
a
c
k
u
p
s
 
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
 
a
t
 
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
 
e
n
d
p
o
i
n
t
 
w
i
t
h
 
p
r
o
p
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
 
a
n
d
 
b
u
c
k
e
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
3
 
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
 
t
h
e
 
k
8
u
p
 
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
 
b
a
c
k
u
p
 
r
e
p
o
s
i
t
o
r
y


-
 
T
H
E
N
 
b
a
c
k
u
p
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
 
a
t
 
`
s
3
:
h
t
t
p
s
:
/
/
s
3
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
b
a
c
k
u
p
s
`


-
 
A
N
D
 
t
h
e
 
b
a
c
k
u
p
 
u
s
e
s
 
S
3
 
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
 
f
r
o
m
 
`
s
3
-
s
e
c
r
e
t
`
 
(
`
A
W
S
_
A
C
C
E
S
S
_
K
E
Y
_
I
D
`
,
 
`
A
W
S
_
S
E
C
R
E
T
_
A
C
C
E
S
S
_
K
E
Y
`
)


-
 
A
N
D
 
M
i
n
I
O
 
i
s
 
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
 
b
a
c
k
u
p
 
p
o
d
s
 
v
i
a
 
H
T
T
P
 
(
c
l
u
s
t
e
r
-
l
o
c
a
l
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
 
B
a
c
k
u
p
 
b
u
c
k
e
t
 
l
i
f
e
c
y
c
l
e


-
 
G
I
V
E
N
 
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
 
l
i
f
e
c
y
c
l
e
 
p
o
l
i
c
y


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
s
 
a
g
e
 
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
e
r
i
o
d


-
 
T
H
E
N
 
o
l
d
 
b
a
c
k
u
p
s
 
a
r
e
 
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
 
d
e
l
e
t
e
d
 
v
i
a
 
b
u
c
k
e
t
 
l
i
f
e
c
y
c
l
e
 
r
u
l
e


-
 
A
N
D
 
l
i
f
e
c
y
c
l
e
 
r
u
l
e
 
s
u
g
g
e
s
t
s
 
7
-
y
e
a
r
 
r
e
t
e
n
t
i
o
n
 
f
o
r
 
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
 
(
b
u
t
 
a
c
t
u
a
l
 
d
e
l
e
t
i
o
n
 
p
e
r
 
p
o
l
i
c
y
)


-
 
A
N
D
 
b
u
c
k
e
t
 
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
 
i
s
 
e
n
a
b
l
e
d
 
f
o
r
 
p
o
i
n
t
-
i
n
-
t
i
m
e
 
r
e
c
o
v
e
r
y
 
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
 
l
o
g
g
i
n
g


-
 
G
I
V
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
 
f
i
n
i
s
h
e
s


-
 
T
H
E
N
 
s
u
c
c
e
s
s
 
i
s
 
l
o
g
g
e
d
 
t
o
 
`
/
v
a
r
/
l
o
g
/
b
a
c
k
u
p
-
s
u
c
c
e
s
s
.
l
o
g
`
 
(
o
r
 
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
 
j
o
b
 
v
i
a
 
`
l
o
g
g
e
r
`
 
c
o
m
m
a
n
d
)


-
 
A
N
D
 
f
a
i
l
u
r
e
 
i
s
 
l
o
g
g
e
d
 
t
o
 
`
/
v
a
r
/
l
o
g
/
b
a
c
k
u
p
-
f
a
i
l
u
r
e
.
l
o
g
`
 
w
i
t
h
 
P
V
C
 
n
a
m
e
,
 
e
r
r
o
r
 
m
e
s
s
a
g
e
,
 
t
i
m
e
s
t
a
m
p


-
 
A
N
D
 
l
o
g
s
 
a
r
e
 
s
h
i
p
p
e
d
 
t
o
 
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
 
f
o
r
 
s
e
a
r
c
h
a
b
i
l
i
t
y


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
 
s
h
o
w
s
 
b
a
c
k
u
p
 
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
 
p
e
r
 
P
V
C




#
#
 
B
a
c
k
e
d
-
U
p
 
P
V
C
s
 
(
R
W
X
 
-
 
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
 
M
a
i
n
 
S
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
D
a
i
l
y
 
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
)
 
v
i
a
 
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
:
*
*


-
 
`
c
l
a
m
a
v
-
d
b
`
 
(
A
n
t
i
v
i
r
u
s
 
d
e
f
i
n
i
t
i
o
n
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
)


-
 
`
c
l
a
m
a
v
-
t
m
p
`
 
(
A
n
t
i
v
i
r
u
s
 
t
e
m
p
o
r
a
r
y
 
w
o
r
k
s
p
a
c
e
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
 
I
M
A
P
 
m
a
i
l
 
s
t
o
r
e
 
v
i
a
 
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
N
e
x
t
c
l
o
u
d
 
u
s
e
r
 
d
a
t
a
 
a
n
d
 
f
i
l
e
s
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
-
d
a
t
a
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
 
u
s
e
r
 
d
a
t
a
 
a
n
d
 
d
o
c
u
m
e
n
t
s
)


-
 
`
s
e
a
w
e
e
d
f
s
-
a
l
l
-
i
n
-
o
n
e
-
d
a
t
a
`
 
(
S
e
a
w
e
e
d
F
S
 
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
)


-
 
`
s
l
i
d
e
v
-
s
l
i
d
e
s
`
 
(
S
l
i
d
e
V
 
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
 
s
l
i
d
e
s
)




#
#
 
E
x
c
l
u
d
e
d
 
P
V
C
s
 
(
R
W
O
 
-
 
H
a
n
d
l
e
d
 
v
i
a
 
N
a
t
i
v
e
 
D
u
m
p
s
 
o
r
 
P
e
r
-
N
o
d
e
 
S
c
h
e
d
u
l
e
s
)




*
*
2
9
 
d
a
t
a
b
a
s
e
 
a
n
d
 
s
t
a
t
e
f
u
l
 
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
:
*
*




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
 
R
W
O
 
P
V
C
s
 
(
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
 
`
p
g
_
d
u
m
p
`
)
:
*
*


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
0
`
,
 
`
i
l
i
a
s
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
0
`
,
 
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
0
`
,
 
`
e
t
h
e
r
p
a
d
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
0
`
,
 
`
n
o
t
e
s
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
0
`
,
 
`
e
l
e
m
e
n
t
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
0
`
,
 
`
p
l
a
n
k
a
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
0
`
,
 
`
z
a
m
m
a
d
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
0
`
,
 
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
-
0
`




*
*
M
a
r
i
a
D
B
 
R
W
O
 
P
V
C
s
 
(
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
)
:
*
*


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
-
m
a
r
i
a
d
b
-
0
`
,
 
`
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
-
m
a
r
i
a
d
b
-
0
`
,
 
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
h
a
r
e
)




*
*
R
e
d
i
s
 
R
W
O
 
P
V
C
s
 
(
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
 
`
r
e
d
i
s
 
R
D
B
`
)
:
*
*


-
 
`
r
e
d
i
s
-
c
a
c
h
e
-
d
a
t
a
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
 
S
O
G
o
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
 
J
i
t
s
i
,
 
B
B
B
 
s
h
a
r
e
d
 
c
a
c
h
e
)
,
 
`
r
e
d
i
s
-
a
l
l
-
i
n
-
o
n
e
-
d
a
t
a
`
 
(
g
e
n
e
r
i
c
 
c
a
c
h
e
)




*
*
O
t
h
e
r
 
R
W
O
 
P
V
C
s
 
(
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
 
o
r
 
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
)
:
*
*


-
 
`
o
p
e
n
s
p
e
c
-
n
s
u
p
d
a
t
e
`
 
(
e
t
c
d
-
b
a
c
k
e
d
 
D
N
S
 
v
i
a
 
n
a
t
i
v
e
 
d
u
m
p
)
,
 
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
p
o
s
t
g
r
e
s
-
0
`
 
(
K
e
y
c
l
o
a
k
 
I
A
M
 
-
 
n
a
t
i
v
e
 
d
u
m
p
)
,
 
`
l
d
a
p
-
d
a
t
a
`
 
(
O
p
e
n
L
D
A
P
 
-
 
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
s
l
a
p
c
a
t
`
)
,
 
`
p
o
s
t
g
r
e
s
-
e
p
h
e
m
e
r
a
l
`
 
(
U
p
s
t
r
e
a
m
 
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
 
v
i
a
 
n
a
t
i
v
e
 
d
u
m
p
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
i
o
n
 
P
o
i
n
t




T
h
i
s
 
s
p
e
c
 
i
n
t
e
g
r
a
t
e
s
 
w
i
t
h
:


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
 
(
P
B
/
D
R
T
 
p
h
a
s
e
s
 
a
n
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
 
c
h
e
c
k
l
i
s
t
s
)


-
 
[
K
8
u
p
 
C
R
D
s
 
f
o
r
 
b
a
c
k
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
s
]
(
.
/
.
.
/
_
r
e
g
i
s
t
r
y
/
i
m
p
l
e
m
e
n
t
a
t
i
o
n
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
/
)
 
(
S
c
h
e
d
u
l
e
,
 
P
r
u
n
e
,
 
B
a
c
k
u
p
,
 
R
e
s
t
o
r
e
,
 
A
r
c
h
i
v
e
 
C
R
s
)


-
 
[
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
 
D
i
r
e
c
t
o
r
y
 
M
a
n
a
g
e
r
 
R
E
S
T
 
(
U
M
S
 
R
E
S
T
)
 
A
P
I
 
=
=
 
自
定
义
备
份
]
=
=
 
n
o
t
 
i
n
 
s
p
e
c
 
r
e
p
o
s
i
t
o
r
y
 
(
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
o
n
l
y
)


-
 
[
R
a
c
k
-
b
a
s
e
d
 
R
W
O
 
p
e
r
-
n
o
d
e
 
s
c
h
e
d
u
l
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
]
=
=
 
P
e
n
d
i
n
g




#
#
 
H
e
a
l
t
h
 
/
 
监
控




-
 
A
l
l
 
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
 
e
n
a
b
l
e
 
`
l
o
g
 
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
`
 
(
v
i
a
 
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


-
 
`
k
8
u
p
-
b
a
c
k
u
p
`
 
a
c
t
s
 
a
s
 
s
y
s
t
e
m
-
l
e
v
e
l
 
s
c
h
e
d
u
l
e
 
a
n
d
 
s
u
p
p
o
r
t
s
 
r
o
l
l
i
n
g
 
u
p
d
a
t
e
 
+
 
m
e
t
r
i
c
s


-
 
扩
展
到
本
地
 
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
 
f
o
r
 
p
e
r
-
j
o
b
 
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
 
F
a
i
l
u
r
e
 
a
l
e
r
t
 
p
e
r
 
b
a
c
k
u
p
 
(
P
V
C
)
 
—
 
e
v
e
n
t
:
 
`
o
p
e
n
e
d
u
-
b
a
c
k
u
p
-
a
l
e
r
t
s
`
 
c
h
a
n
n
e
l
 
(
O
p
s
G
e
n
i
e
-
l
i
k
e
 
精
简
版
)

