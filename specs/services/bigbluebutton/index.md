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
 
(
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
 
v
3
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




T
e
a
c
h
i
n
g
-
o
p
t
i
m
i
z
e
d
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
c
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
 
b
a
s
e
d
 
o
n
 
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
 
v
3
 
(
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
)


w
i
t
h
 
b
u
i
l
t
-
i
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
,
 
w
h
i
t
e
b
o
a
r
d
 
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
,
 
b
r
e
a
k
o
u
t
 
r
o
o
m
s
,
 
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
,


a
n
d
 
S
A
M
L
 
2
.
0
 
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
P
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k
.
 
D
e
p
l
o
y
e
d
 
a
s
 
a


c
u
s
t
o
m
 
D
o
c
k
e
r
 
i
m
a
g
e
 
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
P
 
d
a
e
m
o
n
.




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
 
u
s
e
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
 
B
B
B
 
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
e
r
 
f
o
r
 
a
c
t
u
a
l
 
c
o
n
f
e
r
e
n
c
i
n
g


(
W
e
b
R
T
C
,
 
m
e
d
i
a
 
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
 
w
h
i
l
e
 
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
 
p
r
o
v
i
d
e
s
 
t
h
e
 
w
e
b
 
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
 
r
o
o
m
 
c
r
e
a
t
i
o
n
,
 
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
,
 
a
n
d
 
r
e
c
o
r
d
i
n
g
 
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
 
w
e
b
 
i
n
t
e
r
f
a
c
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
,
 
S
A
M
L
 
2
.
0
 
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
P
,
 
D
o
c
k
e
r
 
i
m
a
g
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
,
 
r
o
o
m
 
c
r
e
a
t
i
o
n
,
 
r
e
c
o
r
d
i
n
g
 
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
 
B
B
B
 
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
m
a
n
a
g
e
d
 
s
e
p
a
r
a
t
e
l
y
)
,
 
s
t
a
n
d
a
r
d
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
c
i
n
g
 
(
s
e
e
 
J
i
t
s
i
)
,
 
G
P
U
-
a
c
c
e
l
e
r
a
t
e
d
 
t
r
a
n
s
c
r
i
p
t
i
o
n
 
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
r
d
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
c
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
j
i
t
s
i
`
)


-
 
G
P
U
-
a
c
c
e
l
e
r
a
t
e
d
 
t
r
a
n
s
c
r
i
p
t
i
o
n
 
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
 
f
e
a
t
u
r
e
)


-
 
B
B
B
 
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
m
a
n
a
g
e
d
 
s
e
p
a
r
a
t
e
l
y
,
 
n
o
t
 
i
n
 
t
h
i
s
 
c
h
a
r
t
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
A
M
L
 
2
.
0
 
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
P




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
,


w
i
t
h
 
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
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k
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
t
u
d
e
n
t
 
j
o
i
n
s
 
B
B
B
 
s
e
s
s
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
t
u
d
e
n
t
 
a
c
c
e
s
s
i
n
g
 
B
B
B
 
v
i
a
 
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
 
W
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
 
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
 
B
B
B


-
 
T
H
E
N
 
B
B
B
 
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


-
 
A
N
D
 
u
p
o
n
 
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
 
S
A
M
L
 
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
 
m
a
p
 
t
o
 
t
h
e
 
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


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
c
a
n
 
j
o
i
n
 
a
s
s
i
g
n
e
d
 
r
o
o
m
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
 
S
A
M
L
 
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


-
 
G
I
V
E
N
 
`
D
E
F
A
U
L
T
_
R
E
G
I
S
T
R
A
T
I
O
N
:
 
"
s
a
m
l
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
 
f
i
r
s
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
s
 
v
i
a
 
S
A
M
L


-
 
T
H
E
N
 
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
 
a
c
c
o
u
n
t
 
f
r
o
m
 
S
A
M
L
 
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
 
i
d
e
n
t
i
t
y
 
i
s
 
l
i
n
k
e
d
 
t
o
 
t
h
e
i
r
 
K
e
y
c
l
o
a
k
 
a
c
c
o
u
n
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
 
B
o
l
d
C
h
a
t
 
S
A
M
L
 
p
r
o
v
i
d
e
r


-
 
G
I
V
E
N
 
t
h
e
 
B
o
l
d
C
h
a
t
 
S
A
M
L
 
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
 
t
h
e
 
S
A
M
L
 
p
r
o
v
i
d
e
r
 
l
a
b
e
l
 
i
s
 
"
O
p
e
n
D
e
s
k
 
L
o
g
i
n
"


-
 
A
N
D
 
t
h
e
 
S
S
O
 
t
a
r
g
e
t
 
U
R
L
 
i
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
i
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
<
d
o
m
a
i
n
>
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
s
k
/
p
r
o
t
o
c
o
l
/
s
a
m
l
`


-
 
A
N
D
 
t
h
e
 
S
P
 
e
n
t
i
t
y
 
I
D
 
i
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
b
b
b
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
<
d
o
m
a
i
n
>
/
s
h
i
b
b
o
l
e
t
h
`


-
 
A
N
D
 
S
L
O
 
(
S
i
n
g
l
e
 
L
o
g
o
u
t
)
 
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
 
S
A
M
L
 
e
n
d
p
o
i
n
t


-
 
A
N
D
 
a
l
l
o
w
e
d
 
c
l
o
c
k
 
d
r
i
f
t
 
i
s
 
1
2
0
 
s
e
c
o
n
d
s


-
 
A
N
D
 
S
A
M
L
 
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
 
f
r
o
m
 
`
/
e
t
c
/
s
h
i
b
b
o
l
e
t
h
/
s
h
i
b
-
c
e
r
t
.
p
e
m
`
 
a
n
d
 
`
s
h
i
b
-
k
e
y
.
p
e
m
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
 
R
e
c
o
r
d
i
n
g
 
a
n
d
 
p
l
a
y
b
a
c
k




B
B
B
 
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
 
s
e
s
s
i
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
 
w
i
t
h
 
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
 
a
n
d
 
p
l
a
y
b
a
c
k
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
s
t
r
u
c
t
o
r
 
s
t
a
r
t
s
 
r
e
c
o
r
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
 
a
n
 
i
n
s
t
r
u
c
t
o
r
 
s
t
a
r
t
i
n
g
 
a
 
r
e
c
o
r
d
e
d
 
B
B
B
 
s
e
s
s
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
 
s
e
s
s
i
o
n
 
b
e
g
i
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
 
s
e
s
s
i
o
n
 
i
s
 
r
e
c
o
r
d
e
d
 
(
v
i
d
e
o
,
 
a
u
d
i
o
,
 
w
h
i
t
e
b
o
a
r
d
,
 
c
h
a
t
)


-
 
A
N
D
 
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
 
t
h
e
 
R
W
X
 
P
V
C
 
(
`
b
b
b
-
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
`
,
 
5
0
0
G
i
,
 
C
e
p
h
F
S
)


-
 
A
N
D
 
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
 
s
u
r
v
i
v
e
 
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
 
a
n
d
 
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
 
c
h
a
n
g
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
 
R
e
c
o
r
d
i
n
g
 
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


-
 
G
I
V
E
N
 
`
b
o
l
d
c
h
a
t
.
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
.
r
e
q
u
i
r
e
_
l
o
g
i
n
:
 
f
a
l
s
e
`


-
 
A
N
D
 
`
b
o
l
d
c
h
a
t
.
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
.
a
l
l
o
w
_
g
u
e
s
t
s
:
 
f
a
l
s
e
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
 
c
a
n
 
a
c
c
e
s
s
 
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


-
 
A
N
D
 
u
n
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
 
c
a
n
n
o
t
 
v
i
e
w
 
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
c
o
r
d
i
n
g
 
s
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
F
S


-
 
G
I
V
E
N
 
t
h
e
 
B
B
B
 
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
 
P
V
C
 
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
 
i
s
 
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
 
(
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
,
 
c
o
s
t
-
e
f
f
e
c
t
i
v
e
 
f
o
r
 
m
e
d
i
a
)


-
 
A
N
D
 
a
c
c
e
s
s
 
m
o
d
e
 
i
s
 
`
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
`
 
(
m
u
l
t
i
p
l
e
 
p
o
d
s
 
m
a
y
 
n
e
e
d
 
a
c
c
e
s
s
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
 
B
r
e
a
k
o
u
t
 
r
o
o
m
s




B
B
B
 
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
r
e
a
k
o
u
t
 
r
o
o
m
s
 
f
o
r
 
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
 
t
e
a
c
h
i
n
g
 
a
c
t
i
v
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
 
I
n
s
t
r
u
c
t
o
r
 
c
r
e
a
t
e
s
 
b
r
e
a
k
o
u
t
 
r
o
o
m
s


-
 
G
I
V
E
N
 
a
n
 
i
n
s
t
r
u
c
t
o
r
 
w
i
t
h
 
a
 
l
a
r
g
e
 
c
l
a
s
s
 
s
e
s
s
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
 
i
n
s
t
r
u
c
t
o
r
 
c
r
e
a
t
e
s
 
b
r
e
a
k
o
u
t
 
r
o
o
m
s


-
 
T
H
E
N
 
s
t
u
d
e
n
t
s
 
a
r
e
 
a
s
s
i
g
n
e
d
 
t
o
 
s
e
p
a
r
a
t
e
 
v
i
r
t
u
a
l
 
r
o
o
m
s


-
 
A
N
D
 
t
h
e
 
i
n
s
t
r
u
c
t
o
r
 
c
a
n
 
m
o
v
e
 
b
e
t
w
e
e
n
 
r
o
o
m
s


-
 
A
N
D
 
t
h
e
 
i
n
s
t
r
u
c
t
o
r
 
c
a
n
 
b
r
o
a
d
c
a
s
t
 
m
e
s
s
a
g
e
s
 
t
o
 
a
l
l
 
r
o
o
m
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
 
B
B
B
 
b
a
c
k
e
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
i
o
n




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
 
S
H
A
L
L
 
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
e
 
w
i
t
h
 
t
h
e
 
B
B
B
 
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
e
r
 
v
i
a
 
A
P
I
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
o
o
m
 
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
 
i
n
s
t
r
u
c
t
o
r
 
c
r
e
a
t
i
n
g
 
a
 
n
e
w
 
r
o
o
m
 
i
n
 
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


-
 
W
H
E
N
 
t
h
e
 
r
o
o
m
 
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
 
c
a
l
l
s
 
t
h
e
 
B
B
B
 
b
a
c
k
e
n
d
 
A
P
I
 
t
o
 
c
r
e
a
t
e
 
t
h
e
 
m
e
e
t
i
n
g


-
 
A
N
D
 
`
B
I
G
B
L
U
E
B
U
T
T
O
N
_
E
N
D
P
O
I
N
T
`
 
a
n
d
 
`
B
I
G
B
L
U
E
B
U
T
T
O
N
_
S
E
C
R
E
T
`
 
a
r
e
 
u
s
e
d
 
f
o
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
B
B
 
b
a
c
k
e
n
d
 
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
E
n
d
p
o
i
n
t
`
 
a
n
d
 
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
S
e
c
r
e
t
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


-
 
T
H
E
N
 
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
s
 
w
i
t
h
 
t
h
e
 
B
B
B
 
b
a
c
k
e
n
d
 
u
s
i
n
g
 
t
h
e
s
e
 
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
 
A
N
D
 
t
h
e
 
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
 
t
h
e
 
`
b
b
b
-
g
r
e
e
n
l
i
g
h
t
-
s
e
c
r
e
t
s
`
 
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




B
B
B
 
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
 
r
o
o
m
 
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
,
 
a
n
d
 
r
e
c
o
r
d
i
n
g
 
p
o
i
n
t
e
r
s
 
i
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
o
o
m
 
m
e
t
a
d
a
t
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
c
e


-
 
G
I
V
E
N
 
a
n
 
i
n
s
t
r
u
c
t
o
r
 
c
r
e
a
t
i
n
g
 
r
o
o
m
s
 
a
n
d
 
s
e
t
t
i
n
g
s


-
 
W
H
E
N
 
d
a
t
a
 
i
s
 
s
a
v
e
d
 
i
n
 
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


-
 
T
H
E
N
 
a
l
l
 
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
g
r
e
e
n
l
i
g
h
t
`
 
D
B
)


-
 
A
N
D
 
d
a
t
a
 
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
 
a
n
d
 
u
p
g
r
a
d
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
 
S
e
c
r
e
t
 
k
e
y
 
b
a
s
e


-
 
G
I
V
E
N
 
t
h
e
 
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
 
T
H
E
N
 
`
S
E
C
R
E
T
_
K
E
Y
_
B
A
S
E
`
 
i
s
 
a
u
t
o
-
g
e
n
e
r
a
t
e
d
 
(
6
4
-
c
h
a
r
 
r
a
n
d
o
m
 
a
l
p
h
a
n
u
m
e
r
i
c
)


-
 
A
N
D
 
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
 
`
b
b
b
-
g
r
e
e
n
l
i
g
h
t
-
s
e
c
r
e
t
s
`
 
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




B
B
B
 
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
u
l
t
i
p
l
e
 
r
e
p
l
i
c
a
s
 
w
i
t
h
 
p
o
d
 
a
n
t
i
-
a
f
f
i
n
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
 
R
e
p
l
i
c
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


-
 
G
I
V
E
N
 
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
 
(
d
e
f
a
u
l
t
)


-
 
W
H
E
N
 
t
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
 
T
H
E
N
 
2
 
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
 
p
o
d
s
 
r
u
n
 
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
 
l
o
a
d
-
b
a
l
a
n
c
e
d
 
b
y
 
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
u
t
u
a
l
 
e
x
c
l
u
s
i
v
i
t
y
 
w
i
t
h
 
J
i
t
s
i




B
B
B
 
a
n
d
 
J
i
t
s
i
 
S
H
A
L
L
 
N
O
T
 
b
e
 
d
e
p
l
o
y
e
d
 
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
n
l
y
 
o
n
e
 
v
i
d
e
o
 
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
i
v
e


-
 
G
I
V
E
N
 
b
o
t
h
 
B
B
B
 
a
n
d
 
J
i
t
s
i
 
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
 
t
h
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
 
T
H
E
N
 
e
x
a
c
t
l
y
 
o
n
e
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
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
 
H
e
a
l
t
h
 
p
r
o
b
e
s




B
B
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
 
l
i
v
e
n
e
s
s
 
a
n
d
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
s
 
o
n
 
p
o
r
t
 
8
0
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
v
e
n
e
s
s
 
p
r
o
b
e


-
 
G
I
V
E
N
 
B
B
B
 
d
e
p
l
o
y
e
d
 
a
n
d
 
r
u
n
n
i
n
g


-
 
T
H
E
N
 
a
 
T
C
P
 
l
i
v
e
n
e
s
s
 
p
r
o
b
e
 
o
n
 
p
o
r
t
 
8
0
 
w
i
t
h
 
3
0
s
 
i
n
i
t
i
a
l
 
d
e
l
a
y
 
a
n
d
 
1
0
s
 
p
e
r
i
o
d


-
 
A
N
D
 
u
n
h
e
a
l
t
h
y
 
p
o
d
s
 
a
r
e
 
r
e
s
t
a
r
t
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
 
R
e
a
d
i
n
e
s
s
 
p
r
o
b
e


-
 
G
I
V
E
N
 
B
B
B
 
d
e
p
l
o
y
e
d
 
a
n
d
 
r
u
n
n
i
n
g


-
 
T
H
E
N
 
a
 
T
C
P
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
e
 
o
n
 
p
o
r
t
 
8
0
 
w
i
t
h
 
5
s
 
i
n
i
t
i
a
l
 
d
e
l
a
y
 
a
n
d
 
5
s
 
p
e
r
i
o
d


-
 
A
N
D
 
p
o
d
s
 
a
r
e
 
r
e
m
o
v
e
d
 
f
r
o
m
 
s
e
r
v
i
c
e
 
w
h
e
n
 
n
o
t
 
r
e
a
d
y




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
D
B
 
f
o
r
 
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




B
B
B
 
S
H
A
L
L
 
h
a
v
e
 
a
 
P
o
d
D
i
s
r
u
p
t
i
o
n
B
u
d
g
e
t
 
t
o
 
e
n
s
u
r
e
 
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
 
d
u
r
i
n
g
 
n
o
d
e
 
m
a
i
n
t
e
n
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
 
N
o
d
e
 
d
r
a
i
n
 
d
u
r
i
n
g
 
m
a
i
n
t
e
n
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
 
a
 
P
D
B
 
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


-
 
W
H
E
N
 
a
 
n
o
d
e
 
i
s
 
d
r
a
i
n
e
d


-
 
T
H
E
N
 
a
t
 
l
e
a
s
t
 
o
n
e
 
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
 
p
o
d
 
r
e
m
a
i
n
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


-
 
A
N
D
 
u
s
e
r
s
 
c
a
n
 
c
o
n
t
i
n
u
e
 
c
r
e
a
t
i
n
g
 
a
n
d
 
j
o
i
n
i
n
g
 
r
o
o
m
s




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
B
B
B
 
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
o
o
m
 
A
P
I
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
b
b
b
-
g
r
e
e
n
l
i
g
h
t
-
r
o
o
m
-
a
p
i
)
 
—
 
r
o
o
m
 
c
r
e
a
t
i
o
n
/
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
 
(
K
u
r
e
n
t
o
/
J
e
t
t
y
)
 
|
 
1
0
0
1
 
(
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
 
c
u
s
t
o
m
*
*
:
 
B
B
B
 
u
s
e
s
 
a
 
c
u
s
t
o
m
 
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
 
D
o
c
k
e
r
 
i
m
a
g
e
 
(
n
o
t
 
u
p
s
t
r
e
a
m
)
.
 
R
o
o
m
 
c
r
e
a
t
i
o
n
 
g
o
e
s
 
t
h
r
o
u
g
h
 
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
 
A
P
I
,
 
n
o
t
 
s
t
a
n
d
a
r
d
 
B
B
B
 
A
P
I
.


*
*
H
.
2
6
4
/
U
l
t
r
a
s
o
u
n
d
 
r
e
c
o
r
d
i
n
g
*
*
:
 
B
B
B
 
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
a
y
 
f
a
i
l
 
i
f
 
F
F
m
p
e
g
 
i
s
 
n
o
t
 
p
r
e
-
i
n
s
t
a
l
l
e
d
 
i
n
 
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
.
 
R
e
c
o
r
d
i
n
g
 
f
o
r
m
a
t
 
d
e
p
e
n
d
s
 
o
n
 
t
h
e
 
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
h
a
r
i
n
g
 
m
e
t
h
o
d
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
S
A
M
L
 
2
.
0
 
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
P
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
 
(
`
g
r
e
e
n
l
i
g
h
t
`
 
D
B
)
,
 
R
e
d
i
s
 
(
s
e
s
s
i
o
n
 
c
a
c
h
e
)
,
 
R
W
X
 
P
V
C
 
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
)
,
 
B
B
B
 
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
e
r
 
(
m
e
d
i
a
 
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
,
 
m
a
n
a
g
e
d
 
s
e
p
a
r
a
t
e
l
y
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
,
 
S
S
O
 
r
e
d
i
r
e
c
t
)
,
 
K
e
y
c
l
o
a
k
 
(
S
A
M
L
 
2
.
0
)
,
 
B
B
B
 
b
a
c
k
e
n
d
 
(
m
e
e
t
i
n
g
 
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
c
r
o
s
s
-
a
p
p
 
S
S
O
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
 
S
A
M
L
 
2
.
0
 
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
 
S
P
,
 
`
D
E
F
A
U
L
T
_
R
E
G
I
S
T
R
A
T
I
O
N
:
 
"
s
a
m
l
"
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
g
r
e
e
n
l
i
g
h
t
`
 
D
B
,
 
`
g
r
e
e
n
l
i
g
h
t
`
 
u
s
e
r
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
 
s
e
s
s
i
o
n
s
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
X
 
P
V
C
 
(
`
b
b
b
-
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
`
,
 
5
0
0
G
i
,
 
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
 
L
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
b
b
b
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
c
h
a
r
t
s
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
`
 
(
l
o
c
a
l
 
c
h
a
r
t
)
 
|


|
 
I
m
a
g
e
 
|
 
`
g
h
c
r
.
i
o
/
<
y
o
u
r
-
o
r
g
>
/
g
r
e
e
n
l
i
g
h
t
-
s
a
m
l
:
v
1
.
3
.
0
`
 
(
c
u
s
t
o
m
 
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
 
i
m
a
g
e
)
 
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
 
2
 
(
d
e
f
a
u
l
t
)
 
|


|
 
R
e
s
o
u
r
c
e
s
 
|
 
2
5
0
m
-
1
0
0
0
m
 
C
P
U
,
 
5
1
2
M
i
-
1
G
i
 
m
e
m
o
r
y
 
|


|
 
H
e
a
l
t
h
 
|
 
T
C
P
 
p
o
r
t
 
8
0
 
(
l
i
v
e
n
e
s
s
:
 
3
0
s
/
1
0
s
,
 
r
e
a
d
i
n
e
s
s
:
 
5
s
/
5
s
)
 
|


|
 
P
D
B
 
|
 
Y
e
s
 
(
P
o
d
D
i
s
r
u
p
t
i
o
n
B
u
d
g
e
t
)
 
|


|
 
I
n
g
r
e
s
s
 
|
 
H
A
P
r
o
x
y
,
 
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
l
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
)
 
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
 
o
n
l
i
n
e
 
c
l
a
s
s
e
s
,
 
c
a
n
 
f
a
l
l
 
b
a
c
k
 
t
o
 
J
i
t
s
i
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
 
A
p
a
c
h
e
 
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
1
s
 
(
r
o
o
m
 
c
r
e
a
t
i
o
n
)
 
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
 
A
P
I
 
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
 
A
p
a
c
h
e
 
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
 
B
B
B
 
b
a
c
k
e
n
d
 
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
 
R
e
c
o
r
d
i
n
g
 
u
p
l
o
a
d
 
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
 
3
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
 
e
r
r
o
r
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
t
o
r
a
g
e
)
 
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
 
m
e
e
t
i
n
g
 
p
a
r
t
i
c
i
p
a
n
t
s
 
(
t
y
p
i
c
a
l
)


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
 
p
a
r
t
i
c
i
p
a
n
t
s
 
(
l
a
r
g
e
 
l
e
c
t
u
r
e
)


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
 
a
c
t
i
v
e
 
m
e
e
t
i
n
g
s


-
 
R
e
c
o
r
d
i
n
g
 
s
t
o
r
a
g
e
:
 
5
0
0
 
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
 
T
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




*
*
N
o
t
e
*
*
:
 
B
B
B
 
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
e
r
 
i
s
 
m
a
n
a
g
e
d
 
s
e
p
a
r
a
t
e
l
y
,
 
n
o
t
 
i
n
 
t
h
i
s
 
c
h
a
r
t
.
 
T
h
i
s
 
s
p
e
c
 
c
o
v
e
r
s
 
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
 
w
e
b
 
i
n
t
e
r
f
a
c
e
 
o
n
l
y
.




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
d
a
t
a
b
a
s
e
.
y
m
l
,
 
.
e
n
v
)


-
 
*
*
R
e
c
o
r
d
i
n
g
 
m
e
t
a
d
a
t
a
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


-
 
*
*
R
e
c
o
r
d
i
n
g
 
f
i
l
e
s
*
*
 
(
B
B
B
 
b
a
c
k
e
n
d
 
s
t
o
r
a
g
e
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
e
r


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
)
 
-
 
1
5
 
m
i
n


2
.
 
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


3
.
 
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


4
.
 
B
B
B
 
b
a
c
k
e
n
d
 
A
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
 
t
e
s
t
 
-
 
5
 
m
i
n


5
.
 
R
e
c
o
r
d
i
n
g
 
p
l
a
y
b
a
c
k
 
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
 
c
r
e
a
t
e
 
r
o
o
m
,
 
j
o
i
n
 
m
e
e
t
i
n
g
)
 
-
 
1
0
 
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
 
R
o
o
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
s
 
a
n
d
 
m
e
t
a
d
a
t
a


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
 
R
e
c
o
r
d
i
n
g
 
m
e
t
a
d
a
t
a
 
(
B
B
B
 
b
a
c
k
e
n
d
 
s
t
o
r
e
s
 
a
c
t
u
a
l
 
f
i
l
e
s
)


-
 
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
 
d
a
t
a
b
a
s
e
 
(
u
s
e
r
s
,
 
r
o
o
m
s
,
 
s
e
t
t
i
n
g
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
 
v
e
r
i
f
y
 
r
o
o
m
 
m
e
t
a
d
a
t
a


-
 
*
*
B
B
B
 
b
a
c
k
e
n
d
 
u
n
a
v
a
i
l
a
b
l
e
*
*
:
 
C
o
o
r
d
i
n
a
t
e
 
w
i
t
h
 
b
a
c
k
e
n
d
 
t
e
a
m
,
 
v
e
r
i
f
y
 
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


-
 
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
 
S
P
 
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
,
 
v
e
r
i
f
y
 
b
a
c
k
e
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
i
o
n

