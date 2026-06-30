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
i
n
I
O




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
 
f
o
r
 
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
 
f
i
l
e
s
,
 
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
s
,
 
I
L
I
A
S
 
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
,
 
a
n
d


o
t
h
e
r
 
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
 
S
3
 
A
P
I
 
a
c
c
e
s
s
.




M
i
n
I
O
 
r
u
n
s
 
a
s
 
a
 
s
i
n
g
l
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
 
e
x
p
o
s
i
n
g
 
a
n
 
S
3
 
A
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
 
(
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
,
 
I
L
I
A
S
 
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
)
,


N
o
t
e
s
 
(
Y
.
j
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
)
,
 
P
l
a
n
k
a
 
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
)
,
 
a
n
d
 
k
8
u
p
 
(
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
i
n
I
O
 
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
 
S
3
 
A
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
 
M
i
n
I
O
 
m
e
t
r
i
c
s
,
 
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
 
C
e
p
h
 
R
B
D
/
C
e
p
h
F
S
 
s
t
o
r
a
g
e
 
(
s
e
e
 
`
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
s
t
o
r
a
g
e
/
`
)
,
 
S
e
a
w
e
e
d
F
S
 
(
s
e
p
a
r
a
t
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
 
s
t
o
r
e
)
,
 
S
3
 
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
i
e
s
 
(
b
u
c
k
e
t
-
l
e
v
e
l
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
m
a
n
a
g
e
d
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
 
C
e
p
h
 
C
S
I
 
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
e
s
 
(
s
e
e
 
[
S
t
o
r
a
g
e
 
p
l
a
t
f
o
r
m
 
s
p
e
c
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
s
t
o
r
a
g
e
/
)
)


-
 
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
 
s
t
o
r
a
g
e
 
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
e
p
l
o
y
m
e
n
t
)


-
 
C
D
N
 
o
r
 
e
d
g
e
 
c
a
c
h
i
n
g
 
o
f
 
S
3
 
o
b
j
e
c
t
s


-
 
C
r
o
s
s
-
r
e
g
i
o
n
 
S
3
 
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
 
A
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




M
i
n
I
O
 
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
 
a
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
 
A
P
I
 
a
t
 
c
l
u
s
t
e
r
-
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
 
f
o
r
 
a
l
l
 
p
l
a
t
f
o
r
m
 
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
 
S
e
r
v
i
c
e
 
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
 
M
i
n
I
O


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
 
S
3
 
s
t
o
r
a
g
e
 
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


-
 
T
H
E
N
 
t
h
e
 
S
3
 
A
P
I
 
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
 
w
i
t
h
 
v
a
l
i
d
 
a
c
c
e
s
s
 
k
e
y
 
a
n
d
 
s
e
c
r
e
t
 
k
e
y


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
 
c
a
n
 
p
e
r
f
o
r
m
 
s
t
a
n
d
a
r
d
 
S
3
 
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
 
(
P
U
T
,
 
G
E
T
,
 
D
E
L
E
T
E
,
 
L
I
S
T
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
u
c
k
e
t
 
a
c
c
e
s
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
 
b
u
c
k
e
t
 
n
a
m
e
 
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
 
p
e
r
f
o
r
m
s
 
S
3
 
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


-
 
T
H
E
N
 
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
 
a
r
e
 
s
c
o
p
e
d
 
t
o
 
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
 
b
u
c
k
e
t
 
o
n
l
y


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
 
c
a
n
n
o
t
 
a
c
c
e
s
s
 
o
t
h
e
r
 
s
e
r
v
i
c
e
 
b
u
c
k
e
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
t
o
r
a
g
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




M
i
n
I
O
 
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
s
i
s
t
e
n
t
 
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
 
o
b
j
e
c
t
 
d
a
t
a
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
i
n
I
O
 
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
 
f
o
r
 
M
i
n
I
O
 
o
b
j
e
c
t
 
d
a
t
a


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




M
i
n
I
O
 
S
H
A
L
L
 
s
e
r
v
e
 
a
s
 
t
h
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
 
k
8
u
p
 
a
n
d
 
n
a
t
i
v
e


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
u
p
 
j
o
b
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
o
 
M
i
n
I
O


-
 
G
I
V
E
N
 
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
3
 
b
a
c
k
e
n
d


-
 
W
H
E
N
 
a
 
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


-
 
T
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
t
a
b
a
s
e
 
d
u
m
p
 
t
o
 
M
i
n
I
O


-
 
G
I
V
E
N
 
a
 
n
a
t
i
v
e
 
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
u
p
 
j
o
b
 
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
 
`
p
g
_
d
u
m
p
`
,
 
M
a
r
i
a
D
B
 
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
 
d
u
m
p
 
f
i
l
e
 
i
s
 
c
o
p
i
e
d
 
t
o
 
M
i
n
I
O
 
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
 
i
n
 
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
 
b
u
c
k
e
t




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
 
M
i
n
I
O
 
m
e
t
r
i
c
s




M
i
n
I
O
 
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
 
c
l
u
s
t
e
r
 
m
e
t
r
i
c
s
 
a
t
 
`
/
m
i
n
i
o
/
v
2
/
m
e
t
r
i
c
s
/
c
l
u
s
t
e
r
`
 
o
n
 
p
o
r
t
 
9
0
0
0


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
 
M
i
n
I
O
 
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
 
m
e
t
r
i
c
s
 
e
n
a
b
l
e
d


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
/
m
i
n
i
o
/
v
2
/
m
e
t
r
i
c
s
/
c
l
u
s
t
e
r
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
 
b
u
c
k
e
t
 
u
s
a
g
e
,
 
A
P
I
 
o
p
e
r
a
t
i
o
n
 
c
o
u
n
t
s
,
 
h
e
a
l
t
h
 
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
 
r
e
q
u
e
s
t
 
l
a
t
e
n
c
y




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
i
n
I
O
 
S
e
r
v
e
r
 
|
 
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
s
i
z
e
 
p
e
r
 
c
h
a
r
t
 
c
o
n
f
i
g
)
 
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
i
n
I
O
 
S
e
r
v
e
r
 
|
 
1
0
0
0
 
(
m
i
n
i
o
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
 
I
m
a
g
e
 
|
 
M
i
n
I
O
 
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
 
I
n
t
e
r
n
a
l
 
e
n
d
p
o
i
n
t
 
|
 
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
a
t
h
 
|
 
`
/
m
i
n
i
o
/
v
2
/
m
e
t
r
i
c
s
/
c
l
u
s
t
e
r
`
 
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
0
0
0
 
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
 
C
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
 
S
3
 
s
e
c
r
e
t
 
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
 
|




#
#
 
B
u
c
k
e
t
 
C
a
t
a
l
o
g




|
 
B
u
c
k
e
t
 
|
 
S
e
r
v
i
c
e
 
|
 
U
s
e
 
C
a
s
e
 
|
 
B
a
c
k
u
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
|


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
-
b
a
c
k
u
p
s
`
 
|
 
k
8
u
p
 
/
 
a
l
l
 
D
B
s
 
|
 
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
 
(
p
g
_
d
u
m
p
,
 
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
D
B
 
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
 
|
 
N
/
A
 
(
i
s
 
t
h
e
 
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
)
 
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
 
P
r
i
m
a
r
y
 
S
3
 
s
t
o
r
a
g
e
 
(
f
i
l
e
s
,
 
s
h
a
r
e
s
)
 
|
 
k
8
u
p
 
(
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
)
 
|


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
 
C
S
3
 
S
3
 
b
a
c
k
e
n
d
 
(
f
i
l
e
s
,
 
s
h
a
r
e
s
)
 
|
 
k
8
u
p
 
(
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
)
 
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
 
C
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
 
|
 
k
8
u
p
 
(
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
)
 
|


|
 
`
n
o
t
e
s
`
 
|
 
N
o
t
e
s
 
|
 
Y
.
j
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
t
o
r
a
g
e
 
|
 
k
8
u
p
 
(
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
)
 
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




-
 
[
S
3
 
O
b
j
e
c
t
 
S
t
o
r
a
g
e
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
 
S
3
 
A
P
I
 
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
 
E
l
e
m
e
n
t
,
 
N
o
t
e
s
,
 
I
L
I
A
S
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
 
M
i
n
I
O
 
d
a
t
a
 
P
V
C
)


-
 
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
 
(
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
 
i
f
 
e
x
t
e
r
n
a
l
 
a
c
c
e
s
s
 
r
e
q
u
i
r
e
d
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
t
o
r
a
g
e
)


-
 
[
N
o
t
e
s
]
(
.
.
/
n
o
t
e
s
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
 
s
t
o
r
a
g
e
)


-
 
[
P
l
a
n
k
a
]
(
.
.
/
p
l
a
n
k
a
/
)
 
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
t
o
r
a
g
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
)


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
 
(
M
i
n
I
O
 
c
l
u
s
t
e
r
 
m
e
t
r
i
c
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
 
+
 
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
t
o
r
a
g
e
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
A
P
I
 
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
P
U
T
/
G
E
T
)
 
|
 
M
i
n
I
O
 
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
B
u
c
k
e
t
 
G
r
o
w
t
h
*
*
 
|
 
M
o
n
i
t
o
r
 
>
1
0
G
B
/
d
a
y
 
|
 
`
c
e
p
h
_
r
g
w
_
u
s
a
g
e
_
b
y
t
e
s
`
 
(
i
n
f
o
 
a
l
e
r
t
)
 
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
i
n
I
O
 
d
o
w
n
 
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
 
S
3
 
o
p
e
r
a
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
 
B
u
c
k
e
t
 
g
r
o
w
t
h
 
>
1
0
G
B
/
d
a
y
 
→
 
I
n
f
o
 
a
l
e
r
t
 
(
n
e
x
t
 
b
u
s
i
n
e
s
s
 
d
a
y
)




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
 
S
t
o
r
a
g
e
 
s
i
z
e
d
 
p
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


-
 
P
e
r
-
b
u
c
k
e
t
 
q
u
o
t
a
s
 
m
a
n
a
g
e
d
 
a
t
 
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
 
l
e
v
e
l




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
 
f
o
r
 
b
a
c
k
u
p
s
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
 
M
i
n
I
O
 
d
a
t
a
 
P
V
C
 
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
 
k
8
u
p
 
(
i
f
 
R
W
X
)
 
o
r
 
n
a
t
i
v
e
 
M
i
n
I
O
 
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
 
D
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
u
p
s
 
s
t
o
r
e
d
 
I
N
 
M
i
n
I
O
 
—
 
M
i
n
I
O
 
l
o
s
s
 
m
e
a
n
s
 
l
o
s
s
 
o
f
 
b
a
c
k
u
p
 
h
i
s
t
o
r
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
 
R
e
s
t
o
r
e
 
M
i
n
I
O
 
P
V
C
 
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
 
(
o
r
 
a
c
c
e
p
t
 
d
a
t
a
 
l
o
s
s
)


2
.
 
R
e
s
t
o
r
e
 
s
e
r
v
i
c
e
 
d
a
t
a
 
f
r
o
m
 
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
l
e
v
e
l
 
b
a
c
k
u
p
s


3
.
 
V
e
r
i
f
y
 
S
3
 
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
 
f
r
o
m
 
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
 
f
i
l
e
s
 
i
n
 
S
3
 
m
a
y
 
n
e
e
d
 
r
e
-
u
p
l
o
a
d
 
f
r
o
m
 
s
o
u
r
c
e
.


-
 
*
*
B
a
c
k
u
p
 
l
o
s
s
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
u
m
p
s
 
(
p
g
_
d
u
m
p
,
 
m
y
s
q
l
d
u
m
p
)
 
a
r
e
 
l
o
s
t
.
 
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
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
 
s
u
r
v
i
v
i
n
g
 
c
o
p
y
.




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
S
i
n
g
l
e
 
p
o
i
n
t
 
o
f
 
b
a
c
k
u
p
*
*
:
 
M
i
n
I
O
 
s
t
o
r
e
s
 
A
L
L
 
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
u
p
s
.
 
M
i
n
I
O
 
f
a
i
l
u
r
e
 
=
 
l
o
s
s
 
o
f
 
A
L
L
 
b
a
c
k
u
p
 
h
i
s
t
o
r
y
.
 
C
o
n
s
i
d
e
r
 
o
f
f
s
i
t
e
 
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
.


-
 
*
*
I
n
t
e
r
n
a
l
 
a
c
c
e
s
s
 
o
n
l
y
*
*
:
 
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
e
d
 
v
i
a
 
c
l
u
s
t
e
r
-
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
.
 
E
x
t
e
r
n
a
l
 
S
3
 
a
c
c
e
s
s
 
(
e
.
g
.
,
 
`
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
`
)
 
i
s
 
a
 
s
e
p
a
r
a
t
e
 
e
n
d
p
o
i
n
t
 
(
H
R
Z
 
C
e
p
h
 
R
G
W
)
.


-
 
*
*
S
e
a
w
e
e
d
F
S
 
c
o
e
x
i
s
t
e
n
c
e
*
*
:
 
S
o
m
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
s
 
a
l
s
o
 
r
u
n
 
S
e
a
w
e
e
d
F
S
 
a
s
 
a
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
 
s
t
o
r
e
 
(
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
)
.
 
M
i
n
I
O
 
a
n
d
 
S
e
a
w
e
e
d
F
S
 
s
e
r
v
e
 
d
i
f
f
e
r
e
n
t
 
u
s
e
 
c
a
s
e
s
.

